import React from "react";
import { Link } from "react-router-dom";
function LoginSingUp() {
  return (
    <div className="Login-Signup-BTN-Container flex gap-3">
      <button className="flex gap-2">
        <img
          src="https://img.alicdn.com/imgextra/i4/O1CN01kwkROp1vjm0trG3sl_!!6000000006209-2-tps-72-72.png"
          className="w-5"
        />
      <Link to='/customer/login'><button>Login</button></Link>
      </button>{" "}
      |
      
      <Link to='/customer/signup'><button>Sign Up</button></Link>
    </div>
  );
}

export default LoginSingUp;
