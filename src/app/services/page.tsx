import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Metadata } from 'next';
import { servicesData } from '@/data/service';

export const metadata: Metadata = {
  title: "Our Services | Pediatric Therapy Centre Ahmedabad",
  description:
    "Explore our specialized pediatric therapy services including Speech Therapy, Physiotherapy, ABA and more in Ahmedabad.",
  keywords: ["Pediatric therapy", "Speech Therapy", "Ahmedabad kids therapy"],
  openGraph: {
    title: "Our Services | Pediatric Therapy Centre Ahmedabad",
    description:
      "Explore our specialized pediatric therapy services in Ahmedabad.",
    url: "https://yourdomain.com/services",
    siteName: "Pediatric Therapy Centre Ahmedabad",
    images: [
      {
        url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600",
        width: 800,
        height: 600,
        alt: "Pediatric Therapy Centre Ahmedabad",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Pediatric Therapy Centre Ahmedabad",
    description:
      "Explore our specialized pediatric therapy services in Ahmedabad.",
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600",
    ],
  },
};

const Services = () => {
  

  // Generate JSON-LD Service schema for all services
  const serviceSchemas = servicesData.map((service) => ({
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "MedicalBusiness",
      name: "Pediatric Therapy Centre Ahmedabad",
      url: "https://www.livoncontrols.com",
    },
    description: service.description,
  }));

  // BreadcrumbList schema for improved SEO breadcrumbs (optional if you use breadcrumbs)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.livoncontrols.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "www.livoncontrols.com/products",
      },
    ],
  };

  return (
    <>
      

      <main className="min-h-screen py-16" role="main">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Pediatric Therapy Centre Ahmedabad",
              url: "https://yourdomain.com/services",
              image:
                "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600",
              description:
                "Explore our specialized pediatric therapy services including Speech Therapy, Physiotherapy, ABA and more.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressCountry: "IN",
              },
              medicalSpecialty: "Pediatric",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Therapy Services",
                itemListElement: serviceSchemas,
              },
              breadcrumb: breadcrumbSchema,
            }),
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6"
              tabIndex={-1}
            >
              Our Specialized Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive therapy services designed to support your child&apos;s development. Our
              expert team provides evidence-based treatments tailored to each child&apos;s unique
              needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <section
                key={service.id}
                aria-labelledby={`${service.id}-title`}
                className="block"
              >
                <Card className="border-2 border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${
                      index % 2 === 1 ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <div className="aspect-square rounded-2xl overflow-hidden bg-primary-50">
                        <Image
                          src={service.image}
                          alt={`${service.title} at Pediatric Therapy Centre Ahmedabad`}
                          className="w-full h-full object-cover"
                          width={600}
                          height={500}
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                        <span className="text-2xl" aria-hidden="true">
                          {service.icon}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                      <div>
                        <h2
                          id={`${service.id}-title`}
                          className="text-3xl font-poppins font-bold text-gray-800 mb-4"
                        >
                          {service.title}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits:</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle
                                className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Conditions Treated */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                          Conditions We Treat:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.conditions.map((condition, idx) => (
                            <span
                              key={idx}
                              className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                            >
                              {condition}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact" aria-label={`Book a consultation for ${service.title}`}>
                          <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-6">
                            Book Consultation
                            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                          </Button>
                        </Link>
                        <Link href="/contact" aria-label={`Ask questions about ${service.title}`}>
                          <Button
                            variant="outline"
                            className="border-primary-200 text-primary-600 hover:bg-primary-50 rounded-full px-6"
                          >
                            Ask Questions
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="text-center mt-16 bg-primary-50 rounded-3xl p-12"
            role="region"
            aria-labelledby="ready-to-get-started"
          >
            <h2
              id="ready-to-get-started"
              className="text-3xl font-poppins font-bold text-gray-800 mb-4"
              tabIndex={-1}
            >
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Contact us today to schedule a consultation and learn more about how we can help your
              child.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" aria-label="Book a free consultation">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8 py-3 text-lg">
                  Book Free Consultation
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-primary-200 text-primary-600 hover:bg-primary-50 rounded-full px-8 py-3 text-lg"
                aria-label="Call Pediatric Therapy Centre Ahmedabad at +91-9876543210"
              >
                Call: +91-9876543210
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
