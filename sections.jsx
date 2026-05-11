// Section components

function Hero({ t }) {
  return (
    <section id="hero" className="section hero" data-screen-label="hero">
      <div className="hero-stage">
        <div className="hero-portrait">
          <img src="assets/cover-portrait.png" alt="Mohamad Hussein Nasser" />
        </div>
        <h1 className="hero-name">
          Mohamad <span className="gold">Hussein</span> Nasser
        </h1>
        <div className="hero-tagline">
          {t.hero.tagline.map((w, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="sep">|</span>}
              <span>{w}</span>
            </React.Fragment>
          ))}
        </div>
        <div className="hero-status">
          <span className="pulse"></span>
          {t.hero.status}
        </div>
      </div>
      <div className="hero-explore">
        <span>{t.hero.explore}</span>
        <span className="arr"></span>
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section id="about" className="section" data-screen-label="about">
      <div className="about-grid">
        <div>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="section-title">{t.about.title}</h2>
          <div className="body-text">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <div className="about-quote">
            <span className="qmark">“</span>
            <p>{t.about.quote}</p>
            <cite>— {t.about.quoteCite}</cite>
          </div>
        </div>
        <div className="scene">
          <div className="scene-setup">
            <img src="assets/setup.png" alt="Workspace setup" />
          </div>
          <div className="scene-shadow"></div>
          <div className="scene-character">
            <img src="assets/character.png" alt="Mohamad" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills({ t }) {
  return (
    <section id="skills" className="section skills-section" data-screen-label="skills">
      <div className="section-head-center">
        <p className="eyebrow">{t.skills.eyebrow}</p>
        <h2 className="section-title">{t.skills.title}</h2>
        <p className="section-sub" style={{ margin: "0 auto 0" }}>{t.skills.sub}</p>
      </div>
      <div className="skills-grid">
        {window.SKILLS.map((s) => (
          <div className="skill" key={s.name}>
            <div className="skill-tile">
              <img src={s.icon} alt={s.name} loading="lazy" />
            </div>
            <div className="skill-name">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience({ t }) {
  return (
    <section id="experience" className="section" data-screen-label="experience">
      <div className="section-head-center" style={{ textAlign: "center" }}>
        <p className="eyebrow">{t.experience.eyebrow}</p>
        <h2 className="section-title">{t.experience.title}</h2>
        <p className="section-sub" style={{ margin: "0 auto 0" }}>{t.experience.sub}</p>
      </div>
      <div className="timeline">
        {t.experience.items.map((item, i) => {
          const colors = ["", "gold", "rust", "deep", ""];
          return (
            <div key={i} className={`tl-item ${i % 2 === 0 ? "right" : "left"}`}>
              <div className="tl-empty"></div>
              <div className={`tl-node ${colors[i] || ""}`}></div>
              <div className="tl-card">
                <div className="tl-date">▣ {item.date}</div>
                <h3 className="tl-company">{item.company}</h3>
                <div className="tl-role">{item.role}</div>
                <p className="tl-desc">{item.desc}</p>
                <div className="tags">
                  {item.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Projects({ t }) {
  return (
    <section id="projects" className="section" data-screen-label="projects">
      <div className="section-head-center" style={{ textAlign: "center" }}>
        <p className="eyebrow">{t.projects.eyebrow}</p>
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="section-sub" style={{ margin: "0 auto 0" }}>{t.projects.sub}</p>
      </div>
      <div className="projects-grid">
        {t.projects.items.map((p, i) => (
          p.placeholder ? (
            <div key={i} className="project-card placeholder">
              {t.projects.placeholder}
            </div>
          ) : (
            <article key={i} className="project-card">
              <div className="pkind">{p.kind}</div>
              <h3 className="ptitle">{p.title}</h3>
              <p className="pdesc">{p.desc}</p>
              <div className="ptags">
                {p.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </article>
          )
        ))}
      </div>
    </section>
  );
}

function Certificates({ t, lang }) {
  const certs = window.CERTIFICATES || [];

  // pre-baked rotations/sizes for that hand-arranged gallery-wall look
  const layout = [
    { size: "lg", tilt: -1.4 },
    { size: "md", tilt:  1.6 },
    { size: "sm", tilt: -2.2 },
    { size: "md", tilt:  0.8 },
    { size: "lg", tilt: -0.9 },
    { size: "sm", tilt:  2.0 },
  ];

  return (
    <section id="certificates" className="section certificates-section" data-screen-label="certificates">
      <div className="section-head-center" style={{ textAlign: "center" }}>
        <p className="eyebrow">{t.certificates.eyebrow}</p>
        <h2 className="section-title">{t.certificates.title}</h2>
        <p className="section-sub" style={{ margin: "0 auto 0" }}>{t.certificates.sub}</p>
      </div>

      <div className="wall">
        <div className="wall-frames">
          {certs.map((c, i) => {
            const cfg = layout[i % layout.length];
            return (
              <div
                key={i}
                className={`frame frame--${cfg.size}`}
                style={{ "--tilt": `${cfg.tilt}deg`, "--mat": c.color, "--accent": c.accent }}
              >
                <a
                  href={c.pdf}
                  target="_blank"
                  rel="noopener"
                  className="frame-body"
                  aria-label={c.title[lang] + " — " + c.issuer[lang]}
                >
                  <div className="frame-mat">
                    <div className="cert-paper">
                      <div className="cert-hd" aria-hidden="true">
                        <span className="cert-hd-label">{c.spineLabel}</span>
                      </div>
                      <div className="cert-body">
                        <div className="cert-paper-seal" aria-hidden="true">
                          <span className="seal-ring"></span>
                          <span className="seal-ring inner"></span>
                          <span className="seal-star">★</span>
                        </div>
                        <div className="cert-paper-eyebrow">{t.certificates.eyebrow}</div>
                        <h3 className="cert-paper-title">{c.title[lang]}</h3>
                        <div className="cert-paper-rule"></div>
                        <div className="cert-paper-issuer">{c.issuer[lang]}</div>
                      </div>
                      <div className="cert-paper-year">— {c.year} —</div>
                    </div>
                  </div>
                </a>

                <a
                  className="frame-dl-btn"
                  href={c.pdf}
                  download
                  aria-label={t.certificates.download + " — " + c.title[lang]}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12"/><path d="M6 12l6 6 6-6"/><path d="M5 20h14"/>
                  </svg>
                  {t.certificates.download}
                </a>
              </div>
            );
          })}

          {/* small desk plant decoration to make it feel like an office corner */}
          <div className="wall-plant" aria-hidden="true">
            <span className="plant-leaf l1"></span>
            <span className="plant-leaf l2"></span>
            <span className="plant-leaf l3"></span>
            <span className="plant-pot"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reading({ t }) {
  const [hovered, setHovered] = React.useState(null);
  const books = t.reading.books;

  return (
    <section id="reading" className="section" data-screen-label="reading">
      <div className="reading">
        <div className="section-head-center" style={{ textAlign: "center" }}>
          <p className="eyebrow">{t.reading.eyebrow}</p>
          <h2 className="section-title">{t.reading.title}</h2>
          <p className="section-sub" style={{ margin: "0 auto 0" }}>{t.reading.sub}</p>
        </div>

        <div className="bookshelf">
          <div
            className="bookshelf-row"
            onMouseLeave={() => setHovered(null)}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHovered(null); }}
          >
            {books.map((b, i) => (
              <button
                key={i}
                type="button"
                className={`bs-book${hovered === i ? " is-active" : hovered !== null ? " is-inactive" : ""}`}
                style={{ "--book-color": b.color }}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                onClick={() => setHovered(hovered === i ? null : i)}
                aria-label={b.title}
              >
                <span className="bs-deco-t" aria-hidden="true">◆</span>
                <span className="bs-deco-b" aria-hidden="true">◆</span>
                <span className="bs-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </span>
                <span className="bs-spine-title">{b.title}</span>
                <div className="bs-cover">
                  <img
                    src={b.cover}
                    alt={`Capa — ${b.title}`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.classList.add("no-cover");
                    }}
                  />
                  <div className="bs-cover-fallback">
                    <span className="bcf-title">{b.title}</span>
                    <span className="bcf-author">{b.author}</span>
                  </div>
                </div>
                <div className="bs-info">
                  <p className="bs-info-title">{b.title}</p>
                  <p className="bs-info-author">{b.author}</p>
                  <p className="bs-info-note">{b.note}</p>
                </div>
                {b.reading && <span className="bs-flag">{t.reading.readingNow}</span>}
              </button>
            ))}
          </div>
          <div className="bookshelf-floor" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section id="contact" className="section contact-section" data-screen-label="contact">
      <p className="eyebrow">{t.contact.eyebrow}</p>
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="section-sub" style={{ margin: "0 auto 30px" }}>{t.contact.sub}</p>
      <div className="contact-links">
        <a href="https://github.com/mhnasser" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.39.97.01 1.95.14 2.86.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.05.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
          GITHUB
        </a>
        <a href="https://www.linkedin.com/in/mohamad-hussein-nasser-697332165/" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8 17v-7H6v7h2zM7 8.7a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zM18 17v-3.9c0-2-1.1-3-2.6-3-1.2 0-1.8.7-2.1 1.2V10h-2v7h2v-3.9c0-1 .2-2 1.4-2s1.3 1 1.3 2V17h2z"/></svg>
          LINKEDIN
        </a>
        <a href={`mailto:${t.contact.email}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5h18v14H3z"/><path d="M3 5l9 8 9-8"/></svg>
          EMAIL
        </a>
      </div>
      <a className="contact-email" href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
    </section>
  );
}

Object.assign(window, { Hero, About, Skills, Experience, Projects, Reading, Contact });
