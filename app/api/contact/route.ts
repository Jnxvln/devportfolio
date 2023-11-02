import nodemailer from 'nodemailer'
import { TMailData } from '@/libs/AppTypes'
import { renderEmailTemplate } from '../../../libs/components/Email/EmailTemplate'

export async function POST(req: Request) {
   let body = await req.json()

   // Prepare body and HTML styles
   const style = `color: #3577A0; white-space: pre`
   body = {
      ...body,
      style,
   }

   // Create nodemailer transport
   const transport = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
         user: process.env.GOOGLE_APP_EMAIL,
         pass: process.env.GOOGLE_APP_PASSWORD,
      },
      secure: true,
   })

   // Prepare mail data including styles
   const mailData: TMailData = {
      from: body.email,
      to: process.env.GOOGLE_APP_EMAIL,
      subject: `E-mail from DevPortfolio`,
      text: body.message,
      html: renderEmailTemplate(body),
   }

   // Try to send email, accounting for errors
   let error = null
   transport.sendMail(mailData, (err, info) => {
      if (err) {
         console.log(err)
         error = err.message.toString()
      } else {
         error = false
      }
   })

   if (error) return Response.json({ status: 'error', error }, { status: 500 })

   return Response.json({ status: 'success' }, { status: 200 })
}
