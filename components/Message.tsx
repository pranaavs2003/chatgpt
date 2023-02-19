import admin from "firebase-admin";
import { DocumentData } from "firebase/firestore";

interface MessageProp {
    message: DocumentData
};

export default function MessageItem({message} : MessageProp) {
  return (
    <div className={(message?.user?._id==='ChatGPT') ? "flex justify-center w-full pt-5 pb-5 pl-3 md:pl-10 pr-2 md:pr-10 bg-[#444654]" : "flex justify-center pt-5 pb-5 pl-3 md:pl-10 pr-2 md:pr-10 w-full"} >
        <div className="flex items-center w-full md:w-9/12 space-x-6 md:space-x-0">
            <div className="w-fit md:w-1/12" ><img src={message?.user?.avatar} alt="logo" className="h-8 md:h-10 w-8 md:w-10 object-cover rounded-lg" /></div>
            <div className="text-white text-xs md:text-base w-10/12 md:w-5/6 " >{message?.text}</div>
        </div>
    </div>
  );
}
