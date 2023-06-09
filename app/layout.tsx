import "./globals.css";

import { Nunito } from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          `polka-dot flex flex-row items-center justify-center w-[2500px] h-screen md:px-24 ` +
          nunito.className
        }
      >
        {children}
      </body>
    </html>
  );
}
