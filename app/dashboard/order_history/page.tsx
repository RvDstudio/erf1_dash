"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { NextResponse } from "next/server";

type Product = {
  id: string;
  product_name: string;
  description: string;
  short_description: string;
  quantity: string;
  price: string;
  image_url: string;
  createdAt: string;
};

export default function UserProducts() {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (session?.user) {
      const fetchUserProducts = async () => {
        try {
          // Ensure session.user is defined before using it
          const userId = session.user?.id; // Safely access user.id
          const response = await fetch(`/api/userProducts?user_id=${userId}`);
          const data = await response.json();

          console.log("API Response:", data); // Log the API response

          if (response.ok && data.products) {
            // Combine products with the same product_name
            const combinedProducts = data.products.reduce(
              (acc: Product[], product: Product) => {
                const existingProduct = acc.find(
                  (p) => p.product_name === product.product_name
                );
                if (existingProduct) {
                  existingProduct.quantity = (
                    parseInt(existingProduct.quantity) +
                    parseInt(product.quantity)
                  ).toString();
                } else {
                  acc.push({ ...product, quantity: product.quantity }); // Ensure quantity is set
                }
                return acc;
              },
              []
            );
            console.log("Combined Products:", combinedProducts); // Log combined products
            setProducts(combinedProducts);
          } else {
            setErrorMessage(data.error || "Failed to fetch products.");
          }
        } catch (error) {
          console.error("Error fetching user products:", error);
          setErrorMessage("Error fetching user products.");
        }
      };

      fetchUserProducts();
    }
  }, [session]);

  return (
    <div className="p-4">
      <h1 className="text-2xl text-[#374c69] mb-4">Recente bestellingen</h1>
      {errorMessage && <div className="text-red-600">{errorMessage}</div>}
      <div>
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Status</th>
              <th>Role</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="flex items-center">
                    <Image
                      src={product.image_url}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div className="ml-4">
                      <div>{product.product_name}</div>
                      <div>bernardlane@example.com</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>Director</div>
                  <div>Human Resources</div>
                </td>
                <td>
                  <span>Op Voorraad</span>
                </td>
                <td>
                  <span>Opnieuw Bestellen</span>
                </td>
                <td>
                  <div>{product.quantity}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
