"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  const [open, setOpen] = useState(false);

  // TEAM IMAGES 1.jpg, 2.jpg, 3.jpg…
  const team = [
    { img: "/1.jpg", name: "Paskal Navi", role: "Core Team", x: "https://x.com/paskal_navi" },
    { img: "/2.jpg", name: "Raffaxeal", role: "Core Team", x: "https://x.com/Raffaxeal" },
    { img: "/3.jpg", name: "Kaisar", role: "Engineering", x: "https://x.com/kaisar1310" },
    { img: "/4.jpg", name: "Doan Long Hau", role: "Core Dev", x: "https://x.com/doanlonghau" },
    { img: "/5.jpg", name: "Edward EVM", role: "Developer Relations", x: "https://x.com/edward_evm" },
    { img: "/6.jpg", name: "Abhi Web3", role: "Growth & Community", x: "https://x.com/Abhi__web3" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-extrabold tracking-tight">ALTIUS</h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#hub" className="hover:text-blue-600">Hub</a>
            <a href="#team" className="hover:text-blue-600">Team</a>
            <a href="#careers" className="hover:text-blue-600">Careers</a>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-gray-900"></span>
              <span className="block w-6 h-[2px] bg-gray-900"></span>
              <span className="block w-6 h-[2px] bg-gray-900"></span>
            </div>
          </button>
        </div>

        {open && (
          <div className="md:hidden px-6 py-4 bg-white border-t space-y-3">
            <a href="#about" className="block">About</a>
            <a href="#hub" className="block">Hub</a>
            <a href="#team" className="block">Team</a>
            <a href="#careers" className="block">Careers</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold leading-tight"
        >
          Futureproof Your Blockchain  
          <br/>
          <span className="text-blue-600">Without Complexity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-gray-600"
        >
          Altius is an institutional-grade execution system that instantly 
          upgrades any blockchain with high-performance execution maximizing
          the success of its ecosystem.
        </motion.p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          {/* UPDATED BUTTON → Follow on X */}
          <Button 
            link="https://x.com/intent/user?screen_name=altiuslabs"
            text="Follow on X"
          />
          <Button link="https://discord.gg/g6GtzRC8" text="Join Discord" light />
          <Button link="https://t.me/altiuslabs" text="Telegram" light />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Altius delivers high-performance execution for blockchains without rewrites,
          migrations, or complex upgrades. We enable parallel execution, 
          memory-first sharding, VM-agnostic performance, and stable throughput 
          for any L1, L2, or app-chain.
        </p>
      </section>

      {/* HUB */}
      <section id="hub" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Altius Hub</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <HubCard title="Whitepaper" link="https://www.altiuslabs.xyz/thought-leadership/altius-whitepaper" />
          <HubCard title="Thought Leadership" link="https://www.altiuslabs.xyz/thought-leadership" />
          <HubCard title="Learning Hub" link="https://www.altiuslabs.xyz/learning-hub" />
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Team Behind Altius</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {team.map((t, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <a href={t.x} target="_blank">
                <Image
                  src={t.img}
                  width={120}
                  height={120}
                  alt={t.name}
                  className="rounded-full border shadow-sm object-cover"
                />
              </a>
              <h3 className="mt-3 font-semibold text-sm">{t.name}</h3>
              <p className="text-xs text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="px-6 py-20 text-center border-t">
        <h2 className="text-3xl font-bold">Careers</h2>
        <p className="mt-3 text-gray-600">Join the team building the future of blockchain execution.</p>

        <a 
          href="https://www.altiuslabs.xyz/careers"
          target="_blank"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          View Open Roles →
        </a>
      </section>

      {/* FOOTER — UPDATED WITH ASHUPASAYA */}
      <footer className="px-6 py-8 border-t text-center text-gray-600 text-sm">
        <div className="flex flex-col items-center gap-2">
          <div>Altius © 2025 • High-Performance Blockchain Execution</div>

          <div>
            Created by{" "}
            <a 
              href="https://x.com/AshuPasaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              AshuPasaya
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

/* BUTTON COMPONENT */
function Button({ link, text, light }) {
  return (
    <a
      href={link}
      target="_blank"
      className={`px-6 py-3 rounded-lg font-semibold transition ${
        light
          ? "border border-gray-300 text-gray-700 hover:bg-gray-100"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      {text}
    </a>
  );
}

/* HUB CARD COMPONENT */
function HubCard({ title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="p-6 border rounded-xl hover:shadow-lg transition bg-white"
    >
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-blue-600 mt-2 text-sm">Open →</p>
    </a>
  );
}
