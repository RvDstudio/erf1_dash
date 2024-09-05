"use client";
// components/CombinedTotalPrice.tsx
<<<<<<< HEAD
import { useTotalPrice } from "../context/TotalPriceContext";
=======
import { useTotalPrice } from "@/context/TotalPriceContext";
>>>>>>> 194c92f374ea076c64bca414e5bb9385181fa015

export default function CombinedTotalPrice() {
  const { getTotalPrice } = useTotalPrice();
  const totalPrice = getTotalPrice();

  return (
    <div className="">
      <h2 className="text-md">
        De totale Prijs is: €{" "}
        <span className="font-bold text-[#374c69]">
          {totalPrice.toFixed(2)}
        </span>
      </h2>
    </div>
  );
}
