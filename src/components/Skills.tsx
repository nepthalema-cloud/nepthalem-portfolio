import { useScrollReveal } from '../hooks/useScrollReveal'

interface SkillGroup {
  title: string
  description: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Engineering',
    description: 'Developing responsive, type-safe client interfaces, stateful workflows, and accessible components.',
    skills: ['React', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Backend Engineering',
    description: 'Architecting structured server-side services, domain APIs, and decoupled RESTful endpoints.',
    skills: ['Node.js', 'Express.js', 'Django', 'Django REST Framework', 'REST APIs'],
  },
  {
    title: 'Data & Persistence',
    description: 'Designing document models, relational schemas, and query scoping for data isolation.',
    skills: ['PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Application Engineering',
    description: 'Implementing authentication lifecycles, role-based access control, API integrations, and version control.',
    skills: ['Authentication', 'Authorization', 'RBAC', 'API Integration', 'Git'],
  },
  {
    title: 'AI / Machine Learning',
    description: 'Developing supervised classification pipelines, data preprocessing, and model inference services.',
    skills: ['Python', 'scikit-learn', 'pandas', 'Model Development & Integration'],
  },
  {
    title: 'Computer Vision',
    description: 'Engineering real-time video stream ingestion, object detection, and persistent vehicle tracking.',
    skills: ['YOLOv8', 'BoT-SORT'],
  },
]

function Skills() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className={`max-w-2xl section-reveal ${isRevealed ? 'is-revealed' : ''}`}>
          <p className="text-sm font-semibold tracking-wide text-accent">Skills</p>
          <h2
            id="skills-heading"
            className="mt-4 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            Technical capabilities and engineering practices.
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary sm:text-lg sm:leading-8">
            A capability-oriented overview of the technologies and engineering workflows I work with.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              style={{ transitionDelay: isRevealed ? `${index * 40}ms` : '0ms' }}
              className={`card-hover section-reveal rounded-xl border border-border bg-surface p-5 hover:border-accent sm:p-6 ${
                isRevealed ? 'is-revealed' : ''
              }`}
            >
              <h3 className="text-base font-semibold text-foreground sm:text-lg">{group.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-secondary sm:text-sm">{group.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5 sm:gap-2" role="list">
                {group.skills.map((skill) => (
                  <li
                    className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-secondary"
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
