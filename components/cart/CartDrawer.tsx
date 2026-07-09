"use client";
import { Icon } from "@/components/ui/Icon";
import { useEffect } from "react";

type CartDrawerProps = { isOpen: boolean; onClose: () => void };
export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  useEffect(() => { document.body.classList.toggle("is-drawer-open", isOpen); return () => document.body.classList.remove("is-drawer-open"); }, [isOpen]);
  useEffect(() => { if (!isOpen) return; const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); }; window.addEventListener("keydown", onKeyDown); return () => window.removeEventListener("keydown", onKeyDown); }, [isOpen, onClose]);
  return <><div className={`drawer-overlay ${isOpen ? "is-visible" : ""}`} onClick={onClose} aria-hidden="true" /><aside className={`cart-drawer ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen} aria-label="Shopping cart"><div className="drawer__header"><h2>Your basket</h2><button type="button" className="icon-button" aria-label="Close cart" onClick={onClose}><Icon name="close" /></button></div><div className="cart-empty"><h3>Your basket is waiting for something custom.</h3><p>Find a personalised tumbler, mug, key ring or gift set to make yours.</p><a className="button button--primary" href="/collections/bestsellers" onClick={onClose}>Shop Bestsellers</a></div><div className="cart-note" role="note">Your order may include made-to-order items. Processing time applies before dispatch.</div></aside></>;
}
