"use client";

import { IProject } from "@/app/types/project";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaTimes,
  FaCode,
} from "react-icons/fa";

const Projects = () => {
const [projects, setProjects] = useState<IProject[]>([]);
const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch projects from public JSON
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
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

      {/* Glow Effects */}
      <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#003566]/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm font-medium text-blue-300">
            <FaCode />
            My Creative Work
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#003566] to-blue-400" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A collection of projects I've built while learning, experimenting,
            and turning ideas into real-world applications.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-blue-400" />
          </div>
        )}

        {/* Projects Grid - 3 Columns */}
        {!loading && (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 9).map((project) => (
              <article
                key={project.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0B1422] transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-[0_15px_45px_rgba(0,53,102,0.2)]"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1422] via-black/10 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                    <FaCode />
                    {project.category}
                  </div>

                  {/* Image Bottom Glow */}
                  <div className="absolute bottom-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-300">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 min-h-[72px] text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:border-blue-400/20 hover:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      View Details
                      <FaArrowRight className="text-xs" />
                    </button>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && projects.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
            <FaCode className="mx-auto mb-4 text-4xl text-blue-400" />
            <p className="text-gray-400">No projects found.</p>
          </div>
        )}

        {/* Bottom Message */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-500 sm:text-base">
            Turning ideas into reality through{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text font-medium text-transparent">
              code and creativity.
            </span>
          </p>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-blue-400/20 bg-[#0B1422] shadow-[0_0_60px_rgba(0,53,102,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-56 sm:h-72">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1422] via-black/20 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white transition hover:bg-white/20"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              {/* Category */}
              <span className="absolute bottom-5 left-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-1.5 text-xs font-semibold text-white">
                {selectedProject.category}
              </span>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                {selectedProject.name}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                {selectedProject.details}
              </p>

              {/* Technology List */}
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold text-white">
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-blue-400/15 bg-[#001D3D]/50 px-3 py-2 text-sm text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105"
                >
                  <FaExternalLinkAlt />
                  Live Preview
                </a>

                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <FaGithub />
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;