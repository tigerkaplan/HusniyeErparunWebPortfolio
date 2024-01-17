import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectsItem({ title, imgUrl, stack, githubLink, demoLink, description }) {
  return (
    <div className="border-2 border-stone-800 gray:border-gray rounded-md overflow-hidden block transition duration-300 ease-in-out">
      {/* Image of the project */}
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-100 md:h-60 object-cover cursor-pointer rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-lg md:text-xl dark:text-black mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="text-sm md:text-base dark:text-black mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <p className="flex flex-wrap gap-2 items-center text-xs md:text-sm dark:text-black">
            {stack.map((item, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 font-semibold border-2 border-stone-400 dark:border-black rounded-md"
              >
                {item}
              </span>
            ))}
          </p>
          <div className="flex gap-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="cursor-pointer" size={20} />
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt className="cursor-pointer" size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Prop types validation
ProjectsItem.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string,
  demoLink: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default ProjectsItem;
