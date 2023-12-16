"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import { useRouter } from "next/navigation";

const BlogPosts = () => {
  const router = useRouter();
  const [blogData, setBlogData] = useState<any>();
  const getData = async () => {
    const data = await axios.get("http://localhost:8080/blog");
    if (data) {
      setBlogData(data.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="h-full py-40">
      <h2 className="text-[24px]  font-bold">Latest Posts</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogData &&
          blogData?.map((el: any, ind: any) => (
            <div
              className="cursor-pointer"
              onClick={() => router.push(`blog/${el.id}`)}
              key={ind}
            >
              <BlogCard data={el} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default BlogPosts;
