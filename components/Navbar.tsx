import Image from "next/image";
import { NavLinks } from "@/constant";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";
import ProfileMenu from "./ProfileMenu";
import Button from "./Button";
import Link from "next/link";

const Navbar = async () => {
  const session = await getCurrentUser();

  console.log("session in Navbar", session);

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/codabbble_logo.svg"
            width={115}
            height={43}
            alt="ProjectShare"
          />
        </Link>

        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link href="/create-project">
              <Button title="Share Work" bgColor="bg-black" />
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
