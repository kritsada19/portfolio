"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import ThemeToggle from "../theme/ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Active section
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // theme is handled by ThemeToggle (next-themes)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      bg-white dark:bg-slate-900/80 backdrop-blur-md
      border-b border-slate-200/60 dark:border-slate-700/60
      ${isScrolled
          ? "shadow-sm shadow-slate-200/50 dark:shadow-slate-900/50"
          : ""
        }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="text-xl font-bold bg-linear-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent shrink-0"
        >
          KRITSADA.M
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm font-medium transition-colors duration-200
              ${activeSection === href
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
                }
              after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-purple-500
              after:transition-all after:duration-200
              ${activeSection === href
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
                }`}
            >
              {label}
            </Link>
          ))}

          <ThemeToggle />
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />

          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            {isMenuOpen ? (
              <IoClose className="w-5 h-5" />
            ) : (
              <CiMenuBurger className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }
        border-t border-slate-200/60 dark:border-slate-700/60
        bg-white/90 dark:bg-slate-900/90 backdrop-blur-md`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-medium py-1 transition-colors duration-200
              ${activeSection === href
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-slate-600 dark:text-slate-400"
                }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}