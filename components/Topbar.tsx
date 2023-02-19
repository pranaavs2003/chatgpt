"use client"

import { Bars3Icon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

export default function Topbar() {
  const {data: session} = useSession();
  
  return (
    <div className="w-screen p-4 cursor-pointer md:hidden flex justify-between items-center">
        <Bars3Icon className="w-6 text-white animate-pulse md:animate-none" />
        <div className="flex space-x-3" >
          <img src={session?.user?.image!} className="h-6 rounded-full" alt="profile-img" />
          <div onClick={() => signOut()} className="text-gray-200 text-xs border-2 p-1 rounded-md" >Logout</div>
        </div>
    </div>
  );
}
