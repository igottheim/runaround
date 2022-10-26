import ShoeUser from "./ShoeUser"

function Home({ user, shoe, review, handleReviewDelete, deleteUser, setUser, setReview}) {


    if (user) {
      return <ShoeUser setReview = {setReview} user = {user} shoe = {shoe} review = {review} handleDeleteReview = {handleReviewDelete} deleteUser = {deleteUser} setUser = {setUser}></ShoeUser> 
    } else {
      return <h1>Please Login or Sign Up</h1>;
    }
  }
  
  export default Home;