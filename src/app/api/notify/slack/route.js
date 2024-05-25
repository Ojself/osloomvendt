import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { notificationType, data } = body;
    const env = process.env.NEXT_PUBLIC_ENV;

    let text = `Environment ${env} \\n`;
    if (env === 'production') {
      text = ' ⭐️ ' + text;
    }

    switch (notificationType) {
      case 'new_suggestion':
        text += `New suggestion: *${data}* `;
        break;
      case 'new_purchase':
        text += `New purchase created: *${data}* `;
        break;
      case 'event_request':
        text += `New request to api/events! IP:*${data}* `;
        break;
      default:
        return NextResponse.json(
          JSON.stringify({
            success: false,
            message: 'Invalid notification type: ' + notificationType,
          }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
    }

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: process.env.SLACK_NOTIFY_WEB_HOOK,
      headers: {
        'Content-Type': 'application/json',
      },
      data: `{"text":"${text}"}`,
    };

    try {
      await axios(config);
    } catch (e) {
      console.error('BACKEND ERROR:', e);
      return NextResponse.json({
        success: false,
        message: 'Something happened',
      });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('REQUEST ERROR:', e);
    return NextResponse.json({
      success: false,
      message: 'Invalid request body',
    });
  }
}
