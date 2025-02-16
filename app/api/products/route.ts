// app/api/products/route.ts

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const product = await prisma.product.findMany();
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json(
            {error: 'Failed to fetch products'},
            { status: 500}
        ) 
    }
}