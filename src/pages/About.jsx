import { IoCloudDownloadOutline } from "react-icons/io5";

const PDF_FILE_URL = "http://localhost:5173/HusniyeErparun.pdf";

const About = () => {
  // Download CV
  const downloadFileAtURL = url => {
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <section>
      <div className="flex flex-col items-center h-screen relative">
        {/* -------------------background image ------------------------- */}
        <img
          className="w-full h-full object-cover object-left scale-x-[-1] absolute top-0 left-0"
          src="./bg1.jpg"
          alt="ebru"
        />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/60 flex flex-col items-center justify-center">
          <div>
            <h1 className="sm:text-5 text-5xl font-bold text-center text-gray-800">
              About Husniye
            </h1>
            <p className="text-2xl font-bold text-center">
              Experienced at Recruiting
            </p>
            <p className="text-xl font-bold text-center">
              Professional Newbee Front-End Developer
            </p>
            <p className="text-2xl font-bold text-center">Passionate learner</p>
          </div>

          {/* ----------------------- Download CV Button --------------------------*/}
          <span className="text-right">
            {" "}<p className="text-center">
              {" "}<br /> Download my CV{" "}
            </p>
          </span>
          <div className="flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover: scale-10 easy-in duration-200">
            <IoCloudDownloadOutline
              size={20}
              onClick={() => downloadFileAtURL(PDF_FILE_URL)}
            />
          </div>
          {/* ----------------------- Download CV Button --------------------------*/}
        </div>
        {/* -------------------background image ------------------------- */}
      </div>
    </section>
  );
};

export default About;
