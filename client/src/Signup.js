import React, { useState, } from "react";

function SignUp({ setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        first_name,
        last_name,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
         <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          autoComplete="off"
        />
         <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;