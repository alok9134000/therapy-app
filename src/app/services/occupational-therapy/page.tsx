import { Button } from '@/components/ui/button';
import {  CheckCircle, Phone, Calendar, Star,  Clock,  Award, Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "paediatric Occupational Therapy | Children's OT Services Ahmedabad",
  description: "Specialized occupational therapy for children with sensory processing, fine motor, and daily living challenges in Ahmedabad.",
  keywords: ["Occupational therapy Ahmedabad", "Child OT services", "Sensory integration therapy"],
};

const OccupationalTherapyPage = () => {
  // Structured data for OT service
  const occupationalTherapySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "paediatric Occupational Therapy",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "paediatric Therapy Centre Ahmedabad"
    },
    "description": "Specialized therapy to help children develop essential daily living, fine motor, and sensory processing skills.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(occupationalTherapySchema) }}
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
                Daily Living Skills
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                paediatric <span className="text-yellow-300">Occupational Therapy</span>
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                Empowering children to participate fully in daily activities through skill development and sensory integration.
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
              <li className="text-gray-600">Occupational Therapy</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Building Essential Life Skills
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our occupational therapists help children develop the skills needed for daily living, school performance, and social participation through evidence-based interventions.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Comprehensive functional assessments",
                    "Individualized treatment plans",
                    "Play-based therapeutic activities",
                    "Sensory integration techniques",
                    "Collaboration with families and schools"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-purple-600 hover:bg-purple-700">
                  Download Our OT Brochure
                </Button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1180&q=80"
                  alt="Child working with occupational therapist"
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
                Key Benefits of Occupational Therapy
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our therapy helps children gain independence and confidence in daily activities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Daily Living Skills",
                  description: "Improving self-care tasks like dressing, feeding, and grooming",
                  icon: <Activity className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "Fine Motor Skills",
                  description: "Developing hand strength and coordination for writing and manipulation",
                  icon: <Award className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "Attention & Focus",
                  description: "Enhancing concentration for school and play activities",
                  icon: <Clock className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "Sensory Processing",
                  description: "Regulating responses to sensory input for better participation",
                  icon: <Star className="w-8 h-8 text-purple-600" />
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

        {/* Conditions We Treat */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conditions We Address
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our occupational therapists specialize in helping children with various developmental challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Sensory Processing Disorder",
                  description: "Helping children regulate their responses to sensory input for better daily functioning",
                  image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  title: "ADHD",
                  description: "Improving focus, organization, and task completion skills",
                  image: "https://images.unsplash.com/photo-1623947441374-422a8077cfb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  title: "Autism Spectrum Disorder",
                  description: "Developing social participation, play skills, and sensory regulation",
                  image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  title: "Learning Disabilities",
                  description: "Enhancing fine motor and visual perceptual skills for academic success",
                  image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Therapist working with child on fine motor skills"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1623947441374-422a8077cfb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Child doing sensory activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Parent and therapist working together"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Child-Centered OT Approach
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We create meaningful, play-based interventions tailored to each child&#39;s unique needs and goals.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Evaluation",
                      description: "Assessing sensory processing, motor skills, and functional abilities"
                    },
                    {
                      title: "Goal Setting",
                      description: "Collaborating with families to establish meaningful objectives"
                    },
                    {
                      title: "Sensory Integration",
                      description: "Using specialized equipment and techniques to address sensory needs"
                    },
                    {
                      title: "Skill Development",
                      description: "Breaking down tasks into achievable steps for success"
                    },
                    {
                      title: "Environmental Adaptation",
                      description: "Modifying tasks and settings to support participation"
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

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Common questions about paediatric occupational therapy
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What's the difference between OT and physiotherapy?",
                  answer: "While both help children develop skills, OT focuses more on daily living activities, fine motor skills, and sensory processing, while physiotherapy emphasizes gross motor skills and physical mobility."
                },
                {
                  question: "How do I know if my child needs occupational therapy?",
                  answer: "If your child struggles with self-care tasks, handwriting, attention, sensory processing, or play skills compared to peers, an OT evaluation may be beneficial."
                },
                {
                  question: "What does a typical OT session look like?",
                  answer: "Sessions are play-based and may include sensory activities, fine motor tasks, self-care practice, and therapeutic exercises - all tailored to your child's needs and interests."
                },
                {
                  question: "Will OT help with my child's handwriting?",
                  answer: "Yes! OTs address the underlying skills needed for handwriting including hand strength, pencil grip, and visual-motor coordination through fun, engaging activities."
                },
                {
                  question: "How can I support my child's OT goals at home?",
                  answer: "Your therapist will provide specific home activities and environmental modifications. Consistency with these recommendations greatly enhances progress."
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

export default OccupationalTherapyPage;