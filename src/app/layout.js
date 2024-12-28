import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Chandelier Cleaning Services | 9323969471 ✔️",
  description: "CleanNation Company Is A Professional All Service Provide In All Over India With low Cost.The Customer Is The King And We Are The Servant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>



      <meta name="google-site-verification" content="H51ghbt3Cv1komaELnRrkuUxrigBjWq8AQIqmDs_xZ4" />
      <link rel="icon" href="/favicon.ico" sizes="any" />

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
      <body className={inter.className}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
