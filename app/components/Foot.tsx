"use client";

import { InstagramLogoIcon, 
    LinkedInLogoIcon,
 } from "@radix-ui/react-icons";
import Link from "next/link";

export function Footer() {
    return (
        <footer>
            <div className="border-t border-neutral-100 dark:border-white/[0.25] px-8 py-20 bg-white dark:bg-black">
                <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start ">
                    <div>
                        <div className="flex items-center justify-start">
                            <div className="flex flex-col justify-center dark:text-white/[0.8]">
                                <h1 className="text-lg font-semibold leading-3">Civil Engineering</h1>
                                <h1 className="text-lg font-semibold">Association</h1>
                            </div>
                        </div>
                        <div><p>&copy;Civil Engineering Association</p></div>
                        <div><p>NIT Raipur</p></div>
                    </div>

                    <div className="grid grid-cols-3 gap-6 items-start mt-10 md:mt-0">
                        <div className="flex justify-center space-y-4 flex-col mt-4">
							<Link href="/"><span>Home</span></Link>
							<Link href="/posts"><span>Posts</span></Link>
							<Link href="/"><span>Contact Us</span></Link>
                        </div>
                        <div className="flex justify-center space-y-4 flex-col mt-4">
							<Link href="/"><span>Structural Engg.</span></Link>
							<Link href="/"><span>Water Resource Engg.</span></Link>
							<Link href="/"><span>Geotechnical Engg.</span></Link>
                        </div>
                        <div className="flex justify-center space-y-4 flex-col mt-4">
                            <div className="flex items-center justify-start gap-1">
                                <InstagramLogoIcon className="" />
								<Link href="/"><span>Instagram</span></Link>
                            </div>
                            <div className="flex items-center justify-start gap-1">
                                <LinkedInLogoIcon className="" />
								<Link href="/"><span>LinkedIn</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
