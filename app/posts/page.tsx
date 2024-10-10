import Image from "next/image";
import Layout from "../components/Layout";
import { PostCard } from "./postCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";


export default function PostPage() {
    return (
        <Layout>
            <main className="pt-[90px] max-lg:pt-[60px] w-full flex justify-center">

                <div className="flex flex-col overflow-hidden">
                    <PostDepartment
                        department="cea-posts"
                        title="CEA"
                    />
                    <PostDepartment
                        department="struct-posts"
                        title="Structure"
                    />
                    <PostDepartment
                        department="water-posts"
                        title="Water Resource"
                    />
                    <PostDepartment
                        department="geo-posts"
                        title="Geotechnical"
                    />
                </div>

            </main>
        </Layout>
    );
}

interface PostDepartmentProps {
    department: string;
    title: string,
    className?: string,
}

const PostDepartment = ({ department, title, className }: PostDepartmentProps) => (
    <div id={department} className={cn("container flex flex-col justify-center p-8", className)}>
        <div>
            <h1 className="text-5xl p-3">{title}</h1>
            <Separator />
        </div>
        <div>
            <PostScrollDepartment />
        </div>
    </div>
)

const PostScrollDepartment = () => (
    <ScrollArea>
        <div className="flex w-max space-x-4 p-4">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
        <ScrollBar orientation="horizontal" />
    </ScrollArea>
)