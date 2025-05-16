import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Ben Wang",
  description: "I make stuff",
  openGraph: {
    title: "Portfolio - Ben Wang",
    description: "I make stuff",
    url: "https://notbenwang.github.io",
    type: "website",
    image: "https://opengraph.b-cdn.net/production/images/0a318d57-dba7-4187-9f05-20277195c1ca.jpg?token=siEF2KeuUP4fQr6sfmUidstHVeCaqNfbAEJzViC3hlU&height=714&width=1200&expires=33283406395"
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Ben Wang",
    description: "I make stuff",
    images: ["https://opengraph.b-cdn.net/production/images/0a318d57-dba7-4187-9f05-20277195c1ca.jpg?token=siEF2KeuUP4fQr6sfmUidstHVeCaqNfbAEJzViC3hlU&height=714&width=1200&expires=33283406395"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
