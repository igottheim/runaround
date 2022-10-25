function Home({ user, shoe, review }) {
    
   
    
    if (user) {
        console.log(shoe)
        console.log(user.shoes)
      return <h1>Welcome, {user.username}!</h1>;
    } else {
      return <h1>Please Login or Sign Up</h1>;
    }
  }
  
  export default Home;