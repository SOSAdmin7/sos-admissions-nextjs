import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * Server-side attribution cookie setter.
 * Called on first visit to store UTM params and referral data in a
 * server-set cookie (bypasses Safari ITP 7-day JS cookie cap).
 * Cookie lasts 90 days.
 */
export async function POST(request: NextRequest) {
  try {
    const { utm_source, utm_medium, utm_campaign, utm_content, utm_term, referrer, landing_page } =
      await request.json();

    const attribution = {
      utm_source: utm_source || '',
      utm_medium: utm_medium || '',
      utm_campaign: utm_campaign || '',
      utm_content: utm_content || '',
      utm_term: utm_term || '',
      referrer: referrer || '',
      landing_page: landing_page || '',
      timestamp: new Date().toISOString(),
    };

    const response = NextResponse.json({ success: true });

    // Server-set cookie with 90-day expiry - survives Safari ITP
    response.cookies.set('sos_attribution', JSON.stringify(attribution), {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 90 * 24 * 60 * 60, // 90 days in seconds
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

/**
 * Read attribution data back (used when firing conversions).
 */
export async function GET(request: NextRequest) {
  const cookie = request.cookies.get('sos_attribution');

  if (!cookie?.value) {
    return NextResponse.json({ attribution: null });
  }

  try {
    const attribution = JSON.parse(cookie.value);
    return NextResponse.json({ attribution });
  } catch {
    return NextResponse.json({ attribution: null });
  }
}
