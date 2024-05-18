import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import Modals from "@/components/Modal/Modals";

import "./globals.css";

const inter = Inter({ variable: "--inter", subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Drealms - Minecraft Server Provider',
    description: 'Drealms is a minecraft server provider.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Wrapper>
                    <Header />
                    <Modals />
                    <main>{children}</main>
                    <Footer />
                </Wrapper>
            </body>
        </html>
    );
}
