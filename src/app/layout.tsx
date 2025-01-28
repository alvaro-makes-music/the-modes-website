import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// const edCelandineRegular = localFont({
//   src: "./fonts/ED-Celandine-Regular.woff",
//   variable: "--font-ed-celandine-regular",
//   weight: "100 900",
// });
const edCelandineOutline = localFont({
  src: "./fonts/ED-Celandine-Outline.woff",
  variable: "--font-ed-celandine-outline",
  weight: "100 900",
});
const almendraRegular = localFont({
  src: "./fonts/Almendra-Regular.ttf",
  variable: "--font-almendra-regular",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "The Modes",
  description: "The Modes music band website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Viewport meta tag to disable zoom */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${edCelandineOutline.variable} ${geistMono.variable} ${almendraRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
