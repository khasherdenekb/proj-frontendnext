import React, { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import Image from "next/image";
import axios from "axios";

type BlogCardProp = {};

const BlogCard: FC<any> = ({ data }) => {
  console.log(data.image);

  return (
    <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
      <div className="relative w-full md:h-36 lg:h-48">
        <Image
          className=" h-full w-full object-cover object-center"
          src={data.image}
          alt="blog"
          layout="fill"
        />
      </div>
      <div className="p-6">
        <h1 className=" mb-3 text-lg font-medium text-gray-900">
          {data.title}
        </h1>
        <p className="mb-3 leading-relaxed">
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat.
        </p>
        <h2 className="pb-4">
          <Badge className="w-fit">{data.label}</Badge>
        </h2>
        <div className="flex items-center gap-2 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-[16px] font-normal text-gray-400">
            {data.userName}
          </p>
          <p className="text-[16px] font-light text-gray-400">August 20 2023</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
