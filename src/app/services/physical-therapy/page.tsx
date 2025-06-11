import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Calendar, Users, Award, Activity, Target, Heart, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Physical Therapy for Children | Pediatric Therapy Centre Ahmedabad",
  description: "Specialized physical therapy to improve mobility, strength, and motor skills in children with expert pediatric physiotherapists.",
  keywords: ["Physical therapy Ahmedabad", "Pediatric physiotherapy", "Child mobility therapy", "Motor skills development"],
};

const PhysicalTherapyPage = () => {
  // Structured data for Physical Therapy service
  const physicalTherapySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Physical Therapy",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Pediatric Therapy Centre Ahmedabad"
    },
    "description": "Specialized physical therapy to improve mobility, strength, and motor skills in children with expert pediatric physiotherapists.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicalTherapySchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-emerald-600 to-teal-700 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern-dots.svg')] bg-[length:40px_40px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                🏃♂️ Movement & Mobility
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Physical <span className="text-yellow-300">Therapy</span> for Children
              </h1>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                Specialized physical therapy to improve mobility, strength, and motor skills in children with expert pediatric physiotherapists.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Assessment
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="bg-emerald-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91-9876543210
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <nav className="bg-emerald-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-emerald-600 hover:underline">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/services" className="text-emerald-600 hover:underline">Services</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-600">Physical Therapy</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Empowering Movement & Independence
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our pediatric physical therapy program focuses on helping children develop strength, coordination, and mobility skills essential for daily activities and overall development. We create personalized treatment plans that make therapy engaging and effective.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Improved gross motor skills",
                    "Enhanced balance and coordination", 
                    "Increased strength and endurance",
                    "Better posture and alignment",
                    "Pain management and injury prevention",
                    "Adaptive equipment training"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-emerald-600 hover:bg-emerald-700">
                  Download Exercise Guide
                </Button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600"
                  alt="Child doing physical therapy exercises"
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
                Benefits of Physical Therapy
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Comprehensive physical therapy that addresses your child&#39;s unique needs and promotes optimal physical development
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Motor Skill Development",
                  description: "Enhance gross motor skills like walking, running, jumping, and climbing",
                  icon: <Activity className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Strength Building",
                  description: "Develop muscle strength and endurance for daily activities",
                  icon: <Zap className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Balance & Coordination",
                  description: "Improve stability, balance reactions, and body coordination",
                  icon: <Target className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Posture Improvement",
                  description: "Correct postural alignment and prevent musculoskeletal issues",
                  icon: <Users className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Pain Management",
                  description: "Address pain and discomfort through therapeutic interventions",
                  icon: <Heart className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Functional Independence",
                  description: "Promote independence in mobility and daily living activities",
                  icon: <Award className="w-8 h-8 text-emerald-600" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
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
                      src="https://images.unsplash.com/photo-1594736797933-d0d76ff64b9b?auto=format&fit=crop&q=80&w=600"
                      alt="Physical therapist working with child"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600"
                      alt="Child doing balance exercises"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600"
                      alt="Children in physical therapy group session"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Treatment Approach
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We use evidence-based techniques and play-based activities to make physical therapy engaging and effective for children of all ages and abilities.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Assessment",
                      description: "Detailed evaluation of movement patterns, strength, and functional abilities"
                    },
                    {
                      title: "Individualized Treatment",
                      description: "Customized therapy plans based on each child's specific needs and goals"
                    },
                    {
                      title: "Play-Based Therapy",
                      description: "Fun, engaging activities that motivate children while achieving therapeutic goals"
                    },
                    {
                      title: "Equipment & Technology",
                      description: "Modern therapeutic equipment and adaptive devices for optimal outcomes"
                    },
                    {
                      title: "Family Education",
                      description: "Training parents and caregivers in home exercise programs and strategies"
                    },
                    {
                      title: "Progress Monitoring",
                      description: "Regular assessment and adjustment of treatment plans based on progress"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-emerald-100 text-emerald-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                Conditions We Treat
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our pediatric physical therapists have expertise in treating a wide range of conditions affecting children&#39;s movement and mobility
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Cerebral Palsy",
                "Developmental Delays", 
                "Muscular Dystrophy",
                "Post-surgical Rehabilitation",
                "Spina Bifida",
                "Genetic Disorders",
                "Orthopedic Conditions",
                "Sports Injuries",
                "Neurological Conditions"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{condition}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Techniques */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Treatment Techniques
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Evidence-based therapeutic approaches tailored to each child&#39;s unique needs and developmental stage
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Neurodevelopmental Treatment",
                  description: "Specialized techniques for children with neurological conditions",
                  icon: <Activity className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Strength Training",
                  description: "Age-appropriate exercises to build muscle strength and endurance",
                  icon: <Zap className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Balance Training",
                  description: "Activities to improve stability and prevent falls",
                  icon: <Target className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Gait Training",
                  description: "Walking pattern improvement and mobility enhancement",
                  icon: <Users className="w-8 h-8 text-emerald-600" />
                }
              ].map((technique, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-emerald-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {technique.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{technique.title}</h3>
                  <p className="text-gray-600">{technique.description}</p>
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
                Common questions about our pediatric physical therapy services
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "At what age can children start physical therapy?",
                  answer: "Children can benefit from physical therapy at any age, from infants to teenagers. Early intervention is often key to achieving the best outcomes for developmental delays or medical conditions."
                },
                {
                  question: "How long does each physical therapy session last?",
                  answer: "Sessions typically last 45-60 minutes depending on the child's age, attention span, and specific needs. We adjust session length to maximize engagement and therapeutic benefit."
                },
                {
                  question: "What should my child wear to physical therapy?",
                  answer: "Comfortable, loose-fitting clothing that allows for movement is best. Athletic shoes with good support are recommended. We may also suggest specific clothing based on your child's treatment plan."
                },
                {
                  question: "How often will my child need physical therapy?",
                  answer: "Frequency varies based on individual needs, typically ranging from 1-3 times per week. We'll work with you to develop a schedule that fits your family's needs and maximizes progress."
                },
                {
                  question: "Can parents be involved in therapy sessions?",
                  answer: "Absolutely! Parent participation is encouraged and often essential for carrying over skills to home and daily activities. We provide training and home exercise programs for continued progress."
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
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Child&#39;s Physical Therapy Journey
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Help your child achieve their movement goals with our expert pediatric physical therapy services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Assessment
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="bg-emerald-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
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

export default PhysicalTherapyPage;