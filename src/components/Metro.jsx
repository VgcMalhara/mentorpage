import star from "../assets/star.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import Card from "./Card";

const Metro = () => {
  return (
<div className="grid lg:grid-cols-2 grid-cols-1  bg-white max-w-7xl mx-auto border-2 border-black border-t-0 ">

      {/* Left Section */}
      <div className="w-full lg:flex items-center border-black p-6 border-r-0 lg:border-r-2">
        <div className="flex flex-col mx-auto ml-5 sm:justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Learn from experts
            <br /> Grow your career
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-4">
            Unlock your potential with guidance from industry leaders. Our mentors are here to help you achieve your career goals and take the next step toward success.
          </p>
          <button className="bg-gray-800  text-white text-[22px] hover:text-black py-2 px-4  hover:bg-gray-300 mt-[24px] rounded-[40px] shadow-[6px_6px_0px_#000] w-1/2">Explore our mentors</button>


          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6 w-5/6 rounded-lg border  border-gray-800  mt-8 p-4">
            {[
              { value: "34+", text: "Expert mentors ready to help you succeed." },
              { value: "245K", text: "Success stories from our community." },
              { value: "15+", text: "Years of experience in career growth." },
              { value: "4.89", text: "Average mentor rating for quality guidance." }
            ].map((item, index) => (
              <div key={index} className="p-4 text-center">
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-gray-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap lg:flex-nowrap mx-auto justify-center gap-6">
        <div className="flex flex-col  justify-between">
          <div className="mx-auto h-full">
            <Card imgSrc={star} label="branding" width="248px" height="240px" className="" />
          </div>
          <Card imgSrc={photo1} label="image1" />
        </div>
        <div className="flex flex-col gap-6 justify-between lg:h-full">
          <Card imgSrc={photo2} label="image2" />
          <Card imgSrc={photo3} label="image3" />
          <Card imgSrc={photo4} label="image4" />
        </div>
      </div>
    </div>
  );
};

export default Metro;
