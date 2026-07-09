export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <a href="/" className="site-footer__logo">Boo&amp;Brew</a>
          <p>Personalised tumblers, mugs, key rings and custom gifts made to order with care.</p>
          <p className="site-footer__small">Designed, personalised and packed with a little extra care.</p>
        </div>
        <FooterColumn title="Shop" links={["New In", "Tumblers", "Insulated Tumblers", "Cold Cups", "Coffee Mugs", "Key Rings"]} />
        <FooterColumn title="Help" links={["Contact", "Custom Orders", "Bulk Orders", "Delivery", "FAQs", "Care Instructions"]} />
        <FooterColumn title="Info" links={["Personalisation Policy", "Made-to-Order Times", "Privacy Policy", "Terms & Conditions", "Refund Policy"]} />
      </div>
      <div className="container site-footer__bottom">
        <p>© Boo&amp;Brew. Custom drinkware and gifts made to order.</p>
        <p>Secure payments accepted</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>{links.map((link) => <li key={link}><a href="#">{link}</a></li>)}</ul>
    </div>
  );
}
