import type { ExperienceItem } from "../types";


const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "LeanDev Technology Inc.",
    duration: "2.5 Years",
    bullets: [
      "Developed a full-stack organic certification platform using React, Redux, Java, and MySQL, streamlining multi-step workflows for over 1,000 vendors.",
      "Architected a scalable system that manages the processing of 5,000+ product applications and serves a team of 100 internal reviewers.",
      "Optimized frontend performance and combined with intuitive UI design, improving user efficiency by 20% and reducing manual processing required for internal case management.",
      "Collaborated with cross-functional teams to deliver scalable software solutions."
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20">
      {/* Section header */}
      <div className="flex items-center gap-5 mb-12">
        <h2 className="text-3xl font-bold whitespace-nowrap">Experience</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#81b29a] via-[#e07a5f]/45 to-transparent" />
      </div>

      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative bg-[#f2cc8f]/25 border border-[#3d405b]/15 hover:border-[#81b29a]/65 rounded-2xl p-8 transition-colors duration-200 overflow-hidden shadow-sm shadow-[#3d405b]/10"
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#81b29a] via-[#e07a5f] to-transparent" />

            <div className="pl-5">
              {/* Header row */}
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#3d405b] mb-1">{exp.role}</h3>
                  <p className="text-[#e07a5f] text-sm font-medium">{exp.company}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-block bg-[#81b29a]/25 border border-[#81b29a]/45 text-[#3d405b] px-3 py-1 rounded-full text-sm font-medium">
                    {exp.duration}
                  </span>
                </div>
              </div>
              {/* Bullet points */}
              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#3d405b]/78 text-sm leading-relaxed">
                    <span className="mt-2 shrink-0 w-1.5 h-1.5 bg-[#e07a5f] rounded-full" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
