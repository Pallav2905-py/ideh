"user client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
// import "@/public/assets/scss/style.scss"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Scraper",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
        <script src="https://cdn.tailwindcss.com"></script>
        </head>
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
