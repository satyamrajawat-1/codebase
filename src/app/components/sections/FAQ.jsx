"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "Who can participate in the hackathon?",
    a: "Any college student from any year or branch can participate. A valid college ID is required.",
  },
  {
    q: "Is this hackathon online or offline?",
    a: "This is a fully offline hackathon conducted at the college campus.",
  },
  {
    q: "What is the team size?",
    a: "Each team must have a minimum of 2 and a maximum of 4 members.",
  },
  {
    q: "Can we use pre-built projects or code?",
    a: "No. All code must be written during the hackathon. Libraries and APIs are allowed.",
  },
  {
    q: "What should we bring to the venue?",
    a: "Bring your laptop, charger, college ID, and lots of energy 🚀",
  },
  {
    q: "Will food and accommodation be provided?",
    a: "Meals and refreshments will be provided during the hackathon. Accommodation details will be shared later.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="relative w-full py-40 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0f2a] to-black" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Terminal Image */}
        <div className="flex justify-center mb-24">
          <div className="relative w-full max-w-3xl aspect-[16/7]">
            <Image
              src="/ui/faq-terminal.png"
              alt="FAQ Terminal Interface"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(168,85,247,0.35)]"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mission FAQs
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Answers to the most common mission-related queries.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-md"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-medium text-white">
                  {item.q}
                </span>
                <span className="text-purple-400 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-white/70 text-sm leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
