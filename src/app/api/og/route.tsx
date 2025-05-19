// app/api/og/route.tsx
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

// For static export, we can't use dynamic parameters
export const dynamic = 'error';

export async function GET(request: NextRequest) {
  // For static export, we'll just use default values instead of searchParams
  const title = 'Uplink Protocol';
  const description = 'Logic as a Service';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          color: 'white',
          fontSize: 60,
          fontWeight: 'bold',
          padding: '40px',
        }}
      >
        <div
          style={{
            fontSize: 100,
            marginBottom: '20px',
            background: 'linear-gradient(to right, #38bdf8, #818cf8)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Uplink Protocol
        </div>
        <div
          style={{
            fontSize: 60,
            marginBottom: '30px',
            color: '#94a3b8',
          }}
        >
          {title !== 'Uplink Protocol' ? title : 'Logic as a Service'}
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#cbd5e1',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          {description}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
