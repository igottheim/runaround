
import React, { useState } from "react";

function ShoeList({shoe, setShoes}) {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const [price, setPrice] = useState("");
    const [image_url, setImageUrl] = useState("");

let shoes = shoe.map((i)=> <h1> Name:{i.name} Price: ${i.price} <img className = "image" src = {i.image_url}></img> </h1>)
 


function handleSubmit(e) {
    e.preventDefault();
    fetch("/shoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, image_url }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setShoes([shoe, {
            name: name,
            price: price,
            image_url: image_url
        }]));
      }
      else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

return(

    <div> {shoes}
    
    
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add A New Shoe</h1>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          autoComplete="off"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
         <label htmlFor="image_url">Image Url</label>
        <input
          type="text"
          id="image_url"
          autoComplete="off"
          value={image_url}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Submit Shoe</button>
      </form>
      {errors.map((err) => (
          <h1 key={err}>{err}</h1>
        ))}
    </div>

    </div>



 )


  }
  
 
export default ShoeList