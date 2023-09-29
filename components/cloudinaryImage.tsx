"use client";

import { CldImage } from "next-cloudinary";
import React from "react";

export default function CloudinaryImage({ public_id }: { public_id: string }) {
  return <CldImage src={public_id} alt="Image" width="500" height="500" />;
}
