import type React from "react"
import "@/app/globals.css"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import {SonnerProvider} from "@/components/sonner-provider"
import {Footer} from "@/components/footer";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Schedule I Calculator",
    description: "Calculate the optimal mixing sequence to maximize profit",
    icons: [
        {
            rel: "icon",
            type: "image/png",
            sizes: "512x512",
            url: "/assets/logo/favicon-512x512.png",
        },
    ]
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <SonnerProvider/>
            <Footer/>
        </div>
        </body>
        </html>
    )
}
