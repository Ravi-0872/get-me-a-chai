"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [showdropdown, setShowdropdown] = useState(false)
  const { data: session } = useSession();
  return (
    <nav className="bg-blue-950 text-white flex px-4 justify-between items-center h-16">
      <div className="logo font-bold"><Link href={"/"}>
      GetMeAChai!</Link></div>

      <div className="flex gap-2">
        {session ? (
          <>
          <div className="flex">

            <button
            onBlur={()=>{setTimeout(() => {
              setShowdropdown(false)
            }, 260);}}
            onClick={()=>{setShowdropdown(!showdropdown)}}
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="
           text-white cursor-pointer bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5 flex justify-center items-center"
              type="button"
            >
             Welcome {session.user.email}
              <svg
                className="w-4 h-4 ms-1.5 -me-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            <div
              id="dropdownHover"
              className={`z-10 ${showdropdown?"":"hidden"} bg-slate-900 absolute top-14 right-26  bg-neutral-primary-medium  border-default-medium rounded-xl shadow-lg w-44`}
            >
              <ul
                className="p-2 text-sm text-body font-medium"
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center w-full p-2 hover:bg-slate-800 hover:text-lg rounded-xl"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center w-full p-2 hover:bg-slate-800 hover:text-lg rounded-xl"
                  >
                    Your Page
                  </Link>
                </li>
             
                <li>
                  <Link
                  onClick={()=>{signOut()}}
                    href="#"
                    className="inline-flex items-center w-full p-2 hover:bg-slate-800 hover:text-lg rounded-xl"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>


            <button
              onClick={() => {
                signOut();
              }}
              className="
           text-white cursor-pointer bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5"
            >
              LogOut
            </button>
          </>
        ) : (
          <Link href={"/login"}>
            <button
              className="
           text-white cursor-pointer bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
