import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReadingProgress } from "@/components/ui";

const metrics = [
  { value: "61%", label: "REDUCTION IN MONTHLY PRODUCTION ALERTS (467 → 184)" },
  { value: "SNOWFLAKE", label: "OFFLOADED REPORTING QUERIES FROM PRIMARY OLTP DB" },
  { value: "35%", label: "FASTER INCIDENT DETECTION & RECOVERY" },
];

const insights = [
  {
    kicker: "01 / THE PROBLEM: ALERT FATIGUE & DB CONTENTION",
    text: "When on-call engineers receive dozens of alerts per shift, every alert starts to look like noise. High alert volume and heavy ad-hoc queries hitting the primary transactional database caused latency spikes, hiding critical regressions and burning out engineers.",
  },
  {
    kicker: "02 / DECOUPLING OLTP & ANALYTICAL WORKLOADS",
    text: "Identified that resource-intensive analytical and reporting queries were competing with live OLTP traffic on the primary database. Architected the migration of these heavy workloads to Snowflake, instantly eliminating lock contention, replication lag, and CPU spikes.",
  },
  {
    kicker: "03 / THE TAXONOMY OF BAD SIGNALS",
    text: "Audited months of incident history and categorized noisy alerts: flappy synthetic health checks on transient network blips, unhandled external rate limits firing high-severity pages, and alerts that had no actionable remediation steps.",
  },
  {
    kicker: "04 / SLO-BASED FILTERING & HYSTERESIS",
    text: "Replaced raw error-count triggers with multi-window burn-rate alerts and hysteresis thresholds. Transient single-request spikes were routed to log digests, while sustained error rates or latency degradation triggered immediate pager escalations.",
  },
  {
    kicker: "05 / LINKED OPERATIONAL RUNBOOKS",
    text: "Enforced a strict policy: no alert fires to PagerDuty without a direct link to an actionable runbook. Each runbook detailed the blast radius, triage queries, verification steps, and safe rollback or mitigation paths.",
  },
  {
    kicker: "06 / CROSS-GEO OWNERSHIP TRANSITION",
    text: "As the first India-based engineer during a US-to-India service handover, codified tribal knowledge across deployment pipelines, support escalation paths, and system failure modes into team documentation.",
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
        <span className="section-kicker">01 / PRODUCTION RELIABILITY</span>
        <h1>
          Reducing production alert volume
          <br />
          <em>by 61% and scaling database operations.</em>
        </h1>
        <p>
          High alert volume is rarely just a monitoring quirk: it is an engineering
          architecture problem. Inheriting a mission-critical backend during an ownership
          transition required identifying low-signal monitoring, isolating failure domains,
          migrating reporting queries to Snowflake, and rebuilding trust in on-call paging.
        </p>
        <div className="case-meta">
          <span>ROLE / SOFTWARE ENGINEER</span>
          <span>TIMEFRAME / 2025 - PRESENT</span>
          <span>DOMAINS / RELIABILITY, SNOWFLAKE, ON-CALL</span>
        </div>
      </section>

      <section className="case-stats">
        {metrics.map((m) => (
          <div key={m.label} className="case-stat">
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </div>
        ))}
      </section>

      <section className="case-grid">
        {insights.map((item) => (
          <article key={item.kicker}>
            <span>{item.kicker}</span>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="case-architecture">
        <span className="section-kicker">TELEMETRY & QUERY OFFLOADING PIPELINE</span>
        <h2>
          Offload analytics to Snowflake.
          <br />
          Filter the transient signals.
          <br />
          Couple every page with a runbook.
        </h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
            </div>
            <span>telemetry/architecture-pipeline.ascii</span>
          </div>
          <pre>{`  OLTP Client Requests                   Analytical & Reporting Workloads
            │                                                 │
            ▼                                                 ▼
  ┌─────────────────────────┐                       ┌─────────────────────────┐
  │ Primary OLTP Database   │                       │ Snowflake Data Cloud    │
  │ • Fast transactional r/w│                       │ • Heavy aggregations    │
  │ • Zero reporting load   │                       │ • Asynchronous reporting│
  └────────────┬────────────┘                       └─────────────────────────┘
               │
               ▼
      High-Throughput Telemetry Stream (CloudWatch, Logs, Metrics)
               │
               ▼
  ┌───────────────────────────────────────────────────────────┐
  │ Signal Processing & Evaluation Layer                      │
  │ • Multi-window burn-rate analysis (sustained vs momentary)│
  │ • Alert hysteresis (suppress flapping probes & blips)     │
  │ • Severity classification (P1/P2 Page vs P3/P4 Digest)    │
  └─────────────────────────────┬─────────────────────────────┘
                                │
               ┌────────────────┴────────────────┐
               ▼                                 ▼
       CRITICAL INCIDENT                  DIAGNOSTIC LOG
   ┌────────────────────────┐         ┌────────────────────┐
   │ PagerDuty Escalation   │         │ Slack Daily Digest │
   │ + Direct Runbook Link  │         │ + Jira Work-Item   │
   └────────────────────────┘         └────────────────────┘`}</pre>
        </div>
      </section>

      <section className="case-closing">
        <p>
          Reliability is not about hoping systems never fail: it is about designing
          systems and operational processes so that when failure occurs, the response is
          immediate, clear, and calm.
        </p>
        <div className="case-closing-links">
          <Link href="/#work">
            BACK TO SELECTED WORK <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}