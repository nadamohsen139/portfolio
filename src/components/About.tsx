import React from "react";

const About = () => {
  return (
    <div className="about border-b border-gray-600 lg:pb-20 pb-10" id="about">
      <h2 className="lg:my-20 my-10 text-center text-4xl font-semibold">
        About me
      </h2>
      <div className="flex items-center justify-center text-center flex-wrap">
        I am a dedicated and versatile front-end developer with a passion for
        creating efficient and user-friendly web applications. I have worked
        with a variety of technologies, including
        <span className="text-pink-400">
          Firebase For Authentication and Firestore Database, Supabase For
          Authentication , Storage and Database, MapTiler, Moment.js,
          Interacting with Gemini Google Generative Ai and API Job Posting like
          Adzuna API.
        </span>
        My journey in mobile app development began with a deep curiosity for how
        things work, and it has evolved into a career where I continuously
        strive to learn and adapt to new challenges. I thrive in collaborative
        environments and enjoy solving complex problems to deliver high-quality
        solutions. Outside of coding, I enjoy staying active, exploring new
        technologies, and contributing to open-source projects.
      </div>
    </div>
  );
};

export default About;
