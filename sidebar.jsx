// Sidebar component — explorer-style file tree
const SidebarFolder = ({ label, icon, children, active, onClick, expanded }) => (
  <div>
    <div className={`explorer-item ${active ? "active" : ""}`} onClick={onClick}>
      <span className="chev">{expanded ? "v" : ">"}</span>
      <span className="ico">{icon}</span>
      <span>{label}</span>
    </div>
    {expanded && children && <div className="explorer-children">{children}</div>}
  </div>
);

const SidebarFile = ({ label, dot, active, onClick }) => (
  <div className={`explorer-item ${active ? "active" : ""}`} onClick={onClick}>
    <span className="chev"></span>
    <span className="ico" style={{ color: dot }}>◆</span>
    <span>{label}</span>
  </div>
);

function Sidebar({ t, lang, setLang, activeSection, onJump, mobileOpen, onCloseMobile }) {
  const [openWork, setOpenWork] = React.useState(true);
  const [openLearn, setOpenLearn] = React.useState(true);

  const handleJump = (id) => { onJump(id); if (onCloseMobile) onCloseMobile(); };
  const isActive = (id) => activeSection === id;

  return (
    <>
    {mobileOpen && <div className="sidebar-scrim" onClick={onCloseMobile}></div>}
    <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
      <div className="sidebar-profile">
        <div className="sidebar-avatar">M</div>
        <div>
          <div className="sidebar-name">Mohamad</div>
          <div className="sidebar-role">{t.sidebar.role}</div>
        </div>
      </div>

      <div className="explorer">
        <div className="explorer-bar">
          <span className="dot r"></span>
          <span className="dot y"></span>
          <span className="dot g"></span>
          <span className="explorer-title">{t.sidebar.explorer}</span>
        </div>
        <div className="explorer-list">
          <SidebarFile label={t.nav.home}    dot="#3776ab" active={isActive("hero")}    onClick={()=>handleJump("hero")} />
          <SidebarFile label={t.nav.about}   dot="#7a8580" active={isActive("about")}   onClick={()=>handleJump("about")} />

          <SidebarFolder
            label={lang === "pt" ? "trabalho/" : "work/"}
            icon={<span style={{ color: "#b8893a" }}>📁</span>}
            expanded={openWork}
            active={isActive("skills") || isActive("experience") || isActive("projects")}
            onClick={() => setOpenWork(!openWork)}
          >
            <SidebarFile label={t.nav.skills}     dot="#7a8580" active={isActive("skills")}     onClick={()=>handleJump("skills")} />
            <SidebarFile label={t.nav.experience} dot="#3776ab" active={isActive("experience")} onClick={()=>handleJump("experience")} />
            <SidebarFile label={t.nav.projects}   dot="#f37726" active={isActive("projects")}   onClick={()=>handleJump("projects")} />
          </SidebarFolder>

          <SidebarFolder
            label={lang === "pt" ? "aprendizado/" : "learning/"}
            icon={<span style={{ color: "#b8893a" }}>📁</span>}
            expanded={openLearn}
            active={isActive("certificates") || isActive("reading")}
            onClick={() => setOpenLearn(!openLearn)}
          >
            <SidebarFile label={t.nav.certificates} dot="#d4a857" active={isActive("certificates")} onClick={()=>handleJump("certificates")} />
            <SidebarFile label={t.nav.reading}      dot="#7a8580" active={isActive("reading")}      onClick={()=>handleJump("reading")} />
          </SidebarFolder>

          <SidebarFile label={t.nav.contact} dot="#d4a857" active={isActive("contact")} onClick={()=>handleJump("contact")} />
        </div>
      </div>

      <div className="lang-toggle">
        <button className={lang==="pt" ? "active" : ""} onClick={()=>setLang("pt")}>PT</button>
        <button className={lang==="en" ? "active" : ""} onClick={()=>setLang("en")}>EN</button>
      </div>
    </aside>
    </>
  );
}

window.Sidebar = Sidebar;
