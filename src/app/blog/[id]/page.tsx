"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { MdEditor, MdPreview } from "md-editor-rt";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "md-editor-rt/lib/style.css";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Toaster, toast } from "sonner";

const page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [blogData, setBlogData] = useState<any>();
  const getData = async () => {
    const data = await axios.get(
      `http://localhost:8080/blog/${pathname.split("/")[2]}`,
    );
    if (data) {
      setBlogData(data.data);
    }
  };

  const handleDelete = async (id: number) => {
    const res = await axios.delete(
      `http://localhost:8080/blog/${blogData?.id}`,
    );
    if (res.status === 200) {
      toast.success("Successfully deleted");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="flex flex-col gap-3 p-20">
      <Toaster position="top-right" />
      <Badge className="w-fit">{blogData?.label}</Badge>
      <h2 className=" text-[36px] font-semibold">{blogData?.title}</h2>
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={blogData?.userImage} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-[12px] font-normal text-gray-400  lg:text-[16px]">
          {blogData?.userName}
        </p>
        <p className="text-[12px] font-light text-gray-400 lg:text-[16px]">
          December 22 2023
        </p>
      </div>
      {/* md blog post */}
      <Card>
        <CardContent className="pt-5">
          <MdPreview modelValue={blogData?.content} />
        </CardContent>
      </Card>
      <Button
        onClick={() => handleDelete(blogData.id)}
        variant="destructive"
        className="w-16 bg-red-500"
      >
        <Trash />
      </Button>
    </section>
  );
};

export default page;
