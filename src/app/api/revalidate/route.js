import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';
import currentWeekNumber from 'current-week-number';

export async function POST(req) {
  try {
    const { isValidSignature, body } = await parseBody(req, 'nina-kraviz');

    if (!isValidSignature) {
      const message = 'Invalid signature';
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    }

    if (!body?.slug) {
      const message = 'Bad Request';
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    const staleRoute = `/week/${currentWeekNumber()}`;
    revalidatePath(staleRoute);
    const message = `Updated route: ${staleRoute}`;
    return NextResponse.json({ body, message });
  } catch (err) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
