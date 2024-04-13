import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import ScrollToTopComp from "@/components/ui/scroll-to-top";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cleverdeveloper.in"),
  title: "Harshit Sharma",
  description:
    "Hello, I am a highly skilled and experienced Full Stack Developer specializing in MERN (MongoDB, Express.js, React.js, Node.js) and JAMstack (JavaScript, APIs, and Markup) development. I offer a wide range of services, from creating simple yet elegant websites like portfolios, landing pages, and blog applications to developing comprehensive e-commerce marketplaces like Amazon and Flipkart. All my projects are meticulously crafted to be full stack and production-ready, ensuring seamless functionality and optimal performance.",
  authors: {
    name: "Harshit Sharma",
  },
  openGraph: {
    title: {
      default: "Portfolio",
      template: "%s | Portfolio",
    },
    description: "Developed by the one & only HARSHIT!",
    images: [
      {
        url: "https://cleverdeveloper.in/profile.jpg",
      },
    ],
    url: "https://cleverdeveloper.in/",
    siteName: "Portfolio",
    locale: "en_US",
    type: "website",
  },
  manifest: "/manifest.json",
  icons: { apple: "/profile.jpg" },
  keywords: [
    "harshit sharma",
    "full stack developer",
    "mern stack developer",
    "jamstack developer",
    "web developer",
    "react developer",
    "next.js developer",
    "tailwindcss developer",
    "express.js developer",
    "node.js developer",
    "mongodb developer",
    "postgresql developer",
    "sass developer",
    "cwd",
    "harshit cwd",
    "cleverdevloper",
    "cleverdevloper.in",
    "harshit full stack developer",
    "harshit mern stack developer",
    "harshit jamstack developer",
    "harshit web developer",
    "harshit react developer",
    "harshit next.js developer",
    "harshit tailwindcss developer",
    "harshit express.js developer",
    "harshit node.js developer",
    "harshit mongodb developer",
    "harshit postgresql",
    "harshit freelancer",
    "harshit sharma code",
    "harshit sharma developer",
    "harshit sharma coder",
    "harshit sharma programmer",
    "harshit sharma software engineer",
    "harshit sharma web",
    "harshit sharma web developer",
    "Harshit Sharma",
    "CWD",
    "Harshit full stack",
    "Harshit Sharma developer",
    "CWD developer",
    "Harshit Sharma full stack developer",
    "Harshit Sharma software engineer",
    "CWD tech",
    "Harshit Sharma tech expert",
    "Full stack development Harshit",
    "Harshit Sharma coding",
    "CWD programming",
    "Harshit Sharma technology",
    "Harshit Sharma web developer",
    "Harshit Sharma portfolio",
    "CWD web development",
    "Harshit Sharma personal brand",
    "Harshit Sharma professional",
    "Harshit Sharma JavaScript",
    "CWD coding skills",
    "Harshit Sharma React developer",
    "CWD software solutions",
    "Harshit Sharma tech industry",
    "Harshit Sharma Node.js developer",
    "Harshit Sharma MongoDB expert",
    "CWD tech innovations",
    "Harshit Sharma software solutions",
    "Harshit Sharma digital nomad",
    "CWD full stack capabilities",
    "Harshit Sharma freelance developer",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <ScrollToTopComp />
      </body>
    </html>
  );
}
