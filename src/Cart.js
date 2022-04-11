import React, { useState } from "react";
import ItamList from "./ItamList";
import { produce,pantryItems} from "./StoreItams";
import './Cart.css';


export default function Cart(){
const [cartItems, setCartItems]=useState([]);

    const addItem=(itam)=>{
        // console.log("inside the Cart.js itam is ",itam);
        setCartItems((prev)=>{
            return [itam, ...prev];
        })
        // console.log(cartItems);
    }

    const removeItem=(targetIndex)=>{
        console.log("Hiii");
        setCartItems((prev) => {
            return prev.filter((item, index) => index !== targetIndex);
          });   
    }

    return(
        <div className="container">
             <h1>Your Cart</h1>
             <ul>
             {cartItems.map((item,index)=>(
                 <li key={index} onClick={()=>removeItem(index)}>
                     {item}
                </li>
             ))}
             </ul>
             <div>
            <h1>Vegetables</h1>
            <ItamList items={produce} onChange={addItem}/>
            </div>
            <h1>Pantry Items</h1>
            <ItamList items={pantryItems} onChange={addItem}/>
        </div>
    );

}