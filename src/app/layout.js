import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weights: [400, 500, 600, 700, 800, 900],
  subsets: ["latin"]
});

export const metadata = {
  "title": "[DRE4M] - Blissful Typists",
  "charset": "UTF-8",
  "viewport": "width=device-width, initial-scale=1"
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}