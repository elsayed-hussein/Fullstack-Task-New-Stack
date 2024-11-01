import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "To-Do Login",
  description: "Create your perfect to-do ",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar
          navBtnText="LogOut"
          navBtnIcon={
            <svg
              fill="#000000"
              height="22px"
              width="22px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 297 297"
            >
              <g>
                <g>
                  <path
                    d="M280.5,0H132c-5.522,0-10,4.478-10,10v112H90.185l11.635-17.453c2.046-3.068,2.236-7.014,0.496-10.266
			C100.576,91.03,97.187,89,93.5,89h-44c-3.344,0-6.466,1.671-8.32,4.453l-33,49.5c-2.239,3.358-2.239,7.735,0,11.094l33,49.5
			c1.854,2.782,4.977,4.453,8.32,4.453h44c3.688,0,7.076-2.03,8.816-5.281c1.74-3.252,1.55-7.197-0.496-10.266L90.185,175H122v112
			c0,5.522,4.478,10,10,10h148.5c5.522,0,10-4.478,10-10V10C290.5,4.478,286.022,0,280.5,0z M71.5,155
			c-3.688,0-7.076,2.03-8.816,5.281c-1.741,3.252-1.55,7.198,0.496,10.266L74.814,188H54.851l-26.333-39.5L54.851,109h19.963
			L63.18,126.453c-2.046,3.068-2.236,7.014-0.496,10.266C64.424,139.97,67.812,142,71.5,142H176c3.584,0,6.5,2.916,6.5,6.5
			s-2.916,6.5-6.5,6.5H71.5z M270.5,277H142V175h34c14.612,0,26.5-11.888,26.5-26.5S190.612,122,176,122h-34V20h128.5V277z"
                  />
                </g>
              </g>
            </svg>
          }
          navBtnLink={"/"}
        />
        {children}
      </body>
    </html>
  );
}
