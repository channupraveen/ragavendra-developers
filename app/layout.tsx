import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ragavendra Developers | Premium Apartments in Medchal, Hyderabad",
  description: "Ragavendra Developers - Premium 2, 3 & 4 BHK apartments in Medchal, Kompally & Secunderabad. RERA approved, quality construction, on-time delivery. Book your site visit today!",
  keywords: "apartments in Medchal, flats in Hyderabad, Ragavendra Developers, premium apartments Kompally, real estate Hyderabad, 2BHK 3BHK apartments",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
