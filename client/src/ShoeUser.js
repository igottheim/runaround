
import React, { useState } from "react";

import './App.css';



function ShoeUser({ user, shoe, review, handleDeleteReview, deleteUser, handleUserChange, setUser, setReview}) {
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState([]);
    const [shoe_review, setShoeReview] = useState("");
    const [name, setShoeName] = useState("");
  

    function handleDeleteReview(e)
    {
        fetch(`/reviews/${e.id}`,
        {method:"DELETE"
        }).then((r) => r.json()).then((user) => handleDeleteReview(user))
    }


    function handleDeleteShoe(e)
    {
        console.log(e)
    }

    function handleUserChange(e) {
        e.preventDefault();
       
        fetch(`/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user))
            alert(`Username Changed to ${username}!`)
          }
          else {
            r.json().then((err) => setErrors(err.error));
          }
        });
      }

      
      function handleUserAddReview(e) {
        e.preventDefault();
        // console.log(e.target[0].value)
        // console.log(e.target[1].value)
        // console.log(user.id)
        fetch(`/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "shoe_id":e.target[0].value ,
            "user_id": user.id,
            "shoe_review":e.target[1].value
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then(() => setReview({
              "shoe_id":parseInt(e.target[0].value) ,
              "user_id": user.id,
              "shoe_review":e.target[1].value
            }))
            alert(`Review Added!`)
          }
          else {
            r.json().then((err) => setErrors(err.error));
          }
        });
      }
  
    // console.log(review)
    let cool = user.shoes.map((u)=> <ul>{u.name}: ${u.price} <button onClick = {()=> handleDeleteShoe(u)}>Delete</button></ul>)
    // console.log(review.filter((u)=> u.user_id === user.id))
    let cool2 = user.reviews.map((u)=> <ul> {u.shoe_review} <button onClick = {()=> handleDeleteReview(u)}>Delete</button></ul>)
    
    
    let shoemap = user.shoes.map((item)=> <option value={item.id}>{item.name}</option> )
    let shoemapz = shoe.map((item)=> <option value={item.id}>{item.name}</option> )
    

return (
    <>
<ol>{user.first_name}'s Shoes
    {cool}
</ol>
<ol> {user.first_name}'s Reviews
    {cool2}</ol>

    <button onClick = {()=>deleteUser(user)} >Delete User</button>
    <form onSubmit={handleUserChange}>
        <h1>Change Your Username!</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">UserName</button>
      </form>
      <form onSubmit={handleUserAddReview}>
        <h1>Add a Shoe And Review to Your List!</h1>
        <label htmlFor="name">Shoe</label>
       <select name="selectList" id="selectList"
        autoComplete="off"
        value={name}
        onChange={(e) => setShoeName(e.target.value)}>
            {shoemapz}
        </select>
        <label htmlFor="shoe_review">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={shoe_review}
          onChange={(e) => setShoeReview(e.target.value)}
        />
        
        <button type="submit">Review</button>
      </form>
</>

)
}

export default ShoeUser
