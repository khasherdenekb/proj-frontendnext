"use client";
import React, { useState } from "react";
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { useTheme } from "next-themes";
import BlogModal from "@/components/Blog/BlogModal";
import { Button } from "@/components/ui/button";

type Props = {};

const BlogPage = (props: Props) => {
  const { theme } = useTheme();
  const [text, setText] = useState("You can edit here");
  return (
    <section className="flex flex-col gap-4">
      <MdEditor
        modelValue={text}
        onChange={setText}
        language="en-US"
        theme={theme === "dark" ? "dark" : "light"}
      />
      <BlogModal />
      <div className="flex w-full justify-end">
        <Button className="w-48">Үүсгэх</Button>
      </div>
    </section>
  );
};

export default BlogPage;
