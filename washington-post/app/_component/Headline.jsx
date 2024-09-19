"use client";

import React, { useEffect, useState } from "react";
import { getAllNews } from "@/lib/GlobalApi";
import headlineImg from "../_images/headlineorg.jpg";
import Image from "next/image";
import { ArrowUpRight, Share2 } from "lucide-react";
import user from "../_images/avatar.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function Headline() {
  const [specialNews, setSpecialNews] = useState([]);
  const [latest, setLatest] = useState([]);
  const [trending, setTrending] = useState([]);
  const [latestActive, setLatestActive] = useState(true);
  const [trendingActive, setTrendingActive] = useState(false);

  const getNews = async () => {
    const response = await getAllNews();
    setSpecialNews(response.data.data);
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    const filteredLatest = specialNews.filter((e) => {
      return e.attributes?.state === "latest";
    });
    setLatest(filteredLatest);
    const filteredTrending = specialNews.filter((e) => {
      return e.attributes?.state === "trending";
    });
    setTrending(filteredTrending);
  }, [specialNews]);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  const latestSetter = () => {
    setLatestActive(true);
    setTrendingActive(false);
  };

  const trendingSetter = () => {
    setTrendingActive(true);
    setLatestActive(false);
  };

  const latestItems = latest.map((e) => (
    <section key={e.id}>
      <div className="image relative w-full h-[550px] rounded-lg mt-7">
        <Image
          src={
            process.env.NEXT_PUBLIC_STRAPI_KEY +
            e.attributes?.image?.data?.attributes?.url
          }
          width={0}
          height={0}
          objectFit="cover"
          fill
          sizes="100vw"
          className="absolute rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between mt-7">
        <span className="flex items-center gap-2 font-semibold text-sm">
          <p className="bg-orange-500 py-1 rounded-full px-3 text-white">
            {e.attributes.category?.data?.attributes?.subcategory}
          </p>
          <p>Top News</p>
        </span>

        <Share2 className="text-gray-500 w-6" />
      </div>

      <div className="flex items-center justify-between mt-7">
        <h1 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold w-[80%] sm:w-[70%] md:w-[60%]">
          <Link href={`/read/${e.id}`}>{e.attributes?.desc}</Link>
        </h1>

        <Link href={`/read/${e.id}`}>
          <ArrowUpRight className="bg-black text-white w-[4rem] rounded-full" />
        </Link>
      </div>

      <div className="flex items-center justify-between mt-7">
        <div className="profile flex items-center gap-2">
          <Image
            width={40}
            height={40}
            src={user}
            className="rounded-full p-[1px] bg-black"
            alt="Avatar"
          />

          <p className="text-sm font-semibold">By {e.attributes?.author}</p>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-gray-500">
          <h1>125K views</h1>•<h1>20m ago</h1>
        </span>
      </div>
    </section>
  ));

  const trendingItems = trending.map((e) => (
    <section key={e.id}>
      <div className="image relative w-full h-[550px] rounded-lg mt-7">
        <Image
          src={
            process.env.NEXT_PUBLIC_STRAPI_KEY +
            e.attributes?.image?.data?.attributes?.url
          }
          width={0}
          height={0}
          objectFit="cover"
          fill
          sizes="100vw"
          className="absolute rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between mt-7">
        <span className="flex items-center gap-2 font-semibold text-sm">
          <p className="bg-orange-500 py-1 rounded-full px-3 text-white">
            {e.attributes.category?.data?.attributes?.subcategory}
          </p>
          <p>Top News</p>
        </span>

        <Share2 className="text-gray-500 w-6" />
      </div>

      <div className="flex items-center justify-between mt-7">
        <h1 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold w-[80%] sm:w-[70%] md:w-[60%]">
          <Link href={`/read/${e.id}`}>{e.attributes?.desc}</Link>
        </h1>

        <Link href={`/read/${e.id}`}>
          <ArrowUpRight className="bg-black text-white w-[4rem] rounded-full" />
        </Link>
      </div>

      <div className="flex items-center justify-between mt-7">
        <div className="profile flex items-center gap-2">
          <Image
            width={40}
            height={40}
            src={user}
            className="rounded-full p-[1px] bg-black"
            alt="Avatar"
          />

          <p className="text-sm font-semibold">By {e.attributes?.author}</p>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-gray-500">
          <h1>125K views</h1>•<h1>20m ago</h1>
        </span>
      </div>
    </section>
  ));

  return (
    <main className="w-[94%] mt-20 mx-auto">
      <div className="flex mx-auto border-b-2 border-gray-300 justify-between">
        <span className="flex items-center gap-2 text-sm font-semibold">
          <h1
            onClick={trendingSetter}
            className={`${
              trendingActive ? "text-orange-500" : ""
            } cursor-pointer`}
          >
            Trending
          </h1>
          |
          <h1
            onClick={latestSetter}
            className={`${
              latestActive ? "text-orange-500" : ""
            } cursor-pointer`}
          >
            Latest
          </h1>
        </span>
        <h1 className="font-playfair italic text-3xl md:text-6xl font-bold">
          Headline news
        </h1>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {trendingActive ? trendingItems : latestItems}
        </Slider>
      </div>
    </main>
  );
}

export default Headline;
