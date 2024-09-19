import React from "react";
import Image from "next/image";
import news1 from "../_images/news1.jpg";
import news2 from "../_images/news2.jpg";
import news3 from "../_images/news3.jpg";
import avatar from "../_images/avataropinion.jpg";
import { MoveRight } from "lucide-react";

function Opinions() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
      <div className="relative h-auto col-span-1">
        <div className="relative w-full h-60">
          <Image
            src={news1}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <h1 className="font-playfair italic font-semibold text-xl mt-4">
          UK's new prime minister is starting to make a big change in where the
          country is headed
        </h1>
        <span className="flex items-center justify-between mt-4">
          <h1 className="flex items-center gap-2">
            <MoveRight className="w-4 text-orange-500 text-sm" />
            <p className="text-sm font-semibold text-orange-500">
              Read what Ralph's opinion
            </p>
          </h1>
          <Image
            width={32}
            height={32}
            src={avatar}
            className="rounded-full p-[1px] bg-orange-500"
            alt="Avatar"
          />
        </span>
      </div>
      <div className="relative col-span-1 lg:col-span-2">
        <p className="flex items-center gap-4 font-playfair font-semibold italic text-xl mt-4 lg:mt-0">
          <span className="text-9xl font-bold">❝</span>
          The increase in obesity between pacific islanders has become a problem
          for UN health Organization
        </p>
        <span className="flex items-center justify-between mt-4">
          <h1 className="flex items-center gap-2">
            <MoveRight className="w-4 text-orange-500 text-sm" />
            <p className="text-sm font-semibold text-orange-500">
              Read what Ralph's opinion
            </p>
          </h1>
          <Image
            width={32}
            height={32}
            src={avatar}
            className="rounded-full p-[1px] bg-orange-500"
            alt="Avatar"
          />
        </span>
        <div className="relative w-full h-60 mt-4">
          <Image
            src={news2}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
      </div>
      <div className="relative col-span-1">
        <div className="relative w-full h-60">
          <Image
            src={news3}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <h1 className="font-playfair italic font-semibold text-xl mt-4">
          Brian Greene on funding the new amazon's mission to explore saturn's
          moon
        </h1>
        <span className="flex items-center justify-between mt-4">
          <h1 className="flex items-center gap-2">
            <MoveRight className="w-4 text-orange-500 text-sm" />
            <p className="text-sm font-semibold text-orange-500">
              Read what Ralph's opinion
            </p>
          </h1>
          <Image
            width={32}
            height={32}
            src={avatar}
            className="rounded-full p-[1px] bg-orange-500"
            alt="Avatar"
          />
        </span>
      </div>
      <div className="relative col-span-1">
        <div className="relative w-full h-60">
          <Image
            src={news3}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <h1 className="font-playfair italic font-semibold text-xl mt-4">
          Brian Greene on funding the new amazon's mission to explore saturn's
          moon
        </h1>
        <span className="flex items-center justify-between mt-4">
          <h1 className="flex items-center gap-2">
            <MoveRight className="w-4 text-orange-500 text-sm" />
            <p className="text-sm font-semibold text-orange-500">
              Read what Ralph's opinion
            </p>
          </h1>
          <Image
            width={32}
            height={32}
            src={avatar}
            className="rounded-full p-[1px] bg-orange-500"
            alt="Avatar"
          />
        </span>
      </div>{" "}
      <div className="relative col-span-1">
        <div className="relative w-full h-60">
          <Image
            src={news2}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <h1 className="font-playfair italic font-semibold text-xl mt-4">
          Brian Greene on funding the new amazon's mission to explore saturn's
          moon
        </h1>
        <span className="flex items-center justify-between mt-4">
          <h1 className="flex items-center gap-2">
            <MoveRight className="w-4 text-orange-500 text-sm" />
            <p className="text-sm font-semibold text-orange-500">
              Read what Ralph's opinion
            </p>
          </h1>
          <Image
            width={32}
            height={32}
            src={avatar}
            className="rounded-full p-[1px] bg-orange-500"
            alt="Avatar"
          />
        </span>
      </div>{" "}
      <div className="relative col-span-1">
        <div className="relative w-full h-60">
          <Image
            src={news1}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <h1 className="font-playfair italic font-semibold text-xl mt-4">
          Brian Greene on funding the new amazon's mission to explore saturn's
          moon
        </h1>
        <span className="flex items-center justify-between mt-4">
          <h1 className="flex items-center gap-2">
            <MoveRight className="w-4 text-orange-500 text-sm" />
            <p className="text-sm font-semibold text-orange-500">
              Read what Ralph's opinion
            </p>
          </h1>
          <Image
            width={32}
            height={32}
            src={avatar}
            className="rounded-full p-[1px] bg-orange-500"
            alt="Avatar"
          />
        </span>
      </div>{" "}
      <div className="relative col-span-1">
        <div className="relative w-full h-60">
          <Image
            src={news2}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <h1 className="font-playfair italic font-semibold text-xl mt-4">
          Brian Greene on funding the new amazon's mission to explore saturn's
          moon
        </h1>
        <span className="flex items-center justify-between mt-4">
          <h1 className="flex items-center gap-2">
            <MoveRight className="w-4 text-orange-500 text-sm" />
            <p className="text-sm font-semibold text-orange-500">
              Read what Ralph's opinion
            </p>
          </h1>
          <Image
            width={32}
            height={32}
            src={avatar}
            className="rounded-full p-[1px] bg-orange-500"
            alt="Avatar"
          />
        </span>
      </div>
    </section>
  );
}

export default Opinions;
