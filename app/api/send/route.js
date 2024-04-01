import EmailTemplate from '../../Components/EmailTemp';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const mail=process.env.FROM_EMAIL;
export async function POST(req, res) {
  const {body}=await req.json();
  const{namee, email, phone, message}=body;
  try {
    const data = await resend.emails.send({
      from: mail,
      to: ['mohantyritesh811@gmail.com', email],
      subject: 'Message from Portfolio',
      react: EmailTemplate({ firstName: namee, message:message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

