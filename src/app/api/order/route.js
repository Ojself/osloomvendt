import { client } from '@/lib/sanity/sanityClient';
import { NextResponse } from 'next/server';

const referenceQuery = `*[_type == 'order' && $reference == reference ]`;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const referenceFromParams = searchParams.get('reference');

  const params = { reference: referenceFromParams };

  try {
    const sanityOrder = await client.fetch(referenceQuery, params);
    return NextResponse.json({ success: true, response: sanityOrder });
  } catch (e) {
    console.error('ORDER.js', e);
    return NextResponse.json({
      success: false,
      message: 'Something happened',
      response: e,
    });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      reference,
      amount,
      paymentType,
      boughtProducts,
      country,
      county,
      email,
      name,
      streetAddress,
      city,
      zipCode,
      mobile,
    } = body;

    await client.create({
      _type: 'order',
      vippsStatus: 'CREATED',
      reference,
      amount: amount.toString(),
      paymentType,
      boughtProducts,
      /* customer information */
      country,
      county,
      email,
      name,
      streetAddress,
      city,
      zipCode,
      mobile,
    });

    return NextResponse.json({ message: 'Order successfully created' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Something happened', error: err });
  }
}
