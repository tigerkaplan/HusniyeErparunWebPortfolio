import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

const PDF_FILE_URL = "http://localhost:5173/HusniyeErparun.pdf";

const About = () => {
  // Download CV
  const downloadFileAtURL = (url) => {
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div>
      <h1>Welcome to my home page</h1>
      <p>This is some content.</p>

      {/* Download CV Button */}
      <div className="flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover: scale-115 easy-in duration-200">
        <IoCloudDownloadOutline  size={20} onClick={() => downloadFileAtURL(PDF_FILE_URL)} />
      </div>
    </div>
  );
};

export default About;
