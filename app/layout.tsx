import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

export const metadata: Metadata = {
  title: "Fisher Vineyards | Plan Your Visit",
  description:
    "Founded in 1973 by Fred and Juelle Fisher, our family winery is dedicated to farming and producing exceptional handcrafted wines.",
  openGraph: {
    title: "Fisher Vineyards | Plan Your Visit",
    description:
      "Founded in 1973 by Fred and Juelle Fisher, our family winery is dedicated to farming and producing exceptional handcrafted wines.",
    images: [
      "https://app.fishervineyards.com/assets/images/og/og-fisher__home.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inconsolata.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/sdr7aqh.css"
        />
      </head>
      <body className="font-sans antialiased text-fisher-dark bg-white">
        {children}
      </body>
    </html>
  );
}
