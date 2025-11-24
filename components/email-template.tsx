import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#2563eb', borderBottom: '2px solid #2563eb', paddingBottom: '10px' }}>
        New Contact Form Message
      </h1>
      <div style={{ marginTop: '20px' }}>
        <p style={{ margin: '10px 0' }}>
          <strong>From:</strong> {name}
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong>Email:</strong> <a href={`mailto:${email}`} style={{ color: '#2563eb' }}>{email}</a>
        </p>
      </div>
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <h2 style={{ marginTop: '0', color: '#1e40af' }}>Message:</h2>
        <p style={{ whiteSpace: 'pre-wrap', margin: '0' }}>{message}</p>
      </div>
    </div>
  );
}