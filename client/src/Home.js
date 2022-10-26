import ShoeUser from "./ShoeUser"

function Home({ user, shoe, review, handleDeleteReviews, setcurrentUser, setUser, setReview}) {


    if (user) {
      return <ShoeUser setReview = {setReview} user = {user} shoe = {shoe} review = {review} handleDeleteReviews = {handleDeleteReviews} setcurrentUser = {setcurrentUser} setUser = {setUser} ></ShoeUser> 
    } else {
      return <h1>Please Login or Sign Up</h1>;
    }
  }
  
  export default Home;