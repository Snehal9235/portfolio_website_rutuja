
"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-purple-400">
          Rutuja.
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>

        <button
          className="md:hidden text-purple-400 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-8 py-4">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Home */}
      <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <p className="text-purple-400 text-lg mb-4">
          Hello, Welcome to My Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-5">
          I'm <span className="text-purple-400">Rutuja Lohar</span>
        </h1>

        <h2 className="text-2xl text-slate-300 mb-6">
          Professional | Technology Learner
        </h2>

        <p className="max-w-2xl text-slate-400 text-lg mb-8">
          MCA Graduate and Working Professional.
          Passionate about learning new technologies
          and building creative web applications.
        </p>

        <a href="#about"
          className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold">
          Explore More
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-8 bg-slate-900 text-center">
        <h2 className="text-4xl font-bold mb-8">
          About <span className="text-purple-400">Me</span>
        </h2>

        <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-8">
          My name is Rutuja Lohar. I have completed my
          Master of Computer Applications (MCA).
          I am a working professional with a passion
          for technology and continuous learning.
          I enjoy exploring new technologies,
          improving my technical skills and creating
          useful web applications.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-10">
          My <span className="text-purple-400">Skills</span>
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Git & GitHub",
            "Tailwind CSS"
          ].map((skill) => (
            <div key={skill}
              className="bg-slate-900 border border-purple-500/30 p-6 rounded-xl hover:bg-purple-900 transition">
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-8 bg-slate-900 text-center">
        <h2 className="text-4xl font-bold mb-10">
          My <span className="text-purple-400">Projects</span>
        </h2>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-slate-950 p-7 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold text-purple-400 mb-3">
              E-Commerce Website
            </h3>
            <p className="text-slate-400">
              A simple online shopping application using Next.js and PostgreSQL.
            </p>
          </div>

          <div className="bg-slate-950 p-7 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold text-purple-400 mb-3">
              Complaint Management System
            </h3>
            <p className="text-slate-400">
              A web application to submit and manage customer complaints.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Contact <span className="text-purple-400">Me</span>
        </h2>

        <p className="text-slate-300 mb-4">
          Thank you for visiting my portfolio!
        </p>

        <p className="text-purple-400">
          Rutuja Lohar
        </p>
      </section>

      <footer className="text-center py-6 border-t border-slate-800 text-slate-500">
        © 2026 Rutuja Lohar. All Rights Reserved.
      </footer>

    </main>
  );
}
