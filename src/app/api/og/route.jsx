import { ImageResponse } from 'next/og';

export async function GET(request) {
  const { searchParams } = new URL(request.url);

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
            fontSize: '72',
            color: 'purple',
          }}
        >
          {searchParams.get('week')}
        </p>

        <h1
          style={{
            color: 'rgb(15, 10, 25)',

            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            background: 'white',
            fontSize: '132px',
            fontWeight: 'bold',
          }}
        >
          OSLO OMVENDT
        </h1>
        <p
          style={{
            fontSize: '72',
            color: 'purple',
          }}
        >
          {searchParams.get('range')}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
