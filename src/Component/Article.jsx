

const Article = () => {
    return (
        <div className="bg-[#dae0db]">
              <button className="flex justify-center  lg:ml-[820px] font-bold mt-20 relative top-11 bg-[#ABEF5F] p-1 w-[250px] h-8 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
               Rentrio News</button>
            <h1 className="text-center text-5xl font-bold lg:mt-20">Read Our Articles and News</h1>
            <p className="text-center mt-4">The barn house captivates with its blend of rustic charm and modern sophistication,<br /> featuring weathered wood, sleek metal accents.</p>


<div>
    <div className="flex justify-center gap-6 mt-6 ">
    <div className="card bg-base-100 w-96 shadow-xl mb-20">
  <figure className="px-10 pt-10">
    <img
      src="https://i.postimg.cc/wTktKsty/article1.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">

    <h2 className="card-title">How to choose the furniture right of your home.</h2>
    <p className="">The barn house captivates with its blend of rustic charm and modern.</p>
    <div className="card-actions">
      <button className="btn btn-success mt-2">Read More</button>
    </div>
  </div>
</div>
    <div className="card bg-base-100 w-96 shadow-xl  mb-20">
  <figure className="px-10 pt-10">
    <img
      src="https://i.postimg.cc/d0601MTh/article3.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">How to choose the furniture right of your home.</h2>
    <p className="">The barn house captivates with its blend of rustic charm and modern.</p>
    <div className="card-actions">
      <button className="btn btn-success mt-2">Read More</button>
    </div>
  </div>
</div>
    <div className="card bg-base-100 w-96 shadow-xl  mb-20">
  <figure className="px-10 pt-10">
    <img
      src="https://i.postimg.cc/L8d5Q3p8/article2.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">How to choose the furniture right of your home.</h2>
    <p className="">The barn house captivates with its blend of rustic charm and modern.</p>
    <div className="card-actions">
      <button className="btn btn-success mt-2">Read More</button>
    </div>
  </div>
</div>
    </div>
</div>

        </div>
    );
};

export default Article;