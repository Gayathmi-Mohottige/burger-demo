import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

const md5 = (s: string) => crypto.createHash("md5").update(s).digest("hex");

// Generates the PayHere 'hash' server-side so the merchant secret is never
// exposed to the browser. The client sends the exact orderId/amount/currency
// it will pass to PayHere, and gets back { merchantId, hash }.
export async function POST(req: NextRequest) {
  const merchantId = process.env.PAYHERE_MERCHANT_ID;
  const merchantSecret = process.env.PAYHERE_MERCHANT_SECRET;

  if (!merchantId || !merchantSecret) {
    return NextResponse.json(
      { error: "PayHere is not configured. Add keys to .env.local." },
      { status: 500 }
    );
  }

  const { orderId, amount, currency } = await req.json();
  if (!orderId || !amount || !currency) {
    return NextResponse.json({ error: "Missing parameters." }, { status: 400 });
  }

  const amountFormatted = Number(amount).toFixed(2);
  const hashedSecret = md5(merchantSecret).toUpperCase();
  const hash = md5(
    merchantId + orderId + amountFormatted + currency + hashedSecret
  ).toUpperCase();

  return NextResponse.json({ merchantId, hash });
}
