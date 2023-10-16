import { GalleryImage } from "@/app/gallery/page";
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
import { FolderPlus } from "lucide-react";
import { useState } from "react";
import { addImageToAlbum } from "./actions";

export function AddToAlbum({ image }: { image: GalleryImage }) {
  const [albumName, setAlbumName] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="ghost">
          <FolderPlus className="mr-2 h-4 w-4" />
          <span>Add to album</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to album</DialogTitle>
          <DialogDescription>
            Add this image to an existing album or create a new one.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
              onChange={(e) => setAlbumName(e.currentTarget.value)}
              id="albumName"
              defaultValue={albumName}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={async () => {
              setOpen(false);
              await addImageToAlbum(image, albumName);
            }}
            type="submit"
          >
            Add to album
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
