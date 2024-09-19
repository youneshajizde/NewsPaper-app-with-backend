"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getNewsById } from "@/lib/GlobalApi";

function Page() {
  const param = useParams();
  const [newsDetail, setNewsDetail] = useState();
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    try {
      const response = await getNewsById(param.id);
      setNewsDetail(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const summarizer = (text) => {
    if (!text) return "";
    // Split the text into words
    let words = text.split(/\s+/);
    // Get the first 20 words
    let first20Words = words.slice(0, 20);
    // Join the first 20 words back into a string
    let result = first20Words.join(" ");
    return result;
  };

  if (loading) {
    return (
      <section className="w-[93%] sm:w-[84%] md:w-[75%] lg:w-[55%] mx-auto border-2 border-gray-100 h-auto px-4 py-2 mt-7 mb-7">
        <div className="texts">
          <span className="text-sm font-light">Loading...</span>
        </div>
      </section>
    );
  }

  const imageUrl = newsDetail?.data?.attributes?.image?.data?.attributes?.url
    ? process.env.NEXT_PUBLIC_STRAPI_KEY +
      newsDetail.data.attributes.image.data.attributes.url
    : "";

  return (
    <section className="w-[93%] sm:w-[84%] md:w-[75%] lg:w-[55%] mx-auto border-2 border-gray-100 h-auto px-4 py-2 mt-7 mb-7">
      <div className="texts">
        <span className="text-sm font-light">PARIS 2024 : {param.id}</span>
        <h3 className="font-playfair font-bold text-5xl">
          {newsDetail?.data?.attributes?.desc}
        </h3>
        <p className="font-playfair font-semibold text-xl">
          {summarizer(newsDetail?.data?.attributes?.context)}
        </p>
      </div>

      {imageUrl && (
        <div className="w-full min-h-[300px] relative mt-4">
          <Image
            src={imageUrl}
            width={0}
            height={0}
            objectFit="cover"
            fill
            sizes="100vw"
            alt="News Image"
          />
        </div>
      )}

      <div className="text-sm font-medium mt-7 leading-[2.0rem]">
        {newsDetail?.data?.attributes?.context}
        <div className="border-2 max-w-[350px] border-orange-500 p-3 mb-3 mt-3">
          <h1 className="font-playfair text-xl font-semibold">Latest</h1>
          <p className="text-lg font-playfair font-medium hover:text-orange-500 hover:underline cursor-pointer">
            Shawn Dawson to become a fundraiser
          </p>
          <p className="text-lg font-playfair font-medium hover:text-orange-500 hover:underline cursor-pointer">
            Shawn Dawson to become a fundraiser
          </p>
          <p className="text-lg font-playfair font-medium hover:text-orange-500 hover:underline cursor-pointer">
            Shawn Dawson to become a fundraiser
          </p>
        </div>
      </div>
    </section>
  );
}

export default Page;
