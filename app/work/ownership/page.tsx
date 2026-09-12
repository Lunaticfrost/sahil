import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReadingProgress } from "@/components/ui";

const practices = [
  {
    kicker: "01 / BEYOND THE MERGED PR",
    text: "A pull request passing continuous integration is merely the beginning of the engineering lifecycle. Software only truly proves its value once it is deployed, taking production traffic, and responding cleanly to anomalies.",
  },
  {
    kicker: "02 / CODIFYING RUNBOOKS",
    text: "Operational tribal knowledge is a liability. Every recurring manual procedure, deployment step, or incident mitigation must be codified into executable runbooks so that the entire engineering team gains immediate leverage.",
  },
  {
    kicker: "03 / PROACTIVE INCIDENT POST-MORTEMS",
    text: "View outages and production pages not as human failures, but as opportunities to strengthen the architecture. Every post-mortem should produce actionable preventive work items: tighter timeouts, better alerts, or automated fallbacks.",
  },
  {
    kicker: "04 / TEAM ENABLEMENT ACROSS TIMEZONES",
    text: "During service transitions between global offices, building exhaustive architecture documentation, onboarding walkthroughs, and troubleshooting guides ensures uninterrupted operational continuity.",
  },
];

export default function Page() {
  return (
    <main className="case">
      <ReadingProgress />
      <nav className="nav">
        <Link className="brand" href="/">
          SAHIL
        </Link>
        <Link className="back" href="/#work">
          ← WORK
        </Link>
      </nav>

      <section className="case-hero">
        <span className="section-kicker">04 / ENGINEERING OWNERSHIP</span>
        <h1>
          Owning software beyond the code:
          <br />
          <em>deploy, operate, document, improve.</em>
        </h1>
        <p>
          True engineering ownership is taking responsibility for what happens after software
          ships. It means caring about deployment pipelines, on-call health, observability
          fidelity, and team enablement.
        </p>
        <div className="case-meta">
          <span>PILLARS / BUILD · OPERATE · LEARN · IMPROVE</span>
          <span>IMPACT / REDUCED TOIL & SHARED TEAM LEVERAGE</span>
        </div>
      </section>

      <section className="case-grid">
        {practices.map((p) => (
          <article key={p.kicker}>
            <span>{p.kicker}</span>
            <p>{p.text}</p>
          </article>
        ))}
      </section>

      <section className="case-closing">
        <p>
          The mark of senior engineering ownership is making yourself redundant for routine
          operations by building systems, tools, and runbooks that empower everyone else.
        </p>
        <Link href="/#work">
          BACK TO SELECTED WORK <ArrowUpRight size={15} />
        </Link>
      </section>
    </main>
  );
}