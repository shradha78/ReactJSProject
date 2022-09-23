import React, { useState } from 'react'
import { useRef } from 'react';

export default function SignUp() {
    // const image = { url: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp" };
    const [userDetails, setUserDetails] = useState('');
    const emailRef = useRef();
    const passwordRef= useRef();
    const nameRef = useRef();
    function addDetails(e){
      e.preventDefault();
      const newDetails = {
          email : emailRef.current.value,
          password : passwordRef.current.value,
          name : nameRef.current.value
      }
     setUserDetails(...userDetails,newDetails);
  }
      
  return (
    <>
<div  style={{backgroundimage : `url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")`}}>
 
  <div className ="mask d-flex align-items-center h-500 gradient-custom-5" style = {{width: "100%",  height: "100%",backgroundimage : `url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")`}} >
  <div className ="container h-100" style = {{width: "100%",  height: "100%"}} >
      <div className ="row d-flex justify-content-center align-items-center h-100" style = {{width: "100%",  height: "100%"}} >
      <div className="col-50 col-md-50 col-lg-50 col-xl-50" style = {{width: "100%",  height: "100%"}} >
      <div className="card-body p-5" style = {{width: "100%",  height: "100%"}} >
          <div className='card text-white bg-secondary mb-3' style={{borderradius: "80em",width: "100%",  height: "100%"}}>
          <a href="/" > <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
              style= {{width : "150px" , height : "150px",padding : "20px" ,alignmentBaseline : "baseline",verticalalign:"bottom" }} title = "Home"/></a>
              <h2 className ="text-uppercase text-center mb-4" style = {{width: "1000px",  height: "100px"}} >Register Here 
             </h2>

              <form style = {{padding : "20px",color : "black"}} onSubmit ={addDetails} >

                <div className ="form-outline mb-4" >
                  <input type="text" id="form3Example1cg" className ="form-control form-control-lg" placeholder='Full Name' ref ={nameRef} />
                </div>

                <div className ="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className ="form-control form-control-lg" placeholder='Email Address' ref = {emailRef} />
                </div>

                <div className ="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className ="form-control form-control-lg" placeholder='Create Password'/>
                </div>

                <div className ="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" className ="form-control form-control-lg" placeholder='Confirm Your Password' ref ={passwordRef} />
                </div>

                <div className ="form-check d-flex justify-content-center mb-5">
                  <input className ="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className ="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" className ="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className ="d-flex justify-content-center">
                  <button type="button"
                    className ="btn btn-outline-dark" >Register</button>
                </div>

                <p className ="text-center  mt-5 mb-0" style = {{color : "black"}}>Have already an account? <a href="/login"
                    className ="fw-bold text-body"><u>Login here</u></a></p>

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
