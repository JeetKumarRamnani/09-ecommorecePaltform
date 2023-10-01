import React from "react";

function LoginSingUp() {
  return (
    <div className="Login-Signup-BTN-Container flex gap-3">
      <button className="flex gap-2">
        <img
          src="https://img.alicdn.com/imgextra/i4/O1CN01kwkROp1vjm0trG3sl_!!6000000006209-2-tps-72-72.png"
          className="w-5"
        />
        Login
      </button>{" "}
      |<button>Sign Up</button>
    </div>
  );
}

export default LoginSingUp;
