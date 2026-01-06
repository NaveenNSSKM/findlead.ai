import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "./fonts.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FindLead.ai - Hook Your Perfect 100",
  description: "Findlead uses a Strategic AI Agent to research high-intent leads and write handcrafted drips.",

  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.fontshare.com" />
        <link
          rel="preload"
          href="https://cdn.fontshare.com/wf/BFBSY7LX5W2U2EROCLVVTQP4VS7S4PC3/IIUX4FGTMD2LK2VWD3RVTAS4SSMUN7B5/53RZKGODFYDW3QHTIL7IPOWTBCSUEZK7.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${openSans.variable} antialiased bg-white text-[#121212] overflow-x-hidden`}
      >
        {children}
      </body>
    </html >
  );
}
