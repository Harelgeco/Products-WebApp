"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <div className="h-14 w-full border-b bg-background flex items-center justify-between px-6">

      <div className="flex items-center gap-6">

        <div className="font-semibold">
          My App
        </div>

        <nav className="flex items-center gap-4 text-sm text-muted-foreground">

          <Link
            href="/"
            className="hover:text-foreground transition"
          >
            Home
          </Link>

          <Link
            href="/Add_Products"
            className="hover:text-foreground transition"
          >
            Add Products
          </Link>

        </nav>

      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>

    </div>
  )
}