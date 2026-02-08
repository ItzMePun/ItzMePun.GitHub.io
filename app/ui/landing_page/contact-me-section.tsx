'use client';

import { FormEvent } from "react";
import { contactInfo } from "@/lib/contact-info";
import Link from "next/link";
import { SectionProps } from "@/lib/props";

const EMAIL_RECIPIENT = "PunPhanasomburna@gmail.com";

function handleEmailSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const body = [
        `From: ${data.get("firstname") || ""} ${data.get("lastname") || ""}`,
        `Contacts: ${data.get("email") || ""} ${data.get("phone") || ""}`,
        "",
        `${data.get("message") || ""}`,
    ].join("\n");

    const subject = `Message from: ${data.get("firstname") || ""} ${data.get("lastname") || ""}`;
    const mailto = `mailto:${EMAIL_RECIPIENT}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailto, "_blank", "noopener,noreferrer");
}


export default function ContactMeSection({ section_id, section_className }: SectionProps) {
    return (
        <section id={section_id} className={`
            text-light-color-1
            flex flex-col md:flex-row
            scroll-mt-20
            ${section_className}
        `}>
            <div className="
                px-[10%] md:px-[5%] py-15 pb-10
                w-full md:w-1/2
                
                bg-light-color-2
                flex flex-col
            ">
                <div className="text-4xl"><b>Get in touch</b></div>
                <div>
                    I'm currently looking for work - specifically internship opportunities - 
                    but if you have anything that you want to discuss do feel free to get in contact
                    with my via my socials below or an email here
                </div>
                <div className="flex flex-col gap-5">
                    {contactInfo.map((contact) => {
                        const Icon = contact.icon;
                        const content = (
                            <>
                                <Icon className="w-8 h-8 text-light-color-1"/>
                                <div className="flex flex-col">
                                    <span className="text-sm text-light-color-1/70">{contact.name}</span>
                                    <span className="text-light-color-1">{contact.value}</span>
                                </div>
                            </>
                        );

                        if (contact.link) {
                            return (
                                <Link
                                    key={contact.name}
                                    href={contact.link}
                                    className="flex gap-2 justify-start items-center"
                                    target="_blank"
                                >
                                    {content}
                                </Link>
                            );
                        } else {
                            return (
                                <div key={contact.name} className="flex gap-2 justify-start items-center">
                                    {content}
                                </div>
                            );
                        }
                    })}
                </div>
            </div>

            <div className="
                px-[10%] md:px-[5%] py-15 pb-10
                w-full md:w-1/2
                h-fit
                bg-dark-color-2
            ">
                <form
                    className="flex flex-col gap-3"
                    onSubmit={handleEmailSubmit}
                >
                    <div className="flex gap-[5%] justify-around">
                        <div className="flex flex-col">
                            <label>
                                First Name
                            </label>
                            <input 
                                type="text"
                                placeholder="John"
                                name="firstname"
                                className="border p-2 rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label>
                                Last Name
                            </label>
                            <input 
                                type="text"
                                placeholder="smith"
                                name="lastname"
                                className="border p-2 rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label>
                            Email
                        </label>
                        <input 
                            type="email"
                            placeholder="yourname@mail.com"
                            name="email"
                            className="border p-2 rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>
                            Phone number
                        </label>
                        <input 
                            type="tel"
                            placeholder="+1 (000) 000-0000"
                            name="phone"
                            className="border p-2 rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>
                            Message
                        </label>
                        <textarea
                            placeholder="What are you interested in?"
                            name="message"
                            className="border p-2 rounded-lg h-55"
                        />
                    </div>
                    <div className="flex justify-end items-center">
                        <button
                            type="submit"
                            className="
                                border rounded-2xl
                                px-4 py-2
                                bg-contrast-color/80
                                hover:cursor-pointer
                            "
                        >
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
