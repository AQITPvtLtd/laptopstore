import { NextResponse } from "next/server";
import pool from "@/helper/db";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const formData = await request.json(); // Use JSON, not FormData
        const { Fname, Phone, Email, Location, Message } = formData;

        const unique_id = uuid();

        // Database Insert Query
        await pool.query(
            "INSERT INTO contact(id, date, name, phone, email, location,  message) VALUES(?, NOW(), ?, ?, ?, ?,  ?)",
            [unique_id, Fname, Phone, Email, Location, Message]
        );

        // Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD,
            }
        });

        // Admin Email
        await transporter.sendMail({
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: "New Contact Form Submission",
            html: `<p><strong>${Fname}</strong> contacted you.</p>
                   <p>Email: ${Email}</p>
                   <p>Phone: ${Phone}</p>
                   <p>Location: ${Location}</p>
                   <p>Message: ${Message}</p>`
        });

        // User Email
        await transporter.sendMail({
            from: process.env.MY_EMAIL,
            to: Email,
            subject: "Thank You for Contacting Laptop Store",
            html: `<p>Dear ${Fname},</p><p>Thank you for reaching out. We will get back to you soon.</p>`
        });

        return NextResponse.json({ message: "Message sent", success: true });

    } catch (error) {
        console.error("Error:", error.message);
        return NextResponse.json({ message: "Failed to send query", success: false });
    }
}
