import Image from "next/image";
import Header from "./_component/Header";
import Navbar from "./_component/Navbar";

import Categories from "./_component/Categories";
import Headline from "./_component/Headline";

export default function Home() {
  return (
    <main className="">
      <Headline/>
      <Categories />
    </main>
  );
}
