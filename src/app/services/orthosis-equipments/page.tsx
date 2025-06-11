import { Button } from '@/components/ui/button';
import {  CheckCircle, Phone,  Users, Award, Activity, Target, Zap, Heart,  Settings, Wrench } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Orthosis & Equipments | Pediatric Therapy Centre Ahmedabad",
  description: "Provision and support for orthotic devices to improve posture, mobility, and daily functioning in children with special needs.",
  keywords: ["Orthosis Ahmedabad", "Pediatric orthotics", "Mobility equipment", "Assistive devices", "Posture support"],
};

const OrthosisEquipmentsPage = () => {
  // Structured data for Orthosis & Equipments service
  const orthosisSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Orthosis & Equipments Services",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Pediatric Therapy Centre Ahmedabad"
    },
    "description": "Provision and support for orthotic devices to improve posture, mobility, and daily functioning in children with special needs.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orthosisSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern-dots.svg')] bg-[length:40px_40px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                🦾 Mobility Support
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Orthosis & <span className="text-yellow-300">Equipments</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Provision and support for orthotic devices to improve posture, mobility, and daily functioning in children with special needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Settings className="w-5 h-5 mr-2" />
                    Get Orthotic Assessment
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="bg-blue-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91-9876543210
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <nav className="bg-blue-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-blue-600 hover:underline">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/services" className="text-blue-600 hover:underline">Services</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-600">Orthosis & Equipments</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Enhancing Mobility and Independence
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our orthosis and equipment services provide children with specialized devices designed to support proper alignment, enhance mobility, and improve functional abilities. We work closely with families to ensure optimal fit, comfort, and effectiveness of all orthotic solutions.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Better joint alignment",
                    "Mobility assistance",
                    "Reduced risk of injury",
                    "Improved functional abilities",
                    "Custom-fitted solutions",
                    "Ongoing support and adjustments"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700">
                  Download Equipment Guide
                </Button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1633082476809-9bc30b3f4ea0?auto=format&fit=crop&q=80&w=600"
                  alt="Child using orthotic equipment with therapist support"
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
                Benefits of Orthotic Support
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Properly fitted orthotic devices can significantly improve quality of life and functional independence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Joint Alignment",
                  description: "Proper positioning to prevent deformities and maintain optimal joint function",
                  icon: <Target className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Mobility Enhancement",
                  description: "Improved ability to move independently and participate in daily activities",
                  icon: <Activity className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Pain Reduction",
                  description: "Decreased discomfort through proper support and weight distribution",
                  icon: <Heart className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Injury Prevention",
                  description: "Protection against falls, fractures, and other mobility-related injuries",
                  icon: <Award className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Functional Improvement",
                  description: "Enhanced ability to perform self-care and daily living tasks",
                  icon: <Zap className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Confidence Building",
                  description: "Increased self-esteem and participation in social activities",
                  icon: <Users className="w-8 h-8 text-blue-600" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
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

        {/* Our Equipment & Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600"
                      alt="Custom orthotic devices"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=600"
                      alt="Mobility equipment fitting"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600"
                      alt="Child using assistive equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Orthotic Solutions Process
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We provide comprehensive orthotic services from initial assessment through ongoing maintenance, ensuring each child receives the most appropriate and effective support devices.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Initial Assessment",
                      description: "Comprehensive evaluation of posture, mobility, and functional needs"
                    },
                    {
                      title: "Device Selection",
                      description: "Choosing appropriate orthotic solutions based on individual requirements"
                    },
                    {
                      title: "Custom Fitting",
                      description: "Precise measurements and adjustments for optimal comfort and function"
                    },
                    {
                      title: "Training & Education",
                      description: "Teaching proper use, care, and maintenance of orthotic devices"
                    },
                    {
                      title: "Follow-up Care",
                      description: "Regular monitoring and adjustments as the child grows and develops"
                    },
                    {
                      title: "Maintenance Support",
                      description: "Ongoing technical support and equipment servicing"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                Our orthotic services benefit children with various conditions affecting mobility and posture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Cerebral Palsy",
                "Muscle Tone Issues",
                "Orthopedic Impairments",
                "Post-Surgical Needs",
                "Spina Bifida",
                "Muscular Dystrophy",
                "Joint Contractures",
                "Scoliosis"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{condition}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Equipment */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Equipment & Devices We Provide
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Comprehensive range of orthotic devices and assistive equipment tailored to individual needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lower Limb Orthotics",
                  description: "Ankle-foot orthoses (AFOs), knee-ankle-foot orthoses (KAFOs), and hip supports",
                  devices: ["AFOs (Ankle-Foot Orthoses)", "KAFOs (Knee-Ankle-Foot)", "Hip abduction braces", "Shoe inserts"],
                  icon: <Activity className="w-12 h-12 text-blue-600" />
                },
                {
                  title: "Upper Limb Supports",
                  description: "Wrist, elbow, and shoulder supports to improve function and prevent deformity",
                  devices: ["Wrist-hand orthoses", "Elbow supports", "Shoulder stabilizers", "Finger splints"],
                  icon: <Wrench className="w-12 h-12 text-blue-600" />
                },
                {
                  title: "Spinal & Postural Support",
                  description: "Devices to maintain proper spinal alignment and postural control",
                  devices: ["Spinal orthoses", "Postural supports", "Seating systems", "Standing frames"],
                  icon: <Target className="w-12 h-12 text-blue-600" />
                }
              ].map((category, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  <div className="space-y-2">
                    {category.devices.map((device, deviceIndex) => (
                      <div key={deviceIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{device}</span>
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
                Common questions about orthotic devices and equipment
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How do I know if my child needs orthotic support?",
                  answer: "Signs include difficulty with balance, abnormal walking patterns, muscle weakness, joint deformities, or frequent falls. Our therapists can assess your child's specific needs and recommend appropriate interventions."
                },
                {
                  question: "How long does it take to get custom orthotic devices?",
                  answer: "Custom devices typically take 2-4 weeks to fabricate after initial measurements and fitting. We work with certified orthotists to ensure quality and proper fit for each individual child."
                },
                {
                  question: "Will my child need to wear the orthotic device all the time?",
                  answer: "Wearing schedules vary based on the child's condition and the type of device. Some may be worn throughout the day, while others are used only during specific activities or for certain periods."
                },
                {
                  question: "How often do orthotic devices need to be replaced?",
                  answer: "Growing children typically need device adjustments every 6-12 months and complete replacements every 1-2 years. We monitor growth and make recommendations for updates as needed."
                },
                {
                  question: "Are orthotic devices covered by insurance?",
                  answer: "Many insurance plans cover medically necessary orthotic devices. We work with families to understand their coverage and assist with documentation required for insurance approval."
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
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enhance Your Child&#39;s Mobility and Independence
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Properly fitted orthotic devices can make a significant difference in your child&#39;s daily life and long-term development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Settings className="w-5 h-5 mr-2" />
                  Schedule Assessment
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="bg-blue-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
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

export default OrthosisEquipmentsPage;