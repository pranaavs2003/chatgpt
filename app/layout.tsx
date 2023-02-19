import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import SessionProvider from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import ClientProvider from "../components/ClientProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      {/* Topbar */}
      

      {/* Sidebar */}
      <body>
      <SessionProvider session={session}>
      
        {
        (session) 
        ? 
            
              <div className="flex overflow-hidden " >
                <Sidebar />
                <div className="flex-1" >{children}</div>
                <ClientProvider />
              </div>
          
        :
          <Login />
        }
      </SessionProvider>
      </body>
    </html>
  )
}
