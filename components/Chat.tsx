"use client"

import { useCollection } from "react-firebase-hooks/firestore";
import { useSession } from "next-auth/react";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import MessageItem from "./Message";
import NoChats from "./NoChats";

type Props = {
    chatId: string
};

export default function Chat( {chatId} : Props) {
  const {data: session} = useSession();
  const [messages] = useCollection(session && query(collection(db, "users", session?.user?.email!, "chats", chatId, "messages"), orderBy("createdAt", "asc")));

  return (
    <div className="flex-1 h-96 overflow-y-scroll w-full flex flex-col items-center" >
      {
        (messages?.docs[0])
        ?
        messages?.docs?.map((item) => <MessageItem message={item?.data()} key={item?.data()?.text} /> )
        :
        <NoChats />
      }
    
    </div>
  )
}
