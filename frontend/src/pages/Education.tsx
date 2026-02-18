import Navbar from "../pages/Navbar";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      institution: "RISE Krishna Sai Gandhi Group of Institutions, Ongole",
      degree: "B.Tech – Computer Science & Engineering (Data Science)",
      duration: "2022 - 2026",
      score: "8.0 / 10",
    },
    {
      institution: "Devathi Venkata Subbaiah Junior College, Darsi",
      degree: "Class 12th – Board of Intermediate Education, Andhra Pradesh",
      duration: "2020 - 2022",
      score: "9.7/10",
    },
    {
      institution: "Sri Mallikarjuna High School, Rajampalli",
      degree: "Class 10th – Board of Secondary Education, Andhra Pradesh",
      duration: "2019 - 2020",
      score: "10/10",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 pb-16 px-6 bg-gradient-to-br from-black via-slate-950 to-gray-900 text-gray-100">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-wide">
            Academic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
              Journey
            </span>
          </h1>

          <div className="relative border-l border-sky-500/30 pl-8 space-y-16">
            {education.map((edu, index) => (
              <div key={index} className="relative group">

                <div className="absolute -left-[38px] top-1 w-10 h-10 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center text-sky-400 text-lg group-hover:scale-110 transition">
                  <FaGraduationCap />
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-sky-400 hover:-translate-y-2 transition-all duration-300 backdrop-blur-md">
                  <h2 className="text-lg font-semibold text-sky-400">
                    {edu.degree}
                  </h2>

                  <p className="text-gray-300 text-sm mt-2">
                    {edu.institution}
                  </p>

                  <div className="flex justify-between mt-4 text-sm text-gray-400">
                    <span>{edu.duration}</span>
                    <span className="font-medium text-gray-200">
                      {edu.score}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
