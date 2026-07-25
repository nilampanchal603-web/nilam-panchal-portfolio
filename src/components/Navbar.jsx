import React from 'react'
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
                <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    <a
                        href="#home"
                        className="text-2xl font-bold tracking-wide text-sky-700">
                        NP
                    </a>
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-gray-300 hover:text-sky-400 transition duration-300">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                         href="/Nilam_Panchal_s_CV.pdf"
                        download
                        className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg">
                        Download CV
                    </a>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-white text-3xl">
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </nav>
                {menuOpen && (
                    <div className="md:hidden bg-slate-900 border-t border-slate-800">
                        <ul className="flex flex-col items-center py-6 gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-gray-300 hover:text-sky-400 transition">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg font-medium transition">
                                Resume
                            </a>
                        </ul>
                    </div>
                )}
            </header>
        </>
    )
}

export default Navbar

