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
        <span className="section-kicker">WRITING / 02</span>
        <h1>The difference between writing code and owning a system</h1>
        <div className="article-meta">ENGINEERING · 3 MIN READ · SEPTEMBER 2026</div>
      </header>

      <article className="article-body">
        <p>Writing code gives a system capability. Owning it means accepting responsibility for what happens next.</p>

        <p>
          It is easy to measure engineering progress by git commits: tickets moved across a board,
          pull requests reviewed, and tests passing in CI. But code that executes flawlessly in
          a pristine test environment is only a hypothesis. The test environment doesn&rsquo;t have
          flaky third-party APIs, unexpected database lock contention, packet loss, or real users
          submitting payloads that defy your validation schemas.
        </p>

        <p>
          The transition from writing code to system ownership begins when an engineer realizes
          that Day 2 (operating, maintaining, and recovering the software) accounts for 90%
          of its lifecycle.
        </p>

        <p>
          System ownership shows up in the architectural questions you ask before writing a single
          line of logic:
        </p>

        <p>
          <strong>How does this fail?</strong> Every dependency will eventually time out, degrade,
          or return garbage. An engineer who owns a system designs the failure path with the same
          care as the happy path. What does the client receive when Redis is unreachable? Does
          the service degrade gracefully, or does it throw an unhandled exception that crashes
          the worker thread?
        </p>

        <p>
          <strong>How will we observe this?</strong> When latency spikes at 3 AM, will an on-call
          engineer be able to isolate the culprit in five minutes, or will they spend three hours
          grepping through unstructured log streams? Building with correlation IDs, structured
          logs, and explicit metric dimensions is not an operational afterthought: it is the
          only interface you have to understand your running software.
        </p>

        <p>
          <strong>How is this deployed and rolled back?</strong> Can this database schema change
          run safely alongside the previous version of the service? Are feature flags in place so
          that new logic can be toggled without an emergency deploy? True ownership means ensuring
          that changes can be verified with zero downtime and reversed without panic.
        </p>

        <p>
          <strong>Does the team know how to run this?</strong> Individual heroics are an anti-pattern.
          If only one person understands how a service works, that service is an organizational
          hazard. Documenting architectural invariants and writing executable runbooks turns
          personal context into institutional resilience.
        </p>

        <p>
          Great engineers are not distinguished by how much code they write. They are distinguished
          by the quiet confidence of the systems they leave behind: software that is observable,
          resilient to failure, and operable by anyone on the team.
        </p>
      </article>
    </main>
  );
}