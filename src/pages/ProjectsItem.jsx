import PropTypes from 'prop-types';


function ProjectsItem({ title, imgUrl, stack, link }) {
   return (
      <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-black rounded-md overflow-hidden block transition duration-300 ease-in-out"
      >
         <img
            src={imgUrl}
            alt="portfolio" 
            className="w-full h-36 md:h-48 object-cover cursor-pointer rounded-t-md"
         />
         <div className="p-4">
            <h3 className="text-lg md:text-xl dark:text-black mb-2 md:mb-3 font-semibold">{title}</h3>
            <p className="flex flex-wrap gap-2 items-center text-xs md:text-sm dark:text-black">
               {stack.map((item, index) => (
                  <span key={index} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-black rounded-md">
                     {item}
                  </span>
               ))}
            </p>
         </div>
      </a>
   );
}

ProjectsItem.propTypes = {
   title: PropTypes.string.isRequired,
   imgUrl: PropTypes.string.isRequired,
   stack: PropTypes.arrayOf(PropTypes.string).isRequired,
   link: PropTypes.string.isRequired,
};

export default ProjectsItem;
