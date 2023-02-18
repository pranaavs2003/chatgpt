'use client'

import { signOut } from 'next-auth/react';
import NewChat from './NewChat';
import ChatItem from './ChatItem';
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useSession } from 'next-auth/react';
import { db } from '../firebase';

function Sidebar() {
  const { data:session } = useSession();
  const [value, loading, error] = useCollection(session && collection(db, "users", session?.user?.email!,"chats") );
  //console.log(value?.docs[0]?._document?.data?.value?.mapValue?.fields?.createdAt?.timestampValue);

  return (
    <div className="hidden w-60 p-3 pt-8 h-screen space-y-2 bg-[#202123] relative md:inline">
        <NewChat />
        {
          value?.docs.map( (item) => <ChatItem key={item?.id} id={item?.id} /> )
        }
        <div className="text-white flex border-[1px] border-white w-52 rounded-md absolute bottom-4 p-2 mb-5 space-x-3 items-center justify-center cursor-pointer hover:bg-slate-600/20 " onClick={() => signOut()} > Logout </div>
    </div>
  );
}

export default Sidebar;