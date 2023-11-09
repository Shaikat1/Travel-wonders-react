import Banner from "../../Components/Banner.jsx/Banner";
import Gallery from "../../Components/Gallery/Gallery";
// import Pricing from "../../Components/Pricing/Pricing";
import Services from "../../Components/Services/Services";
// import Team from "../../Components/Team/Team";

const Home = () => {
    return (
        <div>
            <div className="mb-10">
                <Banner></Banner>
            </div>
            <div>
                <Services></Services>
            </div>
            <div>
                {/* <Team></Team> */}
            </div>

            <div>
                <Gallery></Gallery>
            </div>
            <div>
                {/* <Pricing></Pricing> */}
            </div>
        </div>
    );
};

export default Home;