

const Workpleace = () => {
    return (
        <div className="mt-28">
            <button className="flex justify-center lg:ml-[900px] font-bold mt-4 bg-white w-36 h-8 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
                How He works</button>
            <h1 className="text-center text-5xl font-bold mt-3">Our Work Process</h1>
            <p className="text-center mt-4">The barn house captivates with its blend of rustic charm and modern sophistication,<br /> featuring weathered wood, sleek metal accents.</p>

            <div className="flex justify-evenly container mx-auto">
                <div className="w-[275px] h-[200px] bg-[#E7C1D3] rounded-xl p-5 mt-8 mb-28">
                    <img src="https://i.postimg.cc/2y13Dqhh/concept.png" alt="" />
                    <h1 className="text-xl font-bold mt-1">Concept</h1>
                    <p className="mt-2">The barn house captivates with its blend of rustic charm and modern.</p>
                </div>
                <div className="w-[275px] h-[200px] bg-[#EFDA6E] rounded-xl p-5 mt-8">
                    <img src="https://i.postimg.cc/B6H7ZtHc/flow-chart-1.png" alt="" />
                    <h1 className="text-xl font-bold mt-1">Design Process</h1>
                    <p className="mt-2">The barn house captivates with its blend of rustic charm and modern.</p>
                </div>
                <div className="w-[275px] h-[200px] bg-[#A4DAC3] rounded-xl p-5 mt-8">
                    <img src="https://i.postimg.cc/D0fQVzgz/budget-planning.png" alt="" />
                    <h1 className="text-xl font-bold mt-1">Supervision</h1>
                    <p className="mt-2">The barn house captivates with its blend of rustic charm and modern.</p>
                </div>
                <div className="w-[275px] h-[200px] bg-[#77AAEA] rounded-xl p-5 mt-8">
                    <img src="https://i.postimg.cc/Y9RgxHHB/vision.png" alt="" />
                    <h1 className="text-xl font-bold mt-1">Budget Planning</h1>
                    <p className="mt-2">The barn house captivates with its blend of rustic charm and modern.</p>
                </div>

            </div>

        </div>
    );
};

export default Workpleace;