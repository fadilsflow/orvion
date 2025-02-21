"use client";

import * as React from "react";
import { useRouter } from "next/navigation"; // Import useRouter dari Next.js
import { Server, Globe, Cpu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const menuItems = [
  { label: "All Services", href: "/product" },
  { label: "Hosting", href: "/product/hosting" },
  { label: "Domain", href: "/product/domain" },
  { label: "VPS", href: "/product/vps" },
];

interface SearchCommandProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SearchCommand({ className, ...props }: SearchCommandProps) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter(); // Inisialisasi useRouter

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleItemClick = (href: string) => {
    router.push(href); // Navigasi ke href yang diberikan
    setOpen(false); // Tutup dialog setelah klik
  };

  return (
    <div className={cn("relative", className)} {...props}>
      <button onClick={() => setOpen(true)} className="relative w-full">
        <span className="inline-flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground">
          <span>Search products...</span>
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
            {menuItems.map((item) => (
              <CommandItem
                key={item.label}
                onSelect={() => handleItemClick(item.href)}
              >
                {item.label === "Hosting" && (
                  <Server className="mr-2 h-4 w-4" />
                )}
                {item.label === "Domain" && <Globe className="mr-2 h-4 w-4" />}
                {item.label === "VPS" && <Cpu className="mr-2 h-4 w-4" />}
                <span>{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
