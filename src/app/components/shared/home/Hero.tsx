import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaFileDownload,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#000814] text-white"
    >

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#000814] via-[#001326] to-[#001d3d]" />

      {/* Blue Glow - Right Side */}
      <div className="absolute -right-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-[#003566]/40 blur-[140px]" />

      {/* Cyan Glow - Left Side */}
      <div className="absolute -left-40 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Decorative Light */}
      <div className="absolute right-0 top-0 -z-10 h-[2px] w-1/2 bg-gradient-to-l from-cyan-400/50 to-transparent" />

      {/* Main Container */}
      <div className="container mx-auto max-w-7xl px-6 py-24 lg:py-28">

        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">

          {/* Left Content */}
          <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              <p className="text-sm font-medium tracking-[3px] text-blue-300 uppercase">
                Welcome to my portfolio
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">

              Hi, I'm <br/>

              <span className="bg-gradient-to-r  from-cyan-300 via-blue-400 to-[#60a5fa] bg-clip-text text-transparent">
                Minhaz Uddin
              </span>

            </h1>

            {/* Designation */}
            <h2 className="text-2xl font-semibold text-gray-200 sm:text-3xl">
              Full Stack Web Developer
            </h2>

            {/* Description */}
            <p className="mx-auto max-w-2xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
              I am a passionate web developer who loves building modern,
              responsive, and user-friendly web applications. I enjoy solving
              problems, learning new technologies, and turning creative ideas
              into real-world digital experiences.
            </p>d

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4 lg:justify-start">

              <Link
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40"
              >
                View My Work
              </Link>

              <a
                href="/Minhaz_Uddin_CV.pdf"
                download
                className="rounded-xl border border-blue-400/40 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-blue-500/10"
              >
              Download CV 
              </a>

            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-5 pt-5 lg:justify-start">

              <a
                href="https://github.com/minhazroot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-cyan-400"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-cyan-400"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-cyan-400"
              >
                <FaFacebook size={22} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-cyan-400"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-cyan-400"
              >
                <FaXTwitter size={22} />
              </a>

              <a
                href="mailto:minhaz.cse.dev@gmail.com"
                aria-label="Email"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-cyan-400"
              >
                <FiMail size={22} />
              </a>

            </div>
          </div>

{/* Right Profile Image */}
<div className="flex w-full justify-center lg:w-1/2 lg:justify-end">

  <div className="relative flex items-center justify-center">

    {/* Outer Glow */}
    <div className="absolute h-72 w-72 rounded-full bg-blue-500/30 blur-[80px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />

    {/* Outer Decorative Ring */}
    <div className="absolute h-72 w-72 rounded-full border border-cyan-400/20 sm:h-96 sm:w-96 lg:h-[450px] lg:w-[450px]" />

    {/* Neon Ring */}
    <div className="absolute h-64 w-64 rounded-full border-2 border-blue-500/40 shadow-[0_0_30px_rgba(0,112,255,0.25)] sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]" />

    {/* Circular Profile Frame */}
    <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-4 border-cyan-400/70 shadow-[0_0_35px_rgba(0,112,255,0.4)] sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]">

      {/* Profile Image */}
      <Image
        src="/image/minhaz.jpg"
        alt="Minhaz Uddin - Full Stack Web Developer"
        width={500}
        height={500}
        priority
        className="h-full w-full rounded-full object-cover object-top transition-transform duration-500 hover:scale-110"
      />

      {/* Available for Work Badge */}
      <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-400/50 bg-[#001d3d]/90 px-4 py-2 shadow-[0_0_20px_rgba(0,112,255,0.4)] backdrop-blur-md">

        <div className="flex items-center gap-2">

          {/* Green Status Indicator */}
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />

          {/* Status Text */}
          <span className="text-xs font-semibold text-white sm:text-sm">
            Available for Work
          </span>

        </div>
      </div>

    </div>

  </div>
</div>

        </div>
      </div>

      {/* Bottom Light */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

    </section>
  );
};

export default HeroSection;