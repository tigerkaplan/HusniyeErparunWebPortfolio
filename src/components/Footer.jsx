import { FaGithub } from "react-icons/fa";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineEnvironment
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="md:block hidden fixed  shadow-gray-90  top-[25%] z-10 top-4 right-80 m-2 p-4 easy-in duration-100  hover: scale-15">
      <a
        href="https://github.com/tigerkaplan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="w-[] flex justify-center items-center rounded-full shadow-lg bg-gray-90 shadow-gray-400 m-2 p-4 cursor-pointer hover: scale-15 easy-in duration-100"
      >
        <FaGithub className="cursor-pointer" size={30} />
      </a>

      <a
        href="https://www.linkedin.com/in/husniyeerparun"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="w-[] flex justify-center items-center rounded-full shadow-lg bg-gray-90 shadow-gray-400 m-2 p-4 cursor-pointer hover: scale-15 easy-in duration-100"
      >
        <AiOutlineLinkedin className="cursor-pointer" size={30} />
      </a>

      <a
        href="mailto:husniyeerparun@gmail.com?subject= About work"
        aria-label="Email"
        className="w-[] flex justify-center items-center rounded-full shadow-lg bg-gray-90 shadow-gray-400 m-2 p-4 cursor-pointer hover: scale-15 easy-in duration-100"
      >
        <AiOutlineMail className="cursor-pointer" size={30} />
      </a>

      <a
        href="https://www.google.com/maps/d/embed?mid=1fRjKMZuwjZ5IsMZEI1NZQK7XdB8&hl=en&ehbc=2E312F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Maps"
        className="w-[] flex justify-center items-center rounded-full shadow-lg bg-gray-90 shadow-gray-400 m-2 p-4 cursor-pointer hover: scale-15 easy-in duration-100"
      >
        <AiOutlineEnvironment className="cursor-pointer" size={30} />
      </a>
    </div>
  );
};

export default Footer;
