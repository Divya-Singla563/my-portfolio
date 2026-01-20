export const SITE = {
  name: "John Deon",
  role: "Full Stack Developer",
  email: "hello@yourdomain.com",
  phone: "+91 00000 00000",
  location: "India",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Twitter", href: "https://x.com/" },
] as const;

