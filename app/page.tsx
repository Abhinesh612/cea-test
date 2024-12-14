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
import Link from "next/link";


export default function Home() {
  return (
    <Layout>
      <main className="w-fill md:h-screen flex md:items-center justify-center pt-[90px] relative dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)] max-sm:[mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <div className="container grid lg:grid-cols-[0.75fr_1fr] gap-8 md:gap-12">
          <div className="flex flex-col justify-start pt-6 max-md:ml-3">
            <h1 className="z-20 text-5xl md:text-7xl font-bold">Civil Engineering</h1>
            <h1 className="z-20 text-5xl md:text-7xl font-bold">Association</h1>

            <p className="z-20">CEA NIT Raipur is the cornerstone of the Civil Engineering Department
              at the National Institute of Technology, Raipur. It serves as the principal
              body responsible for orchestrating and executing various events and
              activities within the Civil Engineering Department.</p>
            <p className="z-20 max-lg:hidden">Through its efforts, CEA NIT Raipur strives to empower students to excel academically, professionally, and socially, while promoting a
              culture of collaboration and leadership in the field of civil engineering.</p>

            <div className="z-20 flex gap-4 mt-6">
              <Link href="/posts">
                <Button className="rounded-3xl">Posts</Button>
              </Link>
              <Link href="#news-section">
                <Button variant="outline" className="rounded-3xl">News</Button>
              </Link>
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
      <main id="news-section" className="w-full flex flex justify-center mb-8 md:mb-12 max-md:mt-8">
        <div className="container">
          <div className="w-full flex justify-center md:mb-6">
            <h2 className="text-6xl font-bold inline-block text-primary">N</h2>
            <h2 className="text-6xl font-bold inline-block">EWS</h2>
          </div>
          <BentoGridSecondDemo />
        </div>
      </main>
      {/* 

    ABOUT subsection

 */}

      <main className="w-full flex flex-col items-center mb-12">
        <div className="container">
          <div className="w-full flex justify-center mb-6">
            <h2 className="text-6xl font-bold inline-block">ABOUT</h2>
            <h2 className="text-6xl font-bold inline-block text-primary">&nbsp;US</h2>
          </div>
        </div>
        <div className="w-full flex flex justify-center">
          <div className="container mx-4 flex justify-center items-center flex-col">
            <p className="lg:w-[70%] lg:text-lg mb-4">
              CEA NIT Raipur is the cornerstone of the Civil Engineering Department
              at the National Institute of Technology, Raipur. It serves as the principal
              body responsible for orchestrating and executing various events and
              activities within the Civil Engineering Department.

              CEA is the driving force behind various events and workshops aimed at
              the development of civil engineering students. From organizing
              academic seminars to professional skill-building sessions, CEA ensures
              students receive a well-rounded help and preparation for their future
              careers.
            </p>
            <p className="lg:w-[70%] lg:text-lg">
              Additionally, CEA manages SPARDHA, a sports league exclusively for
              Civil Engineering Students, fostering a sense of camaraderie and
              sportsmanship within the department. By coordinating diverse
              activities, CEA creates an inclusive and vibrant community where
              students can learn, grow, and bond with their peers.
              Through its efforts, CEA NIT Raipur strives to empower students to
              excel academically, professionally, and socially, while promoting a
              culture of collaboration and leadership in the field of civil engineering.
            </p>
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
      <main id="contact-section" className="w-full flex flex-col items-center mt-1 mb-18 pb-12">
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
    <BentoGrid className="max-w-4xl mx-auto max-sm:mx-4 md:auto-rows-[20rem]">
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
//   <div className="relative w-full h-full rounded-xl overflow-hidden">
//     <Image
//       src="/images/bg.jpg"
//       alt="skeleton image"
//       layout="fill"
//       objectFit="covers"
//       className="rounded-md"
//     />
//   </div>
// )

const Skeleton = ({ src }: { src: string }) => (
  <div className="relative w-full h-full rounded-xl overflow-hidden">
    <Image
      src={src}
      alt="skeleton image"
      layout="fill"
      objectFit="cover"
      className="rounded-md"
    />
  </div>
);


const items = [
  {
    title: "GATE Mock Examination [Ongoing*]",
    description: "CEA gate mock exmination.",
    header: <Skeleton src="/images/gate.png" />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "SPARDHA",
    description: "cricket Trounament.",
    header: <Skeleton src="/images/cricket.jpeg" />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton src="/images/mag.png" />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton src="/images/gate-2023.jpeg" />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

];
