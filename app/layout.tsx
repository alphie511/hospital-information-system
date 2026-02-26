import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "医院信息管理系统",
  description: "基于Next.js的医院内部管理系统",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
