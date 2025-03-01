import "./globals.css";
import { Inter } from "next/font/google"
import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({subsets:['latin']})

export const metadata = {
  title: "Create Next App",
  description: "Starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
