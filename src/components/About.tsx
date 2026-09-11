import { useScrollReveal } from '../hooks/useScrollReveal'

function About() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className={`max-w-2xl section-reveal ${isRevealed ? 'is-revealed' : ''}`}>
          <p className="text-sm font-semibold tracking-wide text-accent">About</p>
          <h2
            id="about-heading"
            className="mt-4 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            Building practical systems with clear architecture.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-secondary sm:text-lg sm:leading-8">
            <p>
              I approach software development from an engineering perspective: prioritizing
              predictable system behavior, clear domain boundaries, and code that remains
              straightforward to reason about and maintain.
            </p>
            <p>
              My work spans complete web applications—from responsive client interfaces to
              decoupled backend services. I focus on systems with concrete operational workflows,
              such as role-based access control, secure authentication, controller-level data
              isolation, and structured REST APIs backed by relational and document databases.
            </p>
            <p>
              Alongside core application engineering, I am actively expanding my work in practical
              AI/ML integration. Rather than treating models in isolation, I focus on connecting
              applied machine learning and computer vision pipelines—such as real-time vehicle
              tracking and predictive machine learning models—into usable, dependable web systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
