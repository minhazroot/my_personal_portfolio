 import React from "react";
// import { VscVscode } from "react-icons/vsc";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiC,
  SiCplusplus,
  
} from "react-icons/si";

import {
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building modern and responsive user interfaces.",
    icon: "✦",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing APIs and server-side applications.",
    icon: "⌘",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: SiMongoose, color: "#880000" },
      { name: "REST API", icon: FaServer, color: "#60A5FA" },
      { name: "Better Auth", icon: FaShieldAlt, color: "#A78BFA" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Learning programming fundamentals and problem solving.",
    icon: "</>",
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Tools I use for development and collaboration.",
    icon: "⚙",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
    //   { name: "VS Code", icon: <VscVscode></VscVscode>, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#000814] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(0,53,102,0.25),transparent_35%),radial-gradient(circle_at_85%_85%,rgba(0,29,61,0.4),transparent_40%)]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#003566]/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm font-medium text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            My Technical Expertise
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#003566] to-blue-400" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies, tools, and programming languages I use to
            build modern applications and continuously grow as a developer.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative rounded-3xl border border-blue-400/15 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/35 hover:bg-white/[0.04] hover:shadow-[0_0_35px_rgba(0,53,102,0.15)] sm:p-8"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Category Header */}
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-[#003566]/70 to-[#001D3D]/70 text-lg font-bold text-blue-300 shadow-lg shadow-blue-950/20">
                    {category.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="group/skill flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#000814]/60 px-3.5 py-3 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#001D3D]/60 hover:shadow-[0_0_15px_rgba(0,53,102,0.2)] sm:px-4"
                      >
                        <Icon
                          className="text-xl transition-transform duration-300 group-hover/skill:scale-110"
                          style={{ color: skill.color }}
                        />

                        <span className="text-sm font-medium text-gray-300 transition-colors duration-300 group-hover/skill:text-white">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Category Info */}
                <div className="mt-7 flex items-center justify-between border-t border-white/5 pt-5">
                  <span className="text-xs text-gray-500">
                    {category.skills.length} technologies
                  </span>

                  <span className="text-xs font-medium text-blue-400/70 transition-colors group-hover:text-blue-300">
                    {String(index + 1).padStart(2, "0")} / 04
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-500 sm:text-base">
            Always learning. Always building.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text font-medium text-transparent">
              Always improving.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;