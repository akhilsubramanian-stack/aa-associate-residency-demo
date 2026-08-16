import { Inview } from "@/components/animation/springs/in-view";

export const Location = () => (
  <section className="office-location" aria-labelledby="office-location-heading">
    <Inview tag="div" mode="once" from={{opacity:0,transform:"translateY(28px)"}} to={{opacity:1,transform:"translateY(0px)"}} className="office-location__scene">
      <div className="office-location__map">
        <iframe
          title="A&A Associate Dubai office map"
          src="https://www.google.com/maps?q=Rolex%20Tower%2C%20Sheikh%20Zayed%20Road%2C%20Dubai%2C%20UAE&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="office-location__shade" aria-hidden="true" />
      </div>
      <div className="office-location__plaque">
        <span>Dubai Headquarters</span>
        <h2 id="office-location-heading" className="mobile-section-heading">Right at the heart of Dubai</h2>
        <p>Level 12, Rolex Tower, Sheikh Zayed Road, Near Financial Centre Metro Station, Dubai, UAE.</p>
        <a href="https://maps.google.com/?q=Rolex+Tower+Sheikh+Zayed+Road+Dubai" target="_blank" rel="noreferrer">Open in Google Maps <b>↗</b></a>
      </div>
    </Inview>
  </section>
);
