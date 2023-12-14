import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { Button } from "../ui/button";
const NavItem = [
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Syllabus",
    url: "/syllabus",
  },
  {
    id: 3,
    title: "Mock Test",
    url: "/mock-test",
  },
  {
    id: 4,
    title: "Dashboard",
    url: "/contact",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];
const Navbar = async () => {
  const session = await getServerAuthSession();
  return (
    <nav className="flex justify-center pt-3 ">
      <div className="flex w-full md:max-w-6xl">
        <Link href="/">
          <span className="text-2xl ">MockNepal</span>
        </Link>
        <div className="flex-grow"></div>
        <ul className="flex gap-10">
          {NavItem.map((item) => (
            <Link href={item.url}>
              <li className="text-xl">{item.title}</li>
            </Link>
          ))}
        </ul>
        {session && (
          <div className="flex flex-col justify-center px-6">
            <img
              className="rounded-full"
              src={session.user?.image ?? ""}
              alt="avatar"
              height="36px"
              width="36px"
            />{" "}
            <div>{session.user?.name ?? "anonymous"}</div>
          </div>
        )}
        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          {session ? (
            <Button variant="destructive">Sign Out</Button>
          ) : (
            <Button variant="default">Sign In</Button>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
