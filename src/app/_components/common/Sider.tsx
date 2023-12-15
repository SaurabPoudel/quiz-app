import { getServerAuthSession } from "~/server/auth";

const Sidebar = async () => {
  const session = await getServerAuthSession();
  if (session?.user.role !== "admin") {
    return null;
  }
  return (
    <section className="hidden h-screen w-1/4 border-2 border-r-zinc-800 md:flex md:flex-col">
      <h1 className="text-center text-2xl">MockNepal </h1>
      <div className="flex flex-col items-center pt-6 ">
        <img
          src={session?.user.image ?? ""}
          alt="admin-avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="text-center text-xl">
          {session?.user.name ?? "anonymous"}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
