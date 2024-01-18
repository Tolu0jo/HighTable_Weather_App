"use client";
import axios from "axios";

import { useEffect, useState } from "react";
import { styling1 } from "./common";
import Signup from "./components/signup";
import Signin from "./components/signin";

const recentSearch = [
  "Bangladesh",
  "Italy",
  "France",
  "Turkey",
  "India",
  "Dubai",
];

export default function page() {
  const [signIn, setSignIn] = useState(false);
  const togglePage = () => {
    setSignIn(!signIn);
  };



  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center relative bg-gradient-to-tl bg-opacity-80 bg-blue-100 from-gray-500">
      <div
        className="flex lg:w-3/4 w-11/12 mx-auto rounded-tl-2xl lg:flex-row flex-col rounded-br-2xl"
        style={styling1}
      >
        <div className="lg:w-4/6 w-4/5 lg:relative bg-opacity-50 mx-auto lg:h-[560px] h-300px lg:p-0 p-3"></div>
        <div className="flex-grow bg-opacity-90 bg-slate-600 rounded-br-2xl p-4 relative">
          {signIn ? (
            <Signup togglePage={togglePage} />
          ) : (
            <Signin togglePage={togglePage} />
          )}
        </div>  
      </div>
    </main>
  );
}
