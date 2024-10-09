import { revalidatePath, revalidateTag } from 'next/cache';
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

    if (body._type === 'event') {
      if (!body?.startDate) {
        const message = 'Bad Request';
        return new Response(JSON.stringify({ message, body }), { status: 400 });
      }
      const currentYear = new Date().getFullYear();
      /* TODO!? */
      const staleRoute = `/d/${currentYear}/${currentWeekNumber(body.startDate)}`;
      revalidatePath(staleRoute);
      const message = `Updated route: ${staleRoute}`;
      return NextResponse.json({ body, message });
    }
    if (body._type === 'product') {
      const staleTag = `product`;
      revalidateTag('product');
      const message = `Updated tag: ${staleTag}`;
      return NextResponse.json({ body, message });
    }
    const message = 'Invalid type';
    return new Response(JSON.stringify({ message, body }), { status: 400 });
  } catch (err) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}

export async function GET() {
  const message = 'Invalid method: GET';
  return new Response(JSON.stringify({ message }), {
    status: 401,
  });
}

export async function PATCH() {
  const message = 'Invalid method: PATCH';
  return new Response(JSON.stringify({ message }), {
    status: 401,
  });
}
export async function PUT() {
  const message = 'Invalid method: PUT';
  return new Response(JSON.stringify({ message }), {
    status: 401,
  });
}
export async function OPTIONS() {
  const message = 'Invalid method: OPTIONS';
  return new Response(JSON.stringify({ message }), {
    status: 401,
  });
}
export async function DELETE() {
  const message = 'Invalid method: DELETE';
  return new Response(JSON.stringify({ message }), {
    status: 401,
  });
}
