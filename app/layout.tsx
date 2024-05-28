import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        <title>Bolt12</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Pacifico&family=Pixelify+Sans:wght@400..700&family=Protest+Revolution&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/pqu3bot.css"
        ></link>
        <meta property="og:title" content="BOLT 12" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bolt12.org" />
        <meta property="og:image" content="/public/bolt12-logo.svg" />
        <meta
          property="og:description"
          content="BOLT 12 is a protocol upgrade to the Lightning network that will enable re-usable payment requests, increased receiver privacy, and better censorship resistance. Come see the bitcoin of the future!"
        />
      </head>
      <body className={``}>{children}</body>
    </html>
  );
}
