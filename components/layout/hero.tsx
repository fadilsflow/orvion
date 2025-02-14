import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Hero() {
    return (
        <section className="container relative mx-auto px-4 py-32 text-center">

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-emerald-400">Minecraft</span> Hosting
                <br />
                <span className="text-cyan-400 font-bold">Terbaik</span> dengan <span className="text-pink-500 font-bold ">99.9%</span>
                <br />
                Uptime!
            </h1>
            <p className="mb-8">
                Hosting server kamu mulai dari
                <br />
                <span className="text-2xl text-pink-500 font-bold">Rp6.000/GB</span>
            </p>
            <div className="flex justify-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger className={buttonVariants({ variant: "outline" })}>Community</DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-dark">
                        <DropdownMenuItem>Whatsapp</DropdownMenuItem>
                        <DropdownMenuItem>Discord</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Link href={"/search"} className={cn(buttonVariants({ variant: "outline" }), "bg-blue-700 hover:bg-blue-800 text-white")}>Order Now</Link>
            </div>
        </section >
    )
}