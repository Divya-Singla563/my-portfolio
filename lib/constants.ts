export const SITE = {
  name: "Divya Singla",
  role: "Full Stack Developer",
  email: "divya090111@gmail.com",
  phone: "+91 7814498084",
  location: "Chandigarh, India",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/", id: '1' },
  { label: "About", href: "/", id: '2' },
  { label: "Contact", href: "/", id: '3' },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Twitter", href: "https://x.com/" },
] as const;

export const stats = [
  { number: "3+", label: "Years Experience", description: "Specialized in React Native, React.js, Next.js,Node.js, mongodb and Web3 development" },
  { number: "15+", label: "Projects Delivered", description: "Successfully built and deployed full-stack web and mobile applications" },
  { number: "Web3", label: "Web3 Integration", description: "Experience integrating blockchain technologies and decentralized solutions" },
];