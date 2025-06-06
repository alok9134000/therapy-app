import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';

const TestimonialsSlider = dynamic(() => import('@/components/TestimonialsSlider'), { ssr: true });
const LocationsMap = dynamic(() => import('@/components/LocationsMap'), { ssr: true });

export default function Home() {
  return (
    <>
      <Head>
        <title>Arsh Pediatric Rehabilitation Center – Therapy & Care in Ahmedabad</title>
        <meta
          name="description"
          content="Arsh Pediatric Rehabilitation Center offers personalized therapy for children in Ahmedabad. Speech, Occupational, ABA Therapy & more – book a free consultation!"
        />
        <meta name="keywords" content="Pediatric therapy Ahmedabad, Speech therapy, Child rehabilitation, ABA Therapy, Occupational Therapy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Arsh Pediatric Rehabilitation Center – Therapy & Care in Ahmedabad" />
        <meta
          property="og:description"
          content="Personalized pediatric therapy and rehabilitation services in Ahmedabad. Helping every child grow and thrive."
        />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/sample.jpg" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Overview */}
        <ServicesOverview />

        {/* About Preview */}
        <section aria-labelledby="about-heading" className="py-16 bg-accent-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <article className="animate-fade-in">
                <h2
                  id="about-heading"
                  className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-6"
                >
                  Empowering Children Through Personalized Therapy
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At <strong>Arsh Pediatric Rehabilitation Center</strong>, we are dedicated to supporting your child's development through
                  personalized, evidence-based therapy. Located in the heart of Ahmedabad, our experienced team provides compassionate
                  care tailored to each child&apos;s unique journey.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Specialized pediatric therapists',
                    'Customized rehabilitation programs',
                    'Multidisciplinary therapy approaches',
                    'Parent-inclusive treatment plans',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/about" passHref>
                  <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </article>

              <aside className="relative">
                <div className="bg-primary-50 rounded-3xl p-8 shadow-lg">
                  <Image
                    src="https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/sample.jpg"
                    alt="Child receiving therapy at Arsh Pediatric Rehabilitation Center"
                    width={800}
                    height={320}
                    className="rounded-2xl object-cover"
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSlider />

        {/* Locations Map */}
        <LocationsMap />

        {/* CTA Section */}
        <section aria-label="Call to action" className="py-16 bg-primary-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
              Ready to Begin Your Child&apos;s Growth Journey?
            </h2>
            <p className="text-primary-100 mb-8 text-lg">
              Book a free consultation at Arsh Pediatric Rehabilitation Center and see how our expert team can support your child’s unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-primary-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg">
                  Book Free Consultation
                </Button>
              </Link>
              <a
                href="tel:+919876543210"
                aria-label="Call Arsh Pediatric Rehabilitation Center"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600 rounded-full px-8 py-3 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +91-9876543210
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
