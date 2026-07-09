"use client";

import { CartDrawer } from "@/components/cart/CartDrawer";
import { SearchDrawer } from "@/components/search/SearchDrawer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { BestsellersSection } from "./sections/BestsellersSection";
import { CampaignBannerSection } from "./sections/CampaignBannerSection";
import { GallerySection } from "./sections/GallerySection";
import { GiftSetsSection } from "./sections/GiftSetsSection";
import { HeroSection } from "./sections/HeroSection";
import { MadeToOrderSection } from "./sections/MadeToOrderSection";
import { NewDesignsSection } from "./sections/NewDesignsSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { OccasionSection } from "./sections/OccasionSection";
import { PersonalisationSection } from "./sections/PersonalisationSection";
import { ProductTypeSection } from "./sections/ProductTypeSection";
import { ReassuranceStrip } from "./sections/ReassuranceStrip";
import { ReviewsSection } from "./sections/ReviewsSection";

export function Homepage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  useScrollReveal();

  return (
    <>
      <AnnouncementBar />
      <SiteHeader onSearchOpen={() => setIsSearchOpen(true)} onCartOpen={() => setIsCartOpen(true)} />
      <main id="main-content">
        <HeroSection />
        <ProductTypeSection />
        <PersonalisationSection />
        <BestsellersSection />
        <NewDesignsSection />
        <OccasionSection />
        <CampaignBannerSection />
        <GiftSetsSection />
        <MadeToOrderSection />
        <ReviewsSection />
        <GallerySection />
        <ReassuranceStrip />
        <NewsletterSection />
      </main>
      <SiteFooter />
      <SearchDrawer isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
