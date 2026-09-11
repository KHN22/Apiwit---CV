"use client"

import Link from "next/link"
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, Menu, Phone, X } from "lucide-react"
import { useState, type MouseEvent } from "react"
import { ThemeToggle } from "./theme-toggle"
import { PageTransitionLink } from "./page-transition-link"

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"],
  Backend: ["C#", "ASP.NET Core", "Node.js"],
  Database: ["SQL Server", "MongoDB"],
  Tools: ["Git", "GitHub", "Docker"],
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault()
    const target = document.getElementById(sectionId)
    if (!target) return

    const startPosition = window.scrollY
    const targetPosition = startPosition + target.getBoundingClientRect().top
    const distance = targetPosition - startPosition
    const duration = 900
    const startTime = performance.now()

    const animateScroll = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      window.scrollTo(0, startPosition + distance * easedProgress)
      if (progress < 1) requestAnimationFrame(animateScroll)
    }

    requestAnimationFrame(animateScroll)
    setMenuOpen(false)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="font-mono text-sm font-semibold tracking-[0.18em] text-primary" aria-label="Home">CV / PROFILE</Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Main navigation">
          <a href="#about" onClick={(event) => scrollToSection(event, "about")} className="transition-colors hover:text-foreground">About</a>
          <a href="#skills" onClick={(event) => scrollToSection(event, "skills")} className="transition-colors hover:text-foreground">Skills</a>
          <PageTransitionLink href="/projects" className="transition-colors hover:text-foreground">Projects</PageTransitionLink>
        </nav>
        <div className="flex items-center gap-3"><ThemeToggle /><button className="rounded-full border border-border p-2 text-foreground md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button></div>
      </header>
      {menuOpen && <nav className="mx-6 flex flex-col gap-4 border-b border-border pb-5 text-sm text-muted-foreground md:hidden" aria-label="Mobile navigation"><a href="#about" onClick={(event) => scrollToSection(event, "about")}>About</a><a href="#skills" onClick={(event) => scrollToSection(event, "skills")}>Skills</a><PageTransitionLink href="/projects">Projects</PageTransitionLink></nav>}

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.25fr_0.75fr] lg:px-10 lg:pb-32 lg:pt-28">
        <div className="flex flex-col justify-center">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-primary">Available for new opportunities</p>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.06em] text-foreground sm:text-7xl lg:text-8xl">Hello, I&apos;m <span className="text-primary">Apiwit Saisan</span>.</h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">A thoughtful full-stack developer who builds clear, useful digital products from the interface to the database.</p>
          <div className="mt-10 flex flex-wrap gap-4"><PageTransitionLink href="/projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">View projects <ArrowUpRight size={16} /></PageTransitionLink><a href="#contact" onClick={(event) => scrollToSection(event, "contact")} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary">Get in touch <Mail size={16} /></a></div>
        </div>
        <aside className="relative flex min-h-[360px] items-end overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-10"><img src="/images/bangkok.png" alt="Bangkok skyline" className="absolute inset-0 h-full w-full object-cover opacity-35" /><div className="absolute inset-0 bg-primary/60" /><div className="absolute -right-12 -top-16 h-56 w-56 rounded-full border border-primary-foreground/20" /><div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full border border-primary-foreground/15" /><div className="relative"><p className="font-mono text-xs uppercase tracking-[0.22em] text-primary-foreground/60">Based in</p><p className="mt-3 text-3xl font-semibold tracking-tight">Bangkok, Thailand</p><div className="mt-16 flex items-center gap-2 text-sm text-primary-foreground/70"><MapPin size={15} /> Open to remote &amp; hybrid work</div></div></aside>
      </section>

      <section id="about" className="border-y border-border bg-card"><div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-28"><div><p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">01 / Profile</p><img src="/images/khing.gif" alt="Khing" className="mt-8 w-full max-w-[180px] origin-left cursor-zoom-in rounded-[1.25rem] object-cover transition-transform duration-300 ease-out hover:relative hover:z-10 hover:scale-125" /></div><div><h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">I turn complex problems into calm, capable software.</h2><p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">I am a passionate software developer with a focus on creating reliable, accessible, and enjoyable web experiences. I enjoy working across the stack, learning new technologies, and collaborating with teams that care about the details.</p><a href="#contact" onClick={(event) => scrollToSection(event, "contact")} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Let&apos;s connect <ArrowDown size={15} /></a></div></div></section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">02 / Technical skills</p><img src="/images/technical-skills.png" alt="Technical skills" className="mt-8 w-full max-w-[180px] origin-left cursor-zoom-in rounded-[1.25rem] object-cover transition-transform duration-300 ease-out hover:relative hover:z-10 hover:scale-125" /></div><div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">{Object.entries(skills).map(([category, items]) => <div key={category}><h3 className="mb-4 text-sm font-semibold text-foreground">{category}</h3><div className="flex flex-wrap gap-2">{items.map((skill) => <span key={skill} className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground">{skill}</span>)}</div></div>)}</div></div></section>

      <section className="border-t border-border bg-card"><div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-28"><div><p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">03 / Education</p><img src="/images/spu.jpg" alt="SPU" className="mt-8 w-full max-w-[180px] origin-left cursor-zoom-in rounded-[1.25rem] object-cover transition-transform duration-300 ease-out hover:relative hover:z-10 hover:scale-125" /></div><div><h2 className="text-3xl font-semibold tracking-tight">Graduate</h2><p className="mt-3 text-muted-foreground">Spipatum University · 2026</p><p className="mt-6 max-w-xl leading-7 text-muted-foreground">Relevant coursework, achievements, or a short note about your academic journey can go here.</p></div></div></section>

      <footer id="contact" className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-end lg:justify-between lg:px-10"><div><p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Contact</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">Let&apos;s make something useful.</h2><div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground"><a href="mailto:example@email.com" className="flex items-center gap-3 hover:text-primary"><Mail size={16} /> khingza002@gmail.com</a><a href="tel:086-991-9412" className="flex items-center gap-3 hover:text-primary"><Phone size={16} /> 086-991-9412</a></div></div><a href="#" className="inline-flex items-center gap-2 self-start rounded-full border border-border px-5 py-3 text-sm hover:border-primary hover:text-primary"><Download size={16} /> Download CV</a></footer>
    </main>
  )
}
