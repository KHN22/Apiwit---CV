import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"
import { PageTransitionLink } from "../page-transition-link"

const projects = 
[
  {
    title: "3D Model Market",
    type: "Web application",
    description: "An individual project focused on developing a web-based marketplace for buying and selling 3D models. The platform supports various user functionalities and includes a backend management system for sellers.",
    stack: ["TypeScript", "C#", "SQL Server"],
    status: "Selected work",
    video: "/projects/3d-model.mp4"
  },
  {
    title: "CineBook",
    type: "Web application",
    description: "A collaborative project where I was responsible for developing user workflows for both sides of the platform, managing API integrations, and connecting application data to MongoDB.",
    stack: ["Next.js", "JavaScript", "MongoDB"],
    status: "Selected work",
    video: "/projects/cinebook-trim.mp4",
    caseStudy: "/projects/cinebook-case-study.pdf"
  },
  {
    title: "SlideMe",
    type: "Mobile application",
    description: "A collaborative project where I was responsible for developing the driver-side workflow, enabling drivers to accept orders and communicate directly with customers within each order.",
    stack: ["React", "Javascript", "SQL Server"],
    status: "Selected work",
    video: "/projects/slideme.mp4",
    caseStudy: "/projects/slideme-case-study.pdf"
  }
]


export default function ProjectsPage() {
  return <main className="min-h-screen bg-background"><header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10"><PageTransitionLink href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft size={16} /> Back to profile</PageTransitionLink><span className="font-mono text-xs tracking-[0.2em] text-primary">PROJECT INDEX / 0{projects.length + 2}</span></header><section className="mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-10 lg:pt-28"><p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Selected projects</p><div className="mt-6 flex flex-col justify-between gap-8 border-b border-border pb-12 lg:flex-row lg:items-end"><h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-7xl">Ideas, shaped into <span className="text-primary">working things.</span></h1><p className="max-w-xs text-sm leading-6 text-muted-foreground">A selection of products, experiments, and tools built with care.</p></div>
      <section aria-labelledby="in-progress-project" className="mt-12">
        <h2 id="in-progress-project" className="text-3xl font-semibold tracking-tight">In Progress Project</h2>
        <article className="mt-5 grid items-center gap-6 rounded-[1.5rem] border border-border bg-card p-4 sm:p-8 lg:grid-cols-[3fr_2fr]">
          <a href="/projects/prediction-stock-price.png" aria-label="View full-size Prediction Stock Price dashboard" className="overflow-hidden rounded-xl border border-border">
            <img src="/projects/prediction-stock-price.png" width={1421} height={911} alt="411 Model Lab dashboard showing Micron’s price history and forecasts for one, three and six months" className="block h-auto w-full" />
          </a>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Group project</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">Prediction Stock Price</h3>
            <p className="mt-3 text-sm font-medium text-primary">In closed development</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Our team is developing 411 Model Lab to forecast Micron Technology’s share price over one, three, and six months. We combine historical prices, quarterly financials, and macroeconomic data, then backtest the forecasts against a historical-average baseline.
            </p>
          </div>
        </article>
      </section>
      <section aria-labelledby="live-projects" className="mt-12">
        <h2 id="live-projects" className="text-3xl font-semibold tracking-tight">Live Projects</h2>
        <article className="mt-5 grid gap-8 rounded-[1.5rem] border border-border bg-card p-6 sm:p-8 lg:grid-cols-[2fr_1fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Business intelligence dashboard</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">FruitBlend24</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Explore a year of smoothie sales by kitchen, delivery platform, and product.
              Find peak ordering hours, track which smoothies drive revenue, and compare monthly sales with budget targets.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Python", "pandas", "Streamlit", "Plotly"].map((tag) => (
                <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{tag}</span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm">
              <a href="https://fruitblend24-gupqmkuqkc97f367cvxntf.streamlit.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground hover:opacity-90">
                Open dashboard <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href="https://github.com/KHN22/FruitBlend24" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                <Github size={16} aria-hidden="true" /> View repository
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-secondary p-6">
            <p className="font-mono text-xs text-muted-foreground">Sep 2025 – Aug 2026</p>
            <dl className="mt-4 divide-y divide-border">
              <div className="pb-4">
                <dt className="text-sm text-muted-foreground">Gross revenue</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight">฿31.19M</dd>
              </div>
              <div className="pt-4">
                <dt className="text-sm text-muted-foreground">Units sold</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight">618,883</dd>
              </div>
            </dl>
          </div>
        </article>
      </section>
      <section aria-labelledby="project-showcase" className="mt-16">
        <h2 id="project-showcase" className="text-3xl font-semibold tracking-tight">Project Showcase</h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">{projects.map((project, index) => <article key={project.title} className="group flex min-h-[390px] flex-col rounded-[1.5rem] border border-border bg-card p-4 transition-colors hover:border-primary/60 sm:p-7"><div className="flex items-center justify-between px-3 pt-1 sm:px-0 sm:pt-0"><span className="font-mono text-xs text-primary">0{index + 1}</span><span className="text-xs text-muted-foreground">{project.status}</span></div><div className="mt-4 aspect-video overflow-hidden rounded-[1rem] bg-secondary"><video className="h-full w-full object-cover" src={project.video} autoPlay muted loop playsInline preload="metadata" aria-label={`${project.title} preview`} /></div><div className="mt-6"><p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{project.type}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{tag}</span>)}</div><div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-border pt-5 text-sm">{project.caseStudy && <a href={project.caseStudy} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">View case study <ArrowUpRight size={15} /></a>}<a href={project.video} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">Full video <ArrowUpRight size={15} /></a><a href="#" aria-label={`View ${project.title} source code`} className="text-muted-foreground hover:text-foreground"><Github size={17} /></a></div></div></article>)}</div></section></section></main>
}
