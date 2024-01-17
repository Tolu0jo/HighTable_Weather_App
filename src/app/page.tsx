// "use client"

// import { useState } from 'react';
// import Signin from './components/signin';
// import Signup from './components/signup';
// import { styling1 } from './common';

// export default function Home() {
// const [signIn,setSignIn]=useState(false);
// const togglePage =()=>{
//   setSignIn(!signIn)
// }
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const handleChange = (e: { target: { name: any; value: any } }) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//   };
//   return (
//     <main className='flex min-h-screen w-full flex-col items-center justify-center relative bg-gradient-to-tl bg-opacity-80 bg-blue-100 from-gray-500'>
//       <div
//           className="flex lg:w-3/4 w-11/12 mx-auto rounded-tl-2xl lg:flex-row flex-col rounded-br-2xl"
//           style={styling1}
//         >
//       </div>

//    {signIn ? <Signin togglePage={togglePage}/>:

//    <Signup togglePage={togglePage}/>
//    }

//     </main>
//   )
// }
"use client";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { styling1 } from "./common";
import { ILocation, IWeather } from "./interfaces";
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

  // initially its shows result for Bangladesh
  const initial = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=25910174a87a4c63a6c141019230506&q=Bangladesh&aqi=no`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initial();
  }, []);

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
        <div className="absolute lg:bottom-10 bottom-[-60px] left-0 right-0 text-center">
          <small className="text-gray-100">
            Developed by{" "}
            <a
              href="https://toluojo.netlify.app/"
              target="_blank"
              className="text-sm font-light text-amber-700 bg-white p-1 rounded-md"
            >
              Tolulope Ojo
            </a>
          </small>
        </div>
      </div>
    </main>
  );
}
