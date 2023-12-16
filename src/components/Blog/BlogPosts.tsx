import React from "react";
import BlogCard from "./BlogCard";

type Props = {};

const BlogPosts = (props: Props) => {
  let array = [
    "Apple",
    "Banana",
    "Carrot",
    "Dog",
    "Elephant",
    "Fish",
    "Guitar",
    "Hat",
    "Ice Cream",
    "Jellyfish,",
  ];
  return (
    <section className="h-full py-40">
      <h2 className="text-[24px]  font-bold">Latest Posts</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {array.map((el) => (
          <div key={el}>
            <BlogCard />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
