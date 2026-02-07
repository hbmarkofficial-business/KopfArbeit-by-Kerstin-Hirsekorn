import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Friseursalon Aachen | KopfArbeit by Kerstin Hirsekorn</title>
        <meta
          name="description"
          content="Besuche unseren Premium Friseursalon KopfArbeit by Kerstin Hirsekorn in Aachen für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Friseursalon, Herrenfriseur, Damenfriseur, Haarschnitt, Bartpflege, Rasur, Aachen"
        />
        <link rel="canonical" href="https://gentlemanscut.de" />

        {/* Open Graph */}
        <meta property="og:title" content="KopfArbeit by Kerstin Hirsekorn | Premium Friseursalon Aachen" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Look in Aachen."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gentlemanscut.de" />
        <meta property="og:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KopfArbeit by Kerstin Hirsekorn | Premium Friseursalon Aachen" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und professionelles Styling."
        />
        <meta name="twitter:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalons",
            "name": "KopfArbeit by Kerstin Hirsekorn",
            "image": "https://gentlemanscut.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Annuntiatenbach 20",
              "addressLocality": "Aachen",
              "postalCode": "52062",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.7753",
              "longitude": "6.0839"
            },
            "url": "https://gentlemanscut.de",
            "telephone": "01794577014",
            "openingHours": "Di-Fr 10:00-19:00, Sa 10:00-16:00",
            "priceRange": "€€",
            "sameAs": [
              "https://www.facebook.com/gentlemanscut",
              "https://www.instagram.com/gentlemanscut"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

