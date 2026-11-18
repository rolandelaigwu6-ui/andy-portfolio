"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { CONTACT } from "@/content/contact";

export function ContactForm() {
  const [formData, setFormData] = useState<Record<string, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const nextErrors: Record<string, string> = {};
    let valid = true;
    CONTACT.formFields.forEach((field) => {
      const value = (formData[field.id] || "").trim();
      if (field.required && !value) {
        nextErrors[field.id] = `${field.label} is required`;
        valid = false;
      }
      if (field.id === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        nextErrors[field.id] = "Please enter a valid email address";
        valid = false;
      }
    });
    setErrors(nextErrors);
    return valid;
  };

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      const endpointConfigured = false;
      if (!endpointConfigured) {
        throw new Error("No submission endpoint configured yet.");
      }
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <Reveal className="space-y-1">
        <label className="block text-sm font-sans font-medium text-navy">
          {CONTACT.formFields[0].label}
          {CONTACT.formFields[0].required && <span className="text-gold">*</span>}
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`w-full px-4 py-3 rounded border text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
            errors.name ? "border-red-500" : "border-navy/30"
          }`}
          placeholder="Your full name"
        />
        {errors.name && <span className="text-xs text-red-500 font-sans">{errors.name}</span>}
      </Reveal>
      <Reveal variant="fadeUp" className="space-y-1">
        <label className="block text-sm font-sans font-medium text-navy">
          {CONTACT.formFields[1].label}
          {CONTACT.formFields[1].required && <span className="text-gold">*</span>}
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`w-full px-4 py-3 rounded border text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
            errors.email ? "border-red-500" : "border-navy/30"
          }`}
          placeholder="you@example.com"
        />
        {errors.email && <span className="text-xs text-red-500 font-sans">{errors.email}</span>}
      </Reveal>
      <Reveal variant="fadeUp" className="space-y-1">
        <label className="block text-sm font-sans font-medium text-navy">
          {CONTACT.formFields[2].label}
          {CONTACT.formFields[2].required && <span className="text-gold">*</span>}
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={`w-full px-4 py-3 rounded border text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
            errors.subject ? "border-red-500" : "border-navy/30"
          }`}
          placeholder="Inquiry subject"
        />
        {errors.subject && <span className="text-xs text-red-500 font-sans">{errors.subject}</span>}
      </Reveal>
      <Reveal variant="fadeUp" className="space-y-1">
        <label className="block text-sm font-sans font-medium text-navy">
          {CONTACT.formFields[3].label}
          {CONTACT.formFields[3].required && <span className="text-gold">*</span>}
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={5}
          className={`w-full px-4 py-3 rounded border text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
            errors.message ? "border-red-500" : "border-navy/30"
          }`}
          placeholder="Tell me about your project..."
        />
        {errors.message && <span className="text-xs text-red-500 font-sans">{errors.message}</span>}
      </Reveal>
      <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : CONTACT.submitLabel}
      </Button>
      {status === "success" && (
        <div className="p-4 rounded bg-green-50 text-green-800 text-sm font-sans border border-green-100">
          Thank you — your message has been sent successfully.
        </div>
      )}
      {status === "error" && (
        <div className="p-4 rounded bg-red-50 text-red-800 text-sm font-sans border border-red-100">
          Unable to send. A submission endpoint is not yet configured. Please email directly once contact details are provided.
        </div>
      )}
      <p className="text-xs text-slate/50 font-sans mt-4">{CONTACT.note}</p>
    </form>
  );
}
