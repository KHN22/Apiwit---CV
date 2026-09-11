import type React from "react"
import Link from "next/link"
import { FileText } from "lucide-react"

import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className="text-xl font-bold flex items-center">
        <FileText className="mr-2 h-5 w-5" />
        DocManager
      </Link>
      <Link href="/documents" className="text-sm font-medium transition-colors hover:text-primary">
        Documents
      </Link>
      <Link href="/shared" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Shared
      </Link>
      <Link href="/trash" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Trash
      </Link>
    </nav>
  )
}
