/* eslint-disable prefer-template */
/**
 * https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 */

import {NextResponse} from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
	host: "mail.gandi.net",
	port: 587,
	secure: false,
	auth: {
		user: "contact@sherp.ai",
		pass: "iodfghjdoigodghdfogndfong343543",
	},
})

export async function POST(request) {
	try {
		const {firstName, lastName, email, phone, country, job, company} = await request.json()

		const mailOption = {
			from: email,
			to: "agathe@loopsider.com",
			cc: "tech@loopsider.com",
			subject: "Demande de démo",
			html: `
			<h3>Nouvelle demande de démo de la part de ${firstName} ${lastName} </h3>
			<p>Voici les informations de la personne:</p>
			<li> Téléphone: ${phone} </li>
			<li> Travail: ${job} </li>
			<li> Société: ${company}</li>
			<li> Email: ${email}</li>
			<li> Pays: ${country}</li>`,
		}

		await transporter.sendMail(mailOption)

		return NextResponse.json({message: "Email Sent Successfully"}, {status: 200})
	} catch (error) {
		return NextResponse.json({message: "Failed to Send Email :" + error}, {status: 500})
	}
}
