import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE_URL, SITE_NAME } from "@/libs/seo";


const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

const title = "Chandelite | Premium Chandelier & Home Cleaning Services";
const description = "Chandelite is a professional home services company offering chandelier cleaning, deep home cleaning, water tank cleaning, house painting and more across India. The customer is the king and we are the servant.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE_NAME,
  image: `${SITE_URL}/icon.svg`,
  url: SITE_URL,
  telephone: "+91-7021595850",
  email: "support@chandelite.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Andheri West",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 10:00-20:00",
  sameAs: [
    "https://www.facebook.com/cleannation00",
    "https://www.instagram.com/star_home_interior/",
    "https://www.youtube.com/@clean-nation6703",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>



      <meta name="google-site-verification" content="H51ghbt3Cv1komaELnRrkuUxrigBjWq8AQIqmDs_xZ4" />
      <link rel="icon" href="/icon.svg" sizes="any" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

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
      <body className={`${inter.variable} ${playfair.variable} ${inter.className} min-h-full flex flex-col font-body text-ink bg-white`}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
