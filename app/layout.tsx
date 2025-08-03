import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import {Footer7} from "./components/Footer";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata: Metadata = {
  title: "zakr educational platform",
  description: "A platform for educational resources and tools",
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
          <Footer7 />
        </LanguageProvider>
      </body>
    </html>
  );
}
