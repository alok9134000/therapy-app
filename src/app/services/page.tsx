import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Phone, Calendar, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { servicesData } from '@/data/service';

export const metadata: Metadata = {
  title: "Our Services | paediatric Therapy Centre Ahmedabad",
  description: "Explore our specialized paediatric therapy services including Speech Therapy, Physiotherapy, ABA and more in Ahmedabad.",
  keywords: ["paediatric therapy", "Speech Therapy", "Ahmedabad kids therapy"],
  openGraph: {
    title: "Our Services | paediatric Therapy Centre Ahmedabad",
    description: "Explore our specialized paediatric therapy services in Ahmedabad.",
    url: "https://db2770b4.therapy-app-2ge.pages.dev/services",
    siteName: "paediatric Therapy Centre Ahmedabad",
    images: [
      {
        url: "https://images.unsplash.com/photo-1621330396166-3e8e53a5e5e9?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "paediatric Therapy Centre Ahmedabad",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | paediatric Therapy Centre Ahmedabad",
    description: "Explore our specialized paediatric therapy services in Ahmedabad.",
    images: [
      "https://images.unsplash.com/photo-1621330396166-3e8e53a5e5e9?auto=format&fit=crop&q=80&w=1200",
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
      name: "paediatric Therapy Centre Ahmedabad",
      url: "https://www.yourtherapycentre.com",
    },
    description: service.description,
  }));

  // BreadcrumbList schema for improved SEO breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.yourtherapycentre.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.yourtherapycentre.com/services",
      },
    ],
  };

  // Reusable CTA component
  const CallToAction = ({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) => (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${variant === 'secondary' ? 'mt-8' : ''}`}>
      <Link href="/contact" passHref>
        <Button className={`${variant === 'primary' ? 'bg-white text-primary-600 hover:bg-primary-50' : 'bg-primary-600 text-white hover:bg-primary-700'} px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105`}>
          <Calendar className="w-5 h-5 mr-2" />
          {variant === 'primary' ? 'Book Free Consultation' : 'Schedule Assessment'}
        </Button>
      </Link>
      <Button 
        variant={variant === 'primary' ? "outline" : "secondary"}
        className={`${variant === 'primary' ? 'bg-primary-600 border-white text-white hover:bg-white/10' : 'bg-white text-primary-600 hover:bg-primary-50'} px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105`}
      >
        <Phone className="w-5 h-5 mr-2" />
        Call: +91-9876543210
      </Button>
    </div>
  );

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "paediatric Therapy Centre Ahmedabad",
            url: "https://www.yourtherapycentre.com/services",
            image: "https://images.unsplash.com/photo-1621330396166-3e8e53a5e5e9?auto=format&fit=crop&q=80&w=1200",
            description: "Explore our specialized paediatric therapy services including Speech Therapy, Physiotherapy, ABA and more.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ahmedabad",
              addressCountry: "IN",
            },
            medicalSpecialty: "paediatric",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Therapy Services",
              itemListElement: serviceSchemas,
            },
            breadcrumb: breadcrumbSchema,
          }),
        }}
      />

      <main className="min-h-screen" role="main">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern-dots.svg')] bg-[length:40px_40px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                Specialized paediatric Care
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Empowering Children Through <span className="text-yellow-300">Expert Therapy</span>
              </h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                Evidence-based therapies tailored to your child&#39;s unique needs, delivered with compassion and expertise by our certified specialists.
              </p>
              
              <CallToAction variant="primary" />
              
              <p className="mt-6 text-primary-100 text-sm">
                Free initial consultation • Flexible scheduling • Insurance accepted
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Comprehensive Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specialized Therapies for <span className="text-primary-600">Child Development</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Each program is carefully designed to address specific developmental needs while fostering growth and independence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <Card 
                  key={service.id} 
                  className="group border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:border-primary-300 relative"
                >
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {service.icon}
                    </span>
                  </div>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={service.id === "speech-therapy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                        <ChevronRight className="w-4 h-4 mr-1 text-primary-500" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link href={`/services/${service.id}`} passHref>
                      <Button variant="outline" className="w-full mt-4 group-hover:bg-primary-50 group-hover:border-primary-300 group-hover:text-primary-600 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Parents Choose <span className="text-primary-600">Our Centre</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                We combine cutting-edge therapies with compassionate care to help children reach their full potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Evidence-Based Methods",
                  description: "Our therapies are grounded in the latest research and proven techniques.",
                  icon: "📊"
                },
                {
                  title: "Child-Centered Approach",
                  description: "Every program is tailored to your child's unique needs and personality.",
                  icon: "👶"
                },
                {
                  title: "Family Involvement",
                  description: "We empower parents with strategies to support development at home.",
                  icon: "👨‍👩‍👧‍👦"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Transforming Lives, <span className="text-primary-600">One Child at a Time</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear from parents who have seen remarkable progress in their children&#39;s development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The speech therapy sessions have transformed my child's communication skills. We're so grateful for the personalized attention and care.",
                  name: "Priya Sharma",
                  role: "Parent of 6-year-old",
                  rating: 5
                },
                {
                  quote: "The therapists showed incredible patience and expertise with our autistic son. His social skills have improved dramatically in just 6 months.",
                  name: "Raj Patel",
                  role: "Parent of 8-year-old",
                  rating: 5
                },
                {
                  quote: "After just 3 months of occupational therapy, we've seen remarkable improvements in fine motor skills and daily living activities.",
                  name: "Anjali Mehta",
                  role: "Parent of 5-year-old",
                  rating: 4
                }
              ].map((testimonial, index) => (
                <Card key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic mb-6 flex-grow">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center mt-auto">
                    <div className="bg-primary-100 text-primary-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to answer your questions and guide you through the process.
            </p>
            
            <CallToAction variant="secondary" />
            
            <p className="mt-6 text-gray-500 text-sm">
              We&#39;re available Monday-Saturday, 9AM to 7PM
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;