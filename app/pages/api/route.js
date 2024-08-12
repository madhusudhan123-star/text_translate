import nodemailer from 'nodemailer';

export async function POST(req, res) {
    const body = await req.json();
    const { name, email, message } = body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "dmadhusudhan98@gmail.com",
            pass: 'lfga pxgo yxmm lxqk',
        },
    });

    try {
        // Send email
        await transporter.sendMail({
            from: "dmadhusudhan98@gmail.com",
            to: "upgradeenglish63@gmail.com",
            subject: `New contact from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
            html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Failed to send email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}