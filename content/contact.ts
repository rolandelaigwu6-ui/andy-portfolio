/**
 * Contact page content (agent.md §10).
 * Contact details are placeholders to be completed by the client.
 */

export const CONTACT = {
  heading: "Let's Connect.",
  subtitle: "Great ideas begin with meaningful conversations.",
  location: "Abuja, Nigeria",
  formFields: [
    { id: "name", label: "Full Name", type: "text", required: true },
    { id: "email", label: "Email Address", type: "email", required: true },
    { id: "subject", label: "Subject", type: "text", required: true },
    { id: "message", label: "Message", type: "textarea", required: true },
  ],
  submitLabel: "Send Message",
  note:
    "Email address, phone number, and social profiles are configuration placeholders to be completed by the client.",
};
