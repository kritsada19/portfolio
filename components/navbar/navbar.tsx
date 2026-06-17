"use client";

import { useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <p className="text-xl font-bold bg-linear-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent">KRITSADA.M</p>

        <div className="space-x-10">
          <a href="#about" className="text-sm font-medium transition-colors text-slate-600 hover:text-purple-700">About</a>
          <a href="#skills" className="text-sm font-medium transition-colors text-slate-600 hover:text-purple-700">Skills</a>
          <a href="#projects" className="text-sm font-medium transition-colors text-slate-600 hover:text-purple-700">Projects</a>
          <a href="#contact" className="text-sm font-medium transition-colors text-slate-600 hover:text-purple-700">Contact</a>
          <button onClick={toggleTheme} aria-label="toggle theme" className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">
            {isDarkMode ? (
              <CiLight className="inline-block w-5 h-5" />
            ) : (
              <CiDark className="inline-block w-5 h-5" />
            )}
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar