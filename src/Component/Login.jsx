import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const navigate = useNavigate();
  function mainNavi(){
      navigate('mainNavi');
  }
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const areAllFieldsFilled = (email != "") && (password != "") ;
  
  return (
    <>
    <div  style={{backgroundimage : `url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")`}}>
     
      <div className ="mask d-flex align-items-center h-500 gradient-custom-5" style = {{width: "100%",  height: "100%",backgroundimage : `url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")`}} >
      <div className ="container h-100" style = {{width: "100%",  height: "100%"}} >
          <div className ="row d-flex justify-content-center align-items-center h-100" style = {{width: "100%",  height: "100%"}} >
          <div className="col-50 col-md-50 col-lg-50 col-xl-50" style = {{width: "100%",  height: "100%"}} >
          <div className="card-body p-5" style = {{width: "100%",  height: "100%"}} >
              <div className ="card text-dark bg-light bg-gradient mb-3" style={{borderradius: "70em",width: "100%",  height: "100%"}}>
              <a href="/" ><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTABoU7Fx-KRY4bpQHvQ63LPfmkHA6Xpd4A&usqp=CAU" 
                  style= {{width : "150px" , height : "150px",padding :"3px" }} title = "Home" /></a>
                  <h2 className ="text-uppercase text-center mb-4" style = {{width: "750px",  height: "100px", textAlign : "justify",}} > Login
                 </h2>
    
                  <form style = {{padding : "10px"}}  >
                    <div className ="form-outline mb-4">
                      <input type="email" id="form3Example3cg" className ="form-control form-control-lg" placeholder='Email Address' />
                    </div>
    
                    <div className ="form-outline mb-4">
                      <input type="password" id="form3Example4cg" className ="form-control form-control-lg" placeholder='Password' />
                    </div>
    
    
                    <div className ="form-check d-flex justify-content-center mb-5">
                      <input className ="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                      <label className ="form-check-label" for="form2Example3g">
                       Remember Me
                      </label>
                    </div>
    
                    <div className ="d-flex justify-content-center">
                      < button type="button"
                        className ="btn btn-outline-dark" style ={{color : "black"}} disabled={areAllFieldsFilled} onClick = {mainNavi}>Login</button>
                    </div>
    
                    <p className ="text-center text-muted mt-5 mb-0">Don't have an account? <a href="/signup"
                        className ="fw-bold text-body"><u>Register here</u></a></p>
                        
    
                  </form>
                  </div>
                  </div>
                  </div>
                  
          </div>
        </div>
      </div>
    </div>
        </>
  )
}
