import { MessageCircle } from "lucide-react";

import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Comunity() {
    return (
        <div className="flex flex-col items-center gap-6">
            <h2 className="text-4xl font-bold text-center">
                Bergabunglah dengan Komunitas Kami
            </h2>
            <p className="text-center text-muted-foreground text-lg max-w-2xl">
                Temukan apa yang dikatakan komunitas kami tentang pengalaman mereka menggunakan layanan Minecraft Hosting kami.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link
                    href="/"
                    target="_blank"
                    className={buttonVariants({
                        variant: "outline",
                        className: "gap-2 hover:bg-green-500/10"
                    })}
                >
                    <MessageCircle className="w-4 h-4" />
                    Whatsapp Community
                </Link>
                <Link
                    href="/"
                    target="_blank"
                    className={buttonVariants({
                        variant: "outline",
                        className: "gap-2 hover:bg-[#5865F2]/10"
                    })}
                >
                    <MessageCircle className="w-4 h-4" />
                    Discord Community
                </Link>
            </div>
        </div>
    )
}