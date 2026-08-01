import { Archivo_Black, DM_Sans, JetBrains_Mono, } from "next/font/google"; 
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";


export const metadata = {
  title: "King Loopy",
  description: "Korean Hip Hop",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${dmSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       <header>
          <Header/>
        </header> 
        <main className="mt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
