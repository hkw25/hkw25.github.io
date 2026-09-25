import { projectData } from "../data/projectData";


const techBadgeColors = [
  "bg-[#81b29a]/18 text-[#3d405b] border-[#81b29a]/40",
  "bg-[#f2cc8f]/35 text-[#3d405b] border-[#f2cc8f]/60",
   "bg-[#e07a5f]/12 text-[#e07a5f] border-[#e07a5f]/35",
  "bg-[#f4f1de] text-[#3d405b] border-[#3d405b]/15",
  "bg-[#3d405b]/10 text-[#3d405b] border-[#3d405b]/25",
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20">
      {/* Section header */}
      <div className="flex items-center gap-5 mb-12">
        <h2 className="text-3xl font-bold whitespace-nowrap">Projects</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#81b29a] via-[#e07a5f]/45 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            className={`group flex flex-col bg-[#f2cc8f]/25 border border-[#3d405b]/15 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${project.accentClass}`}
          >
            {/* Icon */}
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#3d405b]/15 bg-[#f2cc8f]/40 text-sm font-bold text-[#3d405b] shadow-sm shadow-[#3d405b]/10">
              {project.icon}
            </span>

            {/* Title */}
            <h3 className="text-base font-semibold text-[#3d405b] mb-2.5 group-hover:text-[#e07a5f] transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-[#3d405b]/72 text-sm leading-relaxed flex-1 mb-5">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${techBadgeColors[i % techBadgeColors.length]}`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Arrow link */}
            <div className="flex items-center gap-1.5 text-sm text-[#3d405b]/60 group-hover:text-[#e07a5f] transition-colors">
              View project
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
