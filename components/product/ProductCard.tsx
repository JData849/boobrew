import type { Product } from "@/components/homepage/homepage.types";

export function ProductCard({ title, category, badge, personalisation, price, href, cta, image, hoverImage, alt }: Product) {
  return (
    <article className="product-card" data-animate="card-reveal">
      <div className="product-card__media">
        {badge ? <span className="badge">{badge}</span> : null}
        <button type="button" className="product-card__wishlist" aria-label={`Save ${title} to wishlist`}><span aria-hidden="true">♡</span></button>
        <a href={href} aria-label={`View ${title}`}>
          <img className="product-card__image product-card__image--primary" src={image} alt={alt} loading="lazy" />
          {hoverImage ? <img className="product-card__image product-card__image--secondary" src={hoverImage} alt="" aria-hidden="true" loading="lazy" /> : null}
        </a>
      </div>
      <div className="product-card__content">
        <p className="product-card__category">{category}</p>
        <h3><a href={href}>{title}</a></h3>
        {personalisation ? <p className="product-card__personalisation">{personalisation}</p> : null}
        <p className="product-card__price">{price}</p>
        <a className="button button--small button--primary" href={href}>{cta}</a>
      </div>
    </article>
  );
}
