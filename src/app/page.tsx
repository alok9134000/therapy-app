import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Phone, HeartPulse, BrainCircuit, Stars, UserCheck, Activity, Users } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import LocationsMap from '@/components/LocationsMap';
import dynamic from 'next/dynamic';

// Static data
const stats = [
  { value: "1000+", label: "Children Helped", icon: <UserCheck className="w-8 h-8 mx-auto mb-3" /> },
  { value: "13+", label: "Years Experience", icon: <Stars className="w-8 h-8 mx-auto mb-3" /> },
  { value: "10+", label: "Specialized Therapists", icon: <Users className="w-8 h-8 mx-auto mb-3" /> },
  { value: "98%", label: "Parent Satisfaction", icon: <HeartPulse className="w-8 h-8 mx-auto mb-3" /> }
];


const processSteps = [
  { 
    number: "01", 
    title: "Initial Consultation", 
    description: "Free assessment to understand your child's needs",
    icon: <UserCheck className="w-8 h-8 text-primary-500 mb-4" />
  },
  { 
    number: "02", 
    title: "Personalized Plan", 
    description: "Custom therapy plan tailored to your child",
    icon: <BrainCircuit className="w-8 h-8 text-primary-500 mb-4" />
  },
  { 
    number: "03", 
    title: "Therapy Sessions", 
    description: "Regular sessions with our expert therapists",
    icon: <Activity className="w-8 h-8 text-primary-500 mb-4" />
  },
  { 
    number: "04", 
    title: "Progress Tracking", 
    description: "Ongoing evaluation and plan adjustments",
    icon: <Stars className="w-8 h-8 text-primary-500 mb-4" />
  }
];
const AboutSection = dynamic(() => import('@/components/AboutSection'), { 
  ssr: true,
  loading: () => (
    <section className="py-20 bg-gradient-to-b from-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Simple loading state */}
          <div>
            <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>
          </div>
          <div>
            <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Arsh paediatric Rehabilitation Center – Therapy & Care in Ahmedabad</title>
        <meta
          name="description"
          content="Arsh paediatric Rehabilitation Center offers personalized therapy for children in Ahmedabad. Speech, Occupational, ABA Therapy & more – book a free consultation!"
        />
        <meta name="keywords" content="paediatric therapy Ahmedabad, Speech therapy, Child rehabilitation, ABA Therapy, Occupational Therapy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://db2770b4.therapy-app-2ge.pages.dev/" />
        <meta property="og:title" content="Arsh paediatric Rehabilitation Center – Therapy & Care in Ahmedabad" />
        <meta
          property="og:description"
          content="Personalized paediatric therapy and rehabilitation services in Ahmedabad. Helping every child grow and thrive."
        />
        <meta property="og:url" content="https://db2770b4.therapy-app-2ge.pages.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/dicvxuysv/image/upload/v1749281479/WhatsApp_Image_2025-06-03_at_11.03.20_hqtuts.jpg" />
      </Head>

      <main className="min-h-screen overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Bar */}
        <section className="bg-primary-600 text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/30 to-primary-500/30 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors duration-300"
                >
                  {stat.icon}
                  <p className="text-4xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm opacity-90 tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <ServicesOverview />

        {/* About Preview */}
      
<AboutSection />
        {/* Process Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-repeat bg-center"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Simple <span className="text-primary-500">Process</span></h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">How we work with you to support your child&#39;s development</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-primary-100 group"
                >
                  <div className="text-5xl font-bold text-primary-100 mb-2 group-hover:text-primary-500 transition-colors">{step.number}</div>
                  {step.icon}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSlider />

        {/* Locations Map */}
        <LocationsMap />

        {/* CTA Section */}
        <section 
          aria-label="Call to action" 
          className="relative py-24 bg-gradient-to-r from-primary-600 to-primary-700 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/dots.svg')] bg-repeat bg-center"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Begin Your Child&apos;s <span className="text-yellow-200">Growth Journey</span>?
            </h2>
            <p className="text-primary-100 mb-8 text-xl">
              Book a free consultation at Arsh Paediatric Rehabilitation Center and see how our expert team can support your child&apos;s unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <button className="bg-white text-primary-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all group">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
                </button>
              </Link>
              <a
                href="tel:+919876543210"
                aria-label="Call Arsh paediatric Rehabilitation Center"
                rel="noopener noreferrer"
              >
                <button
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary-600 rounded-full px-8 py-6 text-lg font-medium group"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform inline" />
                  Call Now: +91-9876543210
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}