"use client"

import * as React from "react"
import {
    Search,
    Server,
    Globe,
    HardDrive,
    Gamepad2,
    Cloud,
    ShoppingCart,
} from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { DialogTitle } from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"

interface SearchCommandProps extends React.HTMLAttributes<HTMLDivElement> { }

export function SearchCommand({ className, ...props }: SearchCommandProps) {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <div className={cn("relative", className)} {...props}>
            <button
                onClick={() => setOpen(true)}
                className="relative w-full"
            >
                <span className="inline-flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground">
                    <span >Search products...</span>
                    <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:inline-flex">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </span>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <VisuallyHidden>
                    <DialogTitle>Search Products</DialogTitle>
                </VisuallyHidden>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Products">
                        <CommandItem>
                            <Gamepad2 className="mr-2 h-4 w-4" />
                            <span>Minecraft Hosting</span>
                        </CommandItem>
                        <CommandItem>
                            <Server className="mr-2 h-4 w-4" />
                            <span>Private Hosting</span>
                        </CommandItem>
                        <CommandItem>
                            <Globe className="mr-2 h-4 w-4" />
                            <span>Domain</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="VPS Solutions">
                        <CommandItem>
                            <HardDrive className="mr-2 h-4 w-4" />
                            <span>VPS Legale</span>
                        </CommandItem>
                        <CommandItem>
                            <Cloud className="mr-2 h-4 w-4" />
                            <span>VPS Digital Ocean</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Quick Actions">
                        <CommandItem>
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            <span>Order Now</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </div>
    )
}
