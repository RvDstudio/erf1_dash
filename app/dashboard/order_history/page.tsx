"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

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
      // Changed 'user' to 'session?.user'
      const fetchUserProducts = async () => {
        try {
          const response = await fetch(
            `/api/userProducts?user_id=${session.user}`
          );
          const data = await response.json();

          if (response.ok) {
            setProducts(data.products);
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
      <h1 className="text-2xl text-[#374c69]  mb-4">Recente bestellingen</h1>
      {errorMessage && <div className="text-red-600">{errorMessage}</div>}
      <div className="">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <Image
                        className="h-10 w-10 rounded-md"
                        src={product.image_url}
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {product.product_name}
                      </div>
                      <div className="text-sm leading-5 text-gray-500">
                        bernardlane@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    Director
                  </div>
                  <div className="text-sm leading-5 text-gray-500">
                    Human Resources
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Op Voorraad
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#374c69] text-white cursor-pointer">
                    Opnieuw Bestellen
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
