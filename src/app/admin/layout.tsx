import "~/styles/globals.css";

import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

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
    <section className="bg-black text-green-500">
      <TRPCReactProvider cookies={cookies().toString()}>
        {children}
      </TRPCReactProvider>
    </section>
  );
}
