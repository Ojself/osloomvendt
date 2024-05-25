import { NextResponse } from 'next/server';
import { ServerClient } from 'postmark';

export async function POST(request) {
  const { text, subject = 'New subject' } = await request.json();

  const client = new ServerClient(process.env.PM_API_KEY);

  try {
    const emailResponse = await client.sendEmail({
      From: 'hei@osloomvendt.no',
      To: 'hei@osloomvendt.no',
      Subject: subject,
      TextBody: text,
    });
    return NextResponse.json({ ...emailResponse });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      message: 'Something happened',
      error: err.message,
    });
  }
}
