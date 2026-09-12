import Link from "next/link";
import { ReadingProgress } from "@/components/ui";

export default function Note() {
  return (
    <main className="article-page">
      <ReadingProgress />
      <nav className="nav">
        <Link className="brand" href="/">
          SAHIL
        </Link>
        <Link className="back" href="/#writing">
          ← WRITING
        </Link>
      </nav>

      <header className="article-head">
        <span className="section-kicker">WRITING / 01</span>
        <h1>Why alert volume is an engineering problem</h1>
        <div className="article-meta">RELIABILITY · 3 MIN READ · SEPTEMBER 2026</div>
      </header>

      <article className="article-body">
        <p>An alert is fundamentally a context switch forced onto a human being.</p>

        <p>
          When an alert fires, it makes a demand: stop what you are doing, open a dashboard,
          diagnose a state machine you may not have touched in months, and decide if production
          is on fire. If that signal is ambiguous or non-actionable, the system has wasted
          engineering focus. If it happens twenty times a week, the system has trained its
          engineers to stop paying attention.
        </p>

        <p>
          Alert fatigue is not a discipline problem; it is a cognitive defense mechanism. When
          engineers are bombarded with low-signal notifications, they naturally learn to
          reflexively click &ldquo;Acknowledge&rdquo; just to silence the pager. The real danger
          of noisy alerts is never the noise itself: it is that noisy alerts provide camouflage
          for catastrophic, genuine failures.
        </p>

        <p>
          The most common mistake teams make is treating alerting as an afterthought: write the
          endpoint, add a database query, and configure a naive alert that fires whenever HTTP
          500 count exceeds zero. But in distributed systems operating at scale, transient
          failures are normal. Downstream dependencies hiccup. Network packets drop. DNS
          resolvers refresh. A system that pages an engineer every time a single request fails
          is confusing transient errors with service degradation.
        </p>

        <p>
          Solving alert volume requires treating monitoring as core system design rather than
          operational janitorial work:
        </p>

        <p>
          <strong>1. Alert on symptoms, not causes.</strong> Users care about availability and
          latency, not whether CPU hit 82% during garbage collection. Alerting on SLO burn rates
          (such as p99 latency or sustained error budgets) captures customer impact regardless
          of whether the root cause is a bad deployment, a database lock, or a network partition.
        </p>

        <p>
          <strong>2. Implement hysteresis and evaluation windows.</strong> A single failed
          synthetic probe should never wake someone up at 2 AM. Requiring multi-window
          confirmation filters out momentary blips while catching sustained degradations.
        </p>

        <p>
          <strong>3. Enforce the Actionability Rule.</strong> If an alert fires and the engineer
          does not need to take immediate action, that alert should not exist in PagerDuty.
          It belongs in a daily diagnostic digest or a metric dashboard. Every page must link to
          a tested, unambiguous runbook outlining the blast radius and remediation commands.
        </p>

        <p>
          Quiet on-call rotations are not an accident of good luck. They are the deliberate result
          of engineering teams recognizing that an alert is an architectural contract: if the
          system cries for help, the help must actually be needed.
        </p>
      </article>
    </main>
  );
}