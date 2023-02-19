import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';

export default function NoChats() {
  return (
    <div className="mt-10 flex flex-col space-y-5 items-center" >
        <div className="text-xl text-white font-semibold" >Start Chatting now</div>
        <div><ArrowDownCircleIcon className="h-8 text-white animate-bounce" /></div>
    </div>
  )
}
