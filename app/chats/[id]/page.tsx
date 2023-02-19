import Chat from "../../../components/Chat";
import ChatBox from "../../../components/ChatBox";

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({params: {id}} : Props ) {
  return (
    <div className="h-screen pb-5 bg-[#343541] flex flex-col justify-center items-center ">
      <Chat chatId={id} />
      <ChatBox chatId={id} />
    </div>
  )
}

export default ChatPage;