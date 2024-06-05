import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/store/Providers";

const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: "--font-poppins",
  weight: ['100','200','300','400','500','600','700']
});

export const metadata = {
  title: "Rappi",
  description: "Rappi 4 business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.variable}>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
