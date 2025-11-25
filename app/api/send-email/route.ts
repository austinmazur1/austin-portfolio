import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.RESEND_RECIPIENT_EMAIL!;
    const senderEmail = process.env.RESEND_FROM_EMAIL!;
    const senderName = process.env.RESEND_FROM_NAME || 'Austin Mazur Portfolio';

    const emailHtml = await render(EmailTemplate({ name, email, message }));

    const { data, error } = await resend.emails.send({
      from: `${senderName} <${senderEmail}>`,
      to: [recipientEmail],
      subject: `New Contact Form Message from ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    return Response.json(
      { error: 'An unexpected error occurred', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}