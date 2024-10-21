import React, { useContext } from "react";
import "./Css/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category container"> {/* Added container class */}
      <img className="shopcategory-banner" src={props.banner} alt="" />

      <div className="Shopcategory-indexSort">
        <p>
          <span> showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          <button className="sort-btn">
            Sort By
            <img src={dropdown_icon} alt="Sort icon" />
          </button>
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        <button className="loadmore-btn">Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
