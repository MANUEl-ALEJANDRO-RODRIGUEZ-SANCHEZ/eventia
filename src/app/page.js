// FOR CLIENT COMPONENTS
// 'use client'
// import { useSession } from "next-auth/react";

// FOR SERVER COMPONENTS
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import WelcomePage from "@/components/WelcomePage";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";

export default async function Index() {
  const session = await getServerSession(authOptions);  // server component
  // const {data: session, status} = useSession();  // client component

  return (
    <>
      {session ? (
        <>
          <Home/>
        </>
      ) : (
        <>
          <WelcomePage/>
        </>
      )}
    </>
  );
}

