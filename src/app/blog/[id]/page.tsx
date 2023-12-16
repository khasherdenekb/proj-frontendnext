import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="flex flex-col gap-3 p-20">
      <Badge className="w-fit">Technology</Badge>
      <h2 className=" text-[36px] font-semibold">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h2>
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-[12px] font-normal text-gray-400  lg:text-[16px]">
          John Smith
        </p>
        <p className="text-[12px] font-light text-gray-400 lg:text-[16px]">
          August 20 2023
        </p>
      </div>
      {/* md blog post */}
    </section>
  );
};

export default page;
