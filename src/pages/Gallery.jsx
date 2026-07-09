import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import CTASection from "../components/CTASection.jsx";
import GalleryGrid from "../components/GalleryGrid.jsx";
import { GALLERY_IMAGES } from "../data/catalog.js";

export default function Gallery() {

  const solarImages = GALLERY_IMAGES.filter(
    (img) => img.category === "solar"
  );

  const batteryImages = GALLERY_IMAGES.filter(
    (img) => img.category === "battery"
  );

  const roImages = GALLERY_IMAGES.filter(
    (img) => img.category === "ro"
  );

  return (
    <>
      <PageHeader
        kicker="Gallery"
        title="Our Work Gallery"
        subtitle="Explore our completed installations across Solar, Battery & Inverter, and RO Water Purifier projects."
        bgImage="/gallery/gg.jpg"
        overlayClass="bg-black/30"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Gallery" }
        ]}
      />

      <section className="section">
        <div className="container-page">

          {/* Solar */}
          <div className="mb-16">
          <div className="kicker w-fit" data-aos="fade-up">
                Solar Installations
          </div>
          <h2 className="h2 mt-4" data-aos="fade-up" data-aos-delay="50">
   Yes Solar Solutions
</h2>

            <p className="mb-6 text-zinc-600">
              Residential and commercial solar projects completed by our team.
            </p>

            <GalleryGrid items={solarImages} />
          </div>

          {/* Battery */}
          <div className="mb-16">
          <div className="kicker w-fit" data-aos="fade-up">
          Battery & Inverter Installations
          </div>
          <h2 className="h2 mt-4" data-aos="fade-up" data-aos-delay="50">
          Annbu Battery Service
</h2>

            <p className="mb-6 text-zinc-600">
              Reliable battery and inverter installation projects.
            </p>

            <GalleryGrid items={batteryImages} />
          </div>

          {/* RO */}
          <div className="mb-16">
          <div className="kicker w-fit" data-aos="fade-up">
                RO Water Purifier Installations
          </div>
          <h2 className="h2 mt-4" data-aos="fade-up" data-aos-delay="50">
          Annbu Aqua
</h2>

            <p className="mb-6 text-zinc-600">
              Clean and professional RO water purifier installations.
            </p>

            <GalleryGrid items={roImages} />
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}