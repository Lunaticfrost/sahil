import Link from "next/link";

const data: Record<string, { section: string; title: string; intro: string; problem: string; decision: string; outcome: string }> = {
  reliability: {
    section: "06 / RELIABILITY",
    title: "Make failure a designed state.",
    intro: "A reliability problem is rarely solved by adding one more retry. The useful work is understanding where failure lives: then giving the system a deliberate response.",
    problem: "Unclear failure boundaries made incidents harder to diagnose and recovery too dependent on human intervention.",
    decision: "Separate synchronous request handling from asynchronous recovery, with explicit retry boundaries and observable state.",
    outcome: "Failures become bounded events instead of mysterious incidents."
  },
  backend: {
    section: "07 / BACKEND",
    title: "Build the boring path beautifully.",
    intro: "The backend should make the happy path obvious and the unhappy path explainable. That means fewer clever abstractions and more explicit ownership of state.",
    problem: "Multiple services owned pieces of the same data flow, creating ambiguity around ordering, retries, and responsibility.",
    decision: "Make state transitions explicit and let each stage own one job: validate, enqueue, process, persist.",
    outcome: "The system becomes easier to reason about, test, and operate."
  },
  operations: {
    section: "08 / OPERATIONS",
    title: "Turn repetition into leverage.",
    intro: "The best runbook is the one that eventually becomes unnecessary. Capture recurring operational work, then use that knowledge to remove the work itself.",
    problem: "Repeated incidents consumed engineering time because diagnosis and recovery lived in scattered tribal knowledge.",
    decision: "Convert recurring incident patterns into runbooks, checks, and small automations before attempting larger platform changes.",
    outcome: "Operational knowledge becomes a reusable engineering asset."
  }
};

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = data[slug] ?? data.reliability;
  return (
    <main className="case">
      <nav className="nav"><Link className="brand" href="/">SAHIL</Link><Link className="back" href="/">← BACK</Link></nav>
      <section className="case-hero">
        <span className="section-kicker">{item.section}</span>
        <h1>{item.title}</h1>
        <p>{item.intro}</p>
      </section>
      <section className="case-grid">
        <article><span>THE PROBLEM</span><p>{item.problem}</p></article>
        <article><span>KEY DECISION</span><p>{item.decision}</p></article>
        <article className="system"><span>SYSTEM SHAPE</span>
          <div className="flow"><b>REQUEST</b><i>→</i><b>SERVICE LAYER</b><i>→</i><b>QUEUE</b><i>→</i><b>WORKER</b></div>
          <small>validate → process → persist &nbsp; / &nbsp; retry → observe → recover</small>
        </article>
        <article className="outcome"><span>OUTCOME</span><p>{item.outcome}</p></article>
      </section>
    </main>
  );
}