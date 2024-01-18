import ProjectsItem from "./ProjectsItem";
import projectsData from "../data/projects.json";

function Projects() {
  return (
    <section>
      <div>
        <h1 className="text-4xl text-bold">
          My <span className="text-4xl text-bold">Projects</span>
        </h1>
      </div>
      <div className="flex flex-col pl-20 md:flex-row text-justify  bg-gray-100 justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map(project =>
            <ProjectsItem
              key={project.id}
              title={project.title}
              imgUrl={project.imgUrl}
              stack={project.stack}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              description={project.description}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
