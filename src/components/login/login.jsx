import React from 'react';
import './style.css';
 function Login(){
     return(
         <div className="main">
             <div className="head">
             <h1> Login Form</h1>

             </div>
             <div className="form">
             <form >
                
                 <label className=""> Email :  
                     <input type="text" placeholder="EMAIL"/>
                 </label>
               
                 <label className="">
                    Passsword : 
                    <input type="password" placeholder="PASSWORD"/>
                 </label>
               
             </form>

             </div>
         </div>
     )
 }
 export default Login;