import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const webform_data = await request.json();

  const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/wdapi/webform/submit`;

  const body = {
    webform_id: "contact",
    webform_data,
  };

  const res = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const form = await res.json();

  return NextResponse.json({ webform_data, form });
}
