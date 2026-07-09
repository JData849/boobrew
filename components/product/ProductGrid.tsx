import type { Product } from "@/components/homepage/homepage.types";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products, className = "" }: { products: Product[]; className?: string }) {
  return <div className={`product-grid ${className}`}>{products.map((product) => <ProductCard key={product.href} {...product} />)}</div>;
}
