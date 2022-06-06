import React from "react";
import profile from "../../assets/images/profiles/profile1.jpg";
import logo from "../../assets/images/logo/logo-symbol.png";
import { SearchIcon } from '@heroicons/react/solid'

export default function Topbar() {
  return (
    <>
      <div className=" w-full h-24 sticky top-0 flex items-center bg-pink">
        <div className="flex flex-auto items-center justify-center">
          <img className="h-14 w-14" src={logo} alt="" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <ul className=" inline-block list-none m-0 p-0">
            <li className="inline cursor-pointer m-2 font-light">HOME</li>
            <li className="inline cursor-pointer m-2 font-light">ABOUT</li>
            <li className="inline cursor-pointer m-2 font-light">CONTACT</li>
            <li className="inline cursor-pointer m-2 font-light">WRITE</li>
            <li className="inline cursor-pointer m-2 font-light">LOGOUT</li>
          </ul>
        </div>
        <div className="flex flex-auto items-center justify-center">
          <img className=" w-16 h-16 object-cover rounded-full" src={profile} alt="" />
          <SearchIcon className="h-6 w-6 text-gray-light ml-3 cursor-pointer"  />
        </div>
      </div>
    </>
  );
}
