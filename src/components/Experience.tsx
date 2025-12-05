import React from "react";
import PikaDo from "../assets/PikaDo-DE-K12-Logo-001 (1).png";

const WorkExperience = () => {
  return (
    <div
      className="experience border-b border-gray-600 lg:pb-20 pb-10"
      id="experience"
    >
      <h2 className="lg:my-20 my-10 text-center text-4xl font-semibold">
        Work Experience
      </h2>
      <div className="flex flex-col gap-y-5 items-center">
        <div className="bg-white rounded-lg max-w-[350px]">
          <a
            href="https://www.linkedin.com/company/pikadoai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={PikaDo}
              alt="PikaDo Logo"
              className="rounded-lg transition ease-in-out hover:scale-110 duration-300 h-full"
            />
          </a>
        </div>
        <a
          href="https://www.linkedin.com/company/pikadoai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col gap-y-5">
            <div className="lg:text-3xl text-2xl font-semibold hover:text-pink-300 text-center">
              PikaDo
            </div>
            <span className="font-semibold lg:text-left text-center text-xl">
              June 2025 - Present
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
export default WorkExperience;
