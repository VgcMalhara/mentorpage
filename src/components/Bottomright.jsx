import collage1 from '../assets/collage1.png';
import collage2 from '../assets/collage2.png';
import collage3 from '../assets/collage3.png';
import collage4 from '../assets/collage4.png';
import collage5 from '../assets/collage5.png';
import collage6 from '../assets/collage6.png';
import collage7 from '../assets/collage7.png';
import Tags from '../assets/Tags.png';
import Card from './Card';

const Bottomright = () => {
  return (
    <div className="flex flex-col mx-auto bg-cover items-center">
      {/* First Row */}
      <div className="flex flex-row  w-full sr-only md:not-sr-only">
        <Card imgSrc={collage1} label="collage1" className="w-full max-w-md " />
      </div>

      {/* Second Row */}
      <div className="flex flex-row flex-wrap sm:w-full">
        {/* Left Column */}
        <div className="flex flex-col w-full sr-only md:not-sr-only sm:w-auto">
          <Card imgSrc={collage2} label="collage2" className="w-full sm:w-auto" />
          <Card imgSrc={collage3} label="collage3" className="w-full sm:w-auto" />
        </div>

        {/* Middle Column */}
        <div className="flex flex-col w-full sm:w-auto">
          <Card imgSrc={collage4} label="collage4" className="w-full sm:w-auto" />
          <div className="flex flex-row justify-between">
            <Card imgSrc={collage5} label="collage5" className="w-full sm:w-auto" />
            <div className="flex flex-col sm:gap-0">
              <Card imgSrc={collage6} label="collage6" className="w-full sm:w-auto" />
              <Card imgSrc={collage7} label="collage7" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Tags Image */}
      <div className="z-40 absolute ml-28 hidden md:block">
        <Card imgSrc={Tags} label="Tags" width="339px" height="720px" className="max-w-full sm:max-w-lg" />
      </div>
    </div>
  );
};

export default Bottomright;
