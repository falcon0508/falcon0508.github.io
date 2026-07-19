const links = [
  { label: "Home", href: "#/" },
  { label: "About", href: "#/about" },
  { label: "Education", href: "#/education" },
  { label: "Experience", href: "#/experience" },
  { label: "Projects", href: "#/projects" },
  { label: "Skills", href: "#/skills" },
  { label: "Contact", href: "#/contact" },
];

function Navbar({ activeRoute }) {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <a className="brand" href="#/">
          Dylan Ong
        </a>

        <div className="nav-links">
          {links.map((link) => {
            const route = link.href.replace("#", "");
            const isActive = activeRoute === route;

            return (
              <a
                key={link.href}
                className={`nav-link${isActive ? " is-active" : ""}`}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a className="nav-cta" href="/CS_Resume_Dylan_Ong.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
