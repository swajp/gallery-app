import UploadButton from "@/components/uploadButton";
import React from "react";
import cloudinary from "cloudinary";
import CloudinaryImage from "@/components/cloudinaryImage";
import { get } from "http";
import ImageGrid from "@/components/imageGrid";

export type GalleryImage = {
  public_id: string;
  tags: string[];
};

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image ")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(20)
    .execute()) as { resources: GalleryImage[] };

  return (
    <section className="mt-8">
      <div className="flex justify-between mb-8">
        <h1 className="text-5xl font-medium">Gallery</h1>
        <UploadButton />
      </div>
      <ImageGrid
        getImage={(imageData: GalleryImage) => {
          return (
            <CloudinaryImage
              key={imageData.public_id}
              src={imageData.public_id}
              alt="Image"
              imageData={imageData}
              width="400"
              height="300"
            />
          );
        }}
        images={results.resources}
      />
    </section>
  );
}
