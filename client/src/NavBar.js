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
    <header  >
      <div >
        {user ? (
            <>
            <Link className = "div2" to="/">User Information</Link>
            <Link className = "div1" to="/shoe">Shoe List</Link>
          <button className = "div1" onClick={handleLogoutClick}>Logout</button>
          
          </>
        ) : (
          <>
          <Link className = "div5" to="/">Home</Link>
            <Link className = "div5" to="/signup">Signup</Link>
            <Link className = "div5" to="/login">Login</Link>
            <Link className = "div5" to="/shoe">Shoe List</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;