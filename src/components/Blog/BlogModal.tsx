import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseStoreData } from "@/config/zustand/UseStoreData";

const BlogModal = () => {
  const { setImage, setTitle, setTag, tag, title, image } = UseStoreData();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[200px]" variant="outline">
          Additional Information
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[360px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Additional Information</DialogTitle>
          <DialogDescription>
            Add your additional information on your blog
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Title</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              defaultValue="Garchig"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Zurag Link</Label>
            <Input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              id="img"
              placeholder="https://"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col  gap-2">
            <Label htmlFor="username">Tag</Label>
            <Input
              onChange={(e) => setTag(e.target.value)}
              id="tag"
              placeholder="software"
              className="col-span-3"
              value={tag}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogModal;
