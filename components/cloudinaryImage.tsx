"use client";

import { CldImage } from "next-cloudinary";
import React, { startTransition, useTransition } from "react";
import { setFavoriteAction } from "./actions";
import { GalleryImage } from "@/app/gallery/page";

export default function CloudinaryImage({
  ...props
}: any & { imageData: GalleryImage }) {
  const [transition, startTransition] = useTransition();
  const { imageData } = props;
  const isFavorited = imageData.tags.includes("favorite");

  return (
    <div className="relative">
      <div
        className="bg-white cursor-pointer  p-2 absolute top-2 right-2 rounded-xl"
        onClick={() => {
          startTransition(() => {
            setFavoriteAction(imageData.public_id, isFavorited);
          });
        }}
      >
        {isFavorited ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            className="w-6 h-6  fill-red-500 hover:fill-transparent hover:stroke-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            className="w-6 h-6 stroke-black  hover:stroke-red-500 hover:fill-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        )}
      </div>
      <CldImage {...props} />
    </div>
  );
}
