import React from "react";
import Category from "./Category";

function Categories() {
  return (
    <main className="w-[94%] mx-auto mt-10">
      <Category styles={"ml-[0%]"} title={"Opinion"} />
      <Category styles={"ml-[20%]"} title={"News"} />
      <Category styles={"ml-[32%]"} title={"Culture"} />
      <Category styles={"ml-[5%]"} title={"Sports"} />
      <Category styles={"ml-[50%]"} title={"Business"} />
    </main>
  );
}

export default Categories;
