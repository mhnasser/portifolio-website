// app.jsx — top-level app

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "lang": "pt"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [activeSection, setActiveSection] = React.useState("hero");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const i18n = window.I18N[t.lang] || window.I18N.pt;

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.theme);
  }, [t.theme]);

  React.useEffect(() => {
    const sections = ["hero","about","skills","experience","projects","certificates","reading","contact"];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.intersectionRatio > 0.4) {
          setActiveSection(e.target.id);
        }
      });
    }, { threshold: [0.4, 0.6] });
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [t.lang]);

  const handleJump = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      <div className="watercolor-bg">
        <div className="blob-3"></div>
        <div className="dots"></div>
      </div>
      <div className="app">
        <Sidebar
          t={i18n}
          lang={t.lang}
          setLang={(v) => setTweak("lang", v)}
          activeSection={activeSection}
          onJump={handleJump}
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />
        <button
          className="mobile-menu-btn"
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span><span></span><span></span>
        </button>
        <div className="floating-controls" role="toolbar" aria-label={t.lang === "pt" ? "Preferências" : "Preferences"}>
          <div className="fc-group fc-lang" role="group" aria-label="Language">
            <button
              className={t.lang === "pt" ? "active" : ""}
              onClick={() => setTweak("lang", "pt")}
              aria-pressed={t.lang === "pt"}
            >PT</button>
            <button
              className={t.lang === "en" ? "active" : ""}
              onClick={() => setTweak("lang", "en")}
              aria-pressed={t.lang === "en"}
            >EN</button>
          </div>
          <button
            className="fc-theme"
            onClick={() => setTweak("theme", t.theme === "light" ? "dark" : "light")}
            aria-label={t.lang === "pt"
              ? (t.theme === "light" ? "Mudar para tema escuro" : "Mudar para tema claro")
              : (t.theme === "light" ? "Switch to dark theme" : "Switch to light theme")
            }
            title={t.lang === "pt" ? "Alternar tema" : "Toggle theme"}
          >
            {t.theme === "light" ? (
              /* moon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              /* sun */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
            )}
          </button>
        </div>
        <main>
          <Hero t={i18n} />
          <About t={i18n} />
          <Skills t={i18n} />
          <Experience t={i18n} />
          <Projects t={i18n} />
          <Certificates t={i18n} lang={t.lang} />
          <Reading t={i18n} />
          <Contact t={i18n} />
          <footer className="foot">
            <span>{i18n.footer.built}</span>
            <span>● {i18n.footer.heartbeat}</span>
          </footer>
        </main>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label={t.lang === "pt" ? "Tema" : "Theme"} />
        <TweakRadio
          label={t.lang === "pt" ? "Aparência" : "Appearance"}
          value={t.theme}
          options={["light", "dark"]}
          onChange={(v) => setTweak("theme", v)}
        />
        <TweakSection label={t.lang === "pt" ? "Idioma" : "Language"} />
        <TweakRadio
          label={t.lang === "pt" ? "Linguagem" : "Language"}
          value={t.lang}
          options={["pt", "en"]}
          onChange={(v) => setTweak("lang", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
