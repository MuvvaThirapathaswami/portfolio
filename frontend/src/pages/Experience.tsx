import Navbar from "../pages/Navbar";


export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Development Intern (MERN)",
      company: "SmartBridge",
      type: "Remote",
      duration: "May 2025 - Jun 2025",
      points: [
        "Developed 'Shop-Smart' e-commerce web application using MERN stack.",
        "Implemented Add to Cart and Buy Now functionality with dynamic state management.",
        "Built secure JWT-based authentication and protected user routes.",
        "Designed RESTful APIs with Express.js and MongoDB for product and order management.",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 pb-16 px-6 bg-[#05070f] text-slate-100">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>

          <div className="relative space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12">


                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-emerald-400 hover:scale-[1.02] transition-all duration-300 backdrop-blur-md">
                  <h2 className="text-xl font-semibold text-emerald-400">
                    {exp.role}
                  </h2>

                  <p className="text-slate-300 mt-1">
                    {exp.company} • {exp.type}
                  </p>

                  <p className="text-sm text-slate-400 mt-2">
                    {exp.duration}
                  </p>

                  <ul className="mt-6 space-y-3 text-slate-300 text-sm leading-relaxed">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-emerald-400">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
