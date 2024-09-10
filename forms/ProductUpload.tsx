"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload } from "lucide-react";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    id: "",
    user_id: "",
    product_name: "",
    description: "",
    quantity: "",
    price: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);
    console.log("Image:", image);
    // Reset form after submission
    setFormData({
      id: "",
      user_id: "",
      product_name: "",
      description: "",
      quantity: "",
      price: "",
    });
    setImage(null);
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-[#374c69] mb-3">Product toevoegen</CardTitle>
        <CardDescription>
          Vul het onderstaande formulier in om een ​​nieuw product aan de
          database toe te voegen.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" placeholder="Enter product name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter product description"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="number" placeholder="Enter price" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="image">Product Image</Label>
            <Input id="image" type="file" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto bg-[#374c69] hover:bg-[#374c69]/90">
          Add Product
        </Button>
      </CardFooter>
    </Card>
  );
}
