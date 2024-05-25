const { v4: uuidv4 } = require('uuid');
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  const { value, phoneNumber, access_token, reference, articleTitles } = body;

  if (!value || !phoneNumber || !access_token || !reference || !articleTitles) {
    return NextResponse.json(
      {
        message: `Missing values: value: ${value}, phoneNumber: ${phoneNumber}, access_token: ${access_token}, reference: ${reference}, articleTitles: ${articleTitles}`,
      },
      { status: 400 }
    );
  }

  const isProduction = process.env.NODE_ENV === 'production';
  let data = JSON.stringify({
    amount: {
      currency: 'NOK',
      value: parseInt(value, 10) * 100, // 100kr should be 10000
    },
    customer: {
      phoneNumber: isProduction
        ? phoneNumber
        : process.env.VIPPS_TEST_PHONE_NUMBER,
    },
    customerInteraction: 'CUSTOMER_NOT_PRESENT',
    paymentMethod: {
      type: 'WALLET',
    },
    profile: {
      scope: 'phoneNumber name address email',
    },
    reference: reference,
    returnUrl: `${process.env.SITE_URL}/orders?reference=${reference}`,
    userFlow: 'WEB_REDIRECT',
    paymentDescription: `Payment for Oslo Omvendt Merch: ${articleTitles}`,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${process.env.VIPPS_BASE_URL}/epayment/v1/payments`,
    redirect: 'follow',
    headers: {
      'Idempotency-Key': uuidv4(),
      'Ocp-Apim-Subscription-Key': process.env.VIPPS_OCP_APIM_SUBSCRIPTION_KEY,
      'Merchant-Serial-Number': process.env.VIPPS_MSN,
      'Vipps-System-Name': process.env.VIPPS_SYSTEM_NAME,
      'Vipps-System-Plugin-Name': process.env.VIPPS_SYSTEM_PLUGIN_NAME,
      'Vipps-System-Version': process.env.VIPPS_SYSTEM_VERSION,
      'Vipps-System-Plugin-Version': process.env.VIPPS_SYSTEM_PLUGIN_VERSION,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    data: data,
  };

  try {
    let response = await axios(config);
    return NextResponse.json({ ...response.data }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: 'Something happened', error: err.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
