
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { projects } from "../../assets/projectData/projects.json";
import './Projects.css';

export const Projects = () => {
  return (
    <div className="projects">
      <h1> Projects</h1>
      <div className="ProjectList">
      {/* there is some problem here js or jsx  */}
        {projects.map((project, idx) => (
          <ProjectItem id={idx} name={project.name} image={project.image} />
        ))}
      </div>
    </div>
  );
};
