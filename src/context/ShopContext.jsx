import React, { createContext, useEffect, useState } from "react";
//import all_product from "../components/Assets/all_product"; // Ensure the path is correct

export const ShopContext = createContext(null);

// Function to initialize the cart with default values
const getDefaultCart = () => {
    let cart = {};
    // Loop through the array of products to initialize the cart
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0; // Use product IDs as keys
    }
    return cart;
};


const ShopContextProvider = (props) => {
    const[all_product, setAll_product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch("http://localhost:4000/allproducts")
        .then((response)=> response.json())
        .then((data) => {setAll_product(data)});
    },[])

    // Function to add items to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1,
        }));
        console.log("Item added to cart:", itemId);
    };

    // Function to calculate the total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount; // Return total amount after the loop finishes
    };

    // Function to remove items from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max(prev[itemId] - 1, 0), // Ensure quantity doesn't go negative
        }));
    };

    // Function to calculate the total number of items in the cart
    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems; // Return total items after the loop finishes
    };

    // Context value that will be passed to children components
    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product, // Product list
        cartItems, // Current cart state
        addToCart, // Function to add to cart
        removeFromCart, // Function to remove from cart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
