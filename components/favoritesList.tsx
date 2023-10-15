"use client";

import React, { useEffect, useState } from "react";
import CloudinaryImage from "@/components/cloudinaryImage";
import { GalleryImage } from "@/app/gallery/page";
import ImageGrid from "./imageGrid";

export default function FavoriteList({
  initialResources,
}: {
  initialResources: GalleryImage[];
}) {
  const [resources, setResources] = useState(initialResources);
  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <ImageGrid images={resources} />
    <div className="grid grid-cols-4 gap-4">
      {resources.map((image) => (
        <CloudinaryImage
          key={image.public_id}
          src={image.public_id}
          alt="Image"
          imageData={image}
          onUnfavorited={(unheratedResource: any) => {
            setResources((resources) =>
              resources.filter(
                (resource) => resource.public_id !== unheratedResource.public_id
              )
            );
          }}
          width="400"
          height="300"
        />
      ))}
    </div>
  );
}
