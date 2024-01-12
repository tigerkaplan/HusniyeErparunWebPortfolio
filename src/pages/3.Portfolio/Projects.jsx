
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { projectList as projects } from "../../components/helpers/ProjectList";
import './Projects.css';

export const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="ProjectList">
      {/* there is some problem here js or jsx  */}
        {projects.map((project, idx) => (
          <ProjectItem id={idx} key={project.name} image={project.image} />
        ))}
      </div>
    </div>
  );
};
