import admin from "firebase-admin";

interface MessageProp {
    message: Message
};

export default function MessageItem({message} : MessageProp) {
  return (
    <div className={(message?.user?._id==='ChatGPT') ? "flex space-x-6 items-center w-screen pt-5 pb-5 pl-10 pr-10 md:w-96 bg-[#444654]" : "flex space-x-6 items-center w-screen pt-5 pb-5 pl-10 pr-10 md:w-96"} >
        <div><img src={message?.user?.avatar} alt="logo" className="h-10 w-10 object-cover rounded-lg " /></div>
        <div className="text-white" >{message?.text}</div>
    </div>
  );
}
