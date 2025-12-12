"use client";
import { useParams } from "next/navigation";

export default function ClientUsername() {
  const params = useParams(); // { username: 'ravi' }
  return (
    <>
      <div className="text-center font-bold text-4xl ">{params.username}</div>;
      <div className="flex justify-center mt-10 text-center text-2xl">
        Welcome to {params.username}'s page! Here you can support your favorite
        by buying them a chai.
      </div>
      <div className="payment flex justify-around gap-8 w-4/5 mx-auto my-5">
        <div className="supporters w-1/2 bg-slate-800 rounded-2xl px-2 py-1">
          <h2 className="my-2 font-semibold text-lg">Supporters</h2>
          <ul className="mx-4">
            <li>Harshit donated $45 with a msg ""</li>
            <li>Harshit donated $45 with a msg ""</li>
            <li>Harshit donated $45 with a msg ""</li>
            <li>Harshit donated $45 with a msg ""</li>
          </ul>
        </div>
        <div className="makepayement w-1/2 bg-slate-800 rounded-2xl px-2 py-1 flex flex-col gap-3">
          <h2 className="my-2">Make a payment</h2>
          <div className="flex flex-col gap-2">
              <input type="text" className="w-full p-3 rounded-lg bg-slate-700 " placeholder="Enter your Name" />
            <input type="text" className="w-full p-3 rounded-lg bg-slate-700 " placeholder="Enter your Message" />
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-slate-700 "
              placeholder="Enter the Amount ₹"
            />
            <button className="w-full text-center text-white cursor-pointer bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl font-medium rounded-lg text-sm px-4 py-2.5 leading-5 flex justify-center">
              Pay
            </button>
          </div>
          <div className="flex gap-4">
          
          </div>
          {/* or choose from these amounts */}
          <div>
            <h3>Or choose from these amounts</h3>
            <div className="flex gap-3 my-2">
              <button className="bg-slate-700 px-4 py-2 rounded-lg cursor-pointer">
                ₹100
              </button>
              <button className="bg-slate-700 px-4 py-2 rounded-lg cursor-pointer">
                ₹500
              </button>
              <button className="bg-slate-700 px-4 py-2 rounded-lg cursor-pointer">
                ₹1000
              </button>
              <button className="bg-slate-700 px-4 py-2 rounded-lg cursor-pointer">
                ₹2000
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
