"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [activeSection, setActiveSection] = useState("skills");

  const fullText =
    "$\n> Loading....;

  useEffect(() => {
    let index = 0;
    const typingSpeed = 40;
    const typeInterval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length) clearInterval(typeInterval);
    }, typingSpeed);

    const portfolioTimer = setTimeout(
      () => setShowPortfolio(true),
      fullText.length * typingSpeed + 500
    );

    return () => {
      clearInterval(typeInterval);
      clearTimeout(portfolioTimer);
    };
  }, []);

  if (!showPortfolio) {
    return (
      <div className="h-screen flex items-center justify-center text-sm sm:text-lg font-mono px-4 whitespace-pre-wrap" style={{ backgroundColor: "#000" }}>
        <span className="text-green-400">{typedText}</span>
        <span className="animate-pulse text-green-400">|</span>
      </div>
    );
  }

  // helper for display name formatting
  const niceName = (key: string) =>
    key.charAt(0).toUpperCase() + key.slice(1).replace("-", " ");

  return (
    <div
      className="min-h-screen p-6 sm:p-10 text-gray-900 flex flex-col"
      style={{ backgroundColor: "#e6f2ff" }} // Pale blue background
    >
      {/* Header */}
      <header className="flex flex-col items-center text-center gap-4 mb-8">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover shadow-lg"
          style={{ border: "4px solid rgba(255,255,255,0.65)" }}
        />
        <h1 className="text-2xl sm:text-4xl font-bold text-[#032b4a]">
          Jose Fernando P. Babasa
        </h1>
        <p className="text-base sm:text-lg text-[#084b6a]">
          Bachelor of Engineering Technology — Computer Engineering Technology
        </p>

        <div className="flex gap-3 mt-2">
          <a
            href="/Jose Fernando P. Babasa - MyResume.pdf"
            download
            className="px-4 py-2 rounded-full font-semibold shadow-md"
            style={{ backgroundColor: "#005f99", color: "#ffffff" }}
          >
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/jose-fernando-babasa-83339125a/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full font-semibold shadow-md"
            style={{ backgroundColor: "#bfe6ff", color: "#003a63" }}
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* About Me - stays visible */}
      <section className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: "#005f99" }}>
          About Me
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-[#063243]">
         I’m a Computer Engineering Technology graduate with a genuine passion for building and improving
 IT systems. Over the past few years, I’ve gained hands-on experience in networking, programming,
 and troubleshooting from configuring routers and switches to developing software tools that solve
 real problems. I’m skilled in Python, C#.NET, MySQL, and network monitoring tools, and I enjoy
 learning new technologies that push my capabilities further. I bring a mix of technical know-how,
 problem-solving skills, and a strong drive to contribute to projects that make a real impact.
        </p>
      </section>

      {/* Section Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["skills", "projects", "certifications", "work", "education"].map(
          (section) => {
            const isActive = activeSection === section;
            return (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className="px-5 py-2 rounded-full font-semibold transition-shadow"
                style={
                  isActive
                    ? { backgroundColor: "#9ec7ff", color: "#01283a", boxShadow: "0 6px 18px rgba(0,60,100,0.12)" }
                    : { backgroundColor: "#ffffff", color: "#01283a", border: "1px solid rgba(1,40,58,0.06)" }
                }
              >
                {niceName(section)}
              </button>
            );
          }
        )}
      </div>

      {/* Morph Transition Area */}
      <main className="max-w-4xl mx-auto flex-1 w-full">
        <AnimatePresence mode="wait">
          {activeSection === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {["Python", "Networking", "C# .NET", "MySQL", "MSSQL", "Multitasking"].map((skill) => (
                <div
                  key={skill}
                  className="p-4 rounded shadow-sm"
                  style={{ backgroundColor: "#ffffff", color: "#01283a" }}
                >
                  <div className="text-center font-medium">{skill}</div>
                </div>
              ))}
            </motion.div>
          )}

          {activeSection === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <article className="p-4 rounded shadow-sm bg-white text-[#01283a]">
                <h3 className="font-semibold">Inventory System</h3>
                <p className="text-sm mt-1">
                  Purpose: Desktop application built with C# .NET and MySQL to help a local business manage inventory efficiently.
                </p>
              </article>

              <article className="p-4 rounded shadow-sm bg-white text-[#01283a]">
                <h3 className="font-semibold">Truss Calculator</h3>
                <p className="text-sm mt-1">
                  Purpose: Python-based tool for structural analysis, performing axial force and reaction calculations for 2D truss structures.
                </p>
              </article>

              <article className="p-4 rounded shadow-sm bg-white text-[#01283a]">
                <h3 className="font-semibold">Network Topology Simulation</h3>
                <p className="text-sm mt-1">
                  Purpose: Built a simulated office network using Cisco Packet Tracer to learn network design and device configuration.
                </p>
              </article>
            </motion.div>
          )}

          {activeSection === "certifications" && (
            <motion.div
               key="certifications"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -30 }}
               transition={{ duration: 0.35 }}
               className="space-y-3"
            >
               <div className="p-4 rounded shadow-sm bg-white text-[#01283a]">
               <h3 className="font-semibold">Mastering IP Addressing and Subnetting for CCNA (MNET-IT)</h3>
               <p className="text-sm mt-1 text-gray-600">This certificate shows you know your IP, binary conversions and subnets as well segmentation of a network. It includes basic skills while
                determining subnets, valid host ranges or designing IP network efficiently.</p></div>

               <div className="p-4 rounded shadow-sm bg-white text-[#01283a]">
               <h3 className="font-semibold">Networking Basics - Cisco Network Academy</h3>
               <p className="text-sm mt-1 text-gray-600"></p>This certificate shows that you’ve learned the essential building blocks of how computers and devices talk to each other over networks. </div>

               <div className="p-4 rounded shadow-sm bg-white text-[#01283a]">
               <h3 className="font-semibold">Python Essentials 1&2 - Cisco Network Academy</h3>
               <p className="text-sm mt-1 text-gray-600"> These certifications prove that you’ve built solid skills in Python, starting from the basics and moving into more advanced programming concepts.
                You’ll learn how to write clean code, use data structures like lists and dictionaries, and work with functions, modules, and file operations</p></div>

              <div className="p-4 rounded shadow-sm bg-white text-[#01283a]">
              <h3 className="font-semibold">Introduction to Cybersecurity - Cisco Network Academy</h3>
              <p className="text-sm mt-1 text-gray-600"> This certificate shows you’ve learned the basics of keeping computers and data safe from hackers. You’ll understand common
                online threats and how to protect yourself and others. </p></div>
            </motion.div>
          )}

          {activeSection === "work" && (
            <motion.div
              key="work"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <div className="p-4 rounded shadow-sm bg-white text-[#01283a]">
                <h3 className="font-semibold">Kertech General Services & Parts Sales</h3>
                <p className="text-sm text-gray-600">May 2024 - July 2024 | GMA Cavite</p>
                <p className="mt-2 text-sm">Encoded updates and service reports from technicians into system records to support fast food operations.</p>
              </div>

              <div className="p-4 rounded shadow-sm bg-white text-[#01283a]">
                <h3 className="font-semibold">Streamtech Internet Fiberhome — Internship</h3>
                <p className="text-sm text-gray-600">Feb 2025 - May 2025 | Bacoor Cavite</p>
                <p className="mt-2 text-sm">Assisted in configuring switches/Cisco Cloud Core Routers, monitored bandwidth, and refurbished ONU devices and routers to meet operational standards.</p>
              </div>
            </motion.div>
          )}

          {activeSection === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, rotateX: 12 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: -12 }}
              transition={{ duration: 0.45 }}
              className="space-y-4"
            >
                <div className="p-4 rounded shadow-sm bg-white text-[#01283a]">
                <h3 className="font-semibold">Technological University of The Philippines — Cavite</h3>
                <p className="text-sm text-gray-600">
                  Bachelor of Engineering Technology — Major in Computer Engineering Technology
                </p>
                <p className="text-sm text-gray-600">Sept 2020 - July 2025</p>
              </div>

               <div className="p-4 rounded shadow-sm bg-white text-[#01283a]">
              <h3 className="font-semibold">General Mariano Alvarez Technical High School - GMA, Cavite </h3>
              <p className="text-sm text-gray-600">
                Junior High School - Senior High School (Stem Strand)
              </p>
              <p className="text-sm text-gray-600">June 2014 - April 2020</p>
            </div>

             <div className="p-4 rounded shadow-sm bg-white text-[#01283a]">
              <h3 className="font-semibold">Area J Elementary School - GMA, Cavite</h3>
              <p className="text-sm text-gray-600">
                Elementary School
              </p>
              <p className="text-sm text-gray-600">June 2008 - April 2014</p>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-10 pt-8 border-t" style={{ borderColor: "rgba(1,40,58,0.06)" }}>
        <div className="max-w-4xl mx-auto text-center text-sm text-[#034a6b]">
          <div className="mb-2">
            <a href="/Jose Fernando P. Babasa - MyResume.pdf" download style={{ color: "#005f99", fontWeight: 600 }}>
              Download Resume (PDF)
            </a>
          </div>
          <div>© {new Date().getFullYear()} Jose Fernando P. Babasa — Built with Next.js & Tailwind CSS</div>
        </div>
      </footer>
    </div>
  );
}
