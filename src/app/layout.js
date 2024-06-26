import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Top Chandelier Cleaning & Home Cleaning Services",
  description: "CleanNation Company Is A Professional All Service Provide In All Over India With low Cost.The Customer Is The King And We Are The Servant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="H51ghbt3Cv1komaELnRrkuUxrigBjWq8AQIqmDs_xZ4" />

      <GoogleAnalytics gaId="G-HPXHH3B1BZ" />

      <link rel="icon" href="/favicon.ico" sizes="any" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6946266621446451" crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
