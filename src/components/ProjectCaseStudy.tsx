import { useEffect } from 'react'
import { projects, type Project } from '../data/projects'
import { navigate } from '../router'

interface ProjectCaseStudyProps {
  slug: string
}

const DEFAULT_TITLE = 'Nepthalem Ayele | Full-Stack Developer & Software Engineer'

function ProjectCaseStudy({ slug }: ProjectCaseStudyProps) {
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const project: Project | undefined = projects[currentIndex]

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Case Study · Nepthalem Ayele`
    } else {
      document.title = `Project Not Found · Nepthalem Ayele`
    }

    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [project])

  if (!project) {
    return (
      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <h1 className="text-3xl font-bold text-foreground">Project Not Found</h1>
        <p className="mt-3 text-secondary">The requested project case study could not be located.</p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground hover:bg-accent-hover focus-visible:outline-focus"
        >
          Return to Homepage
        </button>
      </div>
    )
  }

  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <article className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-4xl">
        {/* Navigation / Back link */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('/#projects')}
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-accent transition-colors duration-200 hover:underline focus-visible:outline-focus"
          >
            ← Back to Featured Projects
          </button>
          <span className="text-xs text-muted">
            Case Study {currentIndex + 1} of {projects.length}
          </span>
        </div>

        {/* Case Study Header */}
        <header className="mt-8 border-b border-border pb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
              {project.domain}
            </span>
            <span className="rounded-md border border-border px-2.5 py-0.5 text-xs font-medium text-muted">
              {project.deploymentType}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg font-medium text-secondary sm:text-xl">
            {project.subtitle}
          </p>

          <p className="mt-5 text-base leading-7 text-secondary sm:text-lg sm:leading-8">
            {project.summary}
          </p>

          {project.liveStatusNote && (
            <div className="mt-4 rounded-lg border border-border bg-accent-soft/40 p-3.5 text-xs leading-relaxed text-secondary">
              <span className="font-semibold text-foreground">Deployment Note: </span>
              {project.liveStatusNote}
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-focus"
            >
              View Repository on GitHub ↗
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-focus"
              >
                Open Live Application ↗
              </a>
            )}

            {project.additionalLiveUrl && (
              <a
                href={project.additionalLiveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-semibold text-secondary transition-colors duration-200 hover:border-accent hover:text-foreground focus-visible:outline-focus"
              >
                Staging Preview ↗
              </a>
            )}

            {project.additionalRepoUrl && (
              <a
                href={project.additionalRepoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-semibold text-secondary transition-colors duration-200 hover:border-accent hover:text-foreground focus-visible:outline-focus"
              >
                Staging Repository ↗
              </a>
            )}
          </div>

          {/* Project Preview Image */}
          {project.imageUrl && (
            <div className="mt-8 overflow-hidden rounded-xl border border-border bg-page">
              <img
                src={project.imageUrl}
                alt={project.imageAlt ?? `${project.title} interface preview`}
                className="aspect-video w-full object-cover object-top"
              />
            </div>
          )}
        </header>

        {/* Problem & Motivation */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Problem & Motivation</h2>
          <p className="mt-4 text-base leading-7 text-secondary sm:text-lg sm:leading-8">
            {project.problem}
          </p>
        </section>

        {/* Solution Architecture */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Engineered Solution & Architecture</h2>
          <p className="mt-4 text-base leading-7 text-secondary sm:text-lg sm:leading-8">
            {project.solution}
          </p>
        </section>

        {/* Verified Engineering Highlights */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Verified Engineering Highlights</h2>
          <ul className="mt-5 space-y-3" role="list">
            {project.engineeringHighlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3 text-base leading-7 text-secondary">
                <span className="mt-1.5 flex size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Key Features & Workflows */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Key Features & Workflows</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.keyFeatures.map((feat) => (
              <div key={feat.title} className="rounded-lg border border-border bg-surface p-5">
                <h3 className="text-base font-semibold text-foreground">{feat.title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary">{feat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Decisions & Architecture */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Technical Decisions & Rationale</h2>
          <div className="mt-6 space-y-4">
            {project.technicalDecisions.map((decision) => (
              <div key={decision.title} className="rounded-lg border border-border bg-surface p-5">
                <h3 className="text-base font-semibold text-foreground">{decision.title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary">{decision.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Challenges & Trade-offs */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Technical Challenges & Trade-offs</h2>
          <div className="mt-6 space-y-4">
            {project.challengesAndTradeoffs.map((challenge) => (
              <div key={challenge.title} className="rounded-lg border border-border bg-surface p-5">
                <h3 className="text-base font-semibold text-foreground">{challenge.title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary">{challenge.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Breakdown */}
        <section className="mt-12 border-t border-border pt-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Technologies & Tooling</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {project.technologies.map((group) => (
              <div key={group.category} className="rounded-lg border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">{group.category}</h3>
                <ul className="mt-3 space-y-1.5 text-sm font-medium text-secondary">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate('/#projects')}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent focus-visible:outline-focus"
          >
            ← Back to Featured Projects
          </button>

          <button
            type="button"
            onClick={() => navigate(`/projects/${nextProject.slug}`)}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground hover:bg-accent-hover focus-visible:outline-focus"
          >
            Next: {nextProject.title} →
          </button>
        </footer>
      </div>
    </article>
  )
}

export default ProjectCaseStudy
