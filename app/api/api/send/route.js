import EmailTemplate from '../../../Components/EmailTemp';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const mail=process.env.FROM_EMAIL;
export async function POST() {
  try {
    const data = await resend.emails.send({
      from: mail,
      to: [''],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

