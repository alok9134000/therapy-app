import { Button } from '@/components/ui/button';
import {  CheckCircle, Phone, Users, Award, Activity, Target, Heart, Zap, Waves, Droplets } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Aquatic Therapy for Children | Pediatric Therapy Centre Ahmedabad",
  description: "Therapeutic water-based exercises to improve mobility, coordination, and strength through low-impact aquatic therapy for children.",
  keywords: ["Aquatic therapy Ahmedabad", "Water therapy children", "Hydrotherapy pediatric", "Pool therapy"],
};

const AquaticTherapyPage = () => {
  // Structured data for Aquatic Therapy service
  const aquaticTherapySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Aquatic Therapy",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Pediatric Therapy Centre Ahmedabad"
    },
    "description": "Therapeutic water-based exercises to improve mobility, coordination, and strength through low-impact aquatic therapy for children.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aquaticTherapySchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-cyan-700 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/wave-pattern.svg')] bg-[length:80px_40px] opacity-30"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                🏊‍♂️ Water-Based Therapy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Aquatic <span className="text-yellow-300">Therapy</span> for Children
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Therapy in water to improve mobility, coordination, and strength through low-impact exercises in our therapeutic pool environment.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Waves className="w-5 h-5 mr-2" />
                    Book Pool Session
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
              <li className="text-gray-600">Aquatic Therapy</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Healing Power of Water Therapy
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our aquatic therapy program harnesses the unique properties of water to provide a safe, supportive environment for children to improve their physical abilities. The buoyancy and resistance of water create ideal conditions for therapeutic exercise and movement.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Reduced stress on joints",
                    "Enhanced sensory input", 
                    "Increased muscle strength and tone",
                    "Improved motor planning and coordination",
                    "Pain relief and muscle relaxation",
                    "Boosted confidence and enjoyment"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700">
                  Download Pool Safety Guide
                </Button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1573497169404-736fa6c9ebd7?auto=format&fit=crop&q=80&w=600"
                  alt="Child doing aquatic therapy exercises in therapeutic pool"
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
                Benefits of Aquatic Therapy
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Water provides a unique therapeutic environment that enhances traditional therapy approaches with natural buoyancy and resistance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Joint Protection",
                  description: "Water buoyancy reduces stress on joints, allowing pain-free movement",
                  icon: <Heart className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Sensory Stimulation",
                  description: "Water pressure and movement provide rich sensory input for development",
                  icon: <Droplets className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Strength Building",
                  description: "Water resistance naturally strengthens muscles during movement",
                  icon: <Zap className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Motor Coordination",
                  description: "Three-dimensional movement in water enhances motor planning skills",
                  icon: <Target className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Cardiovascular Health",
                  description: "Gentle cardiovascular exercise improves heart and lung function",
                  icon: <Activity className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Confidence Building",
                  description: "Fun, supportive environment builds self-esteem and motivation",
                  icon: <Award className="w-8 h-8 text-blue-600" />
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

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=600"
                      alt="Therapist assisting child in pool"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1620000617482-821324eb9a14?auto=format&fit=crop&q=80&w=600"
                      alt="Child doing water exercises"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://images.unsplash.com/photo-1494137656793-0453c33de4ea?auto=format&fit=crop&q=80&w=600"
                      alt="Therapeutic pool facility"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Aquatic Therapy Process
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We provide structured, individualized aquatic therapy sessions in our temperature-controlled therapeutic pool with certified aquatic therapists.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Water Safety Assessment",
                      description: "Comprehensive evaluation of swimming ability and water comfort level"
                    },
                    {
                      title: "Individualized Plan",
                      description: "Customized aquatic therapy program based on specific goals and needs"
                    },
                    {
                      title: "Gradual Water Introduction",
                      description: "Gentle progression from shallow to deeper water as comfort increases"
                    },
                    {
                      title: "Therapeutic Exercises",
                      description: "Targeted water-based activities to improve strength, mobility, and coordination"
                    },
                    {
                      title: "Progress Monitoring",
                      description: "Regular assessment and adjustment of aquatic therapy interventions"
                    },
                    {
                      title: "Family Training",
                      description: "Education for families on water safety and home exercise programs"
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

        {/* Conditions We Treat */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conditions We Treat
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Aquatic therapy is particularly beneficial for children with various conditions that affect movement, strength, and sensory processing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Cerebral Palsy",
                "Muscle Weakness", 
                "Sensory Processing Disorders",
                "Arthrogryposis",
                "Spina Bifida",
                "Muscular Dystrophy",
                "Autism Spectrum Disorder",
                "Joint Stiffness",
                "Post-Surgical Recovery"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Waves className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{condition}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pool Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Therapeutic Pool Features
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                State-of-the-art aquatic therapy facility designed specifically for pediatric therapeutic needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Temperature Control",
                  description: "Warm water maintained at optimal therapeutic temperature",
                  icon: <Droplets className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Variable Depth",
                  description: "Multiple depth levels for different therapeutic activities",
                  icon: <Waves className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Safety Features",
                  description: "Non-slip surfaces and safety equipment throughout",
                  icon: <CheckCircle className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Accessible Entry",
                  description: "Wheelchair accessible ramps and lift systems",
                  icon: <Users className="w-8 h-8 text-blue-600" />
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
                Common questions about our aquatic therapy program
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "Does my child need to know how to swim for aquatic therapy?",
                  answer: "No swimming skills are required. Our certified aquatic therapists work with children at all comfort levels in water, starting in shallow areas with full support as needed."
                },
                {
                  question: "What should my child wear for aquatic therapy?",
                  answer: "A comfortable swimsuit and water shoes for pool deck safety. We provide flotation devices and other equipment as needed for therapy activities."
                },
                {
                  question: "Is the pool water safe for children with medical conditions?",
                  answer: "Yes, our therapeutic pool maintains strict water quality standards with appropriate chemical balance and filtration systems designed for medical facility use."
                },
                {
                  question: "How warm is the therapeutic pool?",
                  answer: "Our pool is maintained at 88-92°F (31-33°C), which is warmer than typical pools to provide therapeutic benefits and comfort for children with medical conditions."
                },
                {
                  question: "Can parents watch or participate in aquatic therapy sessions?",
                  answer: "Parents are welcome to observe sessions and may be invited to participate in certain activities. We also provide training for families to continue water-based exercises at home or community pools."
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
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dive Into Healing Waters
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the therapeutic benefits of our specialized aquatic therapy program designed for children&#39;s unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Waves className="w-5 h-5 mr-2" />
                  Schedule Pool Session
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

export default AquaticTherapyPage;