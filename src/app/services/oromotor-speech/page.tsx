import { Button } from '@/components/ui/button';
import {  CheckCircle, Phone,  Users,  Activity, Target, Zap, Heart, Brain, Baby, BookOpen, Mic, Volume2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Oro-motor & Speech Therapy | Pediatric Therapy Centre Ahmedabad",
  description: "Comprehensive oro-motor and speech therapy for children with speech production difficulties, feeding challenges, and oral-motor coordination issues.",
  keywords: ["Oro-motor therapy Ahmedabad", "Speech therapy", "Feeding therapy", "Articulation disorders", "Childhood apraxia", "Dysphagia treatment"],
};

const OromotorSpeechPage = () => {
  // Structured data for Oro-motor & Speech Therapy service
  const oromotorSpeechSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Oro-motor & Speech Therapy",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Pediatric Therapy Centre Ahmedabad"
    },
    "description": "Comprehensive oro-motor and speech therapy for children with speech production difficulties, feeding challenges, and oral-motor coordination issues.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(oromotorSpeechSchema) }}
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
                🗣️ Communication & Feeding
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Oro-motor & <span className="text-yellow-300">Speech</span> Therapy
              </h1>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                Comprehensive therapy for speech and feeding difficulties related to oral-motor function, helping children develop clear communication and safe eating skills.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Mic className="w-5 h-5 mr-2" />
                    Start Speech Therapy
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
              <li className="text-gray-600">Oro-motor & Speech Therapy</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Strengthening Speech and Feeding Skills
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Oro-motor therapy focuses on strengthening and coordinating the muscles of the mouth, jaw, tongue, and lips that are essential for speech production and safe eating. Our specialized approach combines evidence-based techniques to help children develop clear communication skills and overcome feeding challenges.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Improved speech production and clarity",
                    "Enhanced feeding skills and safety",
                    "Better oral muscle coordination",
                    "Increased vocal clarity and volume",
                    "Reduced drooling and oral awareness",
                    "Improved articulation and pronunciation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-orange-600 hover:bg-orange-700">
                  Download Speech Guide
                </Button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1620052581237-5d36667be1c3?auto=format&fit=crop&q=80&w=600"
                  alt="Speech therapist working with child on oral-motor exercises"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Oro-motor Components */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Key Components of Oro-motor Function
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Understanding the oral structures and functions that support speech and feeding
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Jaw Stability",
                  description: "Proper jaw positioning and movement for speech sound production and chewing",
                  icon: <Target className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Tongue Mobility",
                  description: "Coordinated tongue movements for articulation and food manipulation",
                  icon: <Activity className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Lip Coordination",
                  description: "Lip strength and movement for speech sounds and food containment",
                  icon: <Heart className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Cheek Function",
                  description: "Cheek muscle control for food processing and speech clarity",
                  icon: <Zap className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Oral Sensation",
                  description: "Awareness of food textures and oral positioning for safety",
                  icon: <Brain className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Breathing Coordination",
                  description: "Proper breath support for sustained speech and safe swallowing",
                  icon: <Volume2 className="w-8 h-8 text-orange-600" />
                }
              ].map((component, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      {component.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{component.title}</h3>
                  </div>
                  <p className="text-gray-600 pl-16">{component.description}</p>
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
                Signs Your Child May Need Oro-motor Therapy
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Children with oro-motor challenges may show difficulties in both speech and feeding areas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  category: "Speech-Related Signs",
                  signs: [
                    "Unclear or distorted speech sounds",
                    "Difficulty with specific consonants or vowels",
                    "Inconsistent speech sound production",
                    "Reduced speech volume or breath support",
                    "Excessive drooling during speech",
                    "Jaw, lip, or tongue weakness"
                  ]
                },
                {
                  category: "Feeding-Related Signs",
                  signs: [
                    "Difficulty chewing age-appropriate foods",
                    "Frequent choking or coughing during meals",
                    "Food pocketing in cheeks",
                    "Preference for only smooth textures",
                    "Excessive drooling during eating",
                    "Difficulty drinking from cups or straws"
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="bg-orange-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                  <div className="space-y-3">
                    {category.signs.map((sign, signIndex) => (
                      <div key={signIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{sign}</span>
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
                  Our Oro-motor Therapy Approach
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our speech-language pathologists use evidence-based oro-motor techniques combined with functional speech and feeding activities. We create individualized treatment plans that address each child&#39;s specific oral-motor needs while making therapy engaging and fun.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Assessment",
                      description: "Detailed evaluation of oral structures, function, and speech/feeding abilities"
                    },
                    {
                      title: "Individualized Treatment",
                      description: "Customized therapy plans targeting specific oro-motor and speech goals"
                    },
                    {
                      title: "Functional Activities",
                      description: "Real-world speech and feeding tasks integrated into therapy sessions"
                    },
                    {
                      title: "Oral Exercises",
                      description: "Targeted exercises to strengthen and coordinate oral muscles"
                    },
                    {
                      title: "Parent Training",
                      description: "Home program instruction for continued practice and progress"
                    },
                    {
                      title: "Progress Monitoring",
                      description: "Regular assessment and adjustment of treatment strategies"
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
              <div className="order-first lg:order-last">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600"
                      alt="Oro-motor exercises with therapy tools"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?auto=format&fit=crop&q=80&w=600"
                      alt="Speech therapy session with child"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=600"
                      alt="Feeding therapy with family involvement"
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
                Our oro-motor and speech therapy helps children with various conditions affecting oral function
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Articulation Disorders",
                "Dysphagia (Swallowing Disorders)",
                "Childhood Apraxia of Speech",
                "Oral Sensory Issues",
                "Cerebral Palsy",
                "Down Syndrome",
                "Cleft Lip/Palate",
                "Tongue Tie (Ankyloglossia)"
              ].map((condition, index) => (
                <div key={index} className="bg-orange-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-orange-100 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{condition}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Techniques */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Therapy Techniques & Activities
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Evidence-based techniques to improve oral-motor function and speech production
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Oral Strengthening",
                  description: "Exercises to build strength and endurance in oral muscles",
                  techniques: ["Resistance exercises", "Blowing activities", "Sucking exercises", "Jaw strengthening"],
                  icon: <Target className="w-12 h-12 text-orange-600" />
                },
                {
                  title: "Coordination Training",
                  description: "Activities to improve timing and coordination of oral movements",
                  techniques: ["Tongue twisters", "Rhythm exercises", "Sequential movements", "Breathing patterns"],
                  icon: <Activity className="w-12 h-12 text-orange-600" />
                },
                {
                  title: "Sensory Awareness",
                  description: "Techniques to improve oral sensation and awareness",
                  techniques: ["Texture exploration", "Temperature variation", "Vibration therapy", "Tactile stimulation"],
                  icon: <Brain className="w-12 h-12 text-orange-600" />
                }
              ].map((technique, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="text-center mb-6">
                    <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      {technique.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{technique.title}</h3>
                    <p className="text-gray-600">{technique.description}</p>
                  </div>
                  <div className="space-y-2">
                    {technique.techniques.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Age-Specific Considerations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Age-Specific Oro-motor Development
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Understanding normal oro-motor development helps identify when intervention is needed
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Infants & Toddlers (0-2 years)",
                  description: "Focus on basic feeding skills and early speech sound development",
                  milestones: ["Sucking and swallowing", "First words emergence", "Texture progression", "Oral exploration"],
                  icon: <Baby className="w-12 h-12 text-orange-600" />
                },
                {
                  title: "Preschoolers (3-5 years)",
                  description: "Development of speech sounds and complex feeding skills",
                  milestones: ["Most speech sounds mastered", "Chewing variety of textures", "Sentence formation", "Oral motor planning"],
                  icon: <Users className="w-12 h-12 text-orange-600" />
                },
                {
                  title: "School Age (6+ years)",
                  description: "Refinement of speech clarity and advanced oral skills",
                  milestones: ["All speech sounds clear", "Complex food textures", "Fluent conversation", "Oral hygiene independence"],
                  icon: <BookOpen className="w-12 h-12 text-orange-600" />
                }
              ].map((ageGroup, index) => (
                <div key={index} className="bg-orange-50 p-8 rounded-lg shadow-sm">
                  <div className="text-center mb-6">
                    <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      {ageGroup.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{ageGroup.title}</h3>
                    <p className="text-gray-600">{ageGroup.description}</p>
                  </div>
                  <div className="space-y-2">
                    {ageGroup.milestones.map((milestone, milestoneIndex) => (
                      <div key={milestoneIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{milestone}</span>
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
                Common questions about oro-motor and speech therapy
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What is oro-motor therapy and how does it differ from speech therapy?",
                  answer: "Oro-motor therapy specifically focuses on strengthening and coordinating the muscles of the mouth, jaw, tongue, and lips. While speech therapy addresses communication skills broadly, oro-motor therapy targets the physical foundation needed for clear speech and safe eating."
                },
                {
                  question: "How do I know if my child needs oro-motor therapy?",
                  answer: "Signs include unclear speech, difficulty chewing age-appropriate foods, excessive drooling, frequent choking during meals, or preference for only smooth textures. A speech-language pathologist can evaluate your child's oro-motor skills."
                },
                {
                  question: "Can oro-motor therapy help with feeding problems?",
                  answer: "Yes, oro-motor therapy is highly effective for feeding difficulties. It helps children develop the muscle strength and coordination needed for safe chewing and swallowing of various food textures."
                },
                {
                  question: "How long does oro-motor therapy typically take?",
                  answer: "The duration varies based on the child's specific needs and severity of difficulties. Some children may see improvements in a few months, while others may need longer-term support. Regular practice at home helps accelerate progress."
                },
                {
                  question: "What can parents do at home to support oro-motor development?",
                  answer: "Parents can encourage oral exploration through safe toys, practice blowing bubbles or whistles, offer varied food textures appropriate for age, and follow home exercise programs provided by the therapist."
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
              Help Your Child Communicate Clearly and Eat Safely
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Our oro-motor and speech therapy can help your child develop the oral skills needed for clear communication and safe, enjoyable eating experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Mic className="w-5 h-5 mr-2" />
                  Schedule Evaluation
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

export default OromotorSpeechPage;