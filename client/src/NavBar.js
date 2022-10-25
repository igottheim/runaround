import React from "react";
import { Link } from "react-router-dom";
import ShoeList from "./ShoeList";

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
        <Link to="/">Home</Link>
      </div>
      <div>
        {user ? (
            <>
          <button onClick={handleLogoutClick}>Logout</button>
          
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/shoe">Shoe List</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;