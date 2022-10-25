import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import SignUp from "./Signup";
import ShoeUser from "./ShoeUser";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([])
  const [shoes, setShoes] = useState([])
  const [reviews, setReviews] = useState([])
  const [currentUser, setcurrentUser] = useState([])
  const [errors1, setErrors] = useState([])


// useEffect(() => {
//   fetch("/hello")
//   .then((r) => r.json())
//   .then((data) => setCount(data.count));
//   }, []);

useEffect(()=>{
  fetch('/users')
  .then(r=> r.json())
  .then(data => setUsers(data))
  }
  ,[])

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

  // function handleErrors(errors)
  // {

  //   setErrors(errors)
  //   console.log(errors1)
  // }

  if (errors1.length>0)
  {

    console.log(errors1)
  }

  return (
    <BrowserRouter>
      <div className="App">
      <NavBar user={currentUser} setUser={setUser} />
      <main>
        {currentUser ? (
          <Switch>
            <Route path="/">
              <Home user = {currentUser} shoe = {shoes}></Home>
            </Route>


          </Switch>
        ) : (
          <Switch>
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