import React from "react";
export default function ItamList(props){
    const addItamToCart=({target})=>{
        const itam=target.value;
        // console.log(" ",itam);
        props.onChange(itam);

    }
    return(
        <div className="vegis">
        {props.items.map((item, index) => (
            <button className="btn" value={item} key={index} onClick={addItamToCart}>
              {item}
            </button>
          ))}
        </div>   
    );
}