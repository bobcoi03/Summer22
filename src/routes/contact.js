const express = require('express');
const router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer');
const email_password = process.env.PASSWORD;

var transporter = nodemailer.createTransport({
	service: 'smtp.mail.yahoo.com',
	port: 465,
	secure: false,
	auth: {
		user: 'elongatedmusk@yahoo.com',
		pass: email_password
	}
})

exports.contact = (req, res) => {
	res.sendFile(path.join(__dirname, '../public/templates', 'contact.html'));
}

exports.contact_post = (req, res) => {

	var mail_options = {
		from: req.body.email,
		to: 'luongquangminh23@gmail.com',
		subject: `Contact request from personal website.\nName: ${req.body.name}\nEmail: ${req.body.email}`,
		text: req.body.message
	}

	transporter.sendMail(mail_options, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	})

	res.sendFile(path.join(__dirname, '../public/templates', 'contact.html'));
}