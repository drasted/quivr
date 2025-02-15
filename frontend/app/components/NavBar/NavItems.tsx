import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dispatch, FC, HTMLAttributes, ReactNode, SetStateAction } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Button from "../ui/Button";

interface NavItemsProps extends HTMLAttributes<HTMLUListElement> {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const NavItems: FC<NavItemsProps> = ({ className, setOpen, ...props }) => {
  return (
    <ul
      className={cn(
        "flex flex-row items-center gap-4 text-sm flex-1",
        className
      )}
      {...props}
    >
      {process.env.NEXT_PUBLIC_ENV === "local" ? (
        <>
          <NavLink setOpen={setOpen} to="/upload">
            Upload
          </NavLink>
          <NavLink setOpen={setOpen} to="/chat">
            Chat
          </NavLink>
          <NavLink setOpen={setOpen} to="/explore">
            Explore
          </NavLink>
        </>
      ) : (
        <>
          <NavLink setOpen={setOpen} to="https://github.com/StanGirard/quivr">
            Github
          </NavLink>
          <NavLink setOpen={setOpen} to="https://discord.gg/HUpRgp2HG8">
            Discord
          </NavLink>
        </>
      )}
      <div className="flex sm:flex-1 sm:justify-end flex-col items-center justify-center sm:flex-row gap-5 sm:gap-2">
        <Link href={"https://try-quivr.streamlit.app"}>
          <Button variant={"secondary"}>Try Demo</Button>
        </Link>
        <DarkModeToggle />
      </div>
    </ul>
  );
};

interface NavLinkProps {
  children: ReactNode;
  to: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const NavLink: FC<NavLinkProps> = ({ children, to, setOpen }) => {
  return (
    <li className="group relative">
      <Link onClick={() => setOpen && setOpen(false)} href={to}>
        {children}
      </Link>
      <hr className="aboslute top-full border border-transparent border-b-primary dark:border-b-white scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 transition-transform" />
    </li>
  );
};

export default NavItems;
