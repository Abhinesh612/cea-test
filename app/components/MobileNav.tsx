"use client";

import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export function MobileNav() {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                    <svg
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                    >
                        <path
                            d="M3 5H11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 12H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 19H21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>

            <SheetContent side="right" className="">
                <MobileLink
                    href="/"
                    className="flex items-center"
                    onOpenChange={setOpen}>
                    <div>
                        <h1 className="">CEA</h1>
                    </div>
                </MobileLink>

                <ScrollArea className="my-4 h-[calc(100vh-60px)] pb-10 pl-6">
                    <div className="flex flex-col space-y-3" >
                        <MobileLink href="/" onOpenChange={setOpen} className="font-semibold font-lg">Home</MobileLink>
                        <MobileLink href="/posts" onOpenChange={setOpen} className="font-semibold font-lg">Posts</MobileLink>

                        <div className="">
                            <span>Depts.</span>


                            <div className="pl-2">
                                <a
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                    <div className="text-sm font-medium leading-none">Structural Eng.</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        asdfkjaslkdfjh asldkfhalsdfk
                                    </p>
                                </a>
                            </div>

                            <div className="pl-2">
                                <a
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                    <div className="text-sm font-medium leading-none">Water Resource Eng.</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        asdfkjaslkdfjh asldkfhalsdfk
                                    </p>
                                </a>
                            </div>

                            <div className="pl-2">
                                <a
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                    <div className="text-sm font-medium leading-none">Geotechnical Eng.</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        asdfkjaslkdfjh asldkfhalsdfk
                                    </p>
                                </a>
                            </div>
                            <Separator />



                        </div>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}


interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) {
    const handleClick = () => {
        // Close the sheet after the link is clicked
        onOpenChange?.(false);
    };

    return (
        <div>
            <Link
                href={href}
                onClick={handleClick} // Trigger the close action here
                className={cn(className, "no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}
                {...props}
            >
                {children}
            </Link>
            <Separator />
        </div>
    );
}
