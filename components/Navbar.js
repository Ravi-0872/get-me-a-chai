import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-blue-950 text-white flex px-4 justify-between items-center h-16">
      <div className="logo font-bold">GetMeAChai!</div>
      {/* <ul className='flex justify-around gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>SignUp</li>
        <li>Login</li>
      </ul> */}
      <div>
        <Link href={"/login"}>
          <button
            className='
           text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5'
          >
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
