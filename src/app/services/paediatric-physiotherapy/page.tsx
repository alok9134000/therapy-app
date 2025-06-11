import { Button } from '@/components/ui/button';
import {  CheckCircle, Phone, Calendar, Star,  Users, Award, Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "paediatric Physiotherapy | Children's Physical Therapy Centre Ahmedabad",
  description: "Specialized physiotherapy services for children with movement disorders, developmental delays, and physical disabilities in Ahmedabad.",
  keywords: ["paediatric physiotherapy Ahmedabad", "Child physical therapy", "Developmental delay treatment"],
};

const paediatricPhysiotherapyPage = () => {
  // Structured data for Physiotherapy service
  const physioTherapySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "paediatric Physiotherapy",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "paediatric Therapy Centre Ahmedabad"
    },
    "description": "Specialized physical therapy services for children with movement disorders, developmental delays, and neuromuscular conditions.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physioTherapySchema) }}
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
                Movement & Mobility
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                paediatric <span className="text-yellow-300">Physiotherapy</span> Services
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Helping children achieve their full physical potential through specialized therapeutic interventions.
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
              <li className="text-gray-600">Physiotherapy</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Enhancing Movement and Physical Development
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our paediatric physiotherapists specialize in helping children with movement disorders, developmental delays, and physical disabilities to improve their strength, coordination, and independence.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Comprehensive motor skills assessment",
                    "Individualized treatment plans",
                    "Fun, engaging therapy sessions",
                    "Family education and home programs",
                    "Collaboration with other healthcare providers"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-green-600 hover:bg-green-700">
                  Download Our Physiotherapy Brochure
                </Button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600"
                  alt="Child receiving physiotherapy"
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
                Key Benefits of paediatric Physiotherapy
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our therapy helps children achieve important physical milestones and functional abilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Motor Skills Enhancement",
                  description: "Improving gross motor skills like crawling, walking, and jumping",
                  icon: <Activity className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Improved Balance",
                  description: "Developing better postural control and coordination",
                  icon: <Award className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Injury Prevention",
                  description: "Reducing risk of injuries through proper movement patterns",
                  icon: <CheckCircle className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Functional Independence",
                  description: "Enhancing daily living skills and mobility",
                  icon: <Users className="w-8 h-8 text-green-600" />
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

        {/* Conditions We Treat */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conditions We Address
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our paediatric physiotherapists have expertise in treating various physical and developmental conditions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Cerebral Palsy",
                  description: "Improving mobility and reducing muscle stiffness in children with CP",
                  image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  title: "Developmental Delays",
                  description: "Helping children reach physical milestones like sitting, crawling, and walking",
                  image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  title: "Muscular Dystrophy",
                  description: "Maintaining strength and function for as long as possible",
                  image: "https://images.unsplash.com/photo-1623947441374-422a8077cfb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  title: "Spina Bifida",
                  description: "Enhancing mobility and independence with adaptive techniques",
                  image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                }
              ].map((condition, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={condition.image}
                      alt={condition.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{condition.title}</h3>
                    <p className="text-gray-600">{condition.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Therapeutic Approach
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We combine evidence-based techniques with play-based therapy to make sessions engaging and effective
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "NDT Approach",
                  description: "Neurodevelopmental treatment techniques to improve movement patterns",
                  icon: <Activity className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Sensory Integration",
                  description: "Incorporating sensory input to enhance motor planning and execution",
                  icon: <Award className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Functional Training",
                  description: "Focusing on skills needed for daily activities and independence",
                  icon: <Users className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Strengthening",
                  description: "Targeted exercises to build muscle strength and endurance",
                  icon: <Star className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Balance Training",
                  description: "Improving postural control and coordination",
                  icon: <CheckCircle className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Family Education",
                  description: "Teaching parents techniques to support development at home",
                  icon: <Users className="w-8 h-8 text-green-600" />
                }
              ].map((approach, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {approach.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{approach.title}</h3>
                  <p className="text-gray-600">{approach.description}</p>
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
                Common questions about paediatric physiotherapy
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "At what age can a child start physiotherapy?",
                  answer: "Children can benefit from physiotherapy at any age, from infancy through adolescence. Early intervention is particularly important for developmental delays or congenital conditions."
                },
                {
                  question: "How long will my child need physiotherapy?",
                  answer: "The duration varies depending on your child's condition and goals. Some children benefit from short-term intervention, while others with chronic conditions may need ongoing therapy."
                },
                {
                  question: "Will physiotherapy be painful for my child?",
                  answer: "Our therapists use gentle, child-friendly techniques. While some exercises may be challenging, we ensure therapy is never painful and always adapted to your child's comfort level."
                },
                {
                  question: "What should my child wear to physiotherapy sessions?",
                  answer: "Comfortable clothing that allows free movement, such as t-shirts and shorts or leggings. For infants, onesies or comfortable outfits work well."
                },
                {
                  question: "Can I stay with my child during sessions?",
                  answer: "Absolutely! We encourage parent participation, especially for younger children. Your presence can help your child feel more comfortable and you'll learn techniques to practice at home."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
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
              Help Your Child Move With Confidence
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Our paediatric physiotherapists are ready to help your child achieve their physical potential.
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

export default paediatricPhysiotherapyPage;