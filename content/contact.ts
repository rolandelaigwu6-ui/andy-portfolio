export type ContactChannel = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

/** Temporary details supplied by the user; replace them when Andy's details are confirmed. */
export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    label: "Email",
    value: "rolandelaigwu6@gmail.com",
    href: "mailto:rolandelaigwu6@gmail.com",
  },
  {
    label: "Phone",
    value: "09136156838",
    href: "tel:+2349136156838",
  },
  {
    label: "WhatsApp",
    value: "09136156838",
    href: "https://wa.me/2349136156838",
    external: true,
  },
];
