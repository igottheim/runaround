
import React, { useState } from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

import './App.css';



function ShoeUser({ user, shoe, review, handleDeleteReviews,setcurrentUser, handleUserChange, setUser, setReview}) {
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState([]);
    const [shoe_review, setShoeReview] = useState("");
    const [name, setShoeName] = useState("");
  

    function handleDeleteReview(e)
    {
      // console.log(e)
        fetch(`/reviews/${e.id}`,
        {method:"DELETE"
        })

        handleDeleteReviews(e)
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

      function deleteUser(e)
      {
        console.log(e)
        fetch(`/users/${e.id}`,
            {
              method: "DELETE"
            })
           
         setcurrentUser(null)
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
            r.json().then((e) => setReview(e))
            alert(`Review Added!`)
          }
          else {
            r.json().then((err) => setErrors(err.error));
          }
        });
      }
  
    let cool3 = review.filter((item)=> item.user_id === user.id).map((u)=> <ul class = "cool" key ={u.shoe_review}> {u.shoe.name}: {u.shoe_review} <button onClick = {()=> handleDeleteReview(u)}>Delete</button></ul>)

    
  // console.log(user.shoes.map((item)=> <option value={item.id}>{item.name}</option> ))
    let shoemapz = shoe.map((item)=> <option value={item.id}>{item.name}</option> )
    

return (
    <>
<ol> {user.username}'s Reviews
    {cool3}</ol>

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
      <form onSubmit={(e)=> handleUserAddReview(e)}>
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
