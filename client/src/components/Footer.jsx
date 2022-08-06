import React from "react";

import logo from "../../images/oc.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-center items-center">
      
        <img src={logo} alt="logo" className="w-40" />
    
      
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Stay Tuned for more exciting services.</p>
      <p className="text-white text-sm text-center font-medium mt-2">abc@gmail.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

  </div>
);

export default Footer;
