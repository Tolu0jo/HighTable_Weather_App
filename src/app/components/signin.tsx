import React, { useState } from 'react'

const Signin = ({togglePage}:any) => {
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
    < div className="my-4 p-2 text-white items-center">
    <p className="font-bold pb-2  items-center text-center">Sign In</p>
    <hr />
   <div className="my-3  justify-center flex flex-col gap-2">   
   <form onSubmit={handleSubmit} className="flex flex-col ">
      <label htmlFor="email">Enter Email</label>
      <input
       className="h-10 px-2 bg-inherit border-b rounded-none border-gray-500"
        type="email"
        name="email"
        onChange={handleChange}
      />
      <label htmlFor="password">Enter Password</label>
      <input
        className="h-10 px-2 bg-inherit  border-b rounded-none border-gray-500"
        type="password"
        name="password"
        id=""
        onChange={handleChange}
      />
     
      <button
        type="submit"
        className="bg-slate-500 rounded-xl w-1/3 mx-auto py-2 my-4"
      >
        Enter
      </button>
    </form>
   <h1 className='text-center'>New User ?  <span className= "cursor-pointer" onClick ={togglePage}>sign up.</span></h1>
   </div>
   </div>
  )
}

export default Signin