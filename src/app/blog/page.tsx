"use client";
import React, { useState } from "react";
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { useTheme } from "next-themes";
import BlogModal from "@/components/Blog/BlogModal";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { UseStoreData } from "@/config/zustand/UseStoreData";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

const BlogPage = () => {
  const { image, title, tag } = UseStoreData();
  const { theme } = useTheme();
  const [content, setContent] = useState("You can edit here");
  const router = useRouter();

  const handlePostBlog = async () => {
    try {
      const res = await axios.post("http://localhost:8080/blog", {
        content: content,
        userImage: "https://github.com/shadcn.png",
        userName: "Khash-Erdene",
        label: tag,
        image: image,
        title: title,
      });
      if (res.status === 200) {
        toast.success("Амжилттай үүсгэлээ");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        toast.error("Алдаа гарлаа");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <Toaster position="top-right" />
      <MdEditor
        modelValue={content}
        onChange={setContent}
        language="en-US"
        theme={theme === "dark" ? "dark" : "light"}
      />
      <BlogModal />
      <div className="flex w-full justify-end">
        <Button onClick={handlePostBlog} className="w-48">
          Үүсгэх
        </Button>
      </div>
    </section>
  );
};

export default BlogPage;
