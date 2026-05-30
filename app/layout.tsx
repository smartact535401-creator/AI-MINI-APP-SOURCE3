import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 미니앱 스타터 — 바이브코딩 6회차",
  description:
    "Gemini API · .env · .gitignore 의 첫 만남. 다섯 가지 AI 미니앱 중 하나를 골라 만들어보세요.",
  verification: {
    other: {
      "naver-site-verification": "687892dc2e1167197cf78ee4914ca5d7891953f3",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
