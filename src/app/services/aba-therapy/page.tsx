import { Button } from '@/components/ui/button';
import {  CheckCircle, Phone, Calendar,  Clock, Users, Award, Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ABA Therapy for Autism | paediatric Therapy Centre Ahmedabad",
  description: "Evidence-based ABA therapy services for children with Autism Spectrum Disorder to develop essential skills and manage behaviors.",
  keywords: ["ABA therapy Ahmedabad", "Autism treatment", "Behavior therapy for autism"],
};

const ABAAutismTherapyPage = () => {
  // Structured data for ABA Therapy service
  const abaTherapySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "ABA Therapy for Autism",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "paediatric Therapy Centre Ahmedabad"
    },
    "description": "Applied Behavior Analysis (ABA) therapy for children with Autism Spectrum Disorder to improve communication, social skills, and behavior management.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(abaTherapySchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-teal-700 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern-dots.svg')] bg-[length:40px_40px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                Behavioral Intervention
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Autism & <span className="text-yellow-300">ABA Therapy</span> Services
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Evidence-based behavioral therapy to help children with autism develop essential skills and reach their full potential.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Evaluation
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="bg-green-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91-9876543210
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <nav className="bg-green-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-green-600 hover:underline">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/services" className="text-green-600 hover:underline">Services</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-600">Autism & ABA Therapy</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Evidence-Based ABA Therapy for Autism
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Applied Behavior Analysis (ABA) is the gold-standard treatment for Autism Spectrum Disorder, helping children develop communication, social, and behavioral skills through positive reinforcement and structured interventions.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Behavior management and positive reinforcement",
                    "Development of academic and life skills",
                    "Improved communication and social skills",
                    "Individualized treatment plans",
                    "Data-driven progress tracking",
                    "Parent training and support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-green-600 hover:bg-green-700">
                  Download Our ABA Therapy Guide
                </Button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600"
                  alt="Child receiving ABA therapy"
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
                Benefits of ABA Therapy
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                ABA therapy helps children with autism develop crucial skills for daily life and social interaction
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Behavior Management",
                  description: "Reduces challenging behaviors and teaches appropriate alternatives",
                  icon: <Activity className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Communication Skills",
                  description: "Develops both verbal and non-verbal communication abilities",
                  icon: <Users className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Social Interaction",
                  description: "Teaches how to interact with peers and build friendships",
                  icon: <Users className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Academic Readiness",
                  description: "Prepares for school with focus, following instructions, and task completion",
                  icon: <Award className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Daily Living Skills",
                  description: "Improves self-care, hygiene, and independent living skills",
                  icon: <Clock className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Generalization",
                  description: "Helps apply learned skills across different environments",
                  icon: <Activity className="w-8 h-8 text-green-600" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
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
                      src="https://images.unsplash.com/photo-1549056572-75914d5d5fd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                      alt="Therapist working with autistic child"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
                      alt="Child doing ABA therapy activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                      alt="Parent and therapist working together"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our ABA Therapy Process
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We implement ABA therapy through structured yet flexible programs tailored to each child&#39;s unique needs and learning style.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Assessment",
                      description: "Detailed evaluation using standardized tools and observation"
                    },
                    {
                      title: "Individualized Plan",
                      description: "Customized treatment plan with measurable goals"
                    },
                    {
                      title: "One-on-One Therapy",
                      description: "Direct therapy sessions with trained behavior technicians"
                    },
                    {
                      title: "Data Collection",
                      description: "Continuous tracking of progress and adjustments as needed"
                    },
                    {
                      title: "Parent Training",
                      description: "Empowering parents with strategies for home implementation"
                    },
                    {
                      title: "Generalization",
                      description: "Applying skills across different settings and people"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-green-100 text-green-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                Conditions We Specialize In
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our ABA therapy services are designed to help children with various developmental challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Autism Spectrum Disorder",
                "Behavioral difficulties",
                "Developmental Disorders",
                "Social communication challenges",
                "Attention and focus issues",
                "Sensory processing differences"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
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
                Common questions about ABA therapy for autism
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What age is best to start ABA therapy?",
                  answer: "ABA therapy can be beneficial at any age, but early intervention (before age 5) typically yields the best outcomes. However, we see significant progress in children of all ages."
                },
                {
                  question: "How many hours of ABA therapy does my child need?",
                  answer: "The recommended hours vary based on the child's needs, ranging from 10-40 hours per week. Our BCBA will recommend an appropriate intensity after the initial assessment."
                },
                {
                  question: "Is ABA therapy covered by insurance?",
                  answer: "Many insurance plans cover ABA therapy for autism diagnosis. We can help verify your benefits and navigate the insurance process."
                },
                {
                  question: "What's the difference between ABA and other autism therapies?",
                  answer: "ABA is a scientifically validated approach focusing on behavior modification through reinforcement, while other therapies may focus on specific skills like speech or motor development. ABA often incorporates elements of these other therapies."
                },
                {
                  question: "How long will my child need ABA therapy?",
                  answer: "The duration varies significantly based on the child's needs and goals. Some children benefit from 1-2 years, while others may need longer-term support. We regularly assess progress and adjust recommendations."
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
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your Child&#39;s ABA Therapy Journey
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Our certified ABA therapists are ready to help your child develop essential skills and reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Evaluation
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="bg-green-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
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

export default ABAAutismTherapyPage;