import React from "react";

const About = () => {
  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#05152c] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,53,102,0.35),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(0,29,61,0.5),transparent_40%)]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Decorative Glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#003566]/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#001D3D]/40 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm font-medium tracking-wide text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            Get to know me
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#003566] to-blue-400" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A little about my journey, passion, technologies, and the goals
            I'm working towards.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-start gap-8 lg:grid-cols-5">
          {/* Left Side - Introduction */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/20 sm:p-9">
              <h3 className="mb-6 text-2xl font-semibold text-white sm:text-3xl">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Minhaz Uddin
                </span>
              </h3>

              <div className="space-y-5 text-sm leading-8 text-gray-300 sm:text-base">
                <p>
                  I am currently studying{" "}
                  <span className="font-medium text-blue-300">
                    Computer Science
                  </span>{" "}
                  and aiming to become a Full Stack Web Developer. My interest
                  in how software is created soon developed into independent
                  learning, which then led to a passion for designing and
                  implementing fast, intuitive, and high-quality web-based
                  solutions.
                </p>

                <p>
                  I work with technologies across both frontend and backend,
                  including JavaScript, TypeScript, React, Next.js, Node.js,
                  Express.js, and MongoDB. I enjoy creating well-structured,
                  intuitive websites and backend systems. I am also eager to
                  learn new technologies and use AI-assisted tools to boost
                  productivity while maintaining high-quality outputs.
                </p>

                <p>
                  When I'm not coding, I can usually be found playing{" "}
                  <span className="font-medium text-blue-300">badminton</span>{" "}
                  or researching topics that interest me. My goal is to
                  continuously develop my skills and become a highly capable
                  Software Engineer, working alongside talented people to
                  design impactful solutions to real-world problems.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="space-y-5 lg:col-span-2">
            {/* Career Goal Card */}
            <div className="group rounded-3xl border border-blue-400/15 bg-gradient-to-br from-[#001D3D]/80 to-[#000814]/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_0_30px_rgba(0,53,102,0.2)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z" />
                </svg>
              </div>

              <p className="mb-2 text-sm text-gray-400">Career Goal</p>

              <h3 className="text-xl font-semibold text-white">
                Full Stack Software Engineer
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Building meaningful digital experiences and solving real-world
                problems through technology.
              </p>
            </div>

            {/* Interests Card */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20">
              <p className="mb-4 text-sm font-medium text-gray-400">
                My Interests
              </p>

              <div className="flex flex-wrap gap-3">
                {["Web Development", "Problem Solving", "AI Technology", "Badminton"].map(
                  (interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-colors duration-300 hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-300"
                    >
                      {interest}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Technologies Card */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/20">
              <p className="mb-4 text-sm font-medium text-gray-400">
                Technologies I Work With
              </p>

              <div className="flex flex-wrap gap-2.5">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-blue-400/10 bg-[#001D3D]/50 px-3 py-2 text-xs font-medium text-blue-200 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#003566]/50 sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium tracking-wide text-gray-500 sm:text-base">
            <span className="text-blue-400">"</span>
            Keep learning, keep building, and keep growing.
            <span className="text-blue-400">"</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;