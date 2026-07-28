"use client";

import { useEffect, useState } from "react";

export default function NavClient({
  links,
  otherLangHref,
  otherLangLabel,
}: {
  links: { label: string; href: string }[];
  otherLangHref: string;
  otherLangLabel: string;
}) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [links]);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-blue-dark">
        {links.map((link) => {
          const id = link.href.slice(1);
          const isActive = active === id;
          return (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-card transition-colors"
            >
              <span className="relative inline-block">
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/4 w-1/2 h-0.5 bg-blue-dark" />
                )}
              </span>
            </a>
          );
        })}
        <span className="w-px h-4 bg-anniversary-200" />
        <a
          href={otherLangHref}
          className="font-medium text-blue-dark hover:text-blue-card transition-colors"
        >
          {otherLangLabel}
        </a>
      </nav>

      {/* Mobile */}
      <div className="flex md:hidden items-center gap-3">
        <a
          href={otherLangHref}
          className="text-xs font-medium text-blue-dark hover:text-blue-card transition-colors uppercase"
        >
          {otherLangLabel}
        </a>
        <details className="group">
          <summary className="list-none text-blue-dark cursor-pointer">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <nav className="absolute right-0 top-full bg-white border border-anniversary-200 rounded-lg shadow-lg py-3 px-5 flex flex-col gap-3 text-xs uppercase tracking-widest text-blue-dark min-w-48">
            {links.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-blue-dark transition-colors py-1"
                >
                  <span className="relative inline-block">
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/4 w-1/2 h-0.5 bg-blue-dark" />
                    )}
                  </span>
                </a>
              );
            })}
          </nav>
        </details>
      </div>
    </>
  );
}
