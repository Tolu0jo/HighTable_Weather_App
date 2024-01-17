"use client"

import { useState } from 'react';
import Signin from './components/signin';
import Signup from './components/signup';

export default function Home() {
const [signIn,setSignIn]=useState(false);
const togglePage =()=>{
  setSignIn(!signIn)
}
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  };
  return (
    <main className=' h-screen flex'>
      <div className="bg-slate-500 w-3/4">
      </div>
   
   {signIn ? <Signin togglePage={togglePage}/>:
     
   <Signup togglePage={togglePage}/>
   }
  
   
    </main>
  )
}
