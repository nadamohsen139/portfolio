import { projects } from "../index";

const Projects = () => {
  return (
    <div className="projects border-b border-gray-600 pb-20" id="projects">
      <h2 className="my-20 text-center text-4xl font-semibold">Projects</h2>

      {projects.map((project, index) => (
        <div
          key={index}
          className="project flex flex-row text-center gap-11 flex-wrap justify-center items-center pb-10 bg-black p-2"
        >
          <div className="w-48 h-full">
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imgSrc}
                alt={project.altText}
                className="rounded-lg transition ease-in-out hover:scale-110 duration-300"
              />
            </a>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="info">
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <h3 className="text-2xl font-semibold mb-6 lg:text-left text-center hover:text-pink-300">
                  {project.title}
                </h3>
              </a>
            </div>

            <div className="flex text-center gap-4 flex-wrap techs">
              <span className="font-semibold text-left">Technologies Used</span>
              <div className="flex  text-center gap-4 flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="skill p-3 font-medium bg-pink-200 dark:bg-pink-400 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
