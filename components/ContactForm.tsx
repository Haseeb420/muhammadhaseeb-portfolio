"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="text-xs font-bold text-[#d6d6d6]/50 uppercase tracking-widest ml-1"
          >
            Full Name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full bg-[#1e1e1f] border border-[#383839] rounded-2xl px-5 py-4 text-white focus:border-[#ffdb70] outline-none transition-all placeholder:text-[#383839]"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="text-xs font-bold text-[#d6d6d6]/50 uppercase tracking-widest ml-1"
          >
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-[#1e1e1f] border border-[#383839] rounded-2xl px-5 py-4 text-white focus:border-[#ffdb70] outline-none transition-all placeholder:text-[#383839]"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="contact-subject"
          className="text-xs font-bold text-[#d6d6d6]/50 uppercase tracking-widest ml-1"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="How can I help you?"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="w-full bg-[#1e1e1f] border border-[#383839] rounded-2xl px-5 py-4 text-white focus:border-[#ffdb70] outline-none transition-all placeholder:text-[#383839]"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="text-xs font-bold text-[#d6d6d6]/50 uppercase tracking-widest ml-1"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          placeholder="I'm interested in..."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full bg-[#1e1e1f] border border-[#383839] rounded-2xl px-5 py-4 text-white focus:border-[#ffdb70] outline-none transition-all resize-none placeholder:text-[#383839]"
        />
      </div>

      {status === "success" && (
        <p className="text-[#ffdb70] text-sm font-medium">Message sent successfully. Thank you!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMessage}</p>
      )}

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#ffdb70] text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-[#ffe6a0] transition-all shadow-[0_10px_20px_rgba(255,219,112,0.15)] active:scale-95 group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <Send
            size={18}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
