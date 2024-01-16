import { FaGithub } from "react-icons/fa";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineEnvironment
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex justify-between pt-6 max-w-[200px] w-full mx-auto">
      <a
        href="https://github.com/tigerkaplan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="cursor-pointer" size={30} />
      </a>

      <a
        href="https://www.linkedin.com/in/husniyeerparun"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <AiOutlineLinkedin className="cursor-pointer" size={30} />
      </a>

      <a
        href="mailto:husniyeerparun@gmail.com"
        aria-label="Email"
      >
        <AiOutlineMail className="cursor-pointer" size={30} />
      </a>

      <a
        href="https://www.google.com/maps/d/embed?mid=1fRjKMZuwjZ5IsMZEI1NZQK7XdB8&hl=en&ehbc=2E312F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Maps"
      >
        <AiOutlineEnvironment className="cursor-pointer" size={30} />
      </a>
    </div>
  );
};

export default Footer;
