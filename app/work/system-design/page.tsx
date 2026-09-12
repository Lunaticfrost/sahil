import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReadingProgress } from "@/components/ui";

const principles = [
  {
    kicker: "01 / EXPLICIT BOUNDARIES",
    text: "Services should have single, unambiguous owners for every state transition. When multiple microservices mutate shared records without a clear transaction boundary, operational debugging becomes nearly impossible.",
  },
  {
    kicker: "02 / SYNCHRONOUS VS ASYNCHRONOUS DECOUPLING",
    text: "Keep user-facing synchronous request paths lean. Offload persistence side-effects, third-party webhook dispatches, and heavy indexing into message queues with guaranteed delivery semantics.",
  },
  {
    kicker: "03 / IDEMPOTENCY BY DEFAULT",
    text: "Network timeouts are ambiguous: did the upstream fail before or after processing? Designing APIs with idempotent keys ensures that retrying an operation never creates duplicate charges or corrupted state.",
  },
  {
    kicker: "04 / VISIBLE FAILURE PATHS",
    text: "Every downstream dependency must have explicit timeouts, circuit-breaker thresholds, and deterministic fallback responses. Unhandled downstream slowness is the number one cause of cascading outages.",
  },
  {
    kicker: "05 / OPERATIONAL SIMPLICITY",
    text: "Complexity is a liability in production. Favor boring, proven primitives (PostgreSQL, Redis, RabbitMQ, Go/Node) that are straightforward to monitor, inspect, and debug during a 3 AM incident.",
  },
  {
    kicker: "06 / OBSERVABILITY-FIRST ARCHITECTURE",
    text: "Correlate requests with distributed trace IDs across HTTP entrypoints, worker queues, and database calls so errors can be localized in seconds rather than hours.",
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
        <span className="section-kicker">03 / SYSTEM DESIGN & ARCHITECTURE</span>
        <h1>
          Designing backend systems
          <br />
          <em>with clear boundaries and failure modes.</em>
        </h1>
        <p>
          Backend engineering is as much about boundaries, recovery paths, and operational
          reality as it is about writing logic. Systems that thrive in production make
          the happy path simple and the failure path predictable.
        </p>
        <div className="case-meta">
          <span>FOCUS / DISTRIBUTED SYSTEMS & APIS</span>
          <span>PHILOSOPHY / RELIABILITY BY DESIGN</span>
        </div>
      </section>

      <section className="case-grid">
        {principles.map((p) => (
          <article key={p.kicker}>
            <span>{p.kicker}</span>
            <p>{p.text}</p>
          </article>
        ))}
      </section>

      <section className="case-architecture">
        <span className="section-kicker">REQUEST & RECOVERY BOUNDARY</span>
        <h2>
          Keep the HTTP cycle tight.
          <br />
          Push work to durable queues.
          <br />
          Isolate failure to the worker domain.
        </h2>
        <pre>{`  Client Request ──► [API Gateway / Auth]
                            │
                            ▼
               ┌──────────────────────────┐
               │ Synchronous Handler      │
               │ • Validate payload       │
               │ • Commit fast local DB   │
               │ • Publish event message  │
               └────────────┬─────────────┘
                            │
           HTTP 202 Accepted│ Immediate Return (<40ms)
                            ▼
               ┌──────────────────────────┐
               │ Durable Message Queue    │ (RabbitMQ / SQS)
               └────────────┬─────────────┘
                            │
           ┌────────────────┴────────────────┐
           ▼                                 ▼
   [Async Worker]                    [Dead Letter Queue]
   • Idempotent execution            • Exhausted retry captures
   • External integrations           • Pager notification + triage
   • Long-running updates            • Replay tool execution`}</pre>
      </section>

      <section className="case-closing">
        <p>
          A good system design is one that another engineer can debug and operate
          confidently without needing the original author in the room.
        </p>
        <Link href="/#work">
          BACK TO SELECTED WORK <ArrowUpRight size={15} />
        </Link>
      </section>
    </main>
  );
}