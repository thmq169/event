import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import MobileNavItems from "./MobileNavItems";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNavItems />
          </SignedIn>
          <SignedOut>
            <button className="flex items-center justify-center rounded-3xl !bg-[#624cf5] text-white text-sm">
              <Link href="/sign-in" className="py-3 px-8">
                Login
              </Link>
            </button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
