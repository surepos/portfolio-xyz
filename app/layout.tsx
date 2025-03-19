import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";
import SmoothScroll from "./SmoothScroll";
import { ModalProvider } from "@/lib/modalContext";
import { AnimatedModalDemo } from "@/components/AnimatedDemo";

// Local Fonts
const UiSansBlack = localFont({
  src: './assets/fonts/sf-ui-display-black.woff',
  variable: "--ui-sans-black"
});

const UiSansBold = localFont({
  src: './assets/fonts/sf-ui-display-bold.woff',
  variable: "--ui-sans-bold"
});

const UiSansHeavy = localFont({
  src: './assets/fonts/sf-ui-display-heavy.woff',
  variable: "--ui-sans-heavy"
});

const UiSansSemibold = localFont({
  src: './assets/fonts/sf-ui-display-semibold.woff',
  variable: "--ui-sans-semibold"
});

const UiSansMedium = localFont({
  src: './assets/fonts/sf-ui-display-medium.woff',
  variable: "--ui-sans-medium"
});

const UiSansLight = localFont({
  src: './assets/fonts/sf-ui-display-light.woff',
  variable: "--ui-sans-light"
});

const UiSansUltralight = localFont({
  src: './assets/fonts/sf-ui-display-ultralight.woff',
  variable: "--ui-sans-ultralight"
});

const acornFont = localFont({
  src: './assets/fonts/Acorn-Bold.otf',
  variable: "--font-acorn",
});

const gtFont = localFont({
  src: './assets/fonts/GT-America-Standard-Regular.otf',
  variable: "--font-gt",
});

// Export metadata for server-side rendering
export const metadata: Metadata = {
  title: "Sura",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${UiSansBlack.variable}
          ${UiSansBold.variable}
          ${UiSansHeavy.variable}
          ${UiSansSemibold.variable}
          ${UiSansMedium.variable}
          ${UiSansLight.variable}
          ${UiSansUltralight.variable}
          ${acornFont.variable}
          ${gtFont.variable}
          antialiased
        `}
      >
        <SmoothScroll>
          <ThemeProvider
            attribute="class"
            disableTransitionOnChange
          >
            <ModalProvider>
            <Navbar />
            <main>
              {children}
            </main>
            <AnimatedModalDemo />
            </ModalProvider>
        </ThemeProvider>
        </SmoothScroll>
        
      </body>
    </html>
  );
}
