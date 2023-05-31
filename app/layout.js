import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ul>
          <li>
            <Link href={`/`}>Home</Link>
            <Link href={`/users`}>Users</Link>
          </li>
        </ul>
        <hr />
        {children}
      </body>
    </html>
  );
}
