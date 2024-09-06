import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/database/index";
import { products } from "@/database/schema";
import { sql } from "drizzle-orm";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const userId = searchParams.get("user_id");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const userProducts = await db.select()
      .from(products)
      .where(sql`${products.user_id} = ${userId}`);

    return NextResponse.json({ products: userProducts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
}
