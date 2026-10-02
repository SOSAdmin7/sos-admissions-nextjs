import { NextResponse } from "next/server";
import { CONTACT_FORM } from "@/data/forms";
export async function POST() {
  return NextResponse.json(
    {
      error: "Please use the SOS Admissions contact form.",
      formUrl: CONTACT_FORM,
    },
    { status: 410 },
  );
}
