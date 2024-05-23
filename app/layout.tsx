import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@nextui-org/react";
import { WebNavbarV1 } from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className} min-h-screen overflow-y-auto relative dark`}>
       
          <div className="fixed left-0 top-0 z-10 h-full w-full">
            <div className="relative h-full w-full bg-black">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
              <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
            </div>
          </div>
          <Providers>
            <WebNavbarV1 />
            {children}
          </Providers>
      </body>
    </html>
  );
}
