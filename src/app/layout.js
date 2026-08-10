import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Chandelite | Premium Chandelier & Home Cleaning Services",
  description: "Chandelite is a professional home services company offering chandelier cleaning, deep home cleaning, water tank cleaning, house painting and more across India. The customer is the king and we are the servant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>



      <meta name="google-site-verification" content="H51ghbt3Cv1komaELnRrkuUxrigBjWq8AQIqmDs_xZ4" />
      <link rel="icon" href="/icon.svg" sizes="any" />

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HPXHH3B1BZ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HPXHH3B1BZ');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
