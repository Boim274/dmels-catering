import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Whatsapp from "../components/whatsapp";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>D'Mels Catering</title>
        {/* Jika mau dinamis, bisa buat props title */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light font-display text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}