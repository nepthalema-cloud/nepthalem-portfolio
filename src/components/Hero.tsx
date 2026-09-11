function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="motion-hero-content max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-accent">
              Full-Stack Developer / Software Engineer
            </p>
            <h1
              id="hero-heading"
              className="mt-5 text-4xl leading-[1.1] font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Nepthalem Ayele
            </h1>

            <p className="mt-5 text-xl font-medium text-foreground sm:text-2xl">
              Building practical full-stack applications{' '}
              <span className="text-base font-normal text-muted sm:text-lg">
                with a growing interest in AI/ML integration.
              </span>
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
              I engineer full-stack applications focusing on clean user interfaces, structured backend APIs, robust authentication/authorization workflows, and dependable data persistence.
            </p>
            <p className="mt-4 text-sm font-medium text-muted">
              Computer Science · University of Gondar · Expected 2027
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="hero-primary-action btn-press inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-focus"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="hero-secondary-action btn-press inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-focus"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="motion-hero-photo flex shrink-0 justify-start sm:justify-center lg:justify-end">
            <div className="relative w-36 sm:w-44 lg:w-72 xl:w-80 aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface shadow-xs">
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img
                  src="/profile.png"
                  alt="Nepthalem Ayele - Full-Stack Developer and Software Engineer"
                  className="size-full object-cover object-[center_22%]"
                  width={461}
                  height={576}
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
