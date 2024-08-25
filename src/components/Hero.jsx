import React from "react";
import anime from "animejs/lib/anime.es.js";

const Hero = () => {
  const animate = (target) => {
    anime({
      targets: target,
      rotate: 0,
      duration: 500,
      easing: "easeInOutSine",
    });
  };

  const resetAnimation = (target, deg) => {
    anime({
      targets: target,
      rotate: deg,
      duration: 500,
      easing: "easeInOutSine",
    });
  };

  return (
    <div
      className="bg-red flex flex-col items-center justify-center gap-5 px-5 py-20 md:flex-row md:justify-between md:px-10"
      id="about"
    >
      <div className="space-y-3 md:w-1/2">
        <h1 className="text-4xl font-bold text-dark dark:text-light">
          Hi 👋, I'm Dhanush B D
        </h1>
        <p className="text-pretty text-justify text-lg text-gray-700 dark:text-light">
        a <span className="font-extrabold">Full Stack Developer</span> passionate about creating innovative web applications and tackling real-world challenges. With hands-on experience in both front-end and back-end development, I excel in building responsive, user-friendly solutions. My focus is on delivering high-quality, efficient results that meet the unique needs of each project. I blend creativity with technical expertise to craft intuitive and engaging web solutions. 
        </p>
      </div>
      <div className="relative">
        <img
          src="119742887.jpeg"
          alt="img failed"
          className="h-72 w-72 -rotate-12 rounded-xl md:h-96 md:w-96"
          onMouseEnter={(e) => animate(e.currentTarget)}
          onMouseLeave={(e) => resetAnimation(e.currentTarget, -12)}
        />
        <img
          src="119742887.jpeg"
          alt="img failed"
          className="absolute top-0 -rotate-3 rounded-xl md:h-96 md:w-96"
          onMouseEnter={(e) => animate(e.currentTarget)}
          onMouseLeave={(e) => resetAnimation(e.currentTarget, -3)}
        />
      </div>
    </div>
  );
};

export default Hero;
