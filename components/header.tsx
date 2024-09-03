import { auth, signOut } from "@/auth";
import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";

const Header = async () => {
  const session = await auth();
  const user = session?.user;

  const logoutAction = async () => {
    "use server";
    await signOut();
  };

  return (
    <>
      <header className="bg-[#1c1c1c] border border-[#2e2e2e] h-20">
        <nav className="h-full flex justify-between max-w-7xl mx-auto items-center">
          <div>
            <Link href="/" className="text-[#FD9739] text-2xl font-semibold">
              Pc Builder
            </Link>
          </div>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/" className="text-[#888888]">
                Home
              </Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link href="/register" className="text-[#888888]">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-[#888888]">
                    Login
                  </Link>
                </li>
              </>
            )}
            {user && (
              <form action={logoutAction} className="flex">
                <li>
                  <Link href="/client-side" className="text-[#888888]">
                    Client
                  </Link>
                </li>
                <li className="ml-4">
                  <Link href="/profile" className="text-[#888888]">
                    Profile
                  </Link>
                </li>
                <li className="ml-4">
                  <button>Logout</button>
                </li>
              </form>
            )}
          </ul>
          <div className="flex space-x-4 text-[#888888]">
            <Search />
            <User />
            <ShoppingBag />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
