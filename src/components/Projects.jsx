import { projects } from "../index";

const Projects = () => {
  return (
    <div
      className="projects border-b border-gray-600 lg:pb-20 pb-10"
      id="projects"
    >
      <h2 className="lg:my-20 my-10 text-center text-4xl font-semibold">
        Projects
      </h2>

      <div className="map-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project flex flex-col text-center gap-10 justify-center items-center p-8 dark:bg-[#504f4f43] bg-[#ffffff82] rounded-xl"
          >
            <div className="w-80">
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.imgSrc}
                  alt={project.altText}
                  className="rounded-lg transition ease-in-out hover:scale-110 duration-300 h-full"
                />
              </a>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
              <div className="info">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="lg:text-3xl text-2xl font-semibold mb-6 lg:text-left text-center hover:text-pink-300">
                    {project.title}
                  </h3>
                </a>
              </div>

              <div className="flex flex-col text-center gap-4 flex-wrap techs justify-center items-center">
                <span className="font-semibold text-left text-xl">
                  Technologies Used
                </span>
                <div className="flex text-center gap-4 flex-wrap justify-center items-center">
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
    </div>
  );
};

export default Projects;
