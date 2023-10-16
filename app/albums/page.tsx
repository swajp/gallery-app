import React from "react";
import cloudinary from "cloudinary";
import AlbumCard from "@/components/albumCard";

export type Folder = {
  name: string;
  path: string;
};

export default async function AlbumsPage() {
  const folders = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  console.log(folders);
  return (
    <section className="mt-8">
      <div className="flex justify-between mb-8">
        <h1 className="text-5xl font-medium">Albums</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {folders.folders.map((folder) => (
          <AlbumCard folder={folder} />
        ))}
      </div>
    </section>
  );
}
