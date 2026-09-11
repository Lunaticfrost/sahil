import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const highlights = [
  ["PURE GO & ZERO-CGO","Zero external C dependencies; designed to compile statically across darwin, linux, and windows without C toolchain hurdles."],
  ["CONCURRENT EXECUTION","Fine-grained sync.RWMutex locking allows concurrent reads while maintaining write safety."],
  ["SEQUENTIAL DISK I/O","An append-only write-ahead log turns random disk seeks into high-throughput sequential appends."],
  ["DATA INTEGRITY","Each on-disk record uses a 19-byte binary header with IEEE CRC32 checksums to detect corruption and handle partial or torn writes."],
  ["DEVELOPER ERGONOMICS","Includes an interactive REPL shell and an embeddable Go API for in-process use."]
];
export default function FrostDB(){return <main className="case"><nav className="nav"><Link className="brand" href="/">SAHIL</Link><Link className="back" href="/#projects">← PROJECTS</Link></nav><section className="case-hero"><span className="section-kicker">PROJECT / 02 · SYSTEMS PROGRAMMING</span><h1>FrostDB —<br/>an embeddable<br/><em>key-value database.</em></h1><p>Most applications needing fast local persistence face a choice between the operational overhead of external services and the CGo complexity of embedded engines. FrostDB explores a different path: a zero-dependency, crash-resilient key-value database written in 100% pure Go.</p><div className="case-meta"><span>ROLE / CREATOR & CORE DEVELOPER</span><span>LANGUAGE / GO 1.25</span><a href="https://github.com/Lunaticfrost/frostdb" target="_blank">GITHUB <ArrowUpRight size={14}/></a></div></section><section className="case-grid">{highlights.map(([title,text])=><article key={title}><span>{title}</span><p>{text}</p></article>)}</section><section className="case-architecture"><span className="section-kicker">ARCHITECTURE</span><h2>Keep reads in memory.<br/>Make writes sequential.<br/>Recover from the log.</h2><pre>{`  Application / CLI
         │
         ▼
  ┌──────────────┐      Sequential Append     ┌──────────────────────────────────┐
  │ In-Memory    ├───────────────────────────►│ Write-Ahead Log (WAL)             │
  │ Hash Index   │                            │ [CRC32][Timestamp][Op][Len][Data]│
  └──────┬───────┘                            └────────────────┬─────────────────┘
         │                                                     │
   Reads │ O(1)                                         Replay │ on Startup
         ▼                                                     ▼
     Immediate                                         State Restored`}</pre></section><section className="case-closing"><p>FrostDB is the kind of project I build to understand systems from first principles — not just how to call a database, but how indexing, concurrency, persistence, recovery, and data integrity fit together underneath it.</p><a href="https://github.com/Lunaticfrost/frostdb" target="_blank">VIEW SOURCE ON GITHUB <ArrowUpRight size={15}/></a></section></main>}
