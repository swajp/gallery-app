import UploadButton from "@/components/uploadButton";
import React from "react";
import cloudinary from "cloudinary";
import CloudinaryImage from "@/components/cloudinaryImage";

type GalleryImage = {
  public_id: string;
};

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image ")
    .sort_by("public_id", "desc")
    .max_results(3)
    .execute()) as { resources: GalleryImage[] };

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
          <div key={index}>
            <CloudinaryImage
              key={image.public_id}
              src={image.public_id}
              alt="Image"
              width="400"
              height="300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
