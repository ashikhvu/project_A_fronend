import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{
    
    return <>
        <div style={{backgroundColor:'black',textAlign:'center'}}>
            <div style={{display:'flex'}}>
                <p>Signup and get 20% off to first order</p>
                <Link to='/home'>Signup Now</Link>
            </div>
        </div>
    </>
}

export default NavBar;