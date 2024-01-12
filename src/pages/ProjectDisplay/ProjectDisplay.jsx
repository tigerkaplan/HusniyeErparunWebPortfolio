import { useParams } from "react-router-dom";
import { projectList } from "../../components/helpers/ProjectList";
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
      <img src={project.image} />
      <p>
        <b>Skills:</b>
        {project.skills}
      </p>
      <FaGithub />    {/* GitHub Icon */}
    </div>
  );
};
