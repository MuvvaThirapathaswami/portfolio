import Navbar from "../pages/Navbar";
import {
  FaPython,
  FaJava,
  FaDatabase,
  FaChartBar,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { SiMysql, SiMongodb } from "react-icons/si";

export default function Skills() {
  const skillSections = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java (Core)", icon: <FaJava /> },
        { name: "C Language", icon: <FaCode /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB (Basics)", icon: <SiMongodb /> },
      ],
    },
    {
      title: "Data & Analytics Tools",
      skills: [
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Power BI", icon: <FaChartBar /> },
        { name: "Excel (Advanced)", icon: <FaChartBar /> },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", icon: <FaLaptopCode /> },
        { name: "CSS", icon: <FaLaptopCode /> },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 pb-16 px-6 bg-gradient-to-tr from-black via-slate-900 to-gray-950 text-gray-100">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-wide">
            Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Technical Expertise
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {skillSections.map((section) => (
              <div
                key={section.title}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-cyan-500/20 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/10 transition duration-300"
              >
                <h2 className="text-2xl font-semibold mb-8 text-cyan-400">
                  {section.title}
                </h2>

                <div className="grid grid-cols-2 gap-6">
                  {section.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 bg-black/40 border border-gray-700 rounded-xl p-4 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
                    >
                      <div className="text-2xl text-cyan-400">
                        {skill.icon}
                      </div>
                      <p className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
