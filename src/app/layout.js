import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Salman's Portfolio",
  description: "Welcome to Salman’s professional portfolio showcasing expertise in web development, design, and innovative projects.",
  keywords: [
    "full stack developer",
    "next js developer",
    "web developer",
    "react developer",
  ],
   icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Salman's Portfolio",
    description: "Welcome to Salman’s professional portfolio showcasing expertise in web development, design, and innovative projects.",
    url: "https://salmanlabs.online",
    siteName: "Your Brand Name",
    images: [
      {
        url: "https://salmanlabs.online/logo.png",
        width: 300,
        height: 300,
        alt: "Salman's Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <Script
          id="org-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Salman's Portfolio",
            url: "https://salmanlabs.online",
            logo: "https://salmanlabs.online/logo.png",
          })}
        </Script>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
