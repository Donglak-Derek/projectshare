import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ProjectShare",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
