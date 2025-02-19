import rainbow from '../assets/Rainbow.png';
import Card from './Card';
import logo from '../assets/logo.png';

const Bottomleft = () => {
  return (
    <div className="flex flex-col items-start max-w-[90%] sm:max-w-lg mx-auto">
      {/* Rainbow Logo */}
      <Card imgSrc={rainbow} label="rainbow" width="176px" height="88px" />

      {/* Title */}
      <h2 className="mt-10 text-3xl sm:text-5xl font-bold">
        Bring your<br />community together
      </h2>

      {/* Description */}
      <p className="mt-8 text-lg sm:text-xl text-gray-600">
        Join a supportive network that empowers you to achieve your goals.
      </p>

      {/* Get Started Button */}
      <button className="min-w-[166px] px-6 py-3 rounded-[40px] bg-black text-white text-lg sm:text-xl mt-16 shadow-lg hover:bg-gray-800">
        Get started
      </button>

      {/* Testimonial Box */}
      <div className="max-w-lg w-full border-2 flex justify-center items-center shadow-[4px_4px_10px_#333333] mt-24 p-6">
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <p className="text-sm sm:text-base">
            “We’ve built a platform dedicated to empowering individuals through mentorship and community. Inspired by timeless wisdom and modern innovation, we connect people, foster growth, and transform careers. Join us to be part of a legacy that values knowledge, collaboration, and success.”
          </p>
        </div>
      </div>

      {/* Social Media Logo */}
      <div className="mt-32 mb-28">
        <Card imgSrc={logo} label="socialmedia" width="176px" height="32px" />
      </div>
    </div>
  );
};

export default Bottomleft;
