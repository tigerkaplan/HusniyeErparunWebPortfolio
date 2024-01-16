
import projects from '../Data/projects.json';
import ProjectsItem from './ProjectsItem';

function Projects() {
   return (
      <section>
<div>
   <h1>My <span> Projects </span></h1>
</div>
<div className="flex flex-col md:flex-row items-center justify-center">
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
         <ProjectsItem
            key={project.id} 
            id={index}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
         />
      ))}
   </div>
</div>
      </section>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
   );
}

export default Projects;
