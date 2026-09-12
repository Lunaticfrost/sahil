import { ArrowUpRight, FileText } from "lucide-react";
import { Reveal, MagneticLink, WorkRow, ProjectRow, LiveStatusTicker, CopyEmailButton } from "@/components/ui";

const work = [
  { number: "01", label: "PRODUCTION RELIABILITY", title: "Reduced production alert volume by 61%.", href: "/work/reliability" },
  { number: "02", label: "DATA & ACCESS REPORTING", title: "Rebuilt enterprise access reporting on Snowflake, offloading primary database queries.", href: "/work/snowflake-reporting" },
  { number: "03", label: "SYSTEM DESIGN", title: "Designing backend systems with clear boundaries and operational thinking.", href: "/work/system-design" },
  { number: "04", label: "ENGINEERING OWNERSHIP", title: "Owning software beyond the code: deploy, operate, document, improve.", href: "/work/ownership" },
];
const writing = [
  ["01","Why alert volume is an engineering problem","RELIABILITY","3 MIN READ"],
  ["02","The difference between writing code and owning a system","ENGINEERING","3 MIN READ"],
  ["03","Retries are not reliability","BACKEND","4 MIN READ"],
];

export default function Home() {
  return <main>
    <nav className="nav"><a className="brand" href="/">SAHIL</a><div className="nav-links">
      <a href="#experience">EXPERIENCE</a><a href="#work">WORK</a><a href="#projects">PROJECTS</a><a href="#writing">WRITING</a><a href="#about">ABOUT</a>
    </div></nav>

    <section className="hero">
      <div className="hero-top">
        <Reveal><span className="eyebrow">SOFTWARE ENGINEER / BENGALURU, INDIA</span></Reveal>
        <Reveal delay={.08}><LiveStatusTicker /></Reveal>
      </div>
      <div className="hero-main"><Reveal delay={.1}><div className="hero-name">SAHIL</div></Reveal>
        <Reveal delay={.18}><h1>I build backend systems<br/><em>that have to work in production.</em></h1></Reveal>
        <Reveal delay={.26}><p className="hero-copy">Backend engineering, distributed systems, authorization, and reliability: with an emphasis on what happens after software ships.</p></Reveal>
      </div>
      <div className="hero-bottom">
        <MagneticLink href="#work">EXPLORE WORK <ArrowUpRight size={15}/></MagneticLink>
        <MagneticLink href="https://github.com/Lunaticfrost" target="_blank">GITHUB <ArrowUpRight size={15}/></MagneticLink>
        <MagneticLink href="https://www.linkedin.com/in/sahildhatterwal/" target="_blank">LINKEDIN <ArrowUpRight size={15}/></MagneticLink>
        <MagneticLink href="mailto:sahilfrost@gmail.com">EMAIL <ArrowUpRight size={15}/></MagneticLink>
      </div>
      <div className="hero-meta">{["BACKEND","SYSTEMS","RELIABILITY","PRODUCTION"].map((x,i)=><span key={x}><b>0{i+1}</b>{x}</span>)}</div>
    </section>

    <section className="strip"><span className="rule"/><p>3+ years building software: from full-stack applications to production backend systems.</p></section>

    <section className="impact-section">
      <div className="impact-label">SELECTED IMPACT</div>
      <div className="impact-grid">
        <div><strong>61%</strong><span>REDUCTION IN MONTHLY PRODUCTION ALERTS</span></div>
        <div><strong>40%</strong><span>LESS MANUAL OPERATIONAL WORK</span></div>
        <div><strong>35%</strong><span>FASTER BUG DETECTION</span></div>
      </div>
    </section>

    <section id="experience" className="section experience"><Reveal><div className="section-kicker">01 / EXPERIENCE</div></Reveal>
      <Reveal delay={.06}><h2>A career built around<br/>shipping and operating software.</h2></Reveal>
      <div className="career">
        <article className="career-item"><div className="career-top"><span>2025 - PRESENT</span><span>01</span></div><div><h3>SMARTSHEET</h3><p className="role">SOFTWARE ENGINEER</p></div><p className="career-desc">Backend engineering across production support, on-call operations, and reliability. Relieved critical pressure on primary transactional databases by migrating heavy reporting workloads to Snowflake, and reduced monthly production alerts by 61%.</p><div className="career-result"><strong>61%</strong><span>reduction in monthly production alert volume<br/><small>467 → 184 & database offload</small></span></div></article>
        <article className="career-item"><div className="career-top"><span>2023 - 2025</span><span>02</span></div><div><h3>MONKSPACES.AI</h3><p className="role">SOFTWARE DEVELOPMENT ENGINEER</p></div><p className="career-desc">Built business-critical integrations and backend automation across HubSpot, QuickBooks, Xero, ticketing, escalation workflows, and internal tooling.</p><div className="career-result"><strong>40%</strong><span>reduction in manual operational work</span></div></article>
      </div>
    </section>

    <section className="case-feature">
      <div className="case-feature-top"><span className="section-kicker">FEATURED CASE STUDY / PRODUCTION BACKEND</span><span>2025 - PRESENT</span></div>
      <div className="case-feature-title"><h2>From inheriting a production system<br/><em>to owning its operation.</em></h2><p>A public-safe look at the engineering work behind production support, reliability, Snowflake database migration, incident response, and team enablement.</p></div>
      <div className="case-steps">
        <article><b>01</b><h3>TRANSITION</h3><p>Became the first India-based engineer on the team during a US-to-India ownership transition.</p></article>
        <article><b>02</b><h3>SNOWFLAKE</h3><p>Migrated heavy access and governance reporting queries to Snowflake, eliminating analytical contention on primary transactional databases.</p></article>
        <article><b>03</b><h3>STABILIZE</h3><p>Analyzed incidents, tuned low-signal monitoring, and reduced monthly production alert volume by 61%.</p></article>
        <article><b>04</b><h3>ENABLE</h3><p>Turned operational knowledge into documentation and runbooks so the wider team could operate the domain confidently.</p></article>
      </div>
      <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
        <a className="case-feature-link" href="/work/reliability">READ RELIABILITY CASE STUDY <ArrowUpRight size={16}/></a>
        <a className="case-feature-link" href="/work/snowflake-reporting">READ REPORTING CASE STUDY <ArrowUpRight size={16}/></a>
      </div>
    </section>

    <section id="work" className="section work-section"><Reveal><div className="section-kicker">02 / SELECTED WORK</div></Reveal><Reveal delay={.06}><h2>Problems worth<br/>understanding deeply.</h2></Reveal>
      <div className="work-list">{work.map((x,i)=><WorkRow key={x.number} {...x} delay={i*.06}/>)}</div>
    </section>

    <section id="projects" className="section projects-section"><Reveal><div className="section-kicker">05 / PROJECTS</div></Reveal><Reveal delay={.06}><h2>Things I built<br/>to learn by doing.</h2></Reveal>
      <div className="project-list">
        <ProjectRow number="01" title="FrostDB" description="An embeddable, zero-dependency key-value database engine written in pure Go, built around a WAL, in-memory hash index, concurrent access, and crash-resilient on-disk records." tags={["GO 1.25","DATABASE INTERNALS","WAL","SYSTEMS"]} href="/projects/frostdb" githubHref="https://github.com/Lunaticfrost/frostdb"/>
        <ProjectRow number="02" title="Fly Right" description="A full-stack flight booking application with search, booking, authentication, admin operations, notifications, offline support, and automated testing." tags={["NEXT.JS","REACT","TYPESCRIPT","SUPABASE","PLAYWRIGHT"]} href="https://github.com/Lunaticfrost/fly-right-frontend"/>
      </div>
    </section>

    <section className="section philosophy">
      <Reveal><div className="section-kicker">04 / ENGINEERING PHILOSOPHY</div></Reveal>
      <Reveal delay={.06}><h2>I care less about how much code I write<br/><em>and more about what happens after it ships.</em></h2></Reveal>
      <div className="principles">
        <article><span>01</span><h3>PRODUCTION IS THE REAL TEST</h3><p>A feature isn't finished when the PR merges. It's finished when it can be deployed, observed, operated, and recovered.</p></article>
        <article><span>02</span><h3>RELIABILITY IS DESIGNED</h3><p>Timeouts, retries, alerts, failure modes, and recovery paths are part of system design: not operational afterthoughts.</p></article>
        <article><span>03</span><h3>OWNERSHIP CREATES LEVERAGE</h3><p>Good documentation and runbooks turn individual knowledge into team capability.</p></article>
        <article><span>04</span><h3>SIMPLICITY SCALES</h3><p>Prefer systems that another engineer can understand, operate, and debug without hidden context.</p></article>
      </div>
    </section>

    <section id="writing" className="section writing"><Reveal><div className="section-kicker">06 / WRITING</div></Reveal>
      <div className="writing-head"><Reveal delay={.06}><h2>Things I’m still<br/>figuring out.</h2></Reveal><p>Notes on backend engineering, reliability, systems, and the lessons that only show up after software ships.</p></div>
      <div className="writing-list">{writing.map(([n,t,tag,time])=><a className="writing-row" href={`/notes/${n}`} key={n}><span>{n}</span><div><small>{tag} · {time}</small><h3>{t}</h3></div><ArrowUpRight size={18}/></a>)}</div>
    </section>

    <section className="section technical"><Reveal><div className="section-kicker">07 / TECHNICAL FOCUS</div></Reveal>
      <Reveal delay={.06}><h2>What I work<br/>with.</h2></Reveal>
      <div className="tech-grid">{[
        ["BACKEND","Node.js · NestJS · Spring Boot · REST APIs · Microservices · RabbitMQ · GO"],
        ["SYSTEMS","Distributed Systems · System Design · Authorization & Access Control · API Design"],
        ["CLOUD & INFRA","AWS · Docker · Kubernetes · Lambda · SQS · CloudWatch · CI/CD · PagerDuty"],
        ["DATA","Snowflake · DynamoDB · MongoDB · PostgreSQL · MySQL · Redis"],
        ["LANGUAGES","TypeScript · JavaScript · Java · C++ · SQL"],
        ["RELIABILITY","Observability · Incident Response · Production Operations · Runbooks"],
      ].map(([t,d],i)=><Reveal delay={i*.03} key={t}><article className="tech-item"><span>{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div>
    </section>

    <section id="about" className="section notes"><Reveal><div className="section-kicker">08 / ELSEWHERE</div></Reveal>
      <div className="notes-flex"><div><h2>Build. Operate.<br/>Understand. Repeat.</h2><p className="about-line"><strong>Sahil Dhatterwal</strong>: Software engineer based in Bengaluru, focused on backend systems and production reliability.</p></div>
      <div className="contact">
        <a href="https://github.com/Lunaticfrost" target="_blank" rel="noreferrer noopener">GITHUB <ArrowUpRight size={15}/></a>
        <a href="https://www.linkedin.com/in/sahildhatterwal/" target="_blank" rel="noreferrer noopener">LINKEDIN <ArrowUpRight size={15}/></a>
        <CopyEmailButton />
        <a href="https://drive.google.com/file/d/1aTirOEirDBlxZWyCMXnt9EdlCCf9Ipbp/view?usp=sharing" target="_blank" rel="noreferrer noopener"><FileText size={14}/> RÉSUMÉ <ArrowUpRight size={15}/></a>
      </div></div>
      <footer>© 2026 SAHIL DHATTERWAL · SOFTWARE ENGINEER / BENGALURU, INDIA</footer>
    </section>
  </main>;
}