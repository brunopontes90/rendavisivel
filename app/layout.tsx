import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Protocolo Fôlego | Pare de pagar o mínimo do cartão",
  description:
    "Método em 3 fases + Negociador IA: mensagens prontas para negociar com o banco, direto do celular.",
  openGraph: {
    title: "Protocolo Fôlego",
    description: "Pare de pagar o mínimo. Volte a respirar em 7 dias.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F3A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
