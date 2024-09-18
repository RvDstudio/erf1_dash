import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/src/components/ui/dropdown-menu";
import NewProductSheet from "../sheets/NewProductSheet";

export default function WidgetToolbar() {
  return (
    <div className="flex justify-between items-center py-4">
      {/* Left Side: Tabs for Widgets */}
      <div className="flex space-x-1 rounded">
        <Input placeholder="Search products..." className="w-48" />
      </div>

      {/* Right Side: Search and Sort */}
      <div className="flex space-x-4 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="px-4 py-2 text-xs">Sort by</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Most Recent</DropdownMenuItem>
            <DropdownMenuItem>Alphabetical</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* New Product Button */}
        <NewProductSheet />
      </div>
    </div>
  );
}
