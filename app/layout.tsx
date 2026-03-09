import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nehuen Mesias | Fullstack Developer",
  description:
    "Tecnico en Programacion y Co-fundador de Light & Code. Especializado en el stack MERN construyendo sistemas robustos desde Ushuaia.",
  keywords: [
    "Fullstack",
    "Developer",
    "MERN",
    "React",
    "Node.js",
    "Desarrollador de Software",
    "Ushuaia",
    "Nehuen Mesias",
  ],
  openGraph: {
    title: "Nehuen Mesias | Fullstack Developer",
    description:
      "Especializado en el stack MERN. Construyendo sistemas robustos y escalables desde el Fin del Mundo.",
    // REEMPLAZA ESTO CON TU LINK REAL DE VERCEL 👇
    url: "https://portfolio-nehuen-mesias.vercel.app",
    siteName: "Nehuen Mesias Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Esta es la imagen que pusiste en la carpeta public
        width: 1200,
        height: 630,
        alt: "Nehuen Mesias - Fullstack Developer Portfolio",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nehuen Mesias | Fullstack Developer",
    description: "Tecnico en Programacion especializado en el stack MERN.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
