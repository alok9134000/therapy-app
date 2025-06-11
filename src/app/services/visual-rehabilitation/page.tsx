import { Button } from '@/components/ui/button';
import {  CheckCircle, Phone, Calendar, Clock, Users, Award, Activity, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Visual Rehabilitation Therapy | paediatric Therapy Centre Ahmedabad",
  description: "Specialized therapy focused on improving functional vision and visual motor integration for children with visual processing challenges.",
  keywords: ["visual rehabilitation", "visual processing disorders", "vision therapy", "paediatric occupational therapy"],
};

const VisualRehabilitationPage = () => {
  // Structured data for Visual Rehabilitation Therapy
  const visualRehabilitationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Visual Rehabilitation Therapy",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "paediatric Therapy Centre Ahmedabad"
    },
    "description": "Therapy focused on improving functional vision and visual motor integration for children with visual processing challenges.",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "23.0225",
        "longitude": "72.5714"
      },
      "geoRadius": "50000"
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(visualRehabilitationSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern-dots.svg')] bg-[length:40px_40px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                👁️ Visual Processing Support
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Visual <span className="text-yellow-300">Rehabilitation</span>
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                Therapy focused on improving functional vision and visual motor integration to enhance reading, learning, and daily activities.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Evaluation
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="bg-purple-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91-9876543210
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <nav className="bg-purple-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-purple-600 hover:underline">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/services" className="text-purple-600 hover:underline">Services</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-600">Visual Rehabilitation</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Visual Rehabilitation Therapy
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our specialized visual rehabilitation program helps children develop better functional vision skills through targeted exercises and activities that improve eye coordination, tracking, and visual processing abilities.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Improved tracking and eye coordination",
                    "Better reading and spatial awareness",
                    "Enhanced visual processing",
                    "Reduced visual fatigue",
                    "Strengthened eye muscle control",
                    "Better visual-motor integration"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-purple-600 hover:bg-purple-700">
                  Download Our Vision Therapy Guide
                </Button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&q=80&w=600"
                  alt="Child receiving visual rehabilitation therapy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Benefits of Visual Rehabilitation
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our therapy helps children develop stronger visual skills for improved academic performance and daily functioning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Eye Coordination",
                  description: "Improved ability to use both eyes together effectively",
                  icon: <Eye className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "Reading Skills",
                  description: "Better tracking and comprehension during reading activities",
                  icon: <Activity className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "Visual Processing",
                  description: "Enhanced ability to interpret and understand visual information",
                  icon: <Award className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "Spatial Awareness",
                  description: "Better understanding of spatial relationships and depth perception",
                  icon: <Users className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "Focus & Attention",
                  description: "Reduced visual fatigue and improved concentration",
                  icon: <Clock className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "Motor Integration",
                  description: "Better coordination between visual input and motor responses",
                  icon: <Activity className="w-8 h-8 text-purple-600" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 pl-16">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
                      alt="Child doing eye tracking exercises"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
                      alt="Visual perception activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                      alt="Therapist working with child on visual exercises"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Visual Rehabilitation Approach
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We use evidence-based visual exercises and activities tailored to each child&#39;s specific visual processing needs and challenges.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Visual Assessment",
                      description: "Detailed evaluation of visual skills, eye movements, and processing abilities"
                    },
                    {
                      title: "Personalized Treatment Plan",
                      description: "Customized program targeting specific visual deficits"
                    },
                    {
                      title: "Eye Movement Training",
                      description: "Exercises to improve tracking, saccades, and smooth pursuits"
                    },
                    {
                      title: "Visual Perception Activities",
                      description: "Tasks to enhance visual discrimination and processing speed"
                    },
                    {
                      title: "Binocular Vision Training",
                      description: "Activities to improve eye teaming and depth perception"
                    },
                    {
                      title: "Home Exercise Program",
                      description: "Structured activities for continued progress between sessions"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conditions We Help With
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Visual rehabilitation therapy can benefit children with various visual processing and coordination challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Visual Processing Disorders",
                "Lazy Eye (Amblyopia)",
                "Post-Injury Vision Issues",
                "Convergence Insufficiency",
                "Oculomotor Dysfunction",
                "Visual-Motor Integration Delays"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{condition}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Common questions about visual rehabilitation therapy
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What is the difference between vision therapy and regular eye exams?",
                  answer: "Vision therapy focuses on improving visual skills and processing, while eye exams check for refractive errors and eye health. Both are important for comprehensive eye care."
                },
                {
                  question: "How long does visual rehabilitation therapy take?",
                  answer: "Treatment duration varies based on individual needs, but most programs last 12-24 weeks with 1-2 sessions per week, plus daily home exercises."
                },
                {
                  question: "What signs might indicate my child needs visual rehabilitation?",
                  answer: "Signs include difficulty reading, eye strain, headaches, poor handwriting, avoiding near work, covering one eye, or complaints of double vision."
                },
                {
                  question: "Can visual rehabilitation help with reading difficulties?",
                  answer: "Yes, many reading problems are related to visual processing issues. Vision therapy can improve tracking, focusing, and eye coordination needed for reading."
                },
                {
                  question: "Are the improvements from vision therapy permanent?",
                  answer: "Most visual skills improvements are long-lasting, similar to learning to ride a bike. Occasional reinforcement exercises may be recommended."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Help Your Child See Clearly and Learn Better
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Our certified vision therapists are ready to help your child develop stronger visual skills for academic and life success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Evaluation
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="bg-purple-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default VisualRehabilitationPage;