import Card from "@/components/Card";
import { Gamepad2, PiggyBank, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Find Your Game",
    icon: Gamepad2,
    description: "Dive into a massive collection of PC games to search!",
  },
  {
    title: "Save Big",
    icon: PiggyBank,
    description: "Unlock incredible savings on a vast library of PC games!",
  },
  {
    title: "Multiple Websites",
    icon: Star,
    description:
      "Find the best PC game deals across multiple websites, all in one place.",
  },
];

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <div className="flex mt-20">
        <div className="w-[70%] flex flex-col justify-center pr-12">
          <h1 className="text-4xl font-semibold text-white">GameDeals</h1>
          <p className="py-4">
            Unlock massive savings on PC games. We use the CheapShark API to
            scan the internet for the lowest prices and hottest deals. Find your
            next favorite game for less, guaranteed.
          </p>
          <Link href="/explore">
            <button
              className="bg-secondary w-40 text-background text-lg py-1 rounded font-medium
      transition-all duration-200 ease-in-out
      hover:scale-105 hover:shadow-xl hover:bg-secondary/90 active:scale-95 hover:cursor-pointer"
            >
              Find Deals
            </button>
          </Link>
        </div>
        <div className="w-[30%] relative flex items-center justify-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]  md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] rounded-full bg-secondary blur-2xl z-0" />
          <Image
            src="/gamedealslogo.png"
            alt="GameDeals Logo"
            width={320}
            height={320}
            className="object-cover relative z-10"
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-10 md:space-y-0 md:space-x-10  mt-20 xl:mt-30">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
