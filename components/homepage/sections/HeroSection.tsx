export function HeroSection() {
  return (
    <section id="hero" className="hero section section--oat" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__content" data-animate="fade-up">
          <p className="eyebrow">Personalised drinkware &amp; gifts</p>
          <h1 id="hero-title">Custom cups, mugs &amp; gifts made just for you.</h1>
          <p className="hero__body">Shop personalised tumblers, insulated cups, coffee mugs, key rings and made-to-order designs for birthdays, teachers, bridesmaids, businesses and everyday treats.</p>
          <div className="hero__actions" aria-label="Hero actions"><a className="button button--primary" href="/collections/bestsellers">Shop Bestsellers</a><a className="button button--secondary" href="/pages/custom-orders">Start a Custom Order</a></div>
          <ul className="hero__reassurance" aria-label="Store benefits"><li>Made to order</li><li>Gift-ready options</li><li>Personalised with care</li></ul>
        </div>
        <div className="hero__media" data-animate="scale-fade">
          <picture><source srcSet="/images/home/hero-product-collage-mobile.webp" media="(max-width: 767px)" /><img src="/images/home/hero-product-collage.webp" alt="Personalised tumbler, cold cup, coffee mug and key ring arranged with gift packaging" width="720" height="720" loading="eager" fetchPriority="high" /></picture>
          <span className="hero__sticker hero__sticker--one">Add any name</span><span className="hero__sticker hero__sticker--two">Made to order</span>
        </div>
      </div>
    </section>
  );
}
