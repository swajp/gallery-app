import UploadButton from "@/components/uploadButton";
import React from "react";
import cloudinary from "cloudinary";
import CloudinaryImage from "@/components/cloudinaryImage";

export type GalleryImage = {
  public_id: string;
  tags: string[];
};

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image ")
    .sort_by("public_id", "desc")
    .with_field("tags")
    .max_results(3)
    .execute()) as { resources: GalleryImage[] };

  console.log(results);

  return (
    <section className="mt-8">
      <div className="flex justify-between mb-8">
        <h1 className="text-5xl font-medium">Gallery</h1>
        <div>
          <UploadButton />
        </div>
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
