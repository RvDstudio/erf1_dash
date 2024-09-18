import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/src/components/ui/select";
import { Button } from "@/src/components/ui/button";
export default function NewProductSheet() {
  return (
    <Sheet>
      <SheetTrigger className="bg-black text-white px-4 py-3 rounded text-xs font-medium">
        Add New Product
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Card className="w-full max-w-xl border-none p-0 shadow-none">
            <CardHeader className="pl-0">
              <CardTitle>Add New Product</CardTitle>
              <CardDescription>
                Fill out the form to add a new product to the database.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form className="grid gap-4">
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
                <div className="grid gap-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Enter product price"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select id="category">
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="home">Home</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="image">Product Image</Label>
                  <Input id="image" type="file" />
                </div>
              </form>
            </CardContent>
            <CardFooter className="p-0 mt-6">
              <Button className="ml-auto">Save Product</Button>
            </CardFooter>
          </Card>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
