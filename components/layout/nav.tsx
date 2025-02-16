"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, Search, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { DialogTitle } from "@radix-ui/react-dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import React from "react"
import Image from "next/image"
import { SearchCommand } from "@/components/layout/search-comand"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { label: "All Services", href: "/product" },
        {
            label: "Hosting",
            href: "/product",
            items: [
                { label: "Minecraft Hosting", href: "/product" },
                { label: "Private Hosting", href: "/product" },
            ]
        },
        {
            label: "Domain",
            href: "/product",
            items: [
                { label: "Domain", href: "/product" },
            ]
        },
        {
            label: "Vps",
            href: "/product",
            items: [
                { label: "Vps Legale", href: "/product" },
                { label: "Vps Digital Ocean", href: "/product" },
            ]
        },
    ]

    return (
        <nav className="sticky top-0 bg-background/80 backdrop-blur-lg z-50">
            <div className=" mx-auto px-10 border-b">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-1">
                        <Link href="/">
                            <Image src="/logo.svg" alt="orvion store" width={32} height={32} />
                        </Link>

                        <Link href="/" className="mr-7">
                            <h1 className="text-xl font-bold">
                                Orvion<span className="text-pink-500">.</span>
                            </h1>
                        </Link>

                        <div className="hidden md:flex gap-6">
                            {menuItems.map((item) => (
                                item.items ? (
                                    <DropdownMenu key={item.label} >
                                        <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                            {item.label}
                                            <ChevronDown className="h-4 w-4" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent >
                                            {item.items.map((subItem) => (
                                                <DropdownMenuItem key={subItem.label}>
                                                    <Link href={subItem.href} className="w-full">
                                                        {subItem.label}
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-10">
                        <div className="relative hidden sm:block w-[300px]">
                            <SearchCommand />
                        </div>

                        <Button variant="outline" className=" bg-blue-800 hover:bg-blue-900 border-blue-500 text-white hidden md:block" >
                            Order Sekarang
                        </Button>
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="ghost" size="icon" className="text-foreground/80">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[85vw] max-w-sm">
                                <VisuallyHidden>
                                    <DialogTitle>Mobile Navigation</DialogTitle>
                                </VisuallyHidden>
                                <div className="flex flex-col h-full">
                                    <div className="flex justify-between items-center mb-8">
                                        <h2 className="text-lg font-bold">Menu</h2>
                                        <SheetClose className=" opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                            <VisuallyHidden>Close menu</VisuallyHidden>
                                        </SheetClose>
                                    </div>
                                    <div className="relative mb-6">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Search..."
                                            className="pl-10"
                                        />
                                    </div>
                                    <nav className="flex-1 flex flex-col gap-2">
                                        {menuItems.map((item) => (
                                            <SheetClose asChild key={item.label}>
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        "px-4 py-3  transition-colors",
                                                        "text-foreground/80 hover:bg-accent hover:text-primary",
                                                        "focus:outline-none focus:ring-2 focus:ring-primary"
                                                    )}
                                                >
                                                    {item.label}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </nav>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}