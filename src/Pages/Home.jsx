import Article from "../Component/Article";
import Baner from "../Component/Baner";
import Counter from "../Component/Counter";
import MidBaner from "../Component/MidBaner";
import Portfplio from "../Component/Portfplio";



const Home = () => {
    return (
        <div className="">
       <Baner></Baner>
       <MidBaner></MidBaner>
       <Counter></Counter>
       <Portfplio></Portfplio>
       <Article></Article>
     
        </div>
    );
};

export default Home;