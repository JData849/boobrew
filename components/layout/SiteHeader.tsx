"use client";

import { mobileNavigationItems, navigationItems } from "@/components/homepage/homepage.data";
import { Icon } from "@/components/ui/Icon";
import { useEffect, useState } from "react";

type SiteHeaderProps = { onSearchOpen: () => void; onCartOpen: () => void };

export function SiteHeader({ onSearchOpen, onCartOpen }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-drawer-open", isMenuOpen);
    return () => document.body.classList.remove("is-drawer-open");
  }, [isMenuOpen]);

  return (
    <>
      <header className={`site-header ${isCompact ? "is-compact" : ""}`}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="site-header__inner container">
          <button className="site-header__menu-button icon-button" type="button" aria-label="Open menu" aria-controls="mobile-navigation" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(true)}>
            <Icon name="menu" />
          </button>
          <a href="/" className="site-header__logo" aria-label="Boo&Brew home">Boo&amp;Brew</a>
          <nav className="site-header__nav" aria-label="Main navigation">
            <ul>{navigationItems.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul>
          </nav>
          <div className="site-header__actions" aria-label="Header actions">
            <button type="button" className="icon-button" aria-label="Open search" onClick={onSearchOpen}><Icon name="search" /></button>
            <a className="icon-button site-header__optional-action" href="/account/wishlist" aria-label="Wishlist"><Icon name="heart" /></a>
            <a className="icon-button site-header__optional-action" href="/account" aria-label="Account"><Icon name="account" /></a>
            <button type="button" className="icon-button cart-button" aria-label="Open cart" onClick={onCartOpen}><Icon name="bag" /><span className="cart-count" aria-label="0 items in cart">0</span></button>
          </div>
        </div>
      </header>
      <div className={`drawer-overlay ${isMenuOpen ? "is-visible" : ""}`} onClick={() => setIsMenuOpen(false)} aria-hidden="true" />
      <nav id="mobile-navigation" className={`mobile-navigation ${isMenuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
        <div className="mobile-navigation__header">
          <a href="/" className="site-header__logo">Boo&amp;Brew</a>
          <button type="button" className="icon-button" aria-label="Close menu" onClick={() => setIsMenuOpen(false)}><Icon name="close" /></button>
        </div>
        <ul>{mobileNavigationItems.map((item) => <li key={item.href}><a href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a></li>)}</ul>
      </nav>
    </>
  );
}
