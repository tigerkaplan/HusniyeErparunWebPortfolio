import PortfolioItem from '../../components/PortfolioItem/PortfolioItem'

import "./Portfolio.css" 


export const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h1>Portfolio</h1>
      <div className='projectList'>
        {/* display all over projects */}
        {portfolio.map(project => (
          <PortfolioItem key={project.name} image={project.image} />
        ))}
      </div>
    </div>
  )
}
