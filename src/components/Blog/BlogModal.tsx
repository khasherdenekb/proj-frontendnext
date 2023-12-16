import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";
import { tags } from "@/config/tag";

type Props = {};

const BlogModal = (props: Props) => {
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
            <Input id="title" defaultValue="Garchig" className="col-span-3" />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Zurag Link</Label>
            <Input id="title" placeholder="https://" className="col-span-3" />
          </div>
          <div className="flex flex-col  gap-2">
            <Label htmlFor="username">Tag</Label>
            {tags.map((tag, ind) => (
              <div key={ind} className="flex items-center gap-2">
                <Checkbox />
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BlogModal;
