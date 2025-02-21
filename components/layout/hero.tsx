import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className=" relative mx-auto px-4 py-32 text-center ">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        <span className="text-emerald-500">Minecraft</span> Hosting
        <br />
        <span className="text-blue-500 font-bold">Terbaik</span> dengan{" "}
        <span className="text-pink-500 font-bold ">99.9%</span>
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
          <DropdownMenuTrigger
            className={cn(
              buttonVariants({ variant: "outline" }),
              "bg-emerald-800 hover:bg-emerald-900 border-emerald-500 text-white"
            )}
          >
            Community
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-dark">
            <DropdownMenuItem>
              <Link
                href="https://chat.whatsapp.com/E8r7E45ZRd4DfnNvaovDZNr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DropdownMenuItem>
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </DropdownMenuItem>
              </Link>
            </DropdownMenuItem>
            {/* <DropdownMenuItem>
              <Link
                href="https://discord.gg/your-invite-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DropdownMenuItem>
                  {" "}
                  <Globe className="w-4 h-4" /> Discord
                </DropdownMenuItem>
              </Link>
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href={"/hosting"}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "bg-blue-800 hover:bg-blue-900 border-blue-500 text-white"
          )}
        >
          Order Sekarang
        </Link>
      </div>
    </section>
  );
}
