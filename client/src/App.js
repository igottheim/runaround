import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import SignUp from "./Signup";
import ShoeList from "./ShoeList";

import './App.css';


function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([])
  const [shoes, setShoes] = useState([])
  const [reviews, setReviews] = useState([])
  const [currentUser, setcurrentUser] = useState(null)
  const [errors1, setErrors] = useState([])



useEffect(() => {
  // auto-login
  fetch("/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setcurrentUser(user));
    }
  });
}, []);


useEffect(()=>{
  fetch('/shoes')
  .then(r=> r.json())
  .then(data => setShoes(data))
  }
  ,[])


useEffect(()=>{
  fetch('/reviews')
  .then(r=> r.json())
  .then(data => setReviews(data))
  }
  ,[])


  function setUser(user)
  {

    setcurrentUser(user)

  }


  if (errors1.length>0)
  {

    console.log(errors1)
  }

  function setReview(e)
  {
   setReviews([...reviews, e])
   console.log(e)
   
  }


  function setShoes1(e)
  {

    setShoes([...shoes, e])
  }

  function handleDeleteReview(e)
  {
    console.log(e)
    console.log(reviews)
      setReviews(reviews.filter((item)=> item.id!== e.id))
      
  }

  function deleteUser(e)
  {
    console.log(e.id)
    fetch(`/users/${e.id}`,
        {method:"DELETE"
        })
        .then((r) => r.json())
        .then(() => setcurrentUser(null))
  }


 
  // console.log(reviews)
  // console.log(shoes)
  console.log(currentUser)
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar user={currentUser} setUser={setUser} />
      <main>
        {currentUser ? (
          <Switch>
            <Route path="/">
              <Home user = {currentUser} shoe = {shoes} review = {reviews} handleDeleteReview= {handleDeleteReview} deleteUser = {deleteUser} setReview = {setReview} ></Home>
            </Route>
          </Switch>
        ) : (
          <Switch>
             <Route path="/shoe">
             <ShoeList shoe = {shoes} setShoes = {setShoes1}/>
            </Route>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <LoginForm setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </main>
    
      </div>
    </BrowserRouter>
  );
}

export default App;