"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  Plus,
  Minus,
} from "lucide-react";
import { expertise, work, experience } from "@/data/hamza";
export function PageHeading({
  index,
  title,
  accent,
  description,
}: {
  index: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <div className="page-heading">
      <p className="kicker">{index}</p>
      <h1>
        {title} <span>{accent}</span>
      </h1>
      <p>{description}</p>
    </div>
  );
}
export function About() {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState("Education");
  const Icon = expertise[active].icon;
  return (
    <div className="page-container">
      <PageHeading
        index="01 / THE PERSON"
        title="A little perspective."
        accent="A clear purpose."
        description="Working at the intersection of leadership, institutions and communities."
      />
      <section className="about-intro">
        <div className="about-portrait">
          <img src="/images/about.jpg" className="object-cover w-full h-full rounded-2xl" alt="Hamza Yakubu" />
          <span>HAMZA YAKUBU</span>
        </div>
        <div>
          <h2>
            Good communication starts with <em>understanding.</em>
          </h2>
          <p className="large-copy">
            I’m a strategic communications and public engagement professional
            with over eight years of experience across executive communications,
            electoral documentation and international positioning.
          </p>
          <p>
            From government offices to community initiatives, I translate
            complex priorities into stories people can connect with. My approach
            combines strategic thinking, on-ground insight and creative
            execution.
          </p>
          <a
            className="quiet-link"
            href="/documents/hamza-yakubu-cv.pdf"
            download
          >
            <Download size={16} /> Download full CV
          </a>
        </div>
      </section>
      <section className="expertise-section">
        <div className="section-intro">
          <p className="kicker">MY EXPERTISE</p>
          <h2>
            Different skills.
            <br />
            <em>One connected approach.</em>
          </h2>
        </div>
        <div className="expertise-explorer">
          <div
            className="expertise-options"
            role="tablist"
            aria-label="Areas of expertise"
          >
            {expertise.map((e, i) => (
              <button
                key={e.name}
                id={`skill-${i}`}
                role="tab"
                aria-selected={active === i}
                aria-controls="skill-panel"
                onClick={() => setActive(i)}
              >
                <span>0{i + 1}</span>
                {e.name}
                <span aria-hidden="true">{active === i ? "−" : "+"}</span>
              </button>
            ))}
          </div>
          <div
            className="expertise-detail"
            id="skill-panel"
            role="tabpanel"
            aria-labelledby={`skill-${active}`}
            key={active}
          >
            <Icon size={42} strokeWidth={1.3} />
            <span className="huge-index" aria-hidden="true">
              0{active + 1}
            </span>
            <h3>{expertise[active].name}</h3>
            <p>{expertise[active].text}</p>
            <Link href="/work" className="quiet-link">
              See it in practice
            </Link>
          </div>
        </div>
      </section>
      <section className="credentials-section">
        <div className="section-intro">
          <p className="kicker">BEYOND THE ROLE</p>
          <h2>
            Always learning.
            <br />
            <em>Always contributing.</em>
          </h2>
        </div>
        <div className="pill-tabs" aria-label="Background categories">
          {["Education", "Leadership", "Recognition"].map((t) => (
            <button key={t} aria-pressed={tab === t} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
        <div className="credential-content" key={tab}>
          {tab === "Education" ? (
            <>
              <div className="credential-grid">
                {[
                  [
                    "In view",
                    "Master’s · Leadership & Strategic Studies",
                    "Federal University Lokoja",
                  ],
                  [
                    "In view",
                    "Master’s · Public Administration",
                    "MIVA University",
                  ],
                  [
                    "2025",
                    "MBA · Business Administration",
                    "National Open University, Abuja",
                  ],
                  ["2015", "BSc · Statistics", "University of Abuja"],
                ].map((e) => (
                  <article key={e[1]}>
                    <span>{e[0]}</span>
                    <h3>{e[1]}</h3>
                    <p>{e[2]}</p>
                  </article>
                ))}
              </div>
              <p className="credential-note">
                Fellow, Chartered Institute of Information and Strategy
                Management (2025) · Fellow, Chartered Institute of Customer
                Relationship Management (2018). Selected training includes
                Google’s Foundation of Project Management (2023), Leading Teams
                and Corporate Governance (2023), and Project Management
                Professional, FUT Akure (2017).
              </p>
            </>
          ) : tab === "Leadership" ? (
            <div className="credential-grid">
              {[
                ["Founder", "Youth Next Hub"],
                ["Volunteers Manager", "TEDxOkene"],
                ["Ambassador · 2018–Date", "RemodAfrika"],
                ["Creative Director", "Ours Media Creativity Insight"],
                ["Chief Electoral Officer · 2016–2017", "NYSC, Ekiti"],
                [
                  "President · 2014–2015",
                  "National Association of Kogi State Students, University of Abuja",
                ],
                [
                  "Speaker · 2014–2015",
                  "Northern Nigeria Students Forum, University of Abuja",
                ],
                [
                  "Vice President · 2014–2015",
                  "National Association of Ebira Students, National Secretariat",
                ],
              ].map((e) => (
                <article key={e[1]}>
                  <span>{e[0]}</span>
                  <h3>{e[1]}</h3>
                </article>
              ))}
            </div>
          ) : (
            <div className="credential-grid">
              {[
                ["2017", "Incomparable Chief Electoral Officer", "NYSC, Ekiti"],
                [
                  "2017",
                  "NAES Icon of the Year",
                  "National Association of Ebira Students",
                ],
                [
                  "2015",
                  "Best Performing State President",
                  "GAMJI, University of Abuja",
                ],
              ].map((e) => (
                <article key={e[1]}>
                  <span>{e[0]}</span>
                  <h3>{e[1]}</h3>
                  <p>{e[2]}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      <PageEnd
        label="Explore the contribution"
        title="The work behind the words."
        href="/work"
      />
    </div>
  );
}
export function Work() {
  const [filter, setFilter] = useState("All");
  const [mode, setMode] = useState("Gallery");
  const categories = [
    "All",
    "Public engagement",
    "Electoral documentation",
    "Strategic storytelling",
  ];
  const items = work.filter(
    (w) => filter === "All" || w.category === filter.toUpperCase(),
  );
  return (
    <div className="page-container">
      <PageHeading
        index="02 / SELECTED ENGAGEMENTS"
        title="Ideas in action."
        accent="Impact in context."
        description="Explore the programmes and public conversations I’ve helped shape."
      />
      <div className="work-controls">
        <div className="pill-tabs" aria-label="Filter engagements">
          {categories.map((f) => (
            <button
              key={f}
              aria-pressed={f === filter}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="view-toggle" aria-label="Project view">
          {["Gallery", "List"].map((m) => (
            <button
              key={m}
              aria-pressed={m === mode}
              onClick={() => setMode(m)}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
      <p className="result-count" aria-live="polite">
        {items.length} engagement{items.length !== 1 ? "s" : ""}
      </p>
      <div
        className={`project-grid ${mode === "List" ? "list-view" : ""}`}
        key={filter + mode}
      >
        {items.map((w) => (
          <Link
            href={`/work/${w.slug}`}
            className={`project-card ${w?.image ? `bg-[url('/images/${w.image}')]` : `project-${w.number}`} bg-cover`}
            key={w.slug}
          >
            <div className="project-art">
              <span>
                {w.number} / {w.category}
              </span>
              <strong>
                {w.number === "01"
                  ? "CONFLUENCE"
                  : w.number === "02"
                    ? "HER VOICE."
                    : "LOCAL / GLOBAL"}
              </strong>
              <span className="project-open">
                Explore engagement <Plus size={18} />
              </span>
              <div className="art-orbit" aria-hidden="true" />
            </div>
            <div className="project-info">
              <p className="kicker">{w.org}</p>
              <h2>{w.title}</h2>
              <p>{w.summary}</p>
              <span>{w.tag}</span>
            </div>
          </Link>
        ))}
      </div>
      <PageEnd
        label="Talk about a collaboration"
        title="What could we shape together?"
        href="/contact"
      />
    </div>
  );
}
export function Project({ slug }: { slug: string }) {
  const index = work.findIndex((w) => w.slug === slug);
  const w = work[index];
  const [open, setOpen] = useState<number | null>(0);
  if (!w) return null;
  return (
    <div className="page-container project-detail">
      <Link href="/work" className="quiet-link">
        All engagements
      </Link>
      <PageHeading
        index={`${w.number} / ${w.category}`}
        title={w.title}
        accent=""
        description={w.summary}
      />
      <div className={`project-banner project-${w.number}`}>
        <strong>{w.org}</strong>
        <span>{w.tag}</span>
      </div>
      <section className="project-breakdown">
        <div>
          <p className="kicker">THE CONTRIBUTION</p>
          <h2>
            What went
            <br />
            <em>into the work.</em>
          </h2>
        </div>
        <div>
          {w.details.map((d, i) => (
            <div className="project-contribution" key={d}>
              <button
                aria-expanded={open === i}
                aria-controls={`contribution-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>0{i + 1}</span>
                <h3>
                  {
                    [
                      "Approach & execution",
                      "People & participation",
                      "Positioning & outcomes",
                    ][i]
                  }
                </h3>
                {open === i ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              <div
                id={`contribution-${i}`}
                className={
                  open === i ? "contribution-text open" : "contribution-text"
                }
              >
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="project-next">
        <span>UP NEXT / {work[(index + 1) % work.length].org}</span>
        <Link href={`/work/${work[(index + 1) % work.length].slug}`}>
          <h2>{work[(index + 1) % work.length].title}</h2>
        </Link>
      </div>
    </div>
  );
}
export function Experience() {
  const [selected, setSelected] = useState(0);
  const [filter, setFilter] = useState("All roles");
  const entries = experience
    .map((e, i) => ({ e, i }))
    .filter(
      ({ i }) =>
        filter === "All roles" ||
        (filter === "Communications"
          ? [0, 2, 3, 4].includes(i)
          : [1, 5, 6].includes(i)),
    );
  return (
    <div className="page-container">
      <PageHeading
        index="03 / THE JOURNEY"
        title="Built through experience."
        accent="Shaped by people."
        description="Explore a role to see the responsibilities and contribution behind it."
      />
      <div className="pill-tabs" aria-label="Filter career roles">
        {["All roles", "Communications", "Programme & executive roles"].map(
          (f) => (
            <button
              key={f}
              aria-pressed={filter === f}
              onClick={() => {
                setFilter(f);
                setSelected(
                  f === "Communications" ? 0 : f === "All roles" ? 0 : 1,
                );
              }}
            >
              {f}
            </button>
          ),
        )}
      </div>
      <div className="career-explorer">
        <div className="career-list" aria-label="Career roles">
          {entries.map(({ e, i }) => (
            <button
              key={e[1]}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              <span>{e[0]}</span>
              <h2>{e[1]}</h2>
              <p>{e[2]}</p>
              <span className="career-dot" aria-hidden="true" />
            </button>
          ))}
        </div>
        <article className="career-detail" aria-live="polite" key={selected}>
          <span className="kicker">{experience[selected][0]}</span>
          <span className="career-index" aria-hidden="true">
            0{selected + 1}
          </span>
          <h2>{experience[selected][2]}</h2>
          <h3>{experience[selected][1]}</h3>
          <p>{experience[selected][3]}</p>
          <a
            className="quiet-link"
            href="/documents/hamza-yakubu-cv.pdf"
            download
          >
            <Download size={16} />
            Full responsibilities in my CV
          </a>
        </article>
      </div>
      <PageEnd
        label="See the person behind the roles"
        title="A little more about Hamza."
        href="/about"
      />
    </div>
  );
}
export function Contact() {
  const [topic, setTopic] = useState("Strategic communications");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText("yakubuhamza01@gmail.com");
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  }
  function compose(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello Hamza,\n\n${message}\n\n${name}`;
    window.location.href = `mailto:yakubuhamza01@gmail.com?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(text)}`;
  }
  return (
    <div className="page-container">
      <PageHeading
        index="04 / LET’S CONNECT"
        title="The next conversation"
        accent="starts here."
        description="For strategic communications, public engagement and storytelling collaborations."
      />
      <div className="contact-grid">
        <div className="contact-card">
          <p className="kicker">DIRECT CONTACT</p>
          <h2>
            Let’s find
            <br />
            <em>common ground.</em>
          </h2>
          <a className="contact-line" href="mailto:yakubuhamza01@gmail.com">
            <Mail size={19} />
            <span>yakubuhamza01@gmail.com</span>
          </a>
          <button className="copy-email" onClick={copy}>
            {copied ? <Check size={16} /> : <Copy size={16} />}{" "}
            {copied ? "Email copied" : "Copy email"}
          </button>
          <span className="sr-only" role="status">
            {copied
              ? "Email copied"
              : copyError
                ? "Copy unavailable. Use the email link above."
                : ""}
          </span>
          {copyError && (
            <p className="copy-error">
              Use the email link above to open your mail app.
            </p>
          )}
          <a className="contact-line" href="tel:+2348135848893">
            <Phone size={19} />
            <span>+234 813 584 8893</span>
          </a>
          <p className="contact-line">
            <MapPin size={19} />
            <span>Kubwa, Abuja, Nigeria</span>
          </p>
        </div>
        <form className="contact-compose" onSubmit={compose}>
          <p className="kicker">START A CONVERSATION</p>
          <h2>
            What do you
            <br />
            have in mind?
          </h2>
          <label htmlFor="topic">I’d like to discuss</label>
          <select
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            {[
              "Strategic communications",
              "Public engagement",
              "Storytelling & documentation",
              "Programme leadership",
              "Another collaboration",
            ].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={100}
            placeholder="How should Hamza address you?"
          />
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            maxLength={3000}
            rows={4}
            placeholder="A little about your idea or project…"
          />
          <button type="submit" className="button">
            Open email draft <Mail size={17} />
          </button>
          <p className="form-note">
            Opens your email app with a draft. You can review and send it there.
          </p>
        </form>
      </div>
    </div>
  );
}
export function PageEnd({
  label,
  title,
  href,
}: {
  label: string;
  title: string;
  href: string;
}) {
  return (
    <Link className="page-end" href={href}>
      <span className="kicker">{label}</span>
      <h2>{title}</h2>
      <span className="end-plus" aria-hidden="true">
        +
      </span>
    </Link>
  );
}
