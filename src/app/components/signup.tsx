import React, { useState } from 'react'

const Signup = ({togglePage}:any) => {
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
    <div className="bg-slate-200  w-1/4 rounded-lg flex flex-col justify-center items-center gap-4 h-screen">
        <h1 className="mt-4">SIGN UP</h1>
    <form onSubmit={handleSubmit} className="flex flex-col w-5/6 my-1">
       <label htmlFor="name">Enter name</label>
       <input
         className="h-10 px-2 bg-inherit border-b rounded-none border-gray-500"
         type="text"
         name="name"
         onChange={handleChange}
       />
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
       <label htmlFor="password">Confirm Password</label>
       <input
         className="h-10 px-2 bg-inherit border-b rounded-none border-gray-500"
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
     Already have an account?<span onClick ={togglePage}>sign in.</span>
    </div>
  )
}

export default Signup