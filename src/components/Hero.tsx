import scrollingEffect from "../utils/scrollingEffect";
import backgroundImage from "../images/background.jpg";

function Hero() {
  return (
    <section className="hero-background relative isolate flex min-h-[88vh] w-full flex-col items-start justify-center gap-6 overflow-hidden px-6 py-28 sm:px-10 md:gap-10 lg:px-16">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10171b]/92 via-[#182228]/78 to-[#10171b]/45" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(221,76,58,0.26),transparent_34%)]" aria-hidden="true" />

      {/* Headline */}
      <h1 className="animate-fade-up-1 mb-6 text-6xl font-bold leading-[1.1] tracking-tight text-[#f5f1e8] md:text-7xl">
        <span className="hero-gradient-text"> Hi, I&apos;m Howard.</span>
      </h1>

      {/* Subheading */}
      <p className="animate-fade-up-2 mb-10 max-w-3xl text-lg leading-relaxed text-[#f5f1e8]/90 md:text-xl">
        Software engineer with 2+ years of industry experience in full-stack development building web applications using React and Java,
        Currently pursuing a Master&apos;s in Computer Science at University of Florida. 
      </p>

      {/* CTA buttons */}
      <div className="animate-fade-up-3 flex gap-4 flex-wrap">
        <a
          href="#projects"
          onClick={(event) => scrollingEffect(event, "#projects")}
          className="rounded-xl bg-[#dc4c3a] px-7 py-3 font-semibold text-[#fffaf2] shadow-lg shadow-[#0c1114]/35 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ef6550] hover:shadow-[#dc4c3a]/30"
        >
          View Projects
        </a>
        <a
          href="#experience"
          onClick={(event) => scrollingEffect(event, "#experience")}
          className="rounded-xl border border-[#f5f1e8]/45 bg-[#10171b]/35 px-7 py-3 font-semibold text-[#f5f1e8] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f5f1e8]/80 hover:bg-[#f5f1e8]/15"
        >
          Experience
        </a>
      </div>
    </section>
  );
}

export default Hero;
