import React from "react";
import "../Pages/shop.css";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <>
      <div className="shop_main">
        <h3 className="ourshop">Our Shop</h3>
        <div class="breadcrumb">
          <span className="home">
            {" "}
            <Link to="/" className="color">
              Home
            </Link>{" "}
            &gt; Our Shop
          </span>
        </div>
      </div>

      <div className="shop_button">
        <button className="regular">SHOW ALL</button>
        <button className="regular">ADVENTURE</button>
        <button className="regular">STRATEGY</button>
        <button className="regular">RACING</button>
      </div>
    </>
  );
}

export default Shop;
