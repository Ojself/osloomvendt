import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST() {
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${process.env.VIPPS_BASE_URL}/accesstoken/get`,
    headers: {
      client_id: process.env.VIPPS_CLIENT_ID,
      client_secret: process.env.VIPPS_CLIENT_SECRET,
      'Ocp-Apim-Subscription-Key': process.env.VIPPS_OCP_APIM_SUBSCRIPTION_KEY,
    },
  };

  try {
    const response = await axios(config);
    return NextResponse.json({ ...response.data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      message: 'Something happened',
      error: err.message,
    });
  }
}

export async function GET(request) {
  return NextResponse.json({ message: 'Method not allowed' });
}
