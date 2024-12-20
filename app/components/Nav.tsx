import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
// import Link from "next/link";
import { ModeToggle } from "./Theme";
import NavItem from "./ui/NavItemC";

import { MobileNav } from "./MobileNav";

export function Nav() {
  return (
    <div className="fixed z-50 w-full h-[90px] max-lg:h-[60px] flex items-center justify-center backdrop-blur">
      <div className="w-full h-full flex items-center justify-between lg:container">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={90}
            height={90}
            className="w-[50%] md:w-[70%] lg:w-auto"
          />
          <div className="max-lg:hidden">
            <h1 className="text-lg font-semibold leading-5">Civil Engineering Association</h1>
            <h1 className="text-base leading-5">Department of Civil Engineering</h1>
            <h1 className="text-base leading-5">NIT Raipur, Chhattisgarh, India</h1>
          </div>
        </div>

        <div className="max-md:hidden">
          <MainNav />
        </div>

        <div className="md:hidden flex items-center justify-between gap-4 pr-1">
          <ModeToggle />
          <MobileNav />
        </div>

      </div>
    </div>
  );
}

const MainNav = () => (
  <NavigationMenu className="md:px-6">
    <NavigationMenuList>

      <div className="">
        <ModeToggle />
      </div>
      <NavItem label="Home" href="/" />
      <NavItem label="Gate" href="/gate" />
      <NavItem label="Posts" href="/posts" />

      <NavigationMenuItem>
        <NavigationMenuTrigger className="font-semibold font-lg bg-transparent">Depts.</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-3 md:w-[300px]">

            <ListItem title="Strutural Engineering">
              {/* asdf adsfasasd fasdf asdfaf */}
            </ListItem>
            <ListItem title="Water Resource Engineering">
              {/* asdf adsfasasd fasdf asdfaf */}
            </ListItem>
            <ListItem title="Geotechnical Engineering">
              {/* asdf adsfasasd fasdf asdfaf */}
            </ListItem>

          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
)

// const NavItem = ({ label, href }: { label: string, href: string }) => {
//   return (
//     <NavigationMenuItem key={label} className="">
//       <Link href={href} legacyBehavior passHref>
//         <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-semibold font-lg bg-transparent`}>
//           {label}
//         </NavigationMenuLink>
//       </Link>
//     </NavigationMenuItem>
//   );
// }

const ListItem = ({ title, children }: { title: string, children?: React.ReactNode }) => {
  return (
    <li>
      <NavigationMenuLink asChild className="">
        <a
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

