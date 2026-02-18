import Navbar from "../pages/Navbar";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 pb-16 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#0ea5e9_0%,_transparent_40%),radial-gradient(circle_at_bottom_right,_#9333ea_0%,_transparent_40%)] opacity-20"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            <div className="space-y-5 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
                  Thirapatha Swami Muvva
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-400 max-w-xl">
                Computer Science graduate focused on Data Science, analytics,
                and building real-world solutions using Python, SQL, and modern tools.
              </p>

              <div className="flex items-center gap-6 justify-center md:justify-start text-lg">
                <a
                  href="https://github.com/MuvvaThirapathaswami"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition duration-300 hover:scale-110"
                >
                  <FaGithub />
                  <span className="text-sm">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/thirapatha-swami-muvva-637423228/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition duration-300 hover:scale-110"
                >
                  <FaLinkedin />
                  <span className="text-sm">LinkedIn</span>
                </a>

                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:border-sky-400 hover:-translate-y-1 transition duration-300"
                >
                  Resume
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-purple-500 blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src="/profile.png"
                  alt="Thirapatha Swami Muvva"
                  className="relative rounded-full w-full h-full object-cover border-4 border-sky-400 hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:border-sky-400 hover:-translate-y-1 transition duration-300">
              <FaPhone className="text-sky-400 mb-2 text-lg" />
              <p className="text-gray-400">+91 91823 32450</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:border-sky-400 hover:-translate-y-1 transition duration-300">
              <FaEnvelope className="text-sky-400 mb-2 text-lg" />
              <p className="text-gray-400">
                thirupathiswamimuvva@gmail.com
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:border-sky-400 hover:-translate-y-1 transition duration-300">
              <FaMapMarkerAlt className="text-sky-400 mb-2 text-lg" />
              <p className="text-gray-400">Ongole, Andhra Pradesh</p>
            </div>
          </div>

          <div className="mt-14 max-w-4xl">
            <p className="text-gray-400 text-base leading-relaxed">
              Developed AI-based PDF-to-speech application and performed exploratory
              data analysis on real-world datasets. Strong foundation in logical
              thinking, algorithms, and problem-solving with hands-on experience
              in Python, SQL, and data visualization tools.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
