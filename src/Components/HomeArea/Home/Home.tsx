import BestSeller from "../BestSeller/BestSeller";
import Sale from "../Sale/Sale";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
			<Sale category="beverages" percent={10} />
			<Sale category="candies" percent={20} />
            <BestSeller />
        </div>
    );
}

export default Home;
