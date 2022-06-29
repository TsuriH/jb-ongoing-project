import { useState } from "react";
import "./BestSeller.css";

function BestSeller(): JSX.Element {

    const [bestSellerName, setBestSellerName] = useState<string>()
    const [bestSellerItems, setBestSellerItems] = useState<number>()


    function showBestSeller(): void {
        setBestSellerName("Exotic Liquids")
        setBestSellerItems (17);
    }

    return (
        <div className="BestSeller Box">
            <button onClick={showBestSeller}>Show Best Seller</button>
			<span>Best Seller Name: {bestSellerName}, Total Items: {bestSellerItems}</span>
        </div>
    );
}

export default BestSeller;
