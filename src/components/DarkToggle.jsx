import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const read_is_dark = () => document.documentElement.classList.contains("dark");

const DarkToggle = () => {
  const [is_dark, set_is_dark] = useState(read_is_dark);

  const toggle_theme = () => {
    const next_is_dark = !is_dark;
    set_is_dark(next_is_dark);
    document.documentElement.classList.toggle("dark", next_is_dark);
    localStorage.setItem("theme", next_is_dark ? "dark" : "light");
  };

  const label = is_dark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle_theme}
      aria-label={label}
      title={label}
      className="rounded-full p-2 text-ink transition-colors hover:text-accent"
    >
      {is_dark ? (
        <CiLight className="size-5" aria-hidden="true" />
      ) : (
        <MdDarkMode className="size-5" aria-hidden="true" />
      )}
    </button>
  );
};

export default DarkToggle;
