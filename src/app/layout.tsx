import type React from "react"
import "@/app/globals.css"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import {SonnerProvider} from "@/components/sonner-provider"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Substance Effect Mixer",
    description: "Calculate the optimal mixing sequence to maximize profit",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        {children}
        <SonnerProvider/>
        </body>
        </html>
    )
}
