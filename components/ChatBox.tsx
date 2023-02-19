"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Session } from "inspector";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { db } from "../firebase";
import toast from "react-hot-toast";

type Props = {
  chatId: string
};

export default function ChatBox( {chatId} : Props ) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message : Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`
      }
    };

    await addDoc( collection(db, "users", session?.user?.email!, "chats", chatId, "messages"), message );

    //console.log("🆕", message);

    const notification = toast.loading("ChatGPT is thinking...");

    //Toast Notification
    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session
      })
    })
    .then(() => {
      toast.success('ChatGPT has responded!', {
        id: notification
      }) 
    });
    //console.log("Message Sent");
    
    
  };

  return (
    <div className="bg-[#40414F] p-3 rounded-md mt-5 w-11/12 md:w-9/12">
      <form
        onSubmit={(e) => sendMessage(e)}
        className="flex items-center justify-between"
      >
        <input
          type="text"
          placeholder="Enter your message here"
          name="prompt"
          id="prompt"
          className="bg-[#40414F] w-[90%] text-white font-normal focus:outline-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={!session}
        />
        <button type="submit">
          <PaperAirplaneIcon className="w-6 text-neutral-400 " />
        </button>
      </form>
    </div>
  );
}
