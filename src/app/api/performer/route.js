import { client } from '@/lib/sanity/sanityClient';
import { NextResponse } from 'next/server';

export async function POST(request) {
  if (process.NODE_ENV !== 'development') {
    return NextResponse.json({ message: 'Not allowed' }, { status: 401 });
  }
  try {
    const body = await request.json();

    const newPerformer = {
      _type: 'performer',
      name: body.name,
      performerType: body.performerType || 'Person',
      members: body.members || [],
      realName: body.realName || '',
      aliases: body.aliases || [],
      country: body.country || [],
      shortDescription: body.shortDescription || '',
      description: body.description || '',
      raId: body.raId || '',
      urls: body.urls || [],
    };

    await client.create(newPerformer);

    return NextResponse.json({ message: 'Performer successfully created' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Something went wrong', error: err });
  }
}
