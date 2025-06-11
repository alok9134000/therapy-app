import { Button } from '@/components/ui/button';
import { CheckCircle, Phone,Clock, Users, Award, Activity, Monitor, Wifi, Video, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Online Consultation and Therapy | Pediatric Therapy Centre Ahmedabad",
  description: "Virtual therapy sessions that bring expert pediatric care to your home with convenient and flexible online consultations.",
  keywords: ["Online therapy Ahmedabad", "Virtual therapy sessions", "Telehealth pediatric therapy", "Remote consultation"],
};

const OnlineTherapyPage = () => {
  // Structured data for Online Therapy service
  const onlineTherapySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Online Consultation and Therapy",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Pediatric Therapy Centre Ahmedabad"
    },
    "description": "Virtual therapy sessions that bring expert pediatric care to your home with convenient and flexible online consultations.",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "23.0225",
        "longitude": "72.5714"
      },
      "geoRadius": "500000"
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(onlineTherapySchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-cyan-600 to-blue-700 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern-dots.svg')] bg-[length:40px_40px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                💻 Virtual Care
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Online <span className="text-yellow-300">Consultation</span> & Therapy
              </h1>
              <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                Virtual therapy sessions that bring expert pediatric care to your home with convenient and flexible online consultations.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Video className="w-5 h-5 mr-2" />
                    Book Online Session
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="bg-cyan-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91-9876543210
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <nav className="bg-cyan-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-cyan-600 hover:underline">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/services" className="text-cyan-600 hover:underline">Services</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-600">Online Consultation and Therapy</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Expert Pediatric Care from Anywhere
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our online consultation and therapy services bring the same high-quality pediatric care directly to your home. Experience convenient, flexible, and effective therapy sessions through secure video platforms with our expert therapists.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Access to expert therapists remotely",
                    "Convenient and flexible scheduling",
                    "Continuity of care from any location",
                    "Secure and HIPAA-compliant platforms",
                    "Interactive therapy tools and activities",
                    "Parent training and family support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-cyan-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-cyan-600 hover:bg-cyan-700">
                  Download Our Online Therapy Guide
                </Button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600"
                  alt="Online therapy session with child and therapist"
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
                Benefits of Online Therapy
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Experience the convenience and effectiveness of virtual therapy sessions tailored to your family&#39;s needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Accessibility",
                  description: "Access expert therapists from anywhere, eliminating travel barriers",
                  icon: <MapPin className="w-8 h-8 text-cyan-600" />
                },
                {
                  title: "Flexible Scheduling",
                  description: "Book sessions at times that work best for your family's schedule",
                  icon: <Clock className="w-8 h-8 text-cyan-600" />
                },
                {
                  title: "Comfort of Home",
                  description: "Children often feel more comfortable in their familiar environment",
                  icon: <Users className="w-8 h-8 text-cyan-600" />
                },
                {
                  title: "Continuity of Care",
                  description: "Maintain consistent therapy even during travel or schedule changes",
                  icon: <Activity className="w-8 h-8 text-cyan-600" />
                },
                {
                  title: "Parent Involvement",
                  description: "Enhanced opportunities for parent training and family participation",
                  icon: <Users className="w-8 h-8 text-cyan-600" />
                },
                {
                  title: "Cost-Effective",
                  description: "Reduce travel costs and time while maintaining quality care",
                  icon: <Award className="w-8 h-8 text-cyan-600" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-100 p-3 rounded-full mr-4">
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
                      alt="Therapist conducting online session"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
                      alt="Child engaged in online therapy activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                      alt="Family participating in online therapy session"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Online Therapy Process
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We use secure, user-friendly platforms and evidence-based techniques to deliver effective therapy sessions in the comfort of your home.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Technology Setup",
                      description: "Simple setup assistance to ensure smooth video connection and audio quality"
                    },
                    {
                      title: "Initial Consultation",
                      description: "Comprehensive assessment and goal setting in virtual environment"
                    },
                    {
                      title: "Interactive Sessions",
                      description: "Engaging therapy activities using digital tools and real-time interaction"
                    },
                    {
                      title: "Progress Tracking",
                      description: "Digital documentation and regular progress updates with families"
                    },
                    {
                      title: "Home Programs",
                      description: "Customized activities and exercises for practice between sessions"
                    },
                    {
                      title: "Family Support",
                      description: "Ongoing training and consultation to maximize therapy outcomes"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-cyan-100 text-cyan-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                Conditions We Treat Online
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our virtual therapy services effectively address various pediatric developmental and therapeutic needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Speech and language delays",
                "Developmental challenges",
                "Parent training and consultation",
                "Autism spectrum support",
                "Learning difficulties",
                "Behavioral guidance"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{condition}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Requirements */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Getting Started with Online Therapy
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Simple technology requirements to ensure the best online therapy experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Stable Internet",
                  description: "Reliable broadband connection for smooth video calls",
                  icon: <Wifi className="w-8 h-8 text-cyan-600" />
                },
                {
                  title: "Device with Camera",
                  description: "Computer, tablet, or smartphone with working camera",
                  icon: <Monitor className="w-8 h-8 text-cyan-600" />
                },
                {
                  title: "Quiet Space",
                  description: "Comfortable, distraction-free environment for sessions",
                  icon: <Users className="w-8 h-8 text-cyan-600" />
                },
                {
                  title: "Basic Materials",
                  description: "Simple household items for therapy activities",
                  icon: <Activity className="w-8 h-8 text-cyan-600" />
                }
              ].map((requirement, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-cyan-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {requirement.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{requirement.title}</h3>
                  <p className="text-gray-600">{requirement.description}</p>
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
                Common questions about our online therapy services
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "Is online therapy as effective as in-person therapy?",
                  answer: "Research shows that online therapy can be equally effective for many conditions when delivered by qualified professionals. Our therapists use evidence-based techniques adapted for virtual delivery."
                },
                {
                  question: "What technology do I need for online sessions?",
                  answer: "You need a device with camera and microphone (computer, tablet, or smartphone), stable internet connection, and a quiet space. We provide technical support to help you get started."
                },
                {
                  question: "How long are online therapy sessions?",
                  answer: "Sessions typically last 30-60 minutes depending on the child's age and needs. We can adjust session length to maintain engagement and effectiveness."
                },
                {
                  question: "Can parents participate in online sessions?",
                  answer: "Absolutely! Parent involvement is often easier in online sessions, allowing for better training and carryover of skills to daily routines."
                },
                {
                  question: "Are online sessions covered by insurance?",
                  answer: "Many insurance plans now cover telehealth services. We can help verify your benefits and navigate insurance requirements for online therapy sessions."
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
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Online Therapy Journey Today
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Experience the convenience and effectiveness of expert pediatric therapy from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Video className="w-5 h-5 mr-2" />
                  Book Online Session
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="bg-cyan-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
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

export default OnlineTherapyPage;