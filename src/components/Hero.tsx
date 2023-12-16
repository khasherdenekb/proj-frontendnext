import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="py-10">
      <div className="relative h-[400px] w-full lg:h-[600px]">
        <Image
          className="rounded-2xl"
          src={
            "https://cutewallpaper.org/21/anime-world-wallpaper/Wallpaper-Anime-girl-fantasy-world-3840x2160-UHD-4K-Picture-.jpg"
          }
          alt="image"
          fill
        />
        <Card className="absolute -bottom-14 left-5 flex h-[200px] w-[320px] gap-6 p-3 lg:left-14 lg:h-auto lg:w-[598px] lg:p-10">
          <CardContent className="flex flex-col gap-6">
            <Badge className="w-fit">Technology</Badge>
            <h1 className="text-[13px] font-semibold lg:text-[36px]">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h1>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-[12px] font-normal text-gray-400  lg:text-[16px]">
                John Smith
              </p>
              <p className="text-[12px] font-light text-gray-400 lg:text-[16px]">
                August 20 2023
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
