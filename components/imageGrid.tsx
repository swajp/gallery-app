import { GalleryImage } from "@/app/gallery/page";
import React from "react";
import CloudinaryImage from "./cloudinaryImage";

export default function ImageGrid({ images }: { images: GalleryImage[] }) {
  function getColumns(colIndex: number) {
    return images.filter((resource, index) => index % 4 === colIndex);
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, index) => (
          <div key={index} className="flex flex-col gap-4">
            {column.map((image) => (
              <CloudinaryImage
                key={image.public_id}
                src={image.public_id}
                alt="Image"
                imageData={image}
                width="400"
                height="300"
              />
            ))}
          </div>
        )
      )}
    </div>
  );
}
