import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import { portfolioList  as projects } from '../../utils/PortfolioList';
import "./Portfolio.css" 


export const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h1>Portfolio</h1>
      <div className='projectList'>
        {/* display all over projects */}
        {projects.map((project, idx) => (
          <PortfolioItem id={idx} key={project.name} image={project.image} />
        ))}
      </div>
    </div>
  );
};

