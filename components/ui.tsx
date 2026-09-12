 "use client";

import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }} />;
}

export function LiveStatusTicker() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function update() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    }
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="status-ticker" title="Operational Telemetry">
      <span className="status-dot-pulse">
        <span className="status-dot" />
      </span>
      <span className="status-label">SYS_STATUS: HEALTHY</span>
      <span className="status-sep">/</span>
      <span className="status-time">BENGALURU, IN {time ? `· ${time} IST` : ""}</span>
    </div>
  );
}

export function CopyEmailButton({ email = "sahilfrost@gmail.com" }: { email?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="copy-email-wrap">
      <button
        type="button"
        onClick={handleCopy}
        className="copy-email-btn"
        aria-label="Copy email address to clipboard"
      >
        {copied ? (
          <>
            <Check size={13} className="copied-icon" />
            <span className="copied-text">COPIED</span>
          </>
        ) : (
          <>
            <span>EMAIL</span>
            <Copy size={12} className="copy-icon" />
          </>
        )}
      </button>
      <a
        href={`mailto:${email}`}
        className="email-mailto-link"
        title="Open default mail client"
        aria-label="Open default mail client"
      >
        <ArrowUpRight size={13} />
      </a>
    </div>
  );
}

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MagneticLink({
  href, children, className = "", target, rel
}: { href: string; children: React.ReactNode; className?: string; target?: string; rel?: string }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 20 });
  const sy = useSpring(y, { stiffness: 280, damping: 20 });
  const ref = useRef<HTMLAnchorElement>(null);

  function move(e: React.MouseEvent<HTMLAnchorElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.12);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.12);
  }
  function leave() { x.set(0); y.set(0); }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={target === "_blank" ? (rel ?? "noreferrer noopener") : rel}
      style={{ x: sx, y: sy }}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`arrow-link ${className}`}
    >
      {children}
    </motion.a>
  );
}

export function WorkRow({
  number, label, title, href, delay = 0
}: { number: string; label: string; title: string; href: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <a href={href} className="work-row">
        <span className="row-number">{number}</span>
        <div className="row-copy"><span>{label}</span><h3>{title}</h3></div>
        <ArrowUpRight className="row-arrow" size={20} />
      </a>
    </Reveal>
  );
}

export function ProjectRow({
  number,
  title,
  description,
  tags,
  href,
  githubHref,
}: {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  githubHref?: string;
}) {
  const isInternal = href?.startsWith("/");

  function handleRowClick(e: React.MouseEvent) {
    if ((e.target as HTMLElement).closest("a, button")) {
      return;
    }
    if (href) {
      if (isInternal) {
        window.location.href = href;
      } else {
        window.open(href, "_blank", "noreferrer,noopener");
      }
    }
  }

  return (
    <Reveal>
      <article
        className="project-row"
        onClick={handleRowClick}
        style={{ cursor: href ? "pointer" : "default" }}
      >
        <span className="row-number">{number}</span>
        <div className="project-copy">
          <div className="project-title-bar">
            {href ? (
              <a
                href={href}
                target={isInternal ? undefined : "_blank"}
                rel={isInternal ? undefined : "noreferrer noopener"}
                className="project-title-link"
              >
                <h3>{title}</h3>
              </a>
            ) : (
              <h3>{title}</h3>
            )}
            {githubHref && (
              <span className="project-sublink">
                <a href={githubHref} target="_blank" rel="noreferrer noopener">
                  GITHUB <ArrowUpRight size={12} />
                </a>
              </span>
            )}
          </div>
          <p>{description}</p>
          <div className="tags">
            {tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        {href && (
          <a
            href={href}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noreferrer noopener"}
            className="project-arrow-link"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="row-arrow" size={20} />
          </a>
        )}
      </article>
    </Reveal>
  );
}
