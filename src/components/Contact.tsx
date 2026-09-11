import { useScrollReveal } from '../hooks/useScrollReveal'

function Contact() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className={`max-w-2xl section-reveal ${isRevealed ? 'is-revealed' : ''}`}>
          <p className="text-sm font-semibold tracking-wide text-accent">Contact</p>
          <h2
            id="contact-heading"
            className="mt-4 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            Let&apos;s discuss software engineering opportunities.
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary sm:text-lg sm:leading-8">
            Open to software engineering roles, full-stack development positions, graduate opportunities, and technical collaboration.
          </p>
        </div>

        <div className="mt-8 max-w-3xl">
          <div
            style={{ transitionDelay: isRevealed ? '50ms' : '0ms' }}
            className={`card-hover section-reveal rounded-xl border border-border bg-surface p-6 sm:p-8 ${
              isRevealed ? 'is-revealed' : ''
            }`}
          >
            <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
            <p className="mt-2 text-sm leading-6 text-secondary">
              Whether you are interested in discussing full-stack systems architecture, reviewing repository implementations, or exploring professional opportunities, feel free to reach out directly.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:nepthalema@gmail.com"
                className="btn-press inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-focus"
              >
                Send Email (nepthalema@gmail.com) ↗
              </a>

              <a
                href="https://www.linkedin.com/in/nepthalem-ayele-03bb11415/"
                target="_blank"
                rel="noreferrer"
                className="btn-press inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-focus"
              >
                LinkedIn Profile ↗
              </a>

              <a
                href="https://github.com/nepthalema-cloud"
                target="_blank"
                rel="noreferrer"
                className="btn-press inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-focus"
              >
                GitHub Profile ↗
              </a>

              <a
                href="#top"
                className="btn-press inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-semibold text-secondary transition-colors duration-200 hover:border-accent hover:text-foreground focus-visible:outline-focus"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
