import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  const { access_token, sub } = body;

  if (!access_token || !sub) {
    return NextResponse.json(
      {
        message: `Missing values: sub: ${sub}, access_token: ${access_token}`,
      },
      { status: 400 }
    );
  }

  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${process.env.VIPPS_BASE_URL}/vipps-userinfo-api/userinfo/${sub}`,
    redirect: 'follow',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Merchant-Serial-Number': process.env.VIPPS_MSN,
      'Ocp-Apim-Subscription-Key': process.env.VIPPS_OCP_APIM_SUBSCRIPTION_KEY,
      Accept: 'application/json',
      'Vipps-System-Name': process.env.VIPPS_SYSTEM_NAME,
      'Vipps-System-Plugin-Name': process.env.VIPPS_SYSTEM_PLUGIN_NAME,
      'Vipps-System-Version': process.env.VIPPS_SYSTEM_VERSION,
      'Vipps-System-Plugin-Version': process.env.VIPPS_SYSTEM_PLUGIN_VERSION,
    },
  };

  try {
    const response = await axios(config);
    return NextResponse.json({ ...response.data }, { status: 200 });
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
