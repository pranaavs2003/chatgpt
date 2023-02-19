import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { collection, deleteDoc, orderBy, query, doc } from "firebase/firestore"; 
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";
import { TrashIcon, ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation";

type Props = {
    id: string;
};

export default function ChatItem({id} : Props) {
    const path = usePathname();
    const router = useRouter();
    const { data:session } = useSession();
    const [isActivated, setIsActivated] = useState(false);
    const [messages] = useCollection(query(collection(db, "users", session?.user?.email!, "chats", id, "messages"), orderBy("createdAt", "asc")));

    useEffect(() => {
        if(!path) return;
        setIsActivated(path.includes(id));
    }, [path])
    
    //console.log("🚅", messages?.docs);

    const deleteChat = async () => {
        await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
        console.log('Item Deleted');
        router.replace("/");        
    };

    return (
    <Link className={isActivated ? "chatItem bg-[#343541]" : "chatItem"} href={`/chats/${id}`} >
        <ChatBubbleBottomCenterIcon className="w-4" />
        <div className="truncate w-3/4" > { messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat" } </div>
        <TrashIcon className="w-4 text-gray-400 hover:text-red-500 " onClick={() => deleteChat()} />
    </Link>
  )
}
