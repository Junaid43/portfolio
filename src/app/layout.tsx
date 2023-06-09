import Sidebar from "./component/Sidebar";
import "./globals.css";

import { personalData } from "../app/data/page-data";
import SidebarMenu from "./component/SidebarMenu";
import SidebarSliding from "./component/SidebarSliding";

export const metadata = {
  title: "Resume",
  description: "WordPress Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar data={personalData} />
        <SidebarSliding />
        <main className="grow-full p-8 sm:p-16 w-full sm:w-2/3 ml-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
