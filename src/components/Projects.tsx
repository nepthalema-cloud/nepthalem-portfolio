import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/projects'
import { navigate } from '../router'

function Projects() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>()
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)

  const toggleProject = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug))
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-border px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className={`max-w-2xl section-reveal ${isRevealed ? 'is-revealed' : ''}`}>
          <p className="text-sm font-semibold tracking-wide text-accent">Featured Projects</p>
          <h2
            id="projects-heading"
            className="mt-4 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            Production systems and applied engineering work.
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary sm:text-lg sm:leading-8">
            Selected projects spanning full-stack development, systems engineering, and applied AI/ML. Click any project to view its architecture preview and details.
          </p>
        </div>

        <div className={`mt-10 space-y-3.5 section-reveal-surface ${isRevealed ? 'is-revealed' : ''}`}>
          {projects.map((project, index) => {
            const isExpanded = expandedSlug === project.slug
            const projectNumber = String(index + 1).padStart(2, '0')

            return (
              <article
                key={project.slug}
                className={`card-hover rounded-xl border bg-surface transition-all duration-200 ${
                  isExpanded ? 'border-accent shadow-xs' : 'border-border hover:border-accent/70'
                }`}
              >
                {/* Collapsed Header / Accordion Trigger */}
                <button
                  type="button"
                  id={`project-trigger-${project.slug}`}
                  aria-expanded={isExpanded}
                  aria-controls={`project-details-${project.slug}`}
                  onClick={() => toggleProject(project.slug)}
                  className="group flex min-h-12 w-full items-center justify-between gap-3.5 p-4 text-left transition-colors sm:gap-4 sm:p-5 md:gap-6 md:px-6 md:py-5 focus-visible:outline-focus"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-3.5 sm:gap-4 md:gap-5">
                    {/* Project Number */}
                    <span className="shrink-0 font-mono text-xs font-semibold text-muted sm:w-6 sm:text-sm">
                      {projectNumber}
                    </span>

                    {/* Verified Thumbnail Preview */}
                    {project.imageUrl ? (
                      <div className="relative aspect-video h-12 w-20 shrink-0 overflow-hidden rounded-lg border border-border bg-page shadow-2xs sm:h-14 sm:w-24 md:h-16 md:w-28">
                        <img
                          src={project.imageUrl}
                          alt=""
                          className="size-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div
                        className="flex aspect-video h-12 w-20 shrink-0 items-center justify-center rounded-lg border border-border bg-accent-soft text-accent shadow-2xs sm:h-14 sm:w-24 md:h-16 md:w-28"
                        aria-hidden="true"
                      >
                        <svg
                          className="size-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                    )}

                    {/* Title & Mobile Category/Status */}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-lg sm:font-semibold">
                        {project.title}
                      </h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5 sm:hidden">
                        <span className="rounded bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">
                          {project.domain}
                        </span>
                        <span className="rounded border border-border bg-page px-1.5 py-0.5 text-[10px] font-medium text-muted">
                          {project.deploymentType}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Badges & Expand Indicator */}
                  <div className="flex shrink-0 items-center gap-2.5 sm:gap-3.5">
                    <span className="hidden max-w-[240px] truncate rounded-md bg-accent-soft px-3 py-1 text-xs font-semibold text-accent sm:inline-flex">
                      {project.domain}
                    </span>

                    <span className="hidden rounded-md border border-border bg-page px-2.5 py-1 text-xs font-medium text-muted md:inline-flex">
                      {project.deploymentType}
                    </span>

                    <span
                      className={`inline-flex size-9 items-center justify-center rounded-lg border border-border bg-page text-secondary transition-all duration-200 group-hover:border-accent group-hover:text-accent ${
                        isExpanded ? 'rotate-180 border-accent text-accent shadow-2xs' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        className="size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                </button>

                {/* Inline Expandable Details */}
                <div
                  id={`project-details-${project.slug}`}
                  role="region"
                  aria-labelledby={`project-trigger-${project.slug}`}
                  className={`project-accordion-body ${isExpanded ? 'is-expanded' : ''}`}
                >
                  <div className="project-accordion-inner">
                    <div className="project-accordion-content border-t border-border bg-page/40 p-5 sm:p-7">
                      <div className="grid gap-6 md:grid-cols-12 md:items-start">
                        {/* Left Column: Visual / Architecture Preview */}
                        <div className="md:col-span-6 lg:col-span-5">
                          {project.imageUrl ? (
                            <div className="project-accordion-preview relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-page shadow-xs">
                              <img
                                src={project.imageUrl}
                                alt={project.imageAlt ?? `${project.title} interface preview`}
                                className="size-full object-cover object-top"
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <div
                              className="project-accordion-preview flex aspect-video w-full flex-col justify-between rounded-lg border border-border bg-page p-4 text-xs shadow-xs"
                              role="img"
                              aria-label="Intelligent Traffic Management System verified architecture pipeline diagram"
                            >
                              <div className="flex items-center justify-between border-b border-border/70 pb-2">
                                <span className="font-semibold text-foreground">Architecture Pipeline Preview</span>
                                <span className="rounded bg-accent-soft px-1.5 py-0.5 text-[10px] font-semibold text-accent">
                                  Containerized System
                                </span>
                              </div>

                              <div className="space-y-1.5 py-2">
                                <div className="flex items-center gap-1.5 text-secondary">
                                  <span className="flex size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                                  <span><span className="font-medium text-foreground">Video Ingest:</span> OpenCV RTSP &amp; Camera Feeds</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-secondary">
                                  <span className="flex size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                                  <span><span className="font-medium text-foreground">Vision Worker:</span> YOLOv8 + BoT-SORT Vehicle Tracker</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-secondary">
                                  <span className="flex size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                                  <span><span className="font-medium text-foreground">Core Services:</span> 13-Domain Django REST Backend</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-secondary">
                                  <span className="flex size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                                  <span><span className="font-medium text-foreground">Async Pipeline:</span> Celery, Redis &amp; PostgreSQL</span>
                                </div>
                              </div>

                              <div className="border-t border-border/70 pt-2 text-[11px] text-muted">
                                Verified local containerized pipeline · Live deployment not hosted
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Right Column: Description & Actions */}
                        <div className="flex flex-col justify-between md:col-span-6 lg:col-span-7">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-md bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
                                {project.domain}
                              </span>
                              <span className="rounded-md border border-border px-2 py-0.5 text-xs font-medium text-muted">
                                {project.deploymentType}
                              </span>
                            </div>

                            <h4 className="mt-2.5 text-base font-bold tracking-tight text-foreground sm:text-lg">
                              {project.subtitle}
                            </h4>

                            <p className="mt-2 text-sm leading-relaxed text-secondary sm:text-base">
                              {project.summary}
                            </p>

                            {project.featuredTechnologies && (
                              <div className="mt-3.5 flex flex-wrap gap-1.5">
                                {project.featuredTechnologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-secondary"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-border pt-3.5">
                            <button
                              type="button"
                              onClick={() => navigate(`/projects/${project.slug}`)}
                              className="btn-press inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-xs font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-focus"
                            >
                              Read Case Study →
                            </button>

                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="btn-press inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-3.5 text-xs font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-focus"
                            >
                              GitHub ↗
                            </a>

                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-press inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-3.5 text-xs font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-focus"
                              >
                                Live Demo ↗
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
