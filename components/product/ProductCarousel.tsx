"use client";

import type { Product } from "@/components/homepage/homepage.types";
import { Icon } from "@/components/ui/Icon";
import { useRef } from "react";
import { ProductCard } from "./ProductCard";

type ProductCarouselProps = { products: Product[]; ariaLabel: string; previousLabel: string; nextLabel: string };

export function ProductCarousel({ products, ariaLabel, previousLabel, nextLabel }: ProductCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollByCard = (direction: "previous" | "next") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const amount = Math.min(scroller.clientWidth * 0.85, 680);
    scroller.scrollBy({ left: direction === "next" ? amount : -amount, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };
  return (
    <div className="product-carousel" aria-label={ariaLabel}>
      <div className="product-carousel__controls">
        <button type="button" className="icon-button" aria-label={previousLabel} onClick={() => scrollByCard("previous")}><Icon name="arrow" className="icon--reverse" /></button>
        <button type="button" className="icon-button" aria-label={nextLabel} onClick={() => scrollByCard("next")}><Icon name="arrow" /></button>
      </div>
      <div className="product-carousel__scroller" ref={scrollerRef}>{products.map((product) => <ProductCard key={product.href} {...product} />)}</div>
    </div>
  );
}
