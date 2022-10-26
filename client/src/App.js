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


  function setReview(e)
  {
   setReviews([...reviews, e])
   console.log(e)
  //  console.log(reviews)
   
  }



  function setShoes1(e)
  {

    setShoes([...shoes, e])
  }

  function handleDeleteReviews(e)
  {
    
    setReviews(reviews.filter((item)=> item.id!== e.id))
      
  }

  function setcurrentUser1(e)
  {
    setcurrentUser(null)
  
  }

  function setUser1(e)
  {
    setcurrentUser(e)
  }

 console.log(currentUser)
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
              <Home user = {currentUser} shoe = {shoes} review = {reviews} handleDeleteReviews= {handleDeleteReviews} setcurrentUser = {setcurrentUser1} setReview = {setReview} setUser = {setUser1} ></Home>
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