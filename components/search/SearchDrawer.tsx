"use client";
import { Icon } from "@/components/ui/Icon";
import { useEffect, useRef } from "react";

type SearchDrawerProps = { isOpen: boolean; onClose: () => void };
const suggestions = ["Name tumbler", "Teacher gift", "Coffee mug", "Key ring", "Halloween cup", "Gift set"];
export function SearchDrawer({ isOpen, onClose }: SearchDrawerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { document.body.classList.toggle("is-drawer-open", isOpen); if (isOpen) { const t = window.setTimeout(() => inputRef.current?.focus(), 120); return () => { window.clearTimeout(t); document.body.classList.remove("is-drawer-open"); }; } return () => document.body.classList.remove("is-drawer-open"); }, [isOpen]);
  useEffect(() => { if (!isOpen) return; const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); }; window.addEventListener("keydown", onKeyDown); return () => window.removeEventListener("keydown", onKeyDown); }, [isOpen, onClose]);
  return <><div className={`drawer-overlay ${isOpen ? "is-visible" : ""}`} onClick={onClose} aria-hidden="true" /><aside className={`search-drawer ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen} aria-label="Search"><div className="drawer__header"><h2>Search Boo&amp;Brew</h2><button type="button" className="icon-button" aria-label="Close search" onClick={onClose}><Icon name="close" /></button></div><form className="search-form" action="/search"><label htmlFor="site-search">Search products</label><input ref={inputRef} id="site-search" name="q" type="search" placeholder="Search tumblers, mugs, key rings, gifts…" /></form><div className="drawer-section"><h3>Popular searches</h3><div className="suggestion-list">{suggestions.map((suggestion) => <a key={suggestion} href={`/search?q=${encodeURIComponent(suggestion)}`} onClick={onClose}>{suggestion}</a>)}</div></div></aside></>;
}
