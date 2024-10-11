"use client";

import { usePathname } from "next/navigation";
import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";


const NavItem = ({ label, href }: { label: string, href: string }) => {
    const path = usePathname();

    return (
        <NavigationMenuItem key={label} className="">
            <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${path === href ? "text-primary focus:text-primary" : ""} font-semibold font-lg bg-transparent`}>
                    {label}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    );
}

export default NavItem;