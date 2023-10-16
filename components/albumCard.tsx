import { Folder } from "@/app/albums/page";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function AlbumCard({ folder }: { folder: Folder }) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>All your {folder.name} images.</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <Link href={`/albums/${folder.name}`}>View album</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
