import React from "react";
import { Link } from "react-router-dom";
import ShoeList from "./ShoeList";
import './App.css';


function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <div className = "div3">
        <Link class = "div1" to="/">Home</Link>
        
      </div>
      <div className = "div2">
        {user ? (
            <>
            <Link class = "div1" to="/shoe">Shoe List</Link>
          <button onClick={handleLogoutClick}>Logout</button>
          
          </>
        ) : (
          <>
            <Link class = "div1" to="/signup">Signup</Link>
            <Link class = "div1" to="/login">Login</Link>
            <Link class = "div1" to="/shoe">Shoe List</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;