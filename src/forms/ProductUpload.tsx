import { auth } from "@/auth";
import { redirect } from "next/navigation";
import WidgetToolbar from "../components/WidgetToolbar";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import {
  File,
  ListFilter,
  PlusCircle,
  SearchIcon,
  TrashIcon,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import NewProductSheet from "../sheets/NewProductSheet";
import { Input } from "../components/ui/input";

export default async function Page() {
  const session = await auth();

  // Check if session exists and the user is authenticated
  if (!session || !session.user) {
    return <div>Not authenticated</div>;
  }

  // Check if the user is an admin
  if (!session.user.isAdmin) {
    // Redirect non-admin users to an unauthorized page
    redirect("/login");
    return null; // Ensure no rendering occurs after redirection
  }

  // If authenticated and isAdmin, render the page content
  return (
    <div className="w-full pb-10 bg-[#f9f9f9] h-screen">
      <h2 className="mb-4 text-2xl">Products</h2>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center">
              <div className="">
                <div className="w-2/4 md:w-full max-w-sm relative">
                  <SearchIcon className="w-4 h-4 absolute left-2.5 top-2.5 text-gray-500 dark:text-gray-400" />
                  <Input type="search" placeholder="Search" className="pl-8" />
                </div>
              </div>
              <div className="">
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                          Filter
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Active
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Archived
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Export
                    </span>
                  </Button>
                  <NewProductSheet />
                </div>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px] hidden md:table-cell">
                  Image
                </TableHead>
                <TableHead className="max-w-[150px]">Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="hidden md:table-cell">
                  <img
                    src="/images/product1.jpg"
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    width="64"
                    height="64"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  Biologische sinaasappel vla
                </TableCell>
                <TableCell>2</TableCell>
                <TableCell>$120.00</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Button variant="outline" size="icon">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="hidden md:table-cell">
                  <img
                    src="/images/product2.jpg"
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    width="64"
                    height="64"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  Kwark met vruchten 565ml
                </TableCell>
                <TableCell>3</TableCell>
                <TableCell>$49.00</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Button variant="outline" size="icon">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="hidden md:table-cell">
                  <img
                    src="/images/placeholder.svg"
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    width="64"
                    height="64"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  Biologische sinaasappel vla
                </TableCell>
                <TableCell>2</TableCell>
                <TableCell>$120.00</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Button variant="outline" size="icon">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="hidden md:table-cell">
                  <img
                    src="/images/placeholder.svg"
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    width="64"
                    height="64"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  Kwark met vruchten 565ml
                </TableCell>
                <TableCell>3</TableCell>
                <TableCell>$49.00</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Button variant="outline" size="icon">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
