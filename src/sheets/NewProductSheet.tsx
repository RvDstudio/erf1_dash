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
import { PlusCircle } from "lucide-react";
export default function NewProductSheet() {
  return (
    <Sheet>
      <SheetTrigger className="">
        <div className="flex items-center justify-center bg-[#374c69] text-xs text-white rounded px-6 h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Product
          </span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Card className="w-full max-w-xl border-none p-0 shadow-none">
            <CardHeader className="pl-0">
              <CardTitle className="text-[#374c69]">Add New Product</CardTitle>
              <CardDescription>
                Fill out the form to add a new product to the database.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form className="grid gap-4">
                <div className="grid gap-4">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" placeholder="Enter product name" />
                </div>
                <div className="grid gap-4">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description"
                  />
                </div>
                <div className="grid gap-4">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Enter product price"
                  />
                </div>
                <div className="grid gap-4">
                  <Label htmlFor="category">Category</Label>
                  <Select>
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
                <div className="grid gap-4">
                  <Label htmlFor="image">Product Image</Label>
                  <Input id="image" type="file" />
                </div>
              </form>
            </CardContent>
            <CardFooter className="p-0 mt-6">
              <Button className="mr-auto text-xs bg-[#374c69]">
                Save Product
              </Button>
            </CardFooter>
          </Card>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
