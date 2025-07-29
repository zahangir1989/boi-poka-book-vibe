import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>book-poka || Home</title>
            </Helmet>
           <Banner></Banner> 
           <Books></Books>           
        </div>
    );
};

export default Home;