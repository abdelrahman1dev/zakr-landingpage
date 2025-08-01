import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


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
    
    <html lang="en">
      <body
        className={`font-custom antialiased overflow-x-hidden capitalize `}
      >

        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
