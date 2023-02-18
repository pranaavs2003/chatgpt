'use client'
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className=" bg-[#74AA9C] flex flex-col justify-center items-center h-screen w-screen space-y-3" >
        <Image 
            src = "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
            height = {100}
            width = {100}
            alt = "logo"
            priority
        />
        <div 
            className="text-white font-medium text-2xl animate-pulse cursor-pointer"
            onClick={() => signIn('google')}
            >Sign In to ChatGPT</div>
    </div>
  );
}
