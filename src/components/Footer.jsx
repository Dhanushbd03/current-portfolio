const footer_links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-5 py-8 text-sm text-mute sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© 2024 Made with ❤️</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {footer_links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
