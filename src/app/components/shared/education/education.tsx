import React from "react";
import { FaGraduationCap, FaBookOpen, FaSchool } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdLocationOn, MdCalendarMonth } from "react-icons/md";

const educationData = [
  {
    degree: "Bachelor of Science",
    title: "BSc in Computer Science and Engineering",
    institution: "Uttara University",
    subject: "Computer Science and Engineering",
    status: "Currently Studying · Final Year",
    icon: FaGraduationCap,
    type: "University",
    description:
      "Currently pursuing my bachelor's degree, developing my knowledge of computer science, software development, programming, and modern technologies.",
    current: true,
  },
  {
    degree: "Diploma in Engineering",
    title: "Diploma in Computer Engineering",
    institution: "Infra Polytechnic Institute",
    subject: "Computer Science",
    location: "Barishal, Bangladesh",
    status: "Completed_(2023)",
    icon: HiOutlineAcademicCap,
    type: "Diploma",
    description:
      "Built my technical foundation through engineering studies, programming fundamentals, computer technology, and practical learning.",
    current: false,
  },
  {
    degree: "Secondary School Certificate",
    title: "SSC · Science Group",
    institution: "Chandra Prasad Co-Operative Secondary School ,Bhola",
    subject: "Science",
    status: "Completed_(2018)",
    icon: FaSchool,
    type: "Secondary Education",
    description:
      "Completed my secondary education in the Science group, developing an interest in mathematics, technology, and logical thinking.",
    current: false,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#000814] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(0,53,102,0.25),transparent_35%),radial-gradient(circle_at_90%_85%,rgba(0,29,61,0.4),transparent_40%)]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Decorative Glow */}
      <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#003566]/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm font-medium text-blue-300">
            <FaGraduationCap />
            My Academic Journey
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#003566] to-blue-400" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            My academic journey, from building foundational knowledge
            to pursuing a degree in Computer Science and Engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-5 top-5 h-[calc(100%-40px)] w-px bg-gradient-to-b from-blue-400 via-[#003566] to-transparent sm:left-8" />

          <div className="space-y-8">
            {educationData.map((education, index) => {
              const Icon = education.icon;

              return (
                <div
                  key={education.degree}
                  className="group relative flex gap-5 sm:gap-8"
                >
                  {/* Timeline Icon */}
                  <div className="relative z-10 flex shrink-0">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border sm:h-16 sm:w-16 ${
                        education.current
                          ? "border-blue-400/40 bg-gradient-to-br from-[#003566] to-[#001D3D] text-blue-200 shadow-[0_0_25px_rgba(59,130,246,0.2)]"
                          : "border-white/10 bg-[#001D3D] text-gray-400 group-hover:border-blue-400/30 group-hover:text-blue-300"
                      } transition-all duration-300`}
                    >
                      <Icon className="text-lg sm:text-2xl" />
                    </div>
                  </div>

                  {/* Education Card */}
                  <div
                    className={`mb-2 flex-1 rounded-2xl border p-5 backdrop-blur-xl transition-all duration-500 sm:p-7 ${
                      education.current
                        ? "border-blue-400/25 bg-gradient-to-br from-[#001D3D]/50 to-white/[0.02] hover:border-blue-400/40 hover:shadow-[0_0_35px_rgba(0,53,102,0.15)]"
                        : "border-white/10 bg-white/[0.025] hover:border-blue-400/25 hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* Card Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full border border-blue-400/15 bg-blue-400/5 px-3 py-1 text-xs font-medium text-blue-300">
                        {education.type}
                      </span>

                      {education.current && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-xs font-medium text-green-400">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                          Currently Studying
                        </span>
                      )}
                    </div>

                    {/* Degree */}
                    <h3 className="mt-5 text-xl font-bold leading-snug text-white sm:text-2xl">
                      {education.title}
                    </h3>

                    {/* Institution */}
                    <div className="mt-3 flex items-center gap-2 text-sm font-medium text-blue-300 sm:text-base">
                      <FaBookOpen className="shrink-0" />
                      {education.institution}
                    </div>

                    {/* Subject & Location */}
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <HiOutlineAcademicCap className="text-blue-400" />
                        {education.subject}
                      </div>

                      {education.location && (
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MdLocationOn className="text-blue-400" />
                          {education.location}
                        </div>
                      )}
                    </div>

                    {/* Status */}
                    <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                      <MdCalendarMonth className="text-blue-400" />
                      {education.status}
                    </div>

                    {/* Description */}
                    <p className="mt-5 border-t border-white/5 pt-4 text-sm leading-7 text-gray-400 sm:text-base">
                      {education.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-5 h-px w-16 bg-gradient-to-r from-blue-500/60 to-transparent transition-all duration-500 group-hover:w-28" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-14 rounded-2xl border border-blue-400/10 bg-blue-400/[0.03] px-6 py-5 text-center">
          <p className="text-sm leading-7 text-gray-400 sm:text-base">
            Education is the foundation.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text font-medium text-transparent">
              Continuous learning is the journey.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;