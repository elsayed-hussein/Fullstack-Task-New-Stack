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
          navBtnText="Register"
          navBtnIcon={
            <svg
              fill="#000000"
              height="22px"
              width="22px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 310 310"
            >
              <path
                d="M300.606,159.727l-45.333-45.333c-5.857-5.858-15.355-5.858-21.213,0L225,123.454V15c0-8.284-6.716-15-15-15H20
	C11.716,0,5,6.716,5,15v240.002c0,8.284,6.716,15,15,15h85V295c0,8.284,6.716,15,15,15h45.333c3.979,0,7.794-1.581,10.607-4.394
	l124.667-124.667C306.465,175.081,306.465,165.585,300.606,159.727z M35,30h160v123.454l-85.606,85.605
	c-0.302,0.301-0.581,0.619-0.854,0.942H35V30z M159.12,280H135v-24.121l109.667-109.666l24.12,24.12L159.12,280z"
              />
            </svg>
          }
          navBtnLink="/register"
        />
        {children}
      </body>
    </html>
  );
}
