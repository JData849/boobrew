import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll<HTMLElement>("[data-animate]");
    if (!animatedElements.length) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) { animatedElements.forEach((element) => element.classList.add("is-visible")); return; }
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { const element = entry.target as HTMLElement; if (entry.isIntersecting) { element.classList.add("is-visible"); observer.unobserve(element); } }); }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    animatedElements.forEach((element, index) => { const animateType = element.dataset.animate; if (animateType === "card-reveal" || animateType === "process-step") element.style.transitionDelay = `${Math.min(index * 50, 250)}ms`; observer.observe(element); });
    return () => observer.disconnect();
  }, []);
}
