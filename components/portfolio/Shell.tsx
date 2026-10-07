"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Work", "/work"],
  ["Experience", "/experience"],
  ["Contact", "/contact"],
];
export default function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <div className={path === "/" ? "site home-site" : "site inner-site"}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link href="/" className="logo" aria-label="Hamza Yakubu home">
          {/* HY<span>.</span> */}
          <img src="/images/hamza-cutout.png" alt="HY." className="rounded-full" width={32} height={32} />
          <small>
            Hamza Yakubu
            <br />
            <b>Strategy & Communication</b>
          </small>
        </Link>
        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={open ? "is-open" : ""}
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={
                path === href || (href !== "/" && path.startsWith(href + "/"))
                  ? "page"
                  : undefined
              }
            >
              {label}
              <span />
            </Link>
          ))}
        </nav>
        <a className="cv-link" href="/documents/hamza-yakubu-cv.pdf" download>
          <Download size={16} />
          CV
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="site-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main" className="page-transition" key={path}>
        {children}
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Hamza Yakubu</span>
        <span>Strategy. Story. Impact.</span>
        <Link href="/contact">Start a conversation</Link>
      </footer>
    </div>
  );
}
