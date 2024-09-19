"use state";
import { useState, CSSProperties } from "react";
import React from "react";
import p1 from "../_images/p1.webp";
import p2 from "../_images/p2.webp";
import p3 from "../_images/p3.webp";
import p4 from "../_images/p4.jpg";
import p5 from "../_images/p5.png";
import p6 from "../_images/p-6.png";
import p7 from "../_images/p7.webp";
import p8 from "../_images/p8.webp";
import p9 from "../_images/p10.jpg";
import Image from "next/image";
import { Share2 } from "lucide-react";
import { BeatLoader } from "react-spinners";
import Link from "next/link";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function News({ allOfIt }) {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  function formatNumber(num) {
    if (num >= 1000 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K";
    } else if (num >= 1000000 && num < 1000000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000000000 && num < 1000000000000) {
      return (num / 1000000000).toFixed(1) + "B";
    } else {
      return num.toString();
    }
  }

  const items = allOfIt.map((item, index) => (
    <Link href={`read/${item.id}`}>
      {" "}
      <div key={index} className="relative h-auto col-span-1">
        <div className="relative w-full h-60">
          <Image
            src={
              process.env.NEXT_PUBLIC_STRAPI_KEY +
              item?.attributes?.image?.data?.attributes?.url
            }
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <h1 className="font-playfair italic font-semibold text-lg mt-4">
          {item?.attributes?.desc}
        </h1>

        <span className="flex items-center justify-between mt-3">
          <h1 className="text-xs text-gray-500 font-medium flex items-center gap-1">
            <p>{formatNumber(item?.attributes?.views)}</p>•<p>2 days ago</p>
          </h1>
          <Share2 className="w-4 text-gray-500" />
        </span>
      </div>
    </Link>
  ));
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-5 mt-5 w-full h-full ">
      {items.length === 0 ? (
        <BeatLoader
          loading={loading}
          cssOverride={override}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        items
      )}
    </section>
  );
}

export default News;
