import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const { serviceId, serviceName, price, customerName, customerEmail, customerPhone } = await request.json();

    if (!serviceId || !serviceName || !price) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sos-admissions-nextjs.vercel.app';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: customerEmail || undefined,
      metadata: {
        customerName: customerName || '',
        customerPhone: customerPhone || '',
        serviceId,
      },
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: serviceName,
              description: customerName ? `Client: ${customerName}` : undefined,
            },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${siteUrl}/thank-you-payment?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/get-started`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
