"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export function PageTransitionLink({ href, className = "", children, ...props }) {
  const router = useRouter()

  const handleClick = (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    event.preventDefault()
    const navigate = () => {
      void router.push(href)
    }
    const transitionDocument = document

    if (typeof transitionDocument.startViewTransition === "function") {
      transitionDocument.startViewTransition(navigate)
    } else {
      navigate()
    }
  }

  return <Link href={href} className={className} onClick={handleClick} {...props}>{children}</Link>
}