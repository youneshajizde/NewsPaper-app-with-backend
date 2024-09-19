"use client";
import { Plus } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import Opinions from "./Opinions";
import News from "./News";
import { getAllNews } from "@/lib/GlobalApi";

function Category({ styles, title }) {
  const [toOpen, setToOpen] = useState(false);
  const contentRef = useRef(null);
  const [allNews, setAllNews] = useState([]);
  const [culture, setCulture] = useState([]);
  const [sports, setSports] = useState([]);
  const [business, setBusiness] = useState([]);
  const getNews = async () => {
    try {
      const response = await getAllNews();
      const newsData = response.data.data;
      setAllNews(newsData);

      const filteredCulture = newsData.filter((e) => {
        return (
          e.attributes.category?.data?.attributes?.subcategory === "culture"
        );
      });
      setCulture(filteredCulture);

      const filteredSports = newsData.filter((e) => {
        return (
          e.attributes.category?.data?.attributes?.subcategory === "sports"
        );
      });
      setSports(filteredSports);

      const filteredBusiness = newsData.filter((e) => {
        return (
          e.attributes.category?.data?.attributes?.subcategory === "business"
        );
      });
      setBusiness(filteredBusiness);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => {
    setToOpen((prev) => !prev);
  };

  useEffect(() => {
    const content = contentRef.current;
    if (toOpen) {
      getNews();
      content.style.maxHeight = `${content.scrollHeight}px`;
    } else {
      content.style.maxHeight = "0";
    }
  }, [toOpen]);

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between border-b-2 border-gray-400 py-1">
        <h1
          onClick={handleOpen}
          className={`font-playfair text-5xl font-bold italic cursor-pointer ${styles}`}
        >
          {title}
        </h1>
        <Plus
          className="border-2 py-1 rounded-full cursor-pointer"
          onClick={handleOpen}
        />
      </div>
      <div
        ref={contentRef}
        className={`transition-max-height duration-500 ease-in-out overflow-hidden`}
        style={{ maxHeight: "10" }}
      >
        {title === "Opinion" && <Opinions />}
        {(title === "News" && <News allOfIt={allNews} />) ||
          (title === "Culture" && <News allOfIt={culture} />) ||
          (title === "Sports" && <News allOfIt={sports} />) ||
          (title === "Business" && <News allOfIt={business} />)}
      </div>
    </section>
  );
}

export default Category;
