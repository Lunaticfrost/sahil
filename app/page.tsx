import { ArrowUpRight, FileText } from "lucide-react";
import { Reveal, MagneticLink, WorkRow, ProjectRow } from "@/components/ui";

const work = [
  { number: "01", label: "PRODUCTION RELIABILITY", title: "Reduced production alert volume by 61%.", href: "/work/reliability" },
  { number: "02", label: "SYSTEM DESIGN", title: "Designing backend systems with clear boundaries and operational thinking.", href: "/work/system-design" },
  { number: "03", label: "ENGINEERING OWNERSHIP", title: "Owning software beyond the code — deploy, operate, document, improve.", href: "/work/ownership" },
];
const writing = [
  ["01","Why alert volume is an engineering problem","RELIABILITY","6 MIN READ"],
  ["02","The difference between writing code and owning a system","ENGINEERING","7 MIN READ"],
  ["03","Retries are not reliability","BACKEND","8 MIN READ"],
];

export default function Home() {
  return <main>
    <nav className="nav"><a className="brand" href="/">SAHIL</a><div className="nav-links">
      <a href="#experience">EXPERIENCE</a><a href="#work">WORK</a><a href="#projects">PROJECTS</a><a href="#writing">WRITING</a><a href="#about">ABOUT</a>
    </div></nav>

    <section className="hero">
      <div className="hero-top"><Reveal><span className="eyebrow">SOFTWARE ENGINEER / BENGALURU, INDIA</span></Reveal><Reveal delay={.08}><span className="hero-index">01 — 06</span></Reveal></div>
      <div className="hero-main"><Reveal delay={.1}><div className="hero-name">SAHIL</div></Reveal>
        <Reveal delay={.18}><h1>I build backend systems<br/><em>that have to work in production.</em></h1></Reveal>
        <Reveal delay={.26}><p className="hero-copy">Backend engineering, distributed systems, authorization, and reliability — with an emphasis on what happens after software ships.</p></Reveal>
      </div>
      <div className="hero-bottom"><MagneticLink href="#work">EXPLORE WORK <ArrowUpRight size={15}/></MagneticLink><MagneticLink href="https://github.com/Lunaticfrost" target="_blank">GITHUB <ArrowUpRight size={15}/></MagneticLink></div>
      <div className="hero-meta">{["BACKEND","SYSTEMS","RELIABILITY","PRODUCTION"].map((x,i)=><span key={x}><b>0{i+1}</b>{x}</span>)}</div>
    </section>

    <section className="strip"><span className="rule"/><p>3+ years building software — from full-stack applications to production backend systems.</p></section>

    <section className="impact-section">
      <div className="impact-label">SELECTED IMPACT</div>
      <div className="impact-grid">
        <div><strong>61%</strong><span>REDUCTION IN MONTHLY PRODUCTION ALERTS</span></div>
        <div><strong>40%</strong><span>LESS MANUAL OPERATIONAL WORK</span></div>
        <div><strong>35%</strong><span>FASTER BUG DETECTION</span></div>
        <div><strong>25%</strong><span>IMPROVEMENT IN RESPONSE TIME</span></div>
      </div>
    </section>

    <section id="experience" className="section experience"><Reveal><div className="section-kicker">01 / EXPERIENCE</div></Reveal>
      <Reveal delay={.06}><h2>A career built around<br/>shipping and operating software.</h2></Reveal>
      <div className="career">
        <article className="career-item"><div className="career-top"><span>2025 — PRESENT</span><span>01</span></div><div><h3>SMARTSHEET</h3><p className="role">SOFTWARE ENGINEER I</p></div><p className="career-desc">Backend engineering with responsibility spanning production support, deployments, on-call operations, documentation, incident response, and system reliability.</p><div className="career-result"><strong>61%</strong><span>reduction in monthly production alert volume<br/><small>467 → 184</small></span></div></article>
        <article className="career-item"><div className="career-top"><span>2023 — 2025</span><span>02</span></div><div><h3>MONKSPACES.AI</h3><p className="role">SOFTWARE DEVELOPMENT ENGINEER</p></div><p className="career-desc">Built business-critical integrations and backend automation across HubSpot, QuickBooks, Xero, ticketing, escalation workflows, and internal tooling.</p><div className="career-result"><strong>40%</strong><span>reduction in manual operational work</span></div></article>
        <article className="career-item"><div className="career-top"><span>2023</span><span>03</span></div><div><h3>COGNIZANT</h3><p className="role">FULL STACK DEVELOPER INTERN</p></div><p className="career-desc">Built a full-stack application from conception through deployment using React.js, Java Spring Boot, REST APIs, and MySQL.</p><div className="career-result"><strong>25%</strong><span>improvement in system response time</span></div></article>
      </div>
    </section>

    <section className="case-feature">
      <div className="case-feature-top"><span className="section-kicker">FEATURED CASE STUDY / SMARTSHEET</span><span>2025 — PRESENT</span></div>
      <div className="case-feature-title"><h2>From inheriting a production system<br/><em>to owning its operation.</em></h2><p>A public-safe look at the engineering work behind production support, reliability, incident response, and team enablement.</p></div>
      <div className="case-steps">
        <article><b>01</b><h3>TRANSITION</h3><p>Became the first India-based engineer on the team during a US-to-India ownership transition.</p></article>
        <article><b>02</b><h3>UNDERSTAND</h3><p>Built working knowledge across production behavior, operational failure modes, alerts, deployments, and support paths.</p></article>
        <article><b>03</b><h3>STABILIZE</h3><p>Analyzed incidents and low-signal monitoring, improved coverage, and made operational response more actionable.</p></article>
        <article><b>04</b><h3>ENABLE</h3><p>Turned operational knowledge into documentation and runbooks so the wider team could operate the domain confidently.</p></article>
      </div>
      <a className="case-feature-link" href="/work/reliability">READ THE CASE STUDY <ArrowUpRight size={16}/></a>
    </section>

    <section id="work" className="section work-section"><Reveal><div className="section-kicker">02 / SELECTED WORK</div></Reveal><Reveal delay={.06}><h2>Problems worth<br/>understanding deeply.</h2></Reveal>
      <div className="work-list">{work.map((x,i)=><WorkRow key={x.number} {...x} delay={i*.06}/>)}</div>
    </section>

    <section id="projects" className="section projects-section"><Reveal><div className="section-kicker">05 / PROJECTS</div></Reveal><Reveal delay={.06}><h2>Things I built<br/>to learn by doing.</h2></Reveal>
      <div className="project-list">
        <ProjectRow number="01" title="Fly Right" description="A full-stack flight booking application with search, booking, authentication, admin operations, notifications, offline support, and automated testing." tags={["NEXT.JS","REACT","TYPESCRIPT","SUPABASE","PLAYWRIGHT"]} href="https://github.com/Lunaticfrost/fly-right-frontend"/>
        <ProjectRow number="02" title="FrostDB" description="An embeddable, zero-dependency key-value database engine written in pure Go, built around a WAL, in-memory hash index, concurrent access, and crash-resilient on-disk records." tags={["GO 1.25","DATABASE INTERNALS","WAL","SYSTEMS"]} href="https://github.com/Lunaticfrost/frostdb"/>
      </div>
    </section>

    <section className="section philosophy">
      <Reveal><div className="section-kicker">04 / ENGINEERING PHILOSOPHY</div></Reveal>
      <Reveal delay={.06}><h2>I care less about how much code I write<br/><em>and more about what happens after it ships.</em></h2></Reveal>
      <div className="principles">
        <article><span>01</span><h3>PRODUCTION IS THE REAL TEST</h3><p>A feature isn't finished when the PR merges. It's finished when it can be deployed, observed, operated, and recovered.</p></article>
        <article><span>02</span><h3>RELIABILITY IS DESIGNED</h3><p>Timeouts, retries, alerts, failure modes, and recovery paths are part of system design — not operational afterthoughts.</p></article>
        <article><span>03</span><h3>OWNERSHIP CREATES LEVERAGE</h3><p>Good documentation and runbooks turn individual knowledge into team capability.</p></article>
        <article><span>04</span><h3>SIMPLICITY SCALES</h3><p>Prefer systems that another engineer can understand, operate, and debug without hidden context.</p></article>
      </div>
    </section>

    <section id="writing" className="section writing"><Reveal><div className="section-kicker">06 / WRITING</div></Reveal>
      <div className="writing-head"><Reveal delay={.06}><h2>Things I’m still<br/>figuring out.</h2></Reveal><p>Notes on backend engineering, reliability, systems, and the lessons that only show up after software ships.</p></div>
      <div className="writing-list">{writing.map(([n,t,tag,time])=><a className="writing-row" href={`/notes/${n}`} key={n}><span>{n}</span><div><small>{tag} · {time}</small><h3>{t}</h3></div><ArrowUpRight size={18}/></a>)}</div>
    </section>

    <section className="section technical"><Reveal><div className="section-kicker">07 / TECHNICAL FOCUS</div></Reveal><Reveal delay={.06}><h2>What I work<br/>with.</h2></Reveal>
      <div className="tech-grid">{[
        ["BACKEND","Node.js · NestJS · Spring Boot · REST APIs · Microservices · RabbitMQ"],
        ["SYSTEMS","Distributed Systems · System Design · Authorization & Access Control · API Design"],
        ["CLOUD & INFRA","AWS · Docker · Kubernetes · Lambda · SQS · CloudWatch · CI/CD · PagerDuty"],
        ["DATA","Snowflake · DynamoDB · MongoDB · PostgreSQL · MySQL · Redis"],
        ["LANGUAGES","TypeScript · JavaScript · Java · C++ · SQL"],
        ["RELIABILITY","Observability · Incident Response · Production Operations · Runbooks"],
      ].map(([t,d],i)=><Reveal delay={i*.03} key={t}><article className="tech-item"><span>{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div>
    </section>

    <section id="about" className="section notes"><Reveal><div className="section-kicker">08 / ELSEWHERE</div></Reveal>
      <div className="notes-flex"><div><h2>Build. Operate.<br/>Understand. Repeat.</h2><p className="about-line">Software engineer based in Bengaluru, focused on backend systems and production reliability.</p></div>
      <div className="contact"><a href="https://github.com/Lunaticfrost" target="_blank">GITHUB <ArrowUpRight size={15}/></a><a href="https://www.linkedin.com/in/sahildhatterwal/" target="_blank">LINKEDIN <ArrowUpRight size={15}/></a><a href="mailto:sahilfrost@gmail.com">EMAIL <ArrowUpRight size={15}/></a><a href="/Sahil.pdf" target="_blank"><FileText size={14}/> RÉSUMÉ <ArrowUpRight size={15}/></a></div></div>
      <footer>© 2026 SAHIL — SOFTWARE ENGINEER / BENGALURU, INDIA</footer>
    </section>
  </main>;
}