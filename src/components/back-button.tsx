import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackButton() {
    return (
        <Button
            variant="ghost"
            size="sm"
            asChild
            className="mb-4 flex items-center gap-1 hover:bg-transparent hover:text-foreground"
        >
            <Link href="/">
                <ChevronLeft className="h-4 w-4" />
                <span>Back to Home</span>
            </Link>
        </Button>
    )
}
