"use client";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  console.log(session);

  if (status === "authenticated" && session?.user?.role === "isAdmin") {
    return <p>You are an admin, welcome!</p>;
  }

  return <p>You are not authorized to view this page!</p>;
}
