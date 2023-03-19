import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio Details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="grow-full p-8 sm:p-16 w-full sm:w-2/3 ml-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
