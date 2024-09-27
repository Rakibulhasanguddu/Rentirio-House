import CountUp from 'react-countup';
import Workpleace from './Workpleace';

const Counter = () => {
    return (
        <div className="bg-[#dae0db]">
            <div className="container mx-auto   ">
                <div className=" ">
                    <div className="flex justify-evenly w-[1500px] h-[180px] bg-white rounded-xl relative top-14  pt-5">
                        <div>
                            <img className="lg:ml-14" src="https://i.postimg.cc/ZRXDwp5Q/sms.png" alt="" />
                            <h1 className="text-center text-3xl font-bold mt-2"> <CountUp duration={10.75} end={235} />+</h1>
                            <h1 className="mt-2 font-semibold">Happy Client Review</h1>
                        </div>
                        <div>
                            <img className="lg:ml-12" src="https://i.postimg.cc/8k9jb5Br/departement.png" alt="" />
                            <h1 className="text-center text-3xl font-bold mt-2"> <CountUp duration={10.75} end={50} />+</h1>
                            <h1 className="mt-2 font-semibold">Work Depertment</h1>
                        </div>
                        <div>
                            <img className="lg:ml-12" src="https://i.postimg.cc/pXjycHqc/user-group.png" alt="" />
                            <h1 className="text-center text-3xl font-bold mt-2"> <CountUp duration={10.75} end={30} />K+</h1>
                            <h1 className="mt-2 font-semibold">Our Happy Client </h1>
                        </div>
                        <div>
                            <img className="lg:ml-11" src="https://i.postimg.cc/SxpRwvPS/user-multiple.png" alt="" />
                            <h1 className="text-center text-3xl font-bold mt-2"> <CountUp duration={10.75} end={300} />+</h1>
                            <h1 className="mt-2 font-semibold">Our Member Staff</h1>
                        </div>
                       
                      
                    </div>
                </div>
            </div>
            <Workpleace></Workpleace>
        </div>
    );
};

export default Counter;