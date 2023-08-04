import React from 'react'
import './student.css';


const Student = () => {
  return (
    <div class="studentlog">
    <h1 class ="login">Student Login</h1>
    <div>
        <form class='form'>
            <label>First Name : </label>
            <input type="text" required></input><br></br><br></br>
            <label>Last Name : </label>
            <input type="text" required></input><br></br><br></br>
            <label>Email : </label>
            <input type="mail" required></input><br></br><br></br>
            <label>Phone No. : </label>
            <input type="number"></input><br></br><br></br> 
            <label>Password : </label>
            <input type="password"></input> <br></br><br></br>      
            <button>Login</button>     
        </form>
    </div>

    </div>
  )
}

export default Student