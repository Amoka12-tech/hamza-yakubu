"use client";
import { useState } from "react";
import Link from "next/link";
const focus = [
  {
    label: "Communication",
    text: "Making complex priorities clear.",
    link: "/about",
  },
  {
    label: "Engagement",
    text: "Bringing people into the conversation.",
    link: "/work/confluence-impact-summit",
  },
  {
    label: "Storytelling",
    text: "Connecting local impact to wider audiences.",
    link: "/work/international-storytelling",
  },
];
export default function Home() {
  const [active, setActive] = useState(0);
  const [point, setPoint] = useState({ x: 50, y: 50 });
  return (
    <>
      <section
        className="home-hero"
        onPointerMove={(e) => {
          if (e.pointerType !== "mouse") return;
          const r = e.currentTarget.getBoundingClientRect();
          setPoint({
            x: ((e.clientX - r.left) / r.width) * 100,
            y: ((e.clientY - r.top) / r.height) * 100,
          });
        }}
        style={
          {
            "--px": `${point.x}%`,
            "--py": `${point.y}%`,
          } as React.CSSProperties
        }
      >
        <div className="home-copy">
          <p className="kicker">HELLO, I’M</p>
          <h1>
            Hamza <span>Yakubu</span>
          </h1>
          <p className="home-role">
            Strategic Communications
            <br />& Public Engagement Professional
          </p>
          <p className="home-intro">
            Clear narratives. Meaningful connections.
            <br />
            Ideas that advance impact.
          </p>
          <div className="home-actions">
            <Link href="/work" className="button">
              Explore my work
            </Link>
            <Link href="/contact" className="button button-outline">
              Let’s talk
            </Link>
          </div>
          <div className="focus-selector">
            <div role="tablist" aria-label="Explore Hamza’s focus">
              {focus.map((f, i) => (
                <button
                  key={f.label}
                  role="tab"
                  id={`focus-${i}`}
                  aria-controls="focus-panel"
                  aria-selected={active === i}
                  tabIndex={active === i ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (
                      ["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)
                    ) {
                      e.preventDefault();
                      const n =
                        e.key === "Home"
                          ? 0
                          : e.key === "End"
                            ? 2
                            : (active + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                      setActive(n);
                      document.getElementById(`focus-${n}`)?.focus();
                    }
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div
              id="focus-panel"
              role="tabpanel"
              aria-labelledby={`focus-${active}`}
              key={active}
            >
              <Link href={focus[active].link}>{focus[active].text}</Link>
            </div>
          </div>
        </div>
        <div className="home-portrait">
          <div className="portrait-orbit" aria-hidden="true" />
          <div className="portrait-grid" aria-hidden="true" />
          <div className="portrait-sparks" aria-hidden="true">
            {Array.from({ length: 8 }, (_, i) => (
              <span
                key={i}
                style={{
                  left: `${10 + ((i * 23) % 80)}%`,
                  top: `${8 + ((i * 17) % 75)}%`,
                  animationDelay: `${i * 0.7}s`,
                }}
              />
            ))}
          </div>
          <span className="portrait-index">BASED IN ABUJA, NIGERIA</span>
          <img
            src="/images/hamza-cutout.png"
            alt="Hamza Yakubu"
            fetchPriority="high"
          />
          <div className="portrait-caption">
            <span>8+ YEARS</span>
            <p>
              Across leadership,
              <br />
              institutions & communities.
            </p>
          </div>
        </div>
      </section>
      <div className="home-destinations">
        {[
          ["01", "The person", "About Hamza", "/about"],
          ["02", "The contribution", "Selected work", "/work"],
          ["03", "The journey", "Experience", "/experience"],
        ].map(([n, label, title, url]) => (
          <Link href={url} key={url}>
            <span>{n}</span>
            <div>
              <small>{label}</small>
              <h2>{title}</h2>
            </div>
            <span className="destination-mark" aria-hidden="true">
              +
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
