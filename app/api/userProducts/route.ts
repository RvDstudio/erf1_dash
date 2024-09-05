// app/api/userProducts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {db} from "@/database/index";
import { products } from "@/database/schema";
import { sql } from "drizzle-orm"; // Ensure this is correctly imported

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("user_id");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Use raw SQL or a different Drizzle query method if needed
    const userProducts = await db.select()
      .from(products)
      .where(sql`${products.user_id} = ${userId}`);

    return NextResponse.json({ products: userProducts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
}
