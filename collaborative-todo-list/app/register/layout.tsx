import type { Metadata } from "next";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "To-Do",
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
      <body>
        <Navbar
          navBtnText="Login"
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
                    d="M255.75,0h-148.5c-5.522,0-10,4.478-10,10v112h-39.5c-14.612,0-26.5,11.888-26.5,26.5S43.138,175,57.75,175h39.5v112
               c0,5.522,4.478,10,10,10h148.5c5.522,0,10-4.478,10-10V10C265.75,4.478,261.272,0,255.75,0z M57.75,155
               c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5h104.5c3.687,0,7.076-2.03,8.816-5.281c1.74-3.252,1.55-7.197-0.496-10.266
               L158.936,109h19.963l26.333,39.5L178.898,188h-19.963l11.635-17.453c2.046-3.068,2.236-7.014,0.496-10.266
               c-1.74-3.251-5.129-5.281-8.816-5.281H57.75z M245.75,277h-128.5V175h26.314l-11.635,17.453
               c-2.046,3.068-2.236,7.014-0.496,10.266c1.74,3.251,5.129,5.281,8.816,5.281h44c3.344,0,6.466-1.671,8.32-4.453l33-49.5
               c2.239-3.358,2.239-7.735,0-11.094l-33-49.5c-1.854-2.782-4.977-4.453-8.32-4.453h-44c-3.688,0-7.076,2.03-8.816,5.281
               c-1.74,3.252-1.55,7.197,0.496,10.266L143.564,122H117.25V20h128.5V277z"
                  />
                </g>
              </g>
            </svg>
          }
          navBtnLink="/login"
        />
        {children}
      </body>
    </html>
  );
}
