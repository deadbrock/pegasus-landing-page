import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' })
    return
  }

  try {
    const { name, email, phone, company, subject, message } = req.body || {}
    if (!name || !email || !message) {
      res.status(400).json({ ok: false, error: 'Campos obrigatórios ausentes' })
      return
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `Pegasus Landing <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: 'douglas.mds24@gmail.com',
      subject: `[Pegasus] ${subject || 'Contato'} - ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone || ''}\nEmpresa: ${company || ''}\nAssunto: ${subject || ''}\n\nMensagem:\n${message}`,
    })

    if (process.env.WHATSAPP_TOKEN && process.env.WHATSAPP_PHONE_ID) {
      const waPayload = {
        messaging_product: 'whatsapp',
        to: '5581993932249',
        type: 'text',
        text: { body: `Novo contato do site\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}` },
      }
      await fetch(`https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_ID}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(waPayload),
      })
    }

    res.status(200).json({ ok: true })
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err?.message || 'Erro inesperado' })
  }
}


