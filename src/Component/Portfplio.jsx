


const Portfplio = () => {
    return (
        <div>
            <button className="flex justify-center lg:ml-[820px] font-bold mt-14 bg-[#ABEF5F] p-1 w-[250px] h-8 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
                Explore Our Leatest Work</button>
            <h1 className="text-center text-5xl font-bold mt-6">Our Latest Portfolio</h1>
            <p className="text-center mt-4">The barn house captivates with its blend of rustic charm and modern sophistication,<br /> featuring weathered wood, sleek metal accents.</p>


            <div className="flex container mx-auto gap-8 items-center justify-center mt-14">
                <div>
                    <div className="flex gap-5 border-2 border-gray-300 rounded-xl p-5 shadow-2xl">
                        <div> <img src="https://i.postimg.cc/Pqwzk9nB/img1.png" alt="" /></div>

                        <div>  <h1 className="text-xl font-bold ">Commercial</h1>
                            <p className="w-[400px] mt-3">The barn house captivates with its blend of rustic charm <br /> and modern. The barn house captivates with its blend of <br /> rustic charm and modern .</p>
                            <button className=" mt-5  font-bold hover:bg-green-600 rounded-xl p-2 border-2 border-orange-400 shadow-2xl">View Details
                            </button></div>
                    </div>
                </div>

                <div className="border-2 border-gray-300 rounded-xl p-5 shadow-2xl">
                    <img src="https://i.postimg.cc/HLg4d3Wn/img2.png" alt="" />
                </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
               
            <div className="border-2 border-gray-300 rounded-xl p-5 shadow-2xl">
                    <img src="https://i.postimg.cc/fR65dXBq/img3.png" alt="" />
                </div>
                <div className="flex gap-5 border-2 border-gray-300 rounded-xl p-5 shadow-2xl">
                        <div> <img src="https://i.postimg.cc/QCxqDqdC/img4.png" alt="" /></div>

                        <div>  <h1 className="text-xl font-bold ">Commercial</h1>
                            <p className="w-[400px] mt-3">The barn house captivates with its blend of rustic charm <br /> and modern. The barn house captivates with its blend of <br /> rustic charm and modern .</p>
                            <button className=" mt-5  font-bold hover:bg-green-600 rounded-xl p-2 border-2 border-orange-400 shadow-2xl">View Details
                            </button></div>
                    </div>
                
                <div className="border-2 border-gray-300 rounded-xl p-5 shadow-2xl">
                    <img src="https://i.postimg.cc/c4vQcCKp/img5.png" alt="" />
                </div>

            </div>


        </div>
    );
};

export default Portfplio;