import { Button } from '@/components/ui/button';
import {  CheckCircle, Phone, Calendar,  Award, Activity, Target, Zap, Heart, Brain } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Oral Placement Therapy (OPT) | Pediatric Therapy Centre Ahmedabad",
  description: "Specialized therapy for improving oral-motor coordination and speech clarity through targeted exercises and techniques.",
  keywords: ["Oral Placement Therapy Ahmedabad", "OPT therapy", "Speech therapy", "Oral motor therapy", "Feeding therapy"],
};

const OralPlacementTherapyPage = () => {
  // Structured data for OPT service
  const optTherapySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Oral Placement Therapy (OPT)",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Pediatric Therapy Centre Ahmedabad"
    },
    "description": "Specialized therapy for improving oral-motor coordination and speech clarity through targeted exercises and techniques.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(optTherapySchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-500 to-red-600 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern-dots.svg')] bg-[length:40px_40px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                👅 OPT Therapy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Oral Placement <span className="text-yellow-300">Therapy</span> (OPT)
              </h1>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                Specialized therapy for improving oral-motor coordination and speech clarity through targeted exercises and techniques.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book OPT Session
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="bg-orange-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91-9876543210
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <nav className="bg-orange-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-orange-600 hover:underline">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/services" className="text-orange-600 hover:underline">Services</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-600">Oral Placement Therapy (OPT)</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Strengthening Oral-Motor Skills for Better Speech
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Oral Placement Therapy (OPT) is a specialized approach that focuses on improving the strength, coordination, and placement of the jaw, lips, and tongue. This therapy is essential for children with feeding difficulties, speech articulation problems, and oral-motor weaknesses.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Jaw, lip, and tongue strengthening",
                    "Better articulation and feeding",
                    "Improved speech clarity",
                    "Enhanced swallowing function",
                    "Sensory awareness development",
                    "Muscle coordination training"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-orange-600 hover:bg-orange-700">
                  Download OPT Information Guide
                </Button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1620052581237-5d36667be1c3?auto=format&fit=crop&q=80&w=600"
                  alt="Child receiving oral placement therapy"
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
                Benefits of Oral Placement Therapy
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                OPT provides targeted interventions to improve oral-motor function and overall communication abilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Muscle Strengthening",
                  description: "Targeted exercises to strengthen jaw, lip, and tongue muscles for better control",
                  icon: <Target className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Speech Clarity",
                  description: "Improved articulation and pronunciation through precise oral placement",
                  icon: <Zap className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Feeding Skills",
                  description: "Enhanced chewing, swallowing, and overall feeding coordination",
                  icon: <Heart className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Sensory Awareness",
                  description: "Increased awareness of mouth and tongue positioning for better function",
                  icon: <Brain className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Coordination",
                  description: "Better timing and coordination of oral movements for speech and eating",
                  icon: <Activity className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Confidence",
                  description: "Improved self-esteem through better communication and eating abilities",
                  icon: <Award className="w-8 h-8 text-orange-600" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
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
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=600"
                      alt="OPT therapy tools and exercises"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600"
                      alt="Child practicing oral motor exercises"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600"
                      alt="Therapist working with child on oral placement"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our OPT Treatment Process
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We use evidence-based OPT techniques and specialized tools to address each child&#39;s unique oral-motor needs through systematic, progressive therapy.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Assessment",
                      description: "Detailed evaluation of oral-motor function, feeding, and speech patterns"
                    },
                    {
                      title: "Customized Treatment Plan",
                      description: "Individualized therapy program targeting specific oral-motor goals"
                    },
                    {
                      title: "Specialized Tools",
                      description: "Use of OPT-specific tools like horns, straws, and bite blocks"
                    },
                    {
                      title: "Progressive Exercises",
                      description: "Graduated activities to build strength and coordination systematically"
                    },
                    {
                      title: "Home Practice Program",
                      description: "Structured exercises and activities for daily practice at home"
                    },
                    {
                      title: "Progress Monitoring",
                      description: "Regular assessment and adjustment of therapy goals and techniques"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-orange-100 text-orange-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                Conditions Addressed with OPT
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our oral placement therapy effectively treats various oral-motor and speech-related challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Feeding Difficulties",
                "Speech Articulation Problems", 
                "Low Muscle Tone (Hypotonia)",
                "Dysarthria",
                "Apraxia of Speech",
                "Swallowing Disorders",
                "Down Syndrome",
                "Cerebral Palsy"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{condition}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPT Tools and Techniques */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                OPT Tools and Techniques
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Specialized tools and evidence-based techniques for effective oral-motor therapy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Horns and Whistles",
                  description: "Build lip strength and coordination through controlled airflow exercises",
                  icon: <Zap className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Therapeutic Straws",
                  description: "Develop sucking patterns and oral-motor control with specialized straws",
                  icon: <Target className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Bite Blocks",
                  description: "Improve jaw stability and grading of jaw movements",
                  icon: <Activity className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Chewy Tubes",
                  description: "Provide safe chewing practice and jaw strengthening",
                  icon: <Heart className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Tongue Depressors",
                  description: "Facilitate tongue placement and movement exercises",
                  icon: <Brain className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Vibrating Tools",
                  description: "Increase sensory awareness and stimulate oral muscles",
                  icon: <Award className="w-8 h-8 text-orange-600" />
                }
              ].map((tool, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.title}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Common questions about Oral Placement Therapy
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What is Oral Placement Therapy (OPT)?",
                  answer: "OPT is a specialized therapy approach that uses specific techniques and tools to improve the strength, coordination, and placement of the jaw, lips, and tongue for better speech and feeding abilities."
                },
                {
                  question: "How is OPT different from traditional speech therapy?",
                  answer: "While traditional speech therapy focuses on sound production, OPT specifically targets the underlying oral-motor skills needed for clear speech and effective feeding through muscle strengthening and coordination exercises."
                },
                {
                  question: "What age children can benefit from OPT?",
                  answer: "OPT can benefit children of various ages, from toddlers to teenagers, depending on their individual needs and oral-motor development challenges."
                },
                {
                  question: "How long does OPT treatment typically take?",
                  answer: "Treatment duration varies based on individual needs and goals. Some children may see improvements in weeks, while others may require several months of consistent therapy."
                },
                {
                  question: "Are OPT exercises safe for my child?",
                  answer: "Yes, OPT techniques are safe when administered by trained professionals. All tools and exercises are specifically designed for therapeutic use and are age-appropriate."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Child&#39;s OPT Journey Today
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Help your child develop stronger oral-motor skills for better speech and feeding with our specialized OPT program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Assessment
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="bg-orange-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
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

export default OralPlacementTherapyPage;