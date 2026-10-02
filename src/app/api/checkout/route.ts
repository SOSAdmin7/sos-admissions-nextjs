import { NextResponse } from "next/server";
export async function POST() {
  return NextResponse.json(
    {
      error: "Please use the SOS Admissions order forms.",
      orderUrl: "/payment/",
    },
    { status: 410 },
  );
}
