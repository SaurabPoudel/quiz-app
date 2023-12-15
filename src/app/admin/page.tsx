import { getServerAuthSession } from "~/server/auth";
import NotAuthorized from "../_components/common/NotAuthorized";

export default async function Page() {
  const session = await getServerAuthSession();
  if (session?.user.role !== "admin") {
    return <NotAuthorized />;
  }
  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}
