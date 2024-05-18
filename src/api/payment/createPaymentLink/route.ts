import { NextRequest, NextResponse } from "next/server";
import { Stripe } from 'stripe'
let stripe = new Stripe(process.env.STRIPE_SECRET_API ?? '')

let eu_price_id = 'price_1PHZvRRvCD4ylLqcexSw2yZ4'
let na_price_id = 'price_1PHbBVRvCD4ylLqcrpMqerCR'

export async function GET(request: NextRequest) {
    if (request.nextUrl.searchParams.get('location') == 'eu') {
        const paymentLink = await stripe.paymentLinks.create({
            line_items: [
                {
                price: eu_price_id,
                quantity: 1,
                },
            ],
        });
        return NextResponse.json(paymentLink)
    } else {
        const paymentLink = await stripe.paymentLinks.create({
            line_items: [
                {
                price: eu_price_id,
                quantity: 1,
                },
            ],
        });
        return NextResponse.json(paymentLink)
    }

    //TODO: Select a stripe payment...

}