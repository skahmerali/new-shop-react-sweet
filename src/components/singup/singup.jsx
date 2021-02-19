import React from 'react';
import './style.css';
 function Singup(){
     return(
         <div className="main">
             <div className="head">
             <h1> Signup Form</h1>

             </div>
             <div className="form">
             <form >
                 <label className="">
                     Name :  
                     <input type="text" placeholder="FULL NAME"/>
                 </label >
                 <label className=""> Email : 
                     <input type="text" placeholder="EMAIL"/>
                 </label>
                 <label className="">
                     Phone Number : 
                    <input type="text" placeholder="   Phone Number"/>
                 </label>
                 <label className="">
                    Passsword:
                    <input type="password" placeholder="PASSWORD"/>
                 </label>
                 <label className="">

                     Gender:
                 <select id="">
                     <option value="male">MALE</option>
                     <option value="female">Female</option>
                 </select>
                 </label>
                 <button>Signup</button>
             </form>

             </div>
         </div>
     )
 }
 export default Singup;