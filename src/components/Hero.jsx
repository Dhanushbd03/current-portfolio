const Hero = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-page px-5 py-20 sm:px-6 md:py-32"
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl font-medium tracking-tight text-ink sm:text-6xl">
          Hi 👋, I&apos;m Dhanush B D
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
          a <span className="font-medium text-ink">Full Stack Developer</span>{" "}
          passionate about creating innovative web applications and tackling
          real-world challenges. With hands-on experience in both front-end and
          back-end development, I excel in building responsive, user-friendly
          solutions. My focus is on delivering high-quality, efficient results
          that meet the unique needs of each project. I blend creativity with
          technical expertise to craft intuitive and engaging web solutions.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <a
            href="#contact"
            className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
          >
            Get in touch
          </a>
          <a
            href="https://github.com/Dhanushbd03"
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/40"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
