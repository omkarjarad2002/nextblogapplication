import "./globals.css";
import Navbar from "./components/Navbar.js";
import { ThemeProvider } from "@/app/components/theme-provider.js";
import SessionWrapper from "./components/SessionWrapper.js";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className="">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </SessionWrapper>
    </html>
  );
}
