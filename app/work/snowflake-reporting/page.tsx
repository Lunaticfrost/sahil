import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReadingProgress } from "@/components/ui";

const metrics = [
  { value: "MULTI-GEN", label: "SCALABLE ACCESS AUDIT ARCHITECTURE" },
  { value: "0%", label: "ANALYTICAL LOAD ON PRIMARY TRANSACTIONAL STORE" },
  { value: "GLOBAL", label: "REGIONAL DATA RESIDENCY & COMPLIANCE" },
];

const insights = [
  {
    kicker: "01 / THE CHALLENGE: ACCESS AUDITING AT SCALE",
    text: "Enterprise security teams need complete auditability over user access permissions, workspace memberships, and resource-sharing hierarchies. Performing recursive permission traversals across millions of assets on the live transactional database created severe lock contention and degraded user-facing transactions.",
  },
  {
    kicker: "02 / DECOUPLING OLTP FROM ANALYTICAL WORKLOADS",
    text: "Architected the transition of reporting queries away from the primary operational database directly to Snowflake. By isolating transactional operations from heavy aggregation and scanning queries, we eliminated query starvation and protected primary database stability.",
  },
  {
    kicker: "03 / HIGH-EFFICIENCY PERMISSION MODELING",
    text: "Re-engineered reporting ingestion paths around normalized resource entities and role-based access models. Optimized analytical table schemas with clustering keys tailored for high-volume, multi-tenant enterprise lookups.",
  },
  {
    kicker: "04 / SCALING AUDIT TRAIL FIDELITY",
    text: "Led the evolution of consecutive generations of enterprise access reporting: introduced granular resource tracking, incorporated last-activity timestamps for dormant account auditing, and expanded report fidelity for enterprise compliance administrators.",
  },
  {
    kicker: "05 / MULTI-REGION DATA RESIDENCY & COMPLIANCE",
    text: "Built dedicated reporting pipelines adhering to strict regional data sovereignty regulations and internal governance frameworks, ensuring cross-region data isolation, automated retention policies, and repeatable audit trails.",
  },
  {
    kicker: "06 / OPERATIONAL IMPACT",
    text: "Delivered sub-minute report generation times for large enterprise accounts without causing any replication lag or CPU spikes on the primary transactional engine.",
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
        <span className="section-kicker">02 / DATA ARCHITECTURE & GOVERNANCE</span>
        <h1>
          Rebuilding Enterprise Access Reporting
          <br />
          <em>on Snowflake for large-scale auditability.</em>
        </h1>
        <p>
          Enterprise access governance requires querying complex authorization hierarchies
          across millions of resources, workspaces, and sharing permissions. Running these
          heavy recursive queries on the primary transactional database threatened core
          service uptime. Rebuilding the reporting architecture on Snowflake decoupled
          analytical reporting from live transactional traffic.
        </p>
        <div className="case-meta">
          <span>ROLE / SOFTWARE ENGINEER</span>
          <span>TIMEFRAME / 2025 - PRESENT</span>
          <span>DOMAINS / SNOWFLAKE, DATA PIPELINES, GOVERNANCE</span>
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
        <span className="section-kicker">DATA PIPELINE ARCHITECTURE</span>
        <h2>
          Stream live authorization state.
          <br />
          Materialize in Snowflake.
          <br />
          Zero contention on the primary database.
        </h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
            </div>
            <span>systems/data-reporting-pipeline.ascii</span>
          </div>
          <pre>{`  Live User Requests (OLTP)                Enterprise Audit & Governance Queries
             │                                                │
             ▼                                                ▼
  ┌─────────────────────────┐                      ┌─────────────────────────┐
  │ Primary DB & Auth Engine│                      │ Admin Security Console  │
  │ • Real-time r/w ops     │                      │ • Access Audit Reports  │
  │ • Live Permission State │                      │ • Activity & Governance │
  └────────────┬────────────┘                      └───────────▲─────────────┘
               │                                               │
               ▼ Asynchronous CDC Sync                         │ Analytical SQL Queries
               │ (Queues / Streaming Ingestion)                │ (Zero Transactional Impact)
               ▼                                               │
  ┌────────────────────────────────────────────────────────────┴─────────────┐
  │ Snowflake Analytical Data Warehouse                                      │
  │ • Clustered by Organization & Resource Entitlements                      │
  │ • Activity Timestamps & Granular Access Tracking                         │
  │ • Isolated Multi-Region Compliance & Governance Partitions               │
  └──────────────────────────────────────────────────────────────────────────┘`}</pre>
        </div>
      </section>

      <section className="case-closing">
        <p>
          High-performance distributed systems separate operational data from analytical
          workloads. By moving enterprise access reporting to Snowflake, we gave security and
          compliance teams rich auditability without compromising the reliability of our transactional database.
        </p>
        <div className="case-closing-links">
          <Link href="/#work">
            BACK TO SELECTED WORK <ArrowUpRight size={15} />
          </Link>
          <Link href="/work/reliability">
            READ PRODUCTION RELIABILITY CASE STUDY <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
