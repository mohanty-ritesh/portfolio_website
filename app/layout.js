import { Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'] 
});

export const metadata = {
  title: {default:"Ritesh Mohanty Portfolio",
    template:"%s - My Portfolio" 
  },
  description: "This is my portfolio Site",
  keywords: "portfolio, web developer, web development, web design, web designer, web developer, ritesh, riteshmohanty, mohanty"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      {/* <link rel="icon" href="./favicon.ico" sizes="any"/> */}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
