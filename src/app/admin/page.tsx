import { getServerAuthSession } from "~/server/auth";

export default async function Page() {
  const session = await getServerAuthSession();
  if (session?.user.role !== "admin") {
    return <h1 className="text-red-500">Not authorized</h1>;
  }
  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}
