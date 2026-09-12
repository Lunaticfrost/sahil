import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReadingProgress } from "@/components/ui";

const highlights = [
  [
    "PURE GO & ZERO-CGO",
    "Zero external C dependencies. Compiles to a single static binary across Darwin, Linux, and Windows without GCC or CGo toolchain friction.",
  ],
  [
    "CONCURRENT READ/WRITE",
    "Fine-grained sync.RWMutex concurrency allows multiple readers to execute without contention while write transactions are safely serialized.",
  ],
  [
    "SEQUENTIAL DISK I/O",
    "An append-only Write-Ahead Log (WAL) transforms random disk seeks into high-throughput sequential disk writes, maximizing I/O performance.",
  ],
  [
    "IEEE CRC32 INTEGRITY",
    "Every on-disk record carries a 19-byte binary header with IEEE CRC32 checksums to protect against bit rot, torn writes, and partial flushes.",
  ],
  [
    "CRASH-RESILIENT RECOVERY",
    "On startup, the engine replays the append-only log sequentially, validating each transaction boundary and rebuilding the in-memory index in milliseconds.",
  ],
  [
    "EMBEDDABLE & REPL CLI",
    "Designed for developer ergonomics: embed directly in Go in 3 lines of code or run standalone using the interactive REPL terminal shell.",
  ],
];

export default function FrostDB() {
  return (
    <main className="case">
      <ReadingProgress />
      <nav className="nav">
        <Link className="brand" href="/">
          SAHIL
        </Link>
        <Link className="back" href="/#projects">
          ← PROJECTS
        </Link>
      </nav>

      <section className="case-hero">
        <span className="section-kicker">
          PROJECT / 01 · SYSTEMS PROGRAMMING
        </span>
        <h1>
          FrostDB:<br />
          an embeddable
          <br />
          <em>key-value database.</em>
        </h1>
        <p>
          Most applications needing fast local persistence face a painful trade-off:
          either accept the operational overhead of running external database daemons,
          or endure the build complexity and cross-compilation hurdles of CGo-based engines.
          FrostDB was engineered as a pure-Go alternative: a zero-dependency, crash-resilient
          key-value database built around an in-memory hash index and an append-only WAL.
        </p>
        <div className="case-meta">
          <span>ROLE / CREATOR & CORE DEVELOPER</span>
          <span>LANGUAGE / GO 1.25</span>
          <span>STORAGE / APPEND-ONLY WAL</span>
          <a href="https://github.com/Lunaticfrost/frostdb" target="_blank" rel="noreferrer noopener">
            GITHUB <ArrowUpRight size={13} />
          </a>
          <a href="https://pkg.go.dev/github.com/Lunaticfrost/frostdb" target="_blank" rel="noreferrer noopener">
            GODOC <ArrowUpRight size={13} />
          </a>
        </div>
      </section>

      <section className="case-grid">
        {highlights.map(([title, text]) => (
          <article key={title}>
            <span>{title}</span>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="case-architecture">
        <span className="section-kicker">SYSTEM ARCHITECTURE</span>
        <h2>
          Keep reads in memory.
          <br />
          Make writes sequential.
          <br />
          Recover from the log.
        </h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
            </div>
            <span>frostdb/architecture.ascii</span>
          </div>
          <pre>{`  Application / Client
          │
          ▼
   ┌──────────────┐      Sequential Append     ┌──────────────────────────────────┐
   │ In-Memory    ├───────────────────────────►│ Write-Ahead Log (WAL)             │
   │ Hash Index   │                            │ [CRC32][Timestamp][Op][Len][Data]│
   └──────┬───────┘                            └────────────────┬─────────────────┘
          │                                                     │
    Reads │ O(1)                                         Replay │ on Startup
          ▼                                                     ▼
      Immediate                                         State Restored`}</pre>
        </div>
      </section>

      <section className="case-architecture" style={{ borderTop: "none" }}>
        <span className="section-kicker">DEVELOPER ERGONOMICS</span>
        <h2>
          Embedded in three lines.
          <br />
          <em>Zero background daemons.</em>
        </h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
            </div>
            <span>main.go</span>
          </div>
          <pre>{`package main

import (
    "fmt"
    "log"
    "github.com/Lunaticfrost/frostdb"
)

func main() {
    // Open or create the database file
    db, err := frostdb.Open("./storage.wal")
    if err != nil {
        log.Fatalf("failed to initialize db: %v", err)
    }
    defer db.Close()

    // O(1) indexed write persisted sequentially to WAL
    _ = db.Set([]byte("session:usr_99"), []byte("active"))

    // Immediate O(1) read protected by RWMutex
    val, found := db.Get([]byte("session:usr_99"))
    if found {
        fmt.Printf("Session state: %s\\n", val)
    }
}`}</pre>
        </div>
      </section>

      <section className="case-closing">
        <p>
          FrostDB was built to explore systems programming from first principles: understanding
          how concurrency, binary serialization, disk persistence, and crash recovery coordinate
          without external frameworks.
        </p>
        <div className="case-closing-links">
          <a href="https://github.com/Lunaticfrost/frostdb" target="_blank" rel="noreferrer noopener">
            VIEW SOURCE ON GITHUB <ArrowUpRight size={14} />
          </a>
          <a href="https://pkg.go.dev/github.com/Lunaticfrost/frostdb" target="_blank" rel="noreferrer noopener">
            VIEW DOCUMENTATION ON GODOC <ArrowUpRight size={14} />
          </a>
          <Link href="/#projects">
            ← BACK TO PROJECTS
          </Link>
        </div>
      </section>
    </main>
  );
}
