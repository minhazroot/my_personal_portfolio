import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li><Link href="#home">HOME</Link></li>
      <li><Link href="#about">ABOUT</Link></li>
      <li><Link href="#skills">SKILLS</Link></li>
      <li><Link href="#education">EDUCATION</Link></li>
      <li><Link href="#experience">EXPERIENCE</Link></li>
      <li><Link href="#projects">PROJECTS</Link></li>
      <li><Link href="#contact">CONTACT</Link></li>
    </>
  );

  return (
    <div className="fixed top-0 z-50 w-full bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white shadow-lg backdrop-blur-md">

  <div className="navbar container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-3 items-center">

    {/* Logo Section */}
    <div className="justify-self-start">
      <Link href="#home" className="flex items-center gap-2">
        <Image
          src="/image/Minhaz Uddin Tech Logo.png"
          alt="Minhaz Uddin Tech Logo"
          width={55}
          height={55}
          className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          priority
        />

        <span className="text-sm sm:text-lg font-bold text-white whitespace-nowrap">
          MINHAZ <span className="text-blue-400">UDDIN</span>
        </span>
      </Link>
    </div>

    {/* Mobile Menu */}
    <div className="justify-self-center lg:hidden">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-[#001d3d] p-3 shadow-xl"
        >
          {links}
        </ul>
      </div>
    </div>

    {/* Desktop Menu - Exact Center */}
    <div className="hidden lg:flex justify-self-center">
      <ul className="menu menu-horizontal flex-nowrap gap-1 px-1 text-sm font-medium">
        {links}
      </ul>
    </div>

    {/* Profile Image */}
    <div className="justify-self-end">
      <Link href="#about" className="relative block">
        <div className="avatar">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-2 ring-blue-500 ring-offset-2 ring-offset-[#000814]">
            <Image
              src="/image/profile.png"
              alt="Minhaz Uddin Profile"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Active Status */}
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-[#000814]"></span>
      </Link>
    </div>

  </div>
</div>
  );
};

export default Navbar;