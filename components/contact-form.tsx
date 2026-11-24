"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Fields = { name: string; email: string; subject: string; message: string };
type FieldName = keyof Fields;
const emptyFields: Fields = { name: "", email: "", subject: "", message: "" };
const fieldInfo: { id: FieldName; label: string; type: string }[] = [
  { id: "name", label: "Your name", type: "text" },
  { id: "email", label: "Email address", type: "email" },
  { id: "subject", label: "What would you like to discuss?", type: "text" },
];

function MagneticSubmit({ disabled }: { disabled: boolean }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: .15 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: .15 });

  const onPointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * .12);
    y.set((event.clientY - rect.top - rect.height / 2) * .12);
  };

  return <motion.button type="submit" disabled={disabled} className="contact-submit" style={{ x: springX, y: springY }} onPointerMove={onPointerMove} onPointerLeave={() => { x.set(0); y.set(0); }}>
    <span>{disabled ? "Sending" : "Send an inquiry"}</span><span className="contact-submit-icon"><ArrowUpRight size={18} /></span>
  </motion.button>;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const update = (field: FieldName, value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<FieldName, string>> = {};
    for (const key of Object.keys(fields) as FieldName[]) {
      if (!fields[key].trim()) next[key] = "This field is required.";
    }
    if (fields.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) next.email = "Enter a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("");
    if (!validate()) return;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(fields) });
      const result = await response.json() as { delivered?: boolean; error?: string };
      if (!response.ok || !result.delivered) throw new Error(result.error || "Your message could not be delivered.");
      setStatus("success");
      setStatusMessage("Your message was delivered. Thank you for reaching out.");
      setFields(emptyFields);
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Your message could not be delivered. Please try again later.");
    }
  };

  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="contact-form-fields">
      {fieldInfo.map(({ id, label, type }, index) => <div className={`contact-field ${errors[id] ? "has-error" : ""}`} key={id}>
        <label htmlFor={`contact-${id}`}><span>0{index + 1}</span>{label}</label>
        <input id={`contact-${id}`} name={id} type={type} autoComplete={id === "name" ? "name" : id === "email" ? "email" : "off"} value={fields[id]} maxLength={id === "email" ? 254 : 180} aria-invalid={Boolean(errors[id])} aria-describedby={errors[id] ? `contact-${id}-error` : undefined} onChange={(event) => update(id, event.target.value)} />
        {errors[id] && <p className="contact-field-error" id={`contact-${id}-error`}>{errors[id]}</p>}
      </div>)}
      <div className={`contact-field contact-field-message ${errors.message ? "has-error" : ""}`}>
        <label htmlFor="contact-message"><span>04</span>Your message</label>
        <textarea id="contact-message" name="message" rows={4} maxLength={5000} value={fields.message} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} onChange={(event) => update("message", event.target.value)} />
        {errors.message && <p className="contact-field-error" id="contact-message-error">{errors.message}</p>}
      </div>
    </div>
    <div className="contact-submit-row"><p>Andy is based in Abuja, Nigeria.<br />Your message will only be sent when the form service is available.</p><MagneticSubmit disabled={status === "sending"} /></div>
    {statusMessage && <p role={status === "success" ? "status" : "alert"} className={`contact-status ${status === "success" ? "is-success" : "is-error"}`}>{statusMessage}</p>}
  </form>;
}
