
import React, { useState } from "react";

import './App.css';



function ShoeUser({ user, shoe, review, handleDeleteReview, deleteUser, handleUserChange, setUser}) {
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState([]);
    const [shoe_review, setShoeReview] = useState("");
  

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
          }
          else {
            r.json().then((err) => setErrors(err.error));
          }
        });
      }
  
    console.log(review)
    let cool = user.shoes.map((u)=> <ul>{u.name}: ${u.price} <button onClick = {()=> handleDeleteShoe(u)}>Delete</button></ul>)
    console.log(review.filter((u)=> u.user_id === user.id))
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
        {username}
        <button type="submit">UserName</button>
      </form>
      <form onSubmit={handleUserChange}>
        <h1>Add A Review</h1>
        <label htmlFor="show_review">Username</label>
        <input
          type="dropdown"
          id="shoe_review"
          autoComplete="off"
          value={username}
          onChange={(e) => setShoeReview(e.target.value)}
        />
       <select name="selectList" id="selectList">
            {shoemapz}
   
        </select>
        <button type="submit">Review</button>
      </form>
      <form onSubmit={handleUserChange}>
        <h1>Add A Review</h1>
        <label htmlFor="show_review">Username</label>
        <input
          type="dropdown"
          id="shoe_review"
          autoComplete="off"
          value={username}
          onChange={(e) => setShoeReview(e.target.value)}
        />
       <select name="selectList" id="selectList">
            {shoemap}
   
        </select>
        <button type="submit">Review</button>
      </form>
</>

)
}

export default ShoeUser
