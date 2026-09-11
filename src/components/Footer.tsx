import { navigate } from '../router'

function Footer() {
  return (
    <footer className="border-t border-border bg-page py-12 text-sm text-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8 lg:px-12">
        <div>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-base font-semibold tracking-tight text-foreground transition-colors hover:text-accent focus-visible:outline-focus"
          >
            Nepthalem Ayele
          </button>
          <p className="mt-1 text-xs text-muted">
            Full-Stack Developer / Software Engineer · Computer Science, University of Gondar
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium sm:justify-end">
            <li>
              <button
                type="button"
                onClick={() => navigate('/#about')}
                className="transition-colors hover:text-accent focus-visible:outline-focus"
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate('/#projects')}
                className="transition-colors hover:text-accent focus-visible:outline-focus"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate('/#skills')}
                className="transition-colors hover:text-accent focus-visible:outline-focus"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate('/#education')}
                className="transition-colors hover:text-accent focus-visible:outline-focus"
              >
                Education
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate('/#contact')}
                className="transition-colors hover:text-accent focus-visible:outline-focus"
              >
                Contact
              </button>
            </li>
            <li>
              <a
                href="mailto:nepthalema@gmail.com"
                className="transition-colors hover:text-accent focus-visible:outline-focus"
              >
                Email ↗
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nepthalem-ayele-03bb11415/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent focus-visible:outline-focus"
              >
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nepthalema-cloud"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent focus-visible:outline-focus"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-border px-5 pt-6 text-center text-xs text-muted sm:px-8 lg:px-12">
        © {new Date().getFullYear()} Nepthalem Ayele. Full-Stack Developer &amp; Software Engineer.
      </div>
    </footer>
  )
}

export default Footer
