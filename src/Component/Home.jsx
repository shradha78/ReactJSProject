import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function () {
  const navigate = useNavigate();
  function login(){
    navigate(login)
  }
  function signup(){
    navigate(signup)
  }
  
    
  
  return (
    <div >
       <div><NavLink  className="justify-content-end"  styles={{padding : "30px"}} to= "/login"><img src="https://www.linkpicture.com/q/Add-a-subheading.jpg"
      style = {{width : "300px" ,height : "300px", padding : "80px"}} title = "Click here to login"/></NavLink>
      
       <NavLink  className="justify-content-end"  styles={{ padding : "30px"}} to= "/signup"><img src="https://www.linkpicture.com/q/Add-a-subheading_6.png"
      style = {{width : "300px" ,height : "300px", padding : "80px"}} title = "New User ? SignUp"/></NavLink>
        </div>
    </div>
  )
}
