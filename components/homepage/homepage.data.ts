import type { GalleryItem, GiftSet, Occasion, Product, ProductType, Review, SimpleContentItem } from "./homepage.types";

export const announcementMessages = [
  "Free UK delivery over £40 · Personalised gifts made to order",
  "Made to order with care · Custom tumblers, mugs and key rings",
  "New seasonal designs now live · Shop personalised gifts",
];

export const navigationItems = [
  { label: "New In", href: "/collections/new-in" },
  { label: "Tumblers", href: "/collections/tumblers" },
  { label: "Mugs", href: "/collections/mugs" },
  { label: "Key Rings", href: "/collections/key-rings" },
  { label: "Gifts", href: "/collections/gifts" },
  { label: "Seasonal", href: "/collections/seasonal" },
  { label: "Custom Orders", href: "/pages/custom-orders" },
  { label: "Bulk Orders", href: "/pages/bulk-orders" },
];

export const mobileNavigationItems = [
  ...navigationItems,
  { label: "About Boo&Brew", href: "/pages/about" },
  { label: "Contact", href: "/pages/contact" },
  { label: "Delivery & Returns", href: "/pages/delivery-returns" },
  { label: "FAQs", href: "/pages/faqs" },
  { label: "Care Instructions", href: "/pages/care-instructions" },
];

export const productTypes: ProductType[] = [
  { title: "Custom Tumblers", text: "Personalised designs for everyday drinks, gifting and matching sets.", href: "/collections/custom-tumblers", image: "/images/home/category-custom-tumblers.webp", alt: "Personalised custom tumbler with name design", cta: "Shop Tumblers" },
  { title: "Insulated Tumblers", text: "Made for hot drinks, iced drinks and busy days on the go.", href: "/collections/insulated-tumblers", image: "/images/home/category-insulated-tumblers.webp", alt: "Insulated tumbler with lid and straw", cta: "Shop Insulated Cups" },
  { title: "Cold Cups", text: "Reusable straw cups with custom names, quotes and playful designs.", href: "/collections/cold-cups", image: "/images/home/category-cold-cups.webp", alt: "Personalised cold cup with straw", cta: "Shop Cold Cups" },
  { title: "Coffee Mugs", text: "Personalised mugs for gifting, work desks and cosy coffee moments.", href: "/collections/coffee-mugs", image: "/images/home/category-coffee-mugs.webp", alt: "Personalised coffee mug on cream surface", cta: "Shop Mugs" },
  { title: "Key Rings", text: "Cute custom extras for bags, keys, stockings and small gifts.", href: "/collections/key-rings", image: "/images/home/category-key-rings.webp", alt: "Custom key rings with names and charms", cta: "Shop Key Rings" },
  { title: "Gift Sets", text: "Ready-to-gift bundles with personal touches and matching extras.", href: "/collections/gift-sets", image: "/images/home/category-gift-sets.webp", alt: "Personalised gift set with tumbler, mug and key ring", cta: "Shop Gift Sets" },
];

export const personalisationSteps: SimpleContentItem[] = [
  { title: "Choose your product", text: "Pick a tumbler, cold cup, coffee mug or key ring." },
  { title: "Add your details", text: "Enter a name, quote, colour theme, photo or design notes." },
  { title: "We make it for you", text: "Your custom piece is created, checked, packed and sent with care." },
];

export const bestsellers: Product[] = [
  { title: "Pink Bow Name Tumbler", category: "Insulated Tumbler", badge: "Personalised", personalisation: "Add any name", price: "From £18.00", href: "/products/pink-bow-name-tumbler", cta: "Personalise", image: "/images/products/pink-bow-name-tumbler.webp", hoverImage: "/images/products/pink-bow-name-tumbler-detail.webp", alt: "Pink bow personalised name tumbler" },
  { title: "Custom Initial Coffee Mug", category: "Coffee Mug", badge: "Giftable", personalisation: "Choose your initial and colour", price: "From £12.00", href: "/products/custom-initial-coffee-mug", cta: "Personalise", image: "/images/products/custom-initial-coffee-mug.webp", hoverImage: "/images/products/custom-initial-coffee-mug-detail.webp", alt: "Coffee mug with custom initial design" },
  { title: "Iced Coffee Name Cup", category: "Cold Cup", badge: "Bestseller", personalisation: "Add name or short quote", price: "From £14.00", href: "/products/iced-coffee-name-cup", cta: "Personalise", image: "/images/products/iced-coffee-name-cup.webp", hoverImage: "/images/products/iced-coffee-name-cup-detail.webp", alt: "Personalised iced coffee cold cup with straw" },
  { title: "Custom Name Key Ring", category: "Key Ring", badge: "Under £10", personalisation: "Pick colour and name", price: "From £6.00", href: "/products/custom-name-key-ring", cta: "Personalise", image: "/images/products/custom-name-key-ring.webp", hoverImage: "/images/products/custom-name-key-ring-detail.webp", alt: "Custom name key ring with charm" },
];

