import Navbar from "../pages/Navbar";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "HearToLearn — AI-Based PDF to Speech Application",
      duration: "2025",
      description: [
        "Developed and deployed a full-stack AI application that processes PDF files.",
        "Implemented text extraction using PyPDF2 for accurate content parsing.",
        "Integrated Google Text-to-Speech for real-time document-to-audio conversion.",
        "Deployed frontend on Vercel and backend on Render for seamless accessibility.",
      ],
      live: "https://github.com/MuvvaThirapathaswami/HearToLearn",
      github: "https://github.com/MuvvaThirapathaswami/HearToLearn",
    },
    {
      title: "Netflix Content Analysis — Data Analytics Project",
      duration: "2025",
      description: [
        "Performed data cleaning and preprocessing using Python.",
        "Conducted exploratory data analysis on Netflix titles dataset.",
        "Identified trends in genres, content types, and yearly release patterns.",
        "Visualized insights to support data-driven understanding.",
      ],
      live: "https://github.com/MuvvaThirapathaswami/NetflixContentAnalysis",
      github: "https://github.com/MuvvaThirapathaswami/NetflixContentAnalysis",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 pb-16 px-6 bg-gradient-to-br from-black via-slate-900 to-gray-950 text-gray-100">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
              Projects
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-sky-400 hover:-translate-y-2 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group"
              >
                <div>
                  <h2 className="text-xl font-semibold text-sky-400 group-hover:text-purple-400 transition">
                    {project.title}
                  </h2>

                  <p className="text-sm text-gray-400 mt-2">
                    {project.duration}
                  </p>

                  <ul className="mt-6 space-y-3 text-gray-300 text-sm leading-relaxed">
                    {project.description.map((point, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-sky-400">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-sky-500 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-sky-400 transition duration-300"
                  >
                    <FaExternalLinkAlt />
                    View
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-lg text-sm hover:border-sky-400 hover:text-sky-400 transition duration-300"
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
