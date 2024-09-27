

const MidBaner = () => {
    return (
        <div className=" mt-20  bg-[#dae0db]">
            <div className="flex justify-evenly container mx-auto mt-10">
                <div className="mt-10">
                    <img src="https://i.postimg.cc/bwvf50RC/Vector.png" alt="" />
                    <button className="w-28 h-8 rounded-xl  bg-white mt-2">About Us</button>
                    <h1 className="text-5xl font-bold font-manrope mt-4">We design thoughtful, <br /> liveable spaces</h1>
                    <p className="mt-5">The barn house captivates with its blend of rustic charm and <br /> modern sophistication, featuring weathered wood, sleek metal accents.</p>
                    <div className="w-[600px] h-[120px] bg-white rounded-xl mt-4">
                        <div className="flex p-5 gap-4">
                            <div>
                                <img src="https://i.postimg.cc/d0qkpxfM/commercial.png" alt="" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold">Commercial</h1>
                                <p>The barn house captivates with its blend of rustic charm and modern.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[600px] h-[120px] bg-white rounded-xl mt-4">
                        <div className="flex p-5 gap-4">
                            <div>
                                <img src="https://i.postimg.cc/htCQFrRf/residential.png" alt="" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold">Residential</h1>
                                <p>The barn house captivates with its blend of rustic charm and modern.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <img src="https://i.postimg.cc/nzrShkdX/Rectangle.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MidBaner;