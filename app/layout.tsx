import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Divya Singla",
  description: "A Full Stack Developer(React Native, React js, Node js)",
  icons: {
    icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],

    apple: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
