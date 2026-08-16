import { homeContent } from "@/data/mocks/home";
import { Header } from "@/views/home/header";
import { Hero } from "@/views/home/hero";
import { About } from "@/views/home/about";
import { Portfolio } from "@/views/home/portfolio";
import { Services } from "@/views/home/services";
import { Stats } from "@/views/home/stats";
import { Awards } from "@/views/home/awards";
import { Testimonials } from "@/views/home/testimonials";
import { Agencies } from "@/views/home/agencies";
import { Faq } from "@/views/home/faq";
import { Location } from "@/views/home/location";
import { Footer } from "@/views/home/footer";
import { PageLoader } from "@/components/common/page-loader";
import { NavMenu } from "@/components/common/nav-menu";
import { RequestModal } from "@/components/common/request-modal";

/**
 * Home view — Server Component. Assembles the page from co-located section
 * components and feeds each its slice of placeholder content. Animation runs in
 * the client leaves (the spring components inside each section).
 */
export const HomeView = () => {
  return (
    <>
      <PageLoader />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-control focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Header
        brand={homeContent.brand}
        nav={homeContent.nav}
        meta={homeContent.meta}
      />

      <main id="main">
        <Hero hero={homeContent.hero} />
        <About about={homeContent.about} />
        <Portfolio portfolio={homeContent.portfolio} />
        <Services services={homeContent.services} />
        <Stats stats={homeContent.stats} />
        <Awards awards={homeContent.awards} />
        <Testimonials testimonials={homeContent.testimonials} />
        <Agencies agencies={homeContent.agencies} />
        <Faq faq={homeContent.faq} />
        <Location />
      </main>

      <Footer brand={homeContent.brand} footer={homeContent.footer} />

      <NavMenu />
      <RequestModal />
    </>
  );
};
