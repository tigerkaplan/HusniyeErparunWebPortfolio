import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin, AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";

export const Home = () => {
  return (
    <div id="main" className="relative h-screen bg-gray-300	" >
      <img
        className="w-full h-full object-cover object-left scale-x-[-1]"
        src="https://source.unsplash.com/carefree-beautiful-woman-in-knitted-sweater-and-with-windy-hair-running-on-sandy-beach-at-cold-sea-having-fun-stylish-young-happy-female-relaxing-and-enjoying-vacation-on-coast-back-view-EmvL4OW2dNI"
        alt="Woman spreading her arms"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5 text-4xl font-bold text-gray-800"> 
          I`m Husniye</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 ">
            I`m a software
            <TypeAnimation
              sequence={["Developer", 1000, "Coder", 1000, "Graphic Designer", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
              cursor={true}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
          <a href="https://github.com/tigerkaplan" target="_blank" rel="noopener noreferrer">
        <FaGithub className="cursor-pointer" size={30} />
      </a>
      
      <a href="https://www.linkedin.com/in/husniyeerparun" target="_blank" rel="noopener noreferrer">
        <AiOutlineLinkedin className="cursor-pointer" size={30} />
      </a>
      
      <a href="mailto:husniyeerparun@gmail.com">
        <AiOutlineMail className="cursor-pointer" size={30} />
      </a>
      
      <a href="https://www.google.com/maps/d/embed?mid=1fRjKMZuwjZ5IsMZEI1NZQK7XdB8&hl=en&ehbc=2E312F" width="640" height="480" target="_blank" rel="noopener noreferrer">
        <AiOutlineEnvironment className="cursor-pointer" size={30} />
      </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;