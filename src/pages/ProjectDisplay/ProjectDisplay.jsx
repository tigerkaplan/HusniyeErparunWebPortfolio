import { useParams } from "react-router-dom";
import projectList from "../../components/helpers/ProjectList";
import projects from "../../assets/projectData/projects.json
import { FaGithub } from "react-icons/fa";
import "../ProjectDisplay/ProjectDisplay.css"

export const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1>
        {project.name}
      </h1>
      <div className="imageJson">
      <p>
        <b>Skills:</b>
        {project.skills}
      </p>
      <FaGithub />  {/* GitHub Icon */}
      <p>
        <b>Information:</b>
        {project.Information}
      </p>
    </div>
  );
};
