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
      <div>
        <Link class = "link" to="/">Home</Link>
      </div>
      <div>
        {user ? (
            <>
          <button onClick={handleLogoutClick}>Logout</button>
          
          </>
        ) : (
          <>
            <Link class = "link" to="/signup">Signup</Link>
            <Link class = "link" to="/login">Login</Link>
            <Link class = "link" to="/shoe">Shoe List</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;