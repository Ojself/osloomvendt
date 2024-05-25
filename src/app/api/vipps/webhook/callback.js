import { client } from '../../../../lib/sanityClient';
import { NextResponse } from 'next/server';
const postmark = require('postmark');

export async function POST(request) {
  const body = await request.json();
  const { msn, reference, success, name } = body;

  if (msn !== process.env.VIPPS_MSN) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  if (!reference || !success || !name) {
    return NextResponse.json({ message: 'Missing values' }, { status: 400 });
  }

  const emailClient = new postmark.ServerClient(process.env.PM_API_KEY);

  try {
    const query = `*[_type == 'order' && $reference == reference]`;
    const params = { reference };

    const sanityOrders = await client.fetch(query, params);
    const sanityOrder = Array.isArray(sanityOrders) ? sanityOrders[0] : null;

    if (!sanityOrder) {
      return NextResponse.json({ message: 'Order not found' }, { status: 404 });
    }

    await emailClient.sendEmail({
      From: 'hei@osloomvendt.no',
      To: 'hei@osloomvendt.no',
      Subject: 'Vipps webhook triggered!',
      TextBody: `VIPPSSTATUS: ${name} \n Order: ${JSON.stringify(sanityOrder)}`,
    });

    const response = await client
      .patch(sanityOrder._id)
      .set({ vippsStatus: name })
      .commit();

    return NextResponse.json({ ...response }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: 'Something happened', error: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
