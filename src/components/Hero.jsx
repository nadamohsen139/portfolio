import { HERO_CONTENT } from "../index";
import profilepic from "../assets/profilepic.png";
const Hero = () => {
  return (
    <div
      className="hero pb-4 lg:mb-35 mb-10 border-b border-gray-600"
      id="home"
    >
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-3/4 lg:w-1/3 lg:p-6 flex justify-center">
          <img src={profilepic} alt="profile picture" />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-10 text-6xl text-center font-semibold tracking-tight lg:mt-10 lg:mx-7">
              Nada Mohsen
            </h1>
            <span className="mx-8 font-semibold text-center">
              Front-end Web and Mobile App Developer
            </span>
            <p className="py-10 text-center lg:text-start mx-8">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
