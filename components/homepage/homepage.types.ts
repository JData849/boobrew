export type ProductType = {
  title: string;
  text: string;
  href: string;
  image: string;
  alt: string;
  cta: string;
};

export type Product = {
  title: string;
  category: string;
  badge?: string;
  personalisation?: string;
  price: string;
  href: string;
  cta: "Personalise" | "Quick Add" | "View Set";
  image: string;
  hoverImage?: string;
  alt: string;
};

export type Occasion = {
  title: string;
  text: string;
  href: string;
  cta: string;
  icon: string;
};

export type GiftSet = {
  title: string;
  includes: string;
  price: string;
  href: string;
  badge: string;
  cta: string;
  image: string;
  alt: string;
};

export type SimpleContentItem = {
  title: string;
  text: string;
  icon?: string;
};

export type Review = {
  quote: string;
  name: string;
  product: string;
};

export type GalleryItem = {
  caption: string;
  image: string;
  alt: string;
};
