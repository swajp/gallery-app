import UploadButton from "@/components/uploadButton";
import React from "react";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import CloudinaryImage from "@/components/cloudinaryImage";

type GalleryImage = {
  public_id: string;
};

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image ")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute()) as { resources: GalleryImage[] };

  return (
    <section className="mt-8">
      <div className="flex justify-between">
        <h1 className="text-5xl font-medium">Gallery</h1>
        <div>
          <UploadButton />

          <div className="grid grid-cols-4 gap-4">
            {results.resources.map((image) => (
              <div>
                <CloudinaryImage public_id={image.public_id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
