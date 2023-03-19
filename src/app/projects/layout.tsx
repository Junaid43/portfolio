import "../../app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
