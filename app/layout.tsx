import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
	title: "119-web-client",
	description: "대피로 디자인 시스템 + Tailwind CSS v4",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className="min-h-screen bg-gray-50">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
