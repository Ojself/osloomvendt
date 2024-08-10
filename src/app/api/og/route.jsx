import { ImageResponse } from 'next/og';
export const runtime = 'edge';

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const anton = fetch(new URL('./Anton-Regular.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer()
  );

  const antonData = await anton;

  return await new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <p
          style={{
            fontSize: '112px',

            color: '#A57AFF',
          }}
        >
          {searchParams.get('week')}
        </p>

        <h1
          style={{
            color: 'rgb(15, 10, 25)',
            fontFamily: 'Anton',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            background: 'white',
            fontSize: '232px',
            fontWeight: 'bold',
          }}
        >
          OSLO OMVENDT
        </h1>
        <p
          style={{
            fontSize: '112px',
            color: '#A57AFF',
          }}
        >
          {searchParams.get('range')}
        </p>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Anton',
          data: antonData,
          style: 'normal',
        },
      ],
    }
  );
}
