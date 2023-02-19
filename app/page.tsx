import { SunIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/outline';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import NewChat from '../components/NewChat';
import Topbar from "../components/Topbar";

export default function Homepage() {
  return (
    <div className="min-h-screen h-fit bg-[#343541] flex flex-col justify-center items-center " >
        <Topbar />
        <div className="font-bold text-4xl mb-10 text-white ">Chat GPT</div>
        <div className="flex flex-col gap-8 md:flex-row" >
            
            <div className="flex flex-col" >
                <div className="flex justify-center items-center gap-2 md:flex-col ">
                    <SunIcon className="h-8 text-white " />
                    <div className="text-white font-medium text-lg">Examples</div>
                </div>
                <div className="flex flex-col gap-3 mt-4">
                    <div className="infoText">"Explain quantum computing in simple terms" </div>
                    <div className="infoText">"Got any creative ideas for a 10 year old's birthday?" </div>
                    <div className="infoText">"How do i make a HTTP request in Javascript?" </div>
                </div>
            </div>

            <div className="flex flex-col" >
                <div className="flex justify-center items-center gap-2 md:flex-col">
                    <BoltIcon className="h-8 text-white " />
                    <div className="text-white font-medium text-lg">Capabilities</div>
                </div>
                <div className="flex flex-col gap-3 mt-4">
                    <div className="infoText">"Remembers what user said earlier in the conversation" </div>
                    <div className="infoText">"Allows user to provide follow-up corrections" </div>
                    <div className="infoText">"Trained to decline inappropriate requests" </div>
                </div>
            </div>

            <div className="flex flex-col" >
                <div className="flex justify-center items-center gap-2 md:flex-col">
                    <ExclamationTriangleIcon className="h-8 text-white " />
                    <div className="text-white font-medium text-lg">Limitations</div>
                </div>
                <div className="flex flex-col gap-3 mt-4">
                    <div className="infoText">"May occasionally generate incorrect information" </div>
                    <div className="infoText">"May occasionally produce harmful instructions or biased content" </div>
                    <div className="infoText">"Limited knowledge of world and events after 2021" </div>
                </div>
            </div>
        </div>
        <div className="md:hidden" >
            <NewChat />
        </div>
    </div>
  );
}
