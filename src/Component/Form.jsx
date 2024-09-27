

const Form = () => {
    return (
        <div className="bg-[url('https://i.postimg.cc/yxJv9dhT/bg.jpg')]">
            <button className="flex justify-center lg:ml-[820px] font-bold mt-14 relative top-5 bg-[#ABEF5F] p-1 w-[250px] h-8 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
                Let's Connect</button>
            <h1 className="text-center text-5xl font-bold mt-10">Let’s Discuss Next</h1>
            <p className="text-center mt-4">The barn house captivates with its blend of rustic charm and modern sophistication,<br /> featuring weathered wood, sleek metal accents.</p>


            <div className="container mx-auto" >
                <form action="">
                    <div className="flex gap-4 justify-center mt-8">
                        <div><input type="text" placeholder="Frist Name*" className="input input-bordered rounded-xl w-[450px]" /></div>
                        <div><input type="text" placeholder="Last Name*" className="input input-bordered rounded-xl w-[450px]" /></div>

                    </div>
                </form>
            </div>
            <div className="container mx-auto" >
                <form action="">
                    <div className="flex gap-4 justify-center mt-8">
                        <div><input type="text" placeholder="Phone Number*" className="input input-bordered rounded-xl  w-[450px]" /></div>
                        <div><input type="text" placeholder="Email Number*" className="input input-bordered rounded-xl  w-[450px]" /></div>

                    </div>
                </form>
            </div>

            <div className="container mx-auto mt-5 flex justify-center " >
               
                <div><input type="text" placeholder="Write Your Massage here*" className="input input-bordered pt-1 rounded-xl  lg:w-[900px] lg:h-[200px]" /></div>
                
            </div>

            <div className="flex justify-center">

                <button className="w-[900px] bg-[#ABEF5F] text-lg font-bold p-2 rounded-2xl mt-3 mb-12">Send Mail</button>
                </div>

        </div>
    );
};

export default Form;