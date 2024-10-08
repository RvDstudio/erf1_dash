"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { Zuivel } from "@/types"; // Assuming types are defined in a separate file

import { useTotalPrice } from "@/src/context/TotalPriceContext";
import { PlusIcon } from "lucide-react";
import { useSession } from "next-auth/react"; // Import useSession from NextAuth

interface ZuivelListProps {
  zuivel: Zuivel[];
  initialQuantities?: { [key: string]: number };
}

export default function ZuivelList({
  zuivel,
  initialQuantities = {},
}: ZuivelListProps) {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    initialQuantities
  );
  const { setTotalPrice } = useTotalPrice();
  const router = useRouter(); // Initialize useRouter
  const { data: session } = useSession(); // Get session data

  useEffect(() => {
    const total = zuivel.reduce((total, zuivel) => {
      const quantity = quantities[zuivel.id] || 0;
      return total + Number(zuivel.regular_price) * quantity;
    }, 0);
    setTotalPrice("zuivel", total);
  }, [quantities, zuivel, setTotalPrice]);

  const handleInputChange = (zuivelId: string, value: string) => {
    const quantity = parseInt(value, 10) || 0;
    setQuantities((prev) => ({
      ...prev,
      [zuivelId]: quantity,
    }));
  };

  const handleProductClick = (zuivelId: string) => {
    setQuantities((prev) => ({
      ...prev,
      [zuivelId]: (prev[zuivelId] || 0) + 1,
    }));
  };

  const handleOrder = async () => {
    if (!session) {
      // Handle case where user is not authenticated
      alert("You must be logged in to place an order.");
      return;
    }

    const selectedProducts = zuivel.filter((z) => quantities[z.id] > 0);

    await fetch("/api/storeOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${(session as any).accessToken}`, // Use access token from session with type casting
      },
      body: JSON.stringify({ selectedProducts, quantities }),
    });

    router.push("/dashboard/orders");
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {zuivel.map((zuivel: Zuivel) => {
          const stockStatusText =
            zuivel.stock_status === "instock"
              ? "Op voorraad"
              : "Niet op voorraad";
          const stockStatusColor =
            zuivel.stock_status === "instock"
              ? "bg-green-500/70"
              : "bg-red-500/70";
          return (
            <div
              key={zuivel.id}
              className="flex w-full items-center justify-between border border-gray-100 rounded-2xl bg-white p-1 shadow-3xl shadow-xs hover:shadow-xl ease-in-out duration-300 cursor-pointer dark:!bg-navy-700 dark:shadow-none mb-4"
              onClick={() => handleProductClick(zuivel.id)}
            >
              <div className="flex items-center">
                <div className="w-full">
                  <div>
                    <Image
                      className="h-[60px] w-[60px] md:w-[70px] md:h-[70px] rounded-lg"
                      src={zuivel.images[0].src}
                      alt="zuivel image"
                      loading="lazy"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <div className="pl-4 pr-4 flex flex-col w-full">
                <div className="text-sm md:text-base font-medium text-navy-700 dark:text-white mb-2">
                  {zuivel.name}
                </div>
                <div className="relative flex justify-between">
                  <div
                    className={`text-xs text-white px-2 py-0.5 rounded ${stockStatusColor}`}
                  >
                    {stockStatusText}
                  </div>
                  <div className="absolute right-0 -top-0 text-sm font-bold text-gray-700">
                    € {Number(zuivel.regular_price).toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                <input
                  type="text"
                  className="w-10 h-10 rounded-md bg-gray-100 text-center"
                  placeholder="0"
                  value={quantities[zuivel.id] || 0}
                  onChange={(e) => handleInputChange(zuivel.id, e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleOrder}
        className="flex items-center mt-4 pl-2 pr-4  py-1 text-sm bg-[#374c69] mb-6 text-white rounded-md"
      >
        <PlusIcon className="w-4 h-4 inline mr-1" />
        Bestellen
      </button>
    </div>
  );
}
