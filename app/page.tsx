import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Layout from "./components/Layout";
import Image from "next/image";
import { Button } from "@/components/ui/button"

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { TimelineCom } from "./components/Timeline";
import { Contact } from "./components/Contact";


export default function Home() {
  return (
    <Layout>
      <main className="w-fill md:h-screen flex md:items-center justify-center pt-[90px] relative dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
        <div className="container grid lg:grid-cols-[0.75fr_1fr] gap-8 md:gap-12">
          <div className="flex flex-col justify-start pt-6 max-md:ml-3">
            <h1 className="z-20 text-5xl md:text-7xl font-bold">Civil Engineering</h1>
            <h1 className="z-20 text-5xl md:text-7xl font-bold">Association</h1>
            <p className="z-20">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

            <div className="z-20 flex gap-4 mt-6">
              <Button className="rounded-3xl">Posts</Button>
              <Button variant="outline" className="rounded-3xl">News</Button>
            </div>
          </div>

          <div>
            <AspectRatio ratio={5 / 4}>
              <Image
                src="/images/bg1.jpg"
                alt="Image"
                layout="fill"
                className="rounded-md object-cover" />
            </AspectRatio>
          </div>
        </div>
      </main>
      {/* 

    NEWS subsection

 */}
      <main className="w-full flex flex justify-center mb-8 md:mb-12 max-md:mt-8">
        <div className="container">
          <div className="w-full flex justify-center md:mb-6">
            <h2 className="text-6xl font-bold inline-block text-primary">N</h2>
            <h2 className="text-6xl font-bold inline-block">EWS</h2>
          </div>
          <BentoGridSecondDemo />
        </div>
      </main>
      {/* 

    NEWS subsection

 */}

      <main className="w-full flex flex-col items-center mb-12">
        <div className="container">
          <div className="w-full flex justify-center mb-6">
            <h2 className="text-6xl font-bold inline-block">ABOUT</h2>
          </div>
        </div>
        <div className="w-full flex flex justify-center">
          <div className="container mx-4 flex justify-center">
            <p className="lg:w-[70%] lg:text-lg">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet, comes from a line in section 1.10.32.

              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </div>
        </div>
      </main>

      {/*
      Timeline 
       */}

      <main className="w-full flex flex-col items-center mt-1 mb-12">
        <div className="container pb-0">
          <div className="w-full flex justify-center">
            <h2 className="text-6xl font-bold inline-block text-primary">TIMELINE</h2>
          </div>
        </div>
        <TimelineCom />
      </main>

      {/*
      Contact Section 
       */}
      <main className="w-full flex flex-col items-center mt-1 mb-18 pb-12">
        <div className="container mb-6 sm:mb-12">
          <div className="w-full flex justify-center">
            <h2 className="text-5xl sm:text-6xl font-bold inline-block">CONTACT</h2>
            <h2 className="text-5xl sm:text-6xl font-bold inline-block text-primary">&nbsp;US</h2>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="grid xl:grid-cols-[1.25fr_1fr] gap-24">
            <div className="h-[580px] w-full relative max-xl:hidden">
              <Image
                src="/images/contact.jpg"
                alt="Image"
                layout="fill"
                className="rounded-md object-cover" />
            </div>
            <Contact />
          </div>
        </div>
      </main>

    </Layout>
  );
}

function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
// );

const Skeleton = () => (
  <div className="relative w-full h-full rounded-xl overflow-hidden">
    <Image
      src="/images/bg.jpg"
      alt="skeleton image"
      layout="fill"
      objectFit="covers"
      className="rounded-md"
    />
  </div>
)
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

];
