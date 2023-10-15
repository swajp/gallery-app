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
    <ImageGrid
      images={resources}
      getImage={(imageData: GalleryImage) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            src={imageData.public_id}
            alt="Image"
            imageData={imageData}
            onUnfavorited={(unheratedResource: any) => {
              setResources((resources) =>
                resources.filter(
                  (resource) =>
                    resource.public_id !== unheratedResource.public_id
                )
              );
            }}
            width="400"
            height="300"
          />
        );
      }}
    />
  );
}
