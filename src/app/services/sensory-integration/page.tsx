import { Button } from '@/components/ui/button';
import {  CheckCircle, Phone,  Activity, Target, Zap, Heart, Brain,  Waves } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sensory Integration Therapy | Pediatric Therapy Centre Ahmedabad",
  description: "Expert sensory integration therapy focused on improving the brain's ability to process sensory information for children with sensory processing disorders.",
  keywords: ["Sensory integration Ahmedabad", "Sensory processing disorder", "Pediatric occupational therapy", "Autism sensory therapy", "ADHD sensory support"],
};

const SensoryIntegrationPage = () => {
  // Structured data for Sensory Integration service
  const sensoryIntegrationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Sensory Integration Therapy",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Pediatric Therapy Centre Ahmedabad"
    },
    "description": "Expert sensory integration therapy focused on improving the brain's ability to process sensory information for children with sensory processing disorders.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sensoryIntegrationSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-500 to-indigo-600 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern-dots.svg')] bg-[length:40px_40px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                🌀 Sensory Processing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Sensory <span className="text-yellow-300">Integration</span> Therapy
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                Expert therapy focused on improving the brain&#39;s ability to process sensory information, helping children better understand and respond to their environment.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Waves className="w-5 h-5 mr-2" />
                    Start Sensory Therapy
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className=" bg-purple-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
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
              <li className="text-gray-600">Sensory Integration Therapy</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Understanding Sensory Integration
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Sensory integration is the process by which our nervous system receives, organizes, and responds to sensory information from our environment. When this process doesn&#39;t work smoothly, it can affect a child&#39;s ability to learn, play, and participate in daily activities. Our specialized therapy helps children develop better sensory processing skills.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Better sensory processing and regulation",
                    "Increased calmness and behavior control",
                    "Improved attention and task performance",
                    "Enhanced social participation",
                    "Reduced sensory sensitivities",
                    "Improved motor planning and coordination"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-purple-600 hover:bg-purple-700">
                  Download Sensory Guide
                </Button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1547327132-5d20850c62f5?auto=format&fit=crop&q=80&w=600"
                  alt="Child engaging in sensory integration therapy activities"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sensory Systems Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Seven Sensory Systems
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Understanding the sensory systems that affect how children interact with their world
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Tactile (Touch)",
                  description: "Processing touch sensations from skin receptors throughout the body",
                  icon: <Heart className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "Vestibular (Balance)",
                  description: "Inner ear system that detects movement and changes in head position",
                  icon: <Activity className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "Proprioceptive (Body Awareness)",
                  description: "Awareness of body position and movement through joints and muscles",
                  icon: <Target className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "Visual (Sight)",
                  description: "Processing visual information and understanding what we see",
                  icon: <Zap className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "Auditory (Hearing)",
                  description: "Processing sounds and distinguishing between different auditory inputs",
                  icon: <Waves className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "Gustatory & Olfactory",
                  description: "Taste and smell systems that affect eating and environmental awareness",
                  icon: <Brain className="w-8 h-8 text-purple-600" />
                }
              ].map((system, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      {system.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{system.title}</h3>
                  </div>
                  <p className="text-gray-600 pl-16">{system.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signs and Symptoms */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Signs Your Child May Benefit from Sensory Integration Therapy
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Children with sensory processing difficulties may show various signs across different areas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Over-Responsiveness",
                  signs: [
                    "Covers ears at loud sounds",
                    "Avoids messy textures",
                    "Dislikes being touched",
                    "Overwhelmed in busy environments",
                    "Picky eating habits"
                  ]
                },
                {
                  category: "Under-Responsiveness",
                  signs: [
                    "Seeks intense sensory input",
                    "High pain tolerance",
                    "Doesn't notice when called",
                    "Appears lazy or unmotivated",
                    "Craves movement activities"
                  ]
                },
                {
                  category: "Sensory Seeking",
                  signs: [
                    "Constantly moving or fidgeting",
                    "Touches everything",
                    "Loves spinning and swinging",
                    "Makes loud noises",
                    "Crashes into things"
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{category.category}</h3>
                  <div className="space-y-2">
                    {category.signs.map((sign, signIndex) => (
                      <div key={signIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Therapy Approach */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Sensory Integration Approach
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our occupational therapists use evidence-based sensory integration techniques in a specially designed sensory gym environment. We create individualized treatment plans that challenge children in a fun, supportive way to help their nervous systems process sensory information more effectively.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Assessment",
                      description: "Detailed evaluation of sensory processing patterns and challenges"
                    },
                    {
                      title: "Individualized Treatment",
                      description: "Customized therapy plans based on each child's unique sensory profile"
                    },
                    {
                      title: "Sensory-Rich Environment",
                      description: "Specialized therapy gym with swings, climbing equipment, and sensory tools"
                    },
                    {
                      title: "Play-Based Approach",
                      description: "Engaging activities that feel like play while addressing sensory needs"
                    },
                    {
                      title: "Parent Education",
                      description: "Training families to support sensory needs at home and school"
                    },
                    {
                      title: "Progress Monitoring",
                      description: "Regular assessment and adjustment of intervention strategies"
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
              <div className="order-first lg:order-last">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600"
                      alt="Child using sensory swing equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?auto=format&fit=crop&q=80&w=600"
                      alt="Sensory play activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=600"
                      alt="Therapist guiding sensory integration activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions We Support */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conditions We Support
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our sensory integration therapy helps children with various conditions that affect sensory processing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Sensory Processing Disorder",
                "Autism Spectrum Disorders",
                "ADHD",
                "Developmental Delays",
                "Learning Disabilities",
                "Anxiety Disorders",
                "Cerebral Palsy",
                "Down Syndrome"
              ].map((condition, index) => (
                <div key={index} className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-purple-100 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{condition}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Activities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sensory Integration Activities
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Fun, therapeutic activities designed to challenge and organize the sensory systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Vestibular Activities",
                  description: "Swinging, spinning, and movement activities to improve balance and spatial orientation",
                  activities: ["Platform swings", "Therapy balls", "Scooter boards", "Trampolines"],
                  icon: <Activity className="w-12 h-12 text-purple-600" />
                },
                {
                  title: "Proprioceptive Input",
                  description: "Heavy work activities that provide deep pressure and joint compression",
                  activities: ["Obstacle courses", "Weighted activities", "Resistive exercises", "Climbing"],
                  icon: <Target className="w-12 h-12 text-purple-600" />
                },
                {
                  title: "Tactile Experiences",
                  description: "Various textures and touch experiences to improve tactile processing",
                  activities: ["Sensory bins", "Texture play", "Finger painting", "Sand/water play"],
                  icon: <Heart className="w-12 h-12 text-purple-600" />
                }
              ].map((activity, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="text-center mb-6">
                    <div className="bg-purple-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      {activity.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                  <div className="space-y-2">
                    {activity.activities.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
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
                Common questions about sensory integration therapy
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What is sensory integration therapy?",
                  answer: "Sensory integration therapy is a type of occupational therapy that helps children whose brains have trouble processing sensory information. It uses play-based activities to help the nervous system respond appropriately to sensory input."
                },
                {
                  question: "How do I know if my child has sensory processing issues?",
                  answer: "Signs include over- or under-reactions to sensory input, difficulty with transitions, behavioral challenges, problems with attention, or struggles with daily activities like eating, dressing, or playing."
                },
                {
                  question: "What happens during a sensory integration therapy session?",
                  answer: "Sessions take place in a sensory gym with specialized equipment like swings, slides, and climbing structures. The therapist guides your child through activities that provide specific sensory input to help organize their nervous system."
                },
                {
                  question: "How long does sensory integration therapy take to show results?",
                  answer: "Progress varies by child, but many families notice improvements in 3-6 months of consistent therapy. Some children may need longer-term support depending on their individual needs and challenges."
                },
                {
                  question: "Can sensory integration therapy help with behavior problems?",
                  answer: "Yes, many behavioral challenges stem from sensory processing difficulties. When children can better process sensory information, they often show improvements in attention, emotional regulation, and overall behavior."
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
        <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Help Your Child Process the World More Comfortably
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Our sensory integration therapy can help your child better understand and respond to sensory information, leading to improved daily functioning and well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Waves className="w-5 h-5 mr-2" />
                  Schedule Assessment
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

export default SensoryIntegrationPage;