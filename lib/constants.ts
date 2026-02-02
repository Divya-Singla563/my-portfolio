import { Github, Instagram, Linkedin } from "lucide-react";

export const SITE = {
  name: "Divya Singla ",
  role: "Full Stack Developer",
  email: "divya.singla8084@gmail.com",
  location: "Chandigarh, India",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home", id: "1" },
  { label: "About", href: "#about", id: "2" },
  { label: "Experience", href: "#experience", id: "3" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/divya-singla-4188ba1b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    label: "Instagram",
    Icon: Instagram,
    href: "https://www.instagram.com/divya_in_frames?igsh=c2t2bDc5YXVpaXhr",
  },
  { label: "Github", Icon: Github, href: "https://github.com/Divya-Singla563" },
] as const;

export const stats = [
  {
    number: "3+",
    label: "Years Experience",
    description:
      "Specialized in React Native, React.js, Next.js,Node.js, mongodb and Web3 development",
  },
  {
    number: "15+",
    label: "Projects Delivered",
    description:
      "Successfully built and deployed full-stack web and mobile applications",
  },
  {
    number: "Web3",
    label: "Web3 Integration",
    description:
      "Experience integrating blockchain technologies and decentralized solutions",
  },
];
