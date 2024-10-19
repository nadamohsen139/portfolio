const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "OOP",
    "TailwindCSS",
    "React.js",
    "React Router",
    "React Native",
    "Expo",
    "Expo-Router",
    "Native Wind",
    "Git",
    "Github",
    "Redux Toolkit",
    "Firebase",
    "Typescript",
  ];
  return (
    <div className="skills border-b border-gray-600 lg:pb-20 pb-10" id="skills">
      <h2 className="lg:my-20 my-10 text-center text-4xl font-semibold">
        Skills
      </h2>
      <div className="flex items-center justify-center text-center gap-4 flex-wrap">
        {skills.map((skill, index) => (
          <div
            className="skill p-3 font-medium dark:bg-pink-400 bg-pink-200 rounded-lg"
            key={index}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
