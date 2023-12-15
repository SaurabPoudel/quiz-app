import "~/styles/globals.css";

import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import Sidebar from "../_components/common/Sider";
import BottomBar from "../_components/common/BottomBar";

export const metadata = {
  title: "Quiz App | Admin",
  description: "quiz app admin",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TRPCReactProvider cookies={cookies().toString()}>
      <main className="flex h-screen flex-col bg-black text-green-500 md:flex-row">
        <Sidebar />
        {children}
        <BottomBar />
      </main>
    </TRPCReactProvider>
  );
}
