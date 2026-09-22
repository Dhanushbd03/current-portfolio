const Hero = () => {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-page items-center gap-12 px-5 py-16 sm:px-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-16 md:py-28"
    >
      <div>
        <h1 className="max-w-xl text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Hi 👋, I&apos;m Dhanush B D
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
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
      <div className="justify-self-start md:justify-self-end">
        <img
          src="portrait.jpg"
          alt="Portrait of Dhanush B D"
          width="900"
          height="1145"
          className="w-56 rounded-2xl border border-line object-cover sm:w-72"
        />
      </div>
    </section>
  );
};

export default Hero;
