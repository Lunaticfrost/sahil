 "use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

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

export function ProjectRow({ number, title, description, tags, href }: { number: string; title: string; description: string; tags: string[]; href?: string }) {
  const content = <>
    <span className="row-number">{number}</span>
    <div className="project-copy"><h3>{title}</h3><p>{description}</p><div className="tags">{tags.map(t=><span key={t}>{t}</span>)}</div></div>
    <ArrowUpRight className="row-arrow" size={20}/>
  </>;
  return <Reveal>{href ? <a href={href} target="_blank" className="project-row">{content}</a> : <article className="project-row">{content}</article>}</Reveal>;
}
