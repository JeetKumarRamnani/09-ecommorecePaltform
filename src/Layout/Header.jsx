import React from "react";
import Logo from "../Components/Header/Logo";
import SearchInput from "../Components/Header/SearchInput";
import LoginSingUp from "../Components/Header/LoginSingUp";
import Cart from "../Components/Header/Cart";

function Header() {
  return (
    <div className="header-container absolute top-0 left-0 w-screen  bg-[#F85606]">
      <header className=" flex items-center justify-evenly gap-7 md:max-w-5xl mx-auto p-4 text-white font-semibold text-sm">
        
        <Logo />
        <SearchInput />
        <LoginSingUp />
        <Cart/>
       
      </header>
    </div>
  );
}

export default Header;
