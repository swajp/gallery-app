import UploadButton from "@/components/uploadButton";
import React from "react";
import cloudinary from "cloudinary";
import CloudinaryImage from "@/components/cloudinaryImage";
import { GalleryImage } from "../gallery/page";

export default async function FavoritePage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite ")
    .sort_by("public_id", "desc")
    .with_field("tags")
    .max_results(5)
    .execute()) as { resources: GalleryImage[] };

  return (
    <section className="mt-8">
      <div className="flex justify-between mb-8">
        <h1 className="text-5xl font-medium">Favorites</h1>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {results.resources.map((image, index) => (
          <CloudinaryImage
            key={image.public_id}
            src={image.public_id}
            alt="Image"
            publicId={image.public_id}
            imageData={image}
            width="400"
            height="300"
          />
        ))}
      </div>
    </section>
  );
}
