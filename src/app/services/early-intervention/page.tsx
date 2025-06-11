import { Button } from '@/components/ui/button';
import { CheckCircle, Phone,  Users, Activity, Target, Heart, Brain, Baby, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Early Intervention Services | Pediatric Therapy Centre Ahmedabad",
  description: "Comprehensive early intervention therapies addressing developmental delays in young children to maximize their potential and improve long-term outcomes.",
  keywords: ["Early intervention Ahmedabad", "Developmental delays", "Pediatric therapy", "Autism early intervention", "Child development"],
};

const EarlyInterventionPage = () => {
  // Structured data for Early Intervention service
  const earlyInterventionSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Early Intervention Services",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Pediatric Therapy Centre Ahmedabad"
    },
    "description": "Comprehensive early intervention therapies addressing developmental delays in young children to maximize their potential and improve long-term outcomes.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(earlyInterventionSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-emerald-500 to-teal-600 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern-dots.svg')] bg-[length:40px_40px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                👶 Early Support
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Early <span className="text-yellow-300">Intervention</span> Services
              </h1>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                Comprehensive early intervention therapies addressing developmental delays in young children to maximize their potential and improve long-term outcomes.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Baby className="w-5 h-5 mr-2" />
                    Start Early Intervention
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
              <li className="text-gray-600">Early Intervention Services</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Building Strong Foundations from the Start
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Early intervention is crucial for young children with developmental delays or disabilities. Our comprehensive programs are designed to support children from birth to age 6, providing the foundation they need for future learning and development. The earlier we start, the better the outcomes.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Improved long-term outcomes",
                    "Enhanced learning and behavior",
                    "Support for families",
                    "Developmental milestone achievement",
                    "Individualized intervention plans",
                    "Multidisciplinary team approach"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-emerald-600 hover:bg-emerald-700">
                  Download Early Intervention Guide
                </Button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581609793485-7e4fd1e3f9a2?auto=format&fit=crop&q=80&w=600"
                  alt="Early intervention therapy session with young child"
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
                Why Early Intervention Matters
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Research shows that early intervention can dramatically improve outcomes for children with developmental delays
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Brain Development",
                  description: "Critical period when the brain is most adaptable and responsive to intervention",
                  icon: <Brain className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Skill Building",
                  description: "Foundation skills that support all future learning and development",
                  icon: <Target className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Family Support",
                  description: "Comprehensive support and training for families to continue progress at home",
                  icon: <Heart className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Social Skills",
                  description: "Development of communication and social interaction abilities",
                  icon: <Users className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Independence",
                  description: "Building self-help skills and independence for daily activities",
                  icon: <Activity className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "School Readiness",
                  description: "Preparation for successful transition to educational settings",
                  icon: <BookOpen className="w-8 h-8 text-emerald-600" />
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
                      src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600"
                      alt="Therapist working with toddler"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?auto=format&fit=crop&q=80&w=600"
                      alt="Child engaging in developmental play"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=600"
                      alt="Family participating in early intervention session"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Early Intervention Process
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We provide comprehensive, family-centered early intervention services that address all areas of development through evidence-based practices and individualized programming.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Evaluation",
                      description: "Thorough assessment of developmental milestones across all domains"
                    },
                    {
                      title: "Individualized Plan",
                      description: "Customized intervention plan based on child and family needs"
                    },
                    {
                      title: "Multidisciplinary Team",
                      description: "Collaboration between therapists, specialists, and families"
                    },
                    {
                      title: "Natural Environment",
                      description: "Therapy provided in familiar settings like home and community"
                    },
                    {
                      title: "Family Coaching",
                      description: "Training parents and caregivers to support development daily"
                    },
                    {
                      title: "Progress Monitoring",
                      description: "Regular assessment and adjustment of intervention strategies"
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

        {/* Conditions We Support */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conditions We Support
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our early intervention services support children with various developmental challenges and conditions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Developmental Delays",
                "Autism Spectrum Disorders",
                "Genetic Disorders",
                "Premature Birth Complications",
                "Cerebral Palsy",
                "Down Syndrome",
                "Hearing Impairments",
                "Vision Impairments"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{condition}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Age Groups and Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Age-Specific Services
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Tailored interventions for each developmental stage from infancy through school entry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Infants (0-12 months)",
                  description: "Focus on sensory development, motor skills, and parent-child bonding",
                  services: ["Sensory stimulation", "Motor development", "Feeding support", "Parent guidance"],
                  icon: <Baby className="w-12 h-12 text-emerald-600" />
                },
                {
                  title: "Toddlers (1-3 years)",
                  description: "Emphasis on communication, mobility, and social-emotional development",
                  services: ["Language development", "Play skills", "Behavior support", "Social interaction"],
                  icon: <Users className="w-12 h-12 text-emerald-600" />
                },
                {
                  title: "Preschoolers (3-6 years)",
                  description: "Preparation for school with focus on cognitive and pre-academic skills",
                  services: ["Pre-academic skills", "School readiness", "Independence training", "Peer interaction"],
                  icon: <BookOpen className="w-12 h-12 text-emerald-600" />
                }
              ].map((ageGroup, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                  <div className="text-center mb-6">
                    <div className="bg-emerald-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      {ageGroup.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{ageGroup.title}</h3>
                    <p className="text-gray-600">{ageGroup.description}</p>
                  </div>
                  <div className="space-y-2">
                    {ageGroup.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
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
                Common questions about early intervention services
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What is early intervention and why is it important?",
                  answer: "Early intervention refers to services and supports provided to infants and young children with developmental delays or disabilities. It's crucial because the brain develops rapidly in early years, making this the optimal time for intervention to maximize outcomes."
                },
                {
                  question: "How do I know if my child needs early intervention?",
                  answer: "Signs include delays in reaching developmental milestones like sitting, walking, talking, or social interaction. If you have concerns about your child's development, it's best to seek evaluation even if you're unsure."
                },
                {
                  question: "What types of services are included in early intervention?",
                  answer: "Services may include speech therapy, occupational therapy, physical therapy, developmental intervention, family training, and specialized instruction based on your child's individual needs."
                },
                {
                  question: "Where do early intervention services take place?",
                  answer: "Services are typically provided in natural environments where children spend time, such as their home, daycare, or community settings. This helps children practice skills in familiar surroundings."
                },
                {
                  question: "How long do children typically receive early intervention services?",
                  answer: "The duration varies based on individual needs and progress. Some children may need services for a few months, while others may benefit from support until they transition to school-based services at age 3 or older."
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
        <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Give Your Child the Best Start in Life
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Early intervention can make a significant difference in your child&#39;s development. The sooner we start, the better the outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Baby className="w-5 h-5 mr-2" />
                  Schedule Evaluation
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

export default EarlyInterventionPage;