
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { Avatar } from "@material-tailwind/react";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineEnvironment
} from "react-icons/ai";

export const Home = () => {
  return (
    <div id="main" className="relative h-screen bg-gray-300	">
      {/* image */}

      <img
  className="w-full h-full object-cover object-left scale-x-[-1]"
  src= "./PP.jpg" 
  alt="Woman spreading her arms"
/>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          {/* Profile Photo */}
<Avatar 
variant= "circular" 
alt="Profile Picture"
className="hover:z-10 focus:z-10 w-40 h-40  rounded-full mr-4"
src="./PP.jpg"  
/>
{/* Content */}
          <h1 className="sm:text-5 text-4xl font-bold text-gray-800">
            I`m Husniye
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 ">
  <TypeAnimation
    sequence={[
      "a softwareDeveloper",
      1000,
      "a GraphicDesigner",
      1000,
      "a marblingArtist",
      1000
    ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
              cursor={true}
            />
          </h2>
          {/* Social Media / Contact  */}
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://github.com/tigerkaplan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/husniyeerparun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin className="cursor-pointer" size={30} />
            </a>

            <a href="mailto:husniyeerparun@gmail.com">
              <AiOutlineMail className="cursor-pointer" size={30} />
            </a>

            <a
              href="https://www.google.com/maps/d/embed?mid=1fRjKMZuwjZ5IsMZEI1NZQK7XdB8&hl=en&ehbc=2E312F"
              width="640"
              height="480"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineEnvironment className="cursor-pointer" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
