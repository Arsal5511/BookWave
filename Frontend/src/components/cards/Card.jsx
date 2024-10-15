/* eslint-disable */

import React from "react";

function Card({item}) {
  console.log(item)
  return (
    <> 
       <div className="z-10">
      <div className="card bg-base-100 w-96 shadow-xl">
<div className="container">
          <img
            src={item.image}
            alt="book"
          />
</div>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{item.disc}.</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{item.price}</div>
            <div className={item.category == "free" ? "badge badge-success" : "badge badge-danger" }>{item.category}</div>
          </div>
        </div>
      </div>
    </div>   
    </>
    
  );
}

export default Card;
