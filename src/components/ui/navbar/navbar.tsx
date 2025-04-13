import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../navigation-menu";

import { UserInfo } from "./user-info";
import { Button } from "../button";

const Navbar = () => {
  return (
    <header>
      {/* user info */}
      <UserInfo />
      <div className="flex justify-center border-b py-3">
        <div className="w-[950px]">
          <div className="flex items-center justify-between">
            {/* avatar */}
            <Link href="/">
              <Avatar className="outline-primary size-9 hover:outline-2">
                <AvatarImage
                  src="https://ckn96wqsiq.ufs.sh/f/VyAcii40YBsbK3kXRzPLuUogRrjaAS42MweWxqNH9FhtOCkT"
                  alt="My Profile"
                />
                <AvatarFallback>NF</AvatarFallback>
              </Avatar>
            </Link>
            {/* navigation menu */}
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                {["home", "work", "about"].map((item) => (
                  <NavigationMenuItem key={item} className="capitalize">
                    <Link
                      href={`/${item === "home" ? "" : "#" + item}`}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            {/* resume button */}
            <Link href="https://ckn96wqsiq.ufs.sh/f/VyAcii40YBsbGlyhPGssHJKIaYh9P3VM2WFbCR6dgLE1XzDT">
              <Button className="cursor-pointer">Resume</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
