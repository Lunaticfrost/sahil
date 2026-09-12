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
        <span className="section-kicker">WRITING / 03</span>
        <h1>Retries are not reliability</h1>
        <div className="article-meta">BACKEND · 4 MIN READ · SEPTEMBER 2026</div>
      </header>

      <article className="article-body">
        <p>A retry is easy to write. Knowing whether a retry is safe is a much harder engineering problem.</p>

        <p>
          When an outbound HTTP request or database query fails, the most instinctive reaction
          is to catch the exception and try again:
        </p>

        <p>
          <em>&ldquo;It failed? Let&rsquo;s give it three attempts before throwing an error.&rdquo;</em>
        </p>

        <p>
          In a small application with a single user, this naive loop works. In a distributed
          system handling tens of thousands of concurrent requests, that same loop is one of
          the fastest ways to trigger a self-inflicted denial of service.
        </p>

        <p>
          <strong>The Danger of Retry Storms</strong><br />
          Imagine a downstream payment gateway or relational database experiencing a brief spike
          in latency. Because connections are taking longer to resolve, upstream clients begin
          timing out. If every upstream service immediately retries 3 times, the request volume
          hitting the already-struggling downstream service instantly triples or quadruples.
        </p>

        <p>
          Instead of allowing the downstream system time to recover, the flood of retries pushes
          it into complete collapse. What began as a minor 2-second hiccup transforms into a
          catastrophic cascading outage across the entire architecture.
        </p>

        <p>
          <strong>Idempotency Is Mandatory</strong><br />
          Before retrying any state-mutating operation, you must answer an architectural question:
          <em> Did the request fail before reaching the server, or did it fail while the server
          was sending back the response?</em>
        </p>

        <p>
          In distributed networks, you cannot assume a network timeout means the request never
          executed. The server may have charged the customer&rsquo;s credit card, committed the
          database row, and crashed milliseconds before delivering the HTTP 200 packet.
          Retrying that request without an explicit idempotency key (such as an immutable UUID
          stored and checked via Redis or a unique constraint) will produce duplicated charges,
          corrupted ledger entries, and ghost records.
        </p>

        <p>
          <strong>Principles of Resilient Retries</strong><br />
          Designing safe retry semantics requires strict mechanical constraints:
        </p>

        <p>
          <strong>1. Exponential Backoff with Full Jitter:</strong> Never retry at fixed intervals.
          If 1,000 clients fail simultaneously at 12:00:00, retrying at 12:00:01 will hit the
          target with another massive synchronized spike. Adding randomized jitter spreads
          re-transmissions smoothly across time, allowing the dependency to drain its queues.
        </p>

        <p>
          <strong>2. Know What Never to Retry:</strong> Client errors (HTTP 4xx like 400 Bad
          Request, 401 Unauthorized, or 422 Validation Error) will never succeed on a second
          attempt with the same payload. Only transient, retryable errors (HTTP 429 Too Many
          Requests, HTTP 503 Service Unavailable, or genuine socket disconnects) should ever
          enter a retry budget.
        </p>

        <p>
          <strong>3. Circuit Breakers:</strong> When an upstream service detects that error rates
          to a dependency have crossed an intolerable threshold (e.g. 50% failures over 10
          seconds), it must trip open. Rather than wasting CPU and network sockets sending
          doomed retries, the circuit breaker fails fast immediately, protecting both callers
          and downstream dependencies.
        </p>

        <p>
          <strong>4. Dead Letter Queues (DLQs):</strong> For asynchronous message processors,
          infinite retries poison the queue. After an agreed retry budget is exhausted, the
          message must be routed to a dead-letter queue with full error context, preserving
          visibility for engineers while letting the main worker pipeline keep moving.
        </p>

        <p>
          Reliability is never about hoping requests always succeed. It is about deliberately
          defining failure modes, containing blast radiuses, and knowing when the smartest
          decision a system can make is to stop trying.
        </p>
      </article>
    </main>
  );
}