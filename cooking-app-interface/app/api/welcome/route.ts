import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initializing Resend with the provided API key
const resend = new Resend('re_cqgJ6ze8_FypRTmE2QYxmsbtX93yj1KLS');

export async function POST(request: Request) {
    try {
        const { email, name } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Sending the real email via Resend
        const { data, error } = await resend.emails.send({
            from: 'Savorly <onboarding@resend.dev>', // Using Resend's default testing domain
            to: [email],
            subject: 'Welcome to Savorly! 🥗',
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h1 style="color: #633C27; font-family: 'serif'; text-align: center;">Welcome to Savorly, ${name || 'Chef'}!</h1>
          <p style="font-size: 16px; color: #444; line-height: 1.6;">
            We're thrilled to have you in our culinary community. Savorly is your new digital sous-chef, 
            helping you discover, save, and master thousands of delicious recipes.
          </p>
          <div style="background-color: #FDF4F0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #633C27;">What's Next?</h3>
            <ul style="color: #444;">
              <li>Explore our latest <strong>Healthy Recipes</strong></li>
              <li>Create your first <strong>Meal Plan</strong></li>
              <li>Save your favorites to your <strong>Collections</strong></li>
            </ul>
          </div>
          <p style="text-align: center; margin-top: 30px;">
            <a href="https://savorly.app" style="background-color: #633C27; color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold;">
              Start Cooking Now
            </a>
          </p>
          <hr style="margin-top: 40px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #999; text-align: center;">
            Happy Cooking!<br />
            <strong>The Savorly Team</strong>
          </p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
        }

        console.log('Welcome email sent successfully to:', email);
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error in welcome API:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
