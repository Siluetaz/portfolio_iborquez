import type { APIRoute, APIContext } from 'astro';
import EmailTemplate from 'components/EmailTemplate';
import { Resend } from 'resend';
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }: APIContext) => {
  const { name, email, message } = await request.json();
  try {
    const data = await resend.emails.send({
      from: 'Contacto <contact@iborquez.tech>',
      to: ['ysmaelborquezz@gmail.com'],
      subject: 'Contactado desde iborquez.tech',
      react: EmailTemplate({ name, email, message }),
    });
    if(!data) {
      return new Response(null, {
        status: 500,
        statusText: 'Internal Server Error'
      });
    }
    return new Response(JSON.stringify({
      message: "success"
    }));
  } catch (error) {
    console.log(error);
    return new Response(null, {
      status: 500,
      statusText: 'Internal Server Error'
    });
  }
};