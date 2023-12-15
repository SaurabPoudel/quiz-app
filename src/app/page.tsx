import Link from "next/link";
import Navbar from "./_components/common/Navbar";

export default async function Home() {
  return (
    <>
      <Navbar />
      <div className="absolute bottom-0 right-0 h-20 w-20 rounded-full">
        <Link href="/admin">Admin Portal</Link>
      </div>
    </>
  );
}
