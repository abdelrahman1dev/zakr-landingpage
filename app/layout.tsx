import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata: Metadata = {
  title: "zakr educational platform",
  description: "A platform for educational resources and tools",
    openGraph: {
    title: 'Zakr Educational Platform',
    description: 'Smart, bilingual platform for student time management.',
    url: 'https://zakr.vercel.app',
    siteName: 'Zakr',
    images: [
      {
        url: 'https://zakr.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zakr Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`font-custom antialiased overflow-x-hidden capitalize `}>
        <LanguageProvider>
          <Nav />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
