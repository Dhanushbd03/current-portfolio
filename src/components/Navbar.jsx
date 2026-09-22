import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import DarkToggle from "./DarkToggle";

const nav_items = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menu_open, set_menu_open] = useState(false);
  const [active_id, set_active_id] = useState("about");

  useEffect(() => {
    const sections = nav_items
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          set_active_id(visible.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menu_open) {
      return undefined;
    }
    const on_key_down = (event) => {
      if (event.key === "Escape") {
        set_menu_open(false);
      }
    };
    document.addEventListener("keydown", on_key_down);
    return () => document.removeEventListener("keydown", on_key_down);
  }, [menu_open]);

  const close_menu = () => set_menu_open(false);

  const link_class = (id) =>
    `transition-colors hover:text-ink focus-visible:text-ink ${
      active_id === id ? "text-ink" : "text-mute"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:px-6">
        <a
          href="#about"
          className="text-sm font-medium tracking-tight text-ink"
        >
          Dhanush B D
        </a>

        <nav
          className="hidden items-center gap-6 text-sm lg:flex"
          aria-label="Primary"
        >
          {nav_items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={link_class(item.href.slice(1))}
              aria-current={
                active_id === item.href.slice(1) ? "true" : undefined
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/Dhanushbd03"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-full p-2 text-ink transition-colors hover:text-accent"
          >
            <FaGithub className="size-5" aria-hidden="true" />
          </a>
          <DarkToggle />
          <button
            type="button"
            className="rounded-full px-3 py-2 text-sm text-ink lg:hidden"
            aria-expanded={menu_open}
            aria-controls="mobile-nav"
            onClick={() => set_menu_open((open) => !open)}
          >
            {menu_open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menu_open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line px-5 py-4 sm:px-6 lg:hidden"
        >
          <ul className="mx-auto flex max-w-page flex-col gap-1">
            {nav_items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close_menu}
                  className={`block rounded-lg px-2 py-2.5 text-base ${link_class(item.href.slice(1))}`}
                  aria-current={
                    active_id === item.href.slice(1) ? "true" : undefined
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
};

export default Navbar;
