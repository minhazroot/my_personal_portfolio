import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
  FaCode,
} from "react-icons/fa";
import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Frontend Development",
    "Full Stack Development",
    "Responsive Web Design",
    "REST API Development",
    "Modern Web Applications",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#000814] text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_100%,rgba(0,53,102,0.2),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(0,29,61,0.35),transparent_40%)]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:px-16">
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Column 1: About */}
          <div>
            <a href="#home" className="inline-block">
              <h2 className="text-2xl font-bold tracking-tight">
                MINHAZ{" "}
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-600 bg-clip-text text-transparent">
                  UDDIN
                </span>
              </h2>
            </a>

            {/* Designation */}
            <p className="mt-3 text-sm font-medium text-blue-300">
              Full Stack Web Developer
            </p>

            {/* Description */}
            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Passionate about building modern, responsive, and
              user-friendly web applications. Always learning,
              building, and growing through technology.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/minhazroot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#001D3D] hover:text-white"
              >
                <FaGithub className="text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#001D3D] hover:text-blue-300"
              >
                <FaLinkedin className="text-lg" />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#001D3D] hover:text-blue-300"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-6 text-base font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-blue-300"
                  >
                    <HiOutlineArrowUpRight className="text-blue-400/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: What I Do */}
          <div>
            <h3 className="mb-6 text-base font-semibold text-white">
              What I Do
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-blue-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-6 text-base font-semibold text-white">
              Contact Info
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <a
                href="mailto:minhaz.cse.dev@gmail.com"
                className="group flex items-start gap-3"
              >
                <MdEmail className="mt-0.5 shrink-0 text-lg text-blue-400 transition-colors group-hover:text-cyan-300" />

                <span className="break-all text-sm text-gray-400 transition-colors group-hover:text-blue-300">
                  minhaz.cse.dev@gmail.com
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MdLocationOn className="mt-0.5 shrink-0 text-lg text-blue-400" />

                <span className="text-sm text-gray-400">
                  Dhaka, Bangladesh
                </span>
              </div>

              {/* Availability */}
              <div className="inline-flex items-center gap-2 rounded-full border border-green-400/15 bg-green-400/[0.04] px-3 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                <span className="text-xs font-medium text-green-400">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          {/* Copyright */}
          <p className="text-center text-xs leading-6 text-gray-500 sm:text-left sm:text-sm">
            © 2026{" "}
            <span className="font-medium text-gray-300">
              Minhaz Uddin.
            </span>{" "}
            All Rights Reserved.
          </p>

          {/* Developer Credit */}
          <p className="flex items-center gap-1.5 text-xs text-gray-500 sm:text-sm">
            Designed & Developed by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text font-medium text-transparent">
              Minhaz
            </span>
            <FaCode className="text-blue-400" />
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#001D3D] hover:text-blue-300"
          >
            <FaArrowUp className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;