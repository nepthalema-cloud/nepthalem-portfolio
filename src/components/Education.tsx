import { useScrollReveal } from '../hooks/useScrollReveal'

function Education() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-t border-border px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className={`max-w-2xl section-reveal ${isRevealed ? 'is-revealed' : ''}`}>
          <p className="text-sm font-semibold tracking-wide text-accent">Education</p>
          <h2
            id="education-heading"
            className="mt-4 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            Academic foundation in computer science.
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary sm:text-lg sm:leading-8">
            Rigorous grounding in algorithmic thinking, data structures, and software principles supporting practical system implementation.
          </p>
        </div>

        <div className="mt-8 max-w-3xl">
          <article
            style={{ transitionDelay: isRevealed ? '50ms' : '0ms' }}
            className={`card-hover section-reveal rounded-xl border border-border bg-surface p-6 sm:p-8 ${
              isRevealed ? 'is-revealed' : ''
            }`}
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="mt-1 text-base font-medium text-accent">
                  University of Gondar
                </p>
              </div>
              <span className="inline-flex w-fit rounded-md bg-accent-soft px-3 py-1 text-xs font-semibold text-secondary">
                Expected 2027
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
              Undergraduate studies focusing on core computational principles, system architecture, and algorithmic foundations, informing pragmatic engineering across full-stack systems and applied machine learning.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Education
