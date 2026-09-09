import React, { useEffect, useState } from "react";
import lightlogo from "../assets/lightmodelogo.png";
import darklogo from "../assets/darkmodelogo.png";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Work Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const NavBar = () => {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Lock page scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (menuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", onKeyDown);
      };
    }
  }, [menuOpen]);

  // Auto-close the drawer if the viewport grows to the desktop breakpoint.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleClick = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const logo = theme === "dark" ? darklogo : lightlogo;

  return (
    <>
      <div className="lg:mb-20 mb-10 flex items-center lg:justify-between justify-center py-6">
        <div className="flex flex-shrink-0 items-center lg:w-48 w-32">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:block">
          <ul className="list flex items-center justify-center gap-5">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                <li className="font-bold lg:text-xl text-sm hover:text-pink-300">
                  {link.label}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/nada-mohsen-3555322b7/"
            target="_blank"
          >
            <div className="m-8 lg:text-3xl text-2xl text-black dark:text-white hover:text-pink-200">
              <FaLinkedin />
            </div>
          </a>
          <a href="https://github.com/nadamohsen139" target="_blank">
            <div className="m-8 lg:text-3xl text-2xl text-black dark:text-white hover:text-pink-200">
              <FaGithub />
            </div>
          </a>
        </div>
        <button
          onClick={handleClick}
          className="fixed bottom-0 right-0 rounded-lg bg-black text-white dark:text-black p-3 text-2xl dark:bg-white"
        >
          {theme === "dark" ? <WiDaySunny /> : <MdOutlineDarkMode />}
        </button>
      </div>

      {/* Hamburger toggle — visible on small screens only */}
      <button
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-5 right-4 z-50 rounded-lg p-2.5 text-2xl shadow-lg bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white hover:text-pink-300 md:hidden"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Slide-in drawer (mobile menu) */}
      <div
        role="dialog"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs z-50 overflow-y-auto bg-white text-black dark:bg-neutral-900 dark:text-white shadow-2xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700">
          <img src={logo} alt="logo" className="w-24 h-auto" />
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            className="text-2xl hover:text-pink-300"
          >
            <FaTimes />
          </button>
        </div>
        <nav>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block p-4 font-bold text-lg border-b border-neutral-200 dark:border-neutral-700 hover:text-pink-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-center gap-6 pt-4 pb-8 text-2xl text-black dark:text-white hover:text-pink-200">
          <a
            href="https://www.linkedin.com/in/nada-mohsen-3555322b7/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nadamohsen139"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
