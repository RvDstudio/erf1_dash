"use client"; // This indicates a client-side component

import { useState } from "react";

export default function ProfileImageUpload({ imageUrl }: { imageUrl: string }) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        window.location.reload(); // Reload to show the new image
      } else {
        console.error("Image upload failed:", data.error);
      }
    }
  }

  return (
    <div>
      <img
        src={imageUrl || "/images/default.png"}
        alt="Profile"
        width={90}
        height={90}
        className="rounded-md"
      />
      <form encType="multipart/form-data">
        <label className="block mt-4">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
          />
        </label>
      </form>
    </div>
  );
}
