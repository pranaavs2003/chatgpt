import Chat from "../../../components/Chat";
import ChatBox from "../../../components/ChatBox";
import Topbar from "../../../components/Topbar";

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({params: {id}} : Props ) {
  return (
    <div className="h-screen pb-5 bg-[#343541] flex flex-col justify-center items-center ">
      <Topbar />
      <Chat chatId={id} />
      <ChatBox chatId={id} />
    </div>
  )
}

export default ChatPage;