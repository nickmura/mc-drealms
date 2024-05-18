
import { NextRequest, NextResponse } from "next/server";

import { Stripe } from 'stripe'
let stripe = new Stripe(process.env.STRIPE_SECRET_API ?? '')

let eu_price_id = 'price_1PHZvRRvCD4ylLqcexSw2yZ4'
let na_price_id = 'price_1PHbBVRvCD4ylLqcrpMqerCR'

export async function GET(request: NextRequest) { 
    // const paymentLink = await stripe.paymentLinks.retrieve(request.nextUrl.searchParams.get('plink') ?? '');
    const sessions = await stripe.checkout.sessions.list({
        payment_link: request.nextUrl.searchParams.get('plink') ?? '',
      });
      return NextResponse.json(sessions)
    //TODO: Select a stripe payment...

}