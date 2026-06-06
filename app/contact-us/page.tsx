"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    return (
        <div className="min-h-screen bg-black text-white px-6 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="text-gray-400 mt-3">
                        Have questions about AI Mock Interview? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-gray-900 p-6 rounded-2xl">
                            <Mail className="w-8 h-8 text-blue-500 mb-3" />
                            <h2 className="text-xl font-semibold">Email</h2>
                            <p className="text-gray-400 mt-2">
                                support@aimockinterview.com
                            </p>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-2xl">
                            <Phone className="w-8 h-8 text-green-500 mb-3" />
                            <h2 className="text-xl font-semibold">Phone</h2>
                            <p className="text-gray-400 mt-2">
                                +91 7634017787
                            </p>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-2xl">
                            <MapPin className="w-8 h-8 text-red-500 mb-3" />
                            <h2 className="text-xl font-semibold">Location</h2>
                            <p className="text-gray-400 mt-2">
                                Mohali, Punjab, India
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-900 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-6">
                            Send a Message
                        </h2>

                        <form
                            className="space-y-5"
                            onSubmit={async (e) => {
                                e.preventDefault();

                                try {
                                    await emailjs.send(
                                        process.env.NEXT_PUBLIC_SERVICE_ID!,
                                        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                                        {
                                            name: form.name,
                                            email: form.email,
                                            subject: form.subject,
                                            message: form.message,
                                        },
                                        process.env.NEXT_PUBLIC_KEY!
                                    );

                                    Swal.fire({
                                        text: "Message sent successfully!",
                                        showConfirmButton: false,
                                        width: "fit-content",
                                        timer: 2000
                                    })

                                    setForm({
                                        name: "",
                                        email: "",
                                        subject: "",
                                        message: "",
                                    });
                                } catch (error) {
                                    console.log("FULL ERROR:", error);

                                    Swal.fire({
                                        text: "Failed to send message",
                                        showConfirmButton: false,
                                        timer: 2000,
                                    });
                                }
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                                className="w-full p-3 rounded-lg bg-black border border-blue-500"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                className="w-full p-3 rounded-lg bg-black border border-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                value={form.subject}
                                onChange={(e) =>
                                    setForm({ ...form, subject: e.target.value })
                                }
                                className="w-full p-3 rounded-lg bg-black border border-blue-500"
                            />

                            <textarea
                                rows={4}
                                placeholder="Your Message"
                                value={form.message}
                                onChange={(e) =>
                                    setForm({ ...form, message: e.target.value })
                                }
                                className="w-full p-3 rounded-lg bg-black border border-blue-500"
                            />

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center cursor-pointer gap-2 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