export const newDesigns: Product[] = [
  { title: "Pastel Name Tumbler", category: "Tumbler", badge: "New Design", personalisation: "Choose name and colour", price: "From £18.00", href: "/products/pastel-name-tumbler", cta: "Personalise", image: "/images/products/pastel-name-tumbler.webp", alt: "Pastel personalised name tumbler" },
  { title: "Minimal Initial Mug", category: "Coffee Mug", badge: "New", personalisation: "Choose initial and finish", price: "From £12.00", href: "/products/minimal-initial-mug", cta: "Personalise", image: "/images/products/minimal-initial-mug.webp", alt: "Minimal initial coffee mug" },
  { title: "Cosy Autumn Key Ring", category: "Key Ring", badge: "Seasonal", personalisation: "Pick name and colour", price: "From £7.00", href: "/products/cosy-autumn-key-ring", cta: "Personalise", image: "/images/products/cosy-autumn-key-ring.webp", alt: "Autumn themed personalised key ring" },
  { title: "Custom Cup & Key Ring Set", category: "Gift Set", badge: "Giftable", personalisation: "Add matching names", price: "From £20.00", href: "/products/custom-cup-key-ring-set", cta: "View Set", image: "/images/products/custom-cup-key-ring-set.webp", alt: "Matching custom cup and key ring gift set" },
];

export const occasions: Occasion[] = [
  { title: "Birthday Gifts", text: "Personalised cups, mugs and keepsakes made for their day.", href: "/collections/birthday-gifts", cta: "Shop Birthday", icon: "B" },
  { title: "Teacher Gifts", text: "Custom mugs, key rings and thank-you gifts for brilliant teachers.", href: "/collections/teacher-gifts", cta: "Shop Teacher Gifts", icon: "T" },
  { title: "Bridesmaid Gifts", text: "Matching cups and keepsakes for bridal parties and hen celebrations.", href: "/collections/bridesmaid-gifts", cta: "Shop Bridal", icon: "H" },
  { title: "Best Friend Gifts", text: "Cute personalised pieces for your favourite person.", href: "/collections/best-friend-gifts", cta: "Shop Friendship Gifts", icon: "F" },
  { title: "Business & Logo Gifts", text: "Custom drinkware and key rings for teams, events and brands.", href: "/collections/business-logo-gifts", cta: "Shop Business Gifts", icon: "L" },
  { title: "Christmas Gifts", text: "Festive custom cups, mugs, key rings and stocking fillers.", href: "/collections/christmas-gifts", cta: "Shop Christmas", icon: "C" },
  { title: "Halloween Designs", text: "Spooky sips, cute ghosts and custom seasonal designs.", href: "/collections/halloween", cta: "Shop Halloween", icon: "G" },
  { title: "Gifts Under £10", text: "Small personalised treats that still feel thoughtful.", href: "/collections/gifts-under-10", cta: "Shop Under £10", icon: "£" },
];

export const giftSets: GiftSet[] = [
  { title: "The Tumbler Gift Set", includes: "Custom tumbler, straw topper and gift note", price: "From £22.00", href: "/products/tumbler-gift-set", badge: "Gift-ready", cta: "View Set", image: "/images/products/tumbler-gift-set.webp", alt: "Tumbler gift set with straw topper and gift note" },
  { title: "The Mug & Key Ring Set", includes: "Personalised mug and matching key ring", price: "From £16.00", href: "/products/mug-key-ring-set", badge: "Matching Set", cta: "View Set", image: "/images/products/mug-key-ring-set.webp", alt: "Personalised mug and matching key ring set" },
  { title: "The Teacher Gift Set", includes: "Custom mug, key ring and gift packaging", price: "From £18.00", href: "/products/teacher-gift-set", badge: "Teacher Gift", cta: "View Set", image: "/images/products/teacher-gift-set.webp", alt: "Teacher themed custom mug and key ring gift set" },
];

export const madeToOrderSteps: SimpleContentItem[] = [
  { title: "Order online", text: "Choose your product and enter your personalisation details." },
  { title: "Design checked", text: "We review your details and prepare your design for making." },
  { title: "Made with care", text: "Your tumbler, mug or key ring is personalised to order." },
  { title: "Packed & sent", text: "Your order is checked, packed and dispatched." },
];

export const reviews: Review[] = [
  { quote: "The tumbler was exactly what I pictured. The name detail looked gorgeous and it came beautifully packed.", name: "Sophie M.", product: "Personalised Insulated Tumbler" },
  { quote: "Perfect teacher gift. It felt thoughtful, personal and much nicer than something generic.", name: "Lauren K.", product: "Custom Mug & Key Ring Set" },
  { quote: "I ordered matching cups for a hen party and everyone loved them. Such a cute keepsake.", name: "Amelia R.", product: "Bridal Party Cold Cups" },
];

export const galleryItems: GalleryItem[] = [
  { caption: "Custom name tumbler", image: "/images/home/gallery-name-tumbler.webp", alt: "Custom name tumbler made by Boo&Brew" },
  { caption: "Gift-ready mug set", image: "/images/home/gallery-mug-set.webp", alt: "Gift-ready personalised mug set" },
  { caption: "Matching bridal cups", image: "/images/home/gallery-bridal-cups.webp", alt: "Matching personalised bridal party cups" },
  { caption: "Teacher thank-you gift", image: "/images/home/gallery-teacher-gift.webp", alt: "Personalised teacher thank-you gift" },
  { caption: "Seasonal cold cup", image: "/images/home/gallery-seasonal-cup.webp", alt: "Seasonal personalised cold cup" },
  { caption: "Personalised key rings", image: "/images/home/gallery-key-rings.webp", alt: "Personalised key rings in different colours" },
];

export const reassuranceItems: SimpleContentItem[] = [
  { title: "Made to Order", text: "Created especially for you.", icon: "M" },
  { title: "Personalised Designs", text: "Names, quotes, colours, photos and more.", icon: "P" },
  { title: "Gift Ready", text: "Add packaging, notes and matching extras.", icon: "G" },
  { title: "Small Business Care", text: "Checked and packed carefully.", icon: "S" },
  { title: "Bulk Orders Welcome", text: "Great for teams, events and businesses.", icon: "B" },
];
