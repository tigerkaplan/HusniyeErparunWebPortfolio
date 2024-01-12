import React from 'react';
// Component presenting each project
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        // Navigate page to route
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>
        {" "}{name}
      </h1>
    </div>
  );
}

export default ProjectItem;
