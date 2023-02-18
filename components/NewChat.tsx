'use client'

import { PlusIcon } from "@heroicons/react/24/outline"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { useRouter } from "next/navigation";
import { db } from "../firebase";
import { useSession } from "next-auth/react";

export default function NewChat() {
    const {data : session} = useSession();
    const router = useRouter();

    const createNewChat = async () => {
        const doc = await addDoc(collection(db, "users", session?.user?.email!, "chats"), {
            message: [],
            userId: session?.user?.email!,
            createdAt: serverTimestamp(),
        });

        router.push(`/chats/${doc.id}`);
    };

  return (
    <div className="text-white flex border-[1px] border-white rounded-md  p-2 mb-5 space-x-3 items-center cursor-pointer hover:bg-slate-600/20" onClick={() => createNewChat()} >
        <PlusIcon className="w-4" />
        <div className="text-sm" >New Chat</div>
    </div>
  )
}
