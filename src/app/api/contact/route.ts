import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'SOS Admissions <noreply@sosadmissions.com>',
      to: ['info@sosadmissions.com'],
      replyTo: email,
      subject: `New Consultation Request: ${service} - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Name</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Service Interest</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${service}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Message</td>
            <td style="padding:8px 12px;">${message.replace(/\n/g, '<br>')}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
