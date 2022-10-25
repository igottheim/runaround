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


// useEffect(()=>{
//   fetch('/reviews')
//   .then(r=> r.json())
//   .then(data => setReviews(data))
//   }
//   ,[])


  function setUser(user)
  {

    setcurrentUser(user)

  }

  // function handleErrors(errors)
  // {

  //   setErrors(errors)
  //   console.log(errors1)
  // }

  if (errors1.length>0)
  {

    console.log(errors1)
  }


  function handleDeleteReview(e)
  {
      setReviews(reviews.filter((item)=> item.id!== e.id))
  }

  function deleteUser(e)
  {
    
    fetch(`/users/${e.id}`,
        {method:"DELETE"
        }).then((r) => r.json()).then(() => setcurrentUser(null))
  }

  console.log(currentUser)
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar user={currentUser} setUser={setUser} />
      <main>
        {currentUser ? (
          <Switch>
            <Route path="/">
              <Home user = {currentUser} shoe = {shoes} review = {reviews} handleReviewDelete= {handleDeleteReview} deleteUser = {deleteUser}></Home>
            </Route>
          </Switch>
        ) : (
          <Switch>
             <Route path="/shoe">
             <ShoeList shoe = {shoes} setShoes = {(e)=>setShoes(...e)}/>
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