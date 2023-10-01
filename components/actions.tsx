"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

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
  await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath("/gallery");
}
