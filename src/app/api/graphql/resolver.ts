import { ISignIn, ISignUp, IUser } from "@/app/interfaces";
import prisma from "../../../../prisma/client";
import bcrypt from "bcrypt";
export const resolvers = {
    Query: {
      users:async () =>{
       return await prisma.user.findMany()
      },
    },
    Mutation: {
     signup: async (_:unknown, { name,email, password,confirmPassword }:ISignUp) => {
        try {
            const existingUser =await prisma.user.findUnique({where:{
                email,
            }})
            if(password !== confirmPassword)throw new Error("Password and Confirm Password  do not match")
            if(existingUser) throw new Error("User already exists ")
            const hashedPassword = await bcrypt.hash(password,10);
            const newUser =await prisma.user.create({
                data:{
                    email,
                    hashedPassword,
                    name:name
                }
            });
            const user = {...newUser}
        return user;
        } catch (error) {
            throw new Error(`${error}`)
        }
      
        }, 
  
      signin:async (_:unknown, { email, password }:ISignIn) => {
         try {
            const existingUser =await prisma.user.findUnique({where:{
                email,
            }})as IUser
  
        if(!existingUser) throw new Error("Invalid credentials");
           const validPassword= await bcrypt.compare(password,existingUser?.hashedPassword);
        if (!validPassword) throw new Error("Invalid credemtial");
    
        return existingUser;
         } catch (error) {
            throw new Error(`${error}`)
         }
      },
    },
  };