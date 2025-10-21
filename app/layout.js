import { Open_Sans, Noto_Sans_Arabic } from "next/font/google";
import { newwake } from './fonts';
import "./globals.css";

// Open Sans for English / Latin text
const openSans = Open_Sans({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});
// Noto Sans Arabic for Arabic text
const arabic = Noto_Sans_Arabic({
  weight: ["400", "600", "700", "800"],
  subsets: ["arabic"],
});

export const metadata = {
  title: "MOUNIB MAMMERI || WEB DEV / WEB DESIGNER",
  description:
    "IN 2025 YOU DON'T NEED JUST A WEBSITE, YOU NEED A DIGITAL IDENTITY, AND THAT'S EXACTLY WHAT MOUNIB DOES!",
  icons: {
    icon: '/me.png',
    shortcut: '/me.png',
    apple: '/me.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${arabic.className} ${newwake.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
