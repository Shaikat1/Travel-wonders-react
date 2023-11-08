import Banner from "../../Components/Banner.jsx/Banner";
import Services from "../../Components/Services/Services";

const Home = () => {
    return (
        <div>
            <div className="mb-10">
                <Banner></Banner>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;