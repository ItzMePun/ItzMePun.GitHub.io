import NavBar from "@/app/ui/nav/navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Pun Phanasomburna",
	description: "Pun's Portfolio Web App",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`antialiased`}
			>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
