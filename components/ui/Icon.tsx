type IconProps = { name: string; className?: string };

export function Icon({ name, className }: IconProps) {
  const props = { className, width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true };
  if (name === "search") return <svg {...props}><path d="M10.5 18a7.5 7.5 0 1 1 5.3-2.2L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
  if (name === "heart") return <svg {...props}><path d="M20.5 5.8c-1.8-2-4.7-2-6.5 0L12 8l-2-2.2c-1.8-2-4.7-2-6.5 0-2 2.2-1.9 5.7.2 7.8L12 22l8.3-8.4c2.1-2.1 2.2-5.6.2-7.8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
  if (name === "bag") return <svg {...props}><path d="M6 8h12l-1 13H7L6 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
  if (name === "account") return <svg {...props}><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" /><path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
  if (name === "menu") return <svg {...props}><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
  if (name === "close") return <svg {...props}><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
  return <svg {...props}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
