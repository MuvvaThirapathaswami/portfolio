import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-indigo-950 via-purple-900 to-indigo-950 backdrop-blur-md shadow-2xl z-50 border-b border-purple-700/40">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
      <h1 className="text-emerald-400 font-bold text-xl tracking-wide">
             Muvva Thirapatha Swami
       </h1>
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition hover:text-emerald-400 ${
                location.pathname === link.path
                  ? "text-emerald-400"
                  : "text-slate-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-emerald-400 text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-800 flex flex-col items-center py-4 gap-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-emerald-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
