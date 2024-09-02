import lightlogo from "../assets/lightmodelogo.png";
import darklogo from "../assets/darkmodelogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { useState } from "react";

const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const handleClick = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };
  return (
    <div className="lg:mb-20 mb-10 flex items-center lg:justify-between justify-center py-6">
      <div className="flex flex-shrink-0 items-center lg:w-48 w-32">
        <img
          src={
            document.documentElement.classList.contains("dark")
              ? darklogo
              : lightlogo
          }
          alt="logo"
        />
      </div>
      <div className="hidden md:block">
        <ul className="list flex items-center justify-center gap-5">
          <a href="#home">
            <li className="font-bold lg:text-xl text-sm hover:text-pink-300">
              Home
            </li>
          </a>
          <a href="#about">
            <li className="font-bold lg:text-xl text-sm hover:text-pink-300 text-center">
              About Me
            </li>
          </a>
          <a href="#skills">
            <li className="font-bold lg:text-xl text-sm hover:text-pink-300">
              Skills
            </li>
          </a>
          <a href="#projects">
            <li className="font-bold lg:text-xl text-sm hover:text-pink-300">
              Projects
            </li>
          </a>
          <a href="#contact">
            <li className="font-bold lg:text-xl text-sm hover:text-pink-300">
              Contact
            </li>
          </a>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="https://www.linkedin.com/in/nada-mohsen-3555322b7/"
          target="_blank"
        >
          <div className="m-8 lg:text-3xl text-2xl text-black dark:text-white hover:text-pink-200">
            <FaLinkedin />
          </div>
        </a>
        <a href="https://github.com/nadamohsen139" target="_blank">
          <div className="m-8 lg:text-3xl text-2xl text-black dark:text-white hover:text-pink-200">
            <FaGithub />
          </div>
        </a>
      </div>
      <button
        onClick={handleClick}
        className="fixed bottom-0 right-0 rounded-lg bg-black text-white dark:text-black p-3 text-2xl dark:bg-white"
      >
        {document.documentElement.classList.contains("dark") ? (
          <WiDaySunny />
        ) : (
          <MdOutlineDarkMode />
        )}
      </button>
    </div>
  );
};

export default NavBar;
