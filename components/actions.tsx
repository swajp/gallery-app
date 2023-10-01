"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function setFavoriteAction(public_id: string) {
  await cloudinary.v2.uploader.add_tag("favorite", [public_id]);
  revalidatePath("/gallery");
}
