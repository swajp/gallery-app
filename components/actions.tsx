"use server";
import { GalleryImage } from "@/app/gallery/page";
import cloudinary from "cloudinary";

export async function setFavoriteAction(
  public_id: string,
  isFavorited: boolean
) {
  if (isFavorited) {
    await cloudinary.v2.uploader.remove_tag("favorite", [public_id]);
    console.log("removed tag");
  } else {
    await cloudinary.v2.uploader.add_tag("favorite", [public_id]);
    console.log("added tag");
  }
}

export async function addImageToAlbum(image: GalleryImage, album: string) {
  await cloudinary.v2.api.create_folder(album);

  await cloudinary.v2.uploader.rename(
    image.public_id,
    `${album}/${image.public_id}`
  );
}
