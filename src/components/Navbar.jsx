import { useState } from "react"
import { navLinks } from "../data"

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 z-50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" aria-label="NOVA Home" className="text-2xl font-bold text-indigo-600">
          NOVA
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200">
            Log in
          </a>
          <a href="#" className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            Get Started
          </a>
        </div>

        {/* Mobile Right Side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-colors duration-200"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex flex-col gap-1.5 cursor-pointer"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          role="menu"
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              role="menuitem"
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href="#" className="bg-indigo-600 text-white text-center px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar