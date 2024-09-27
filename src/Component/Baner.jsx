import { PiArrowUpRightBold } from "react-icons/pi";

const Baner = () => {
    return (
        <div className="bg-[#dae0db]">
            <div className="flex justify-center">
        <img className="" src="https://i.postimg.cc/1XVVHhBv/banner.png" alt="" />
       </div>
       <h1 className="text-center text-6xl font-bold mt-5">A barn house of this design has a  <span className="mt-5"><br />striking appearance</span></h1>
       <p className="text-center mt-10 font-serif">The barn house captivates with its blend of rustic charm and modern sophistication, featuring weathered wood, sleek metal <br /> accents, and large windows that flood the space with natural light.</p>

      <a className="btn bg-[#ABEF5F] text-lg text-center font-bold hover:bg-orange-400 lg:ml-[850px] mt-7">View Details <span className="w-[19px] h-[20px] rounded-3xl bg-white"><PiArrowUpRightBold /></span>
       </a>
        </div>
    );
};

export default Baner;