
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServicesOverview = () => {
  const services = [
    {
      title: "Speech Therapy",
      description: "Helping children communicate effectively through specialized speech and language interventions.",
      icon: "🗣️",
      benefits: ["Language development", "Articulation improvement", "Communication skills"]
    },
    {
      title: "Pediatric Physiotherapy",
      description: "Physical therapy designed to improve movement, strength, and coordination in children.",
      icon: "🏃",
      benefits: ["Motor skills", "Strength building", "Balance & coordination"]
    },
    {
      title: "Occupational Therapy",
      description: "Supporting children in daily activities and fine motor skill development.",
      icon: "✋",
      benefits: ["Fine motor skills", "Daily living skills", "Sensory processing"]
    },
    {
      title: "Autism & ABA Therapy",
      description: "Specialized support for children with autism spectrum disorders using evidence-based methods.",
      icon: "🧩",
      benefits: ["Behavioral support", "Social skills", "Communication"]
    },
    {
      title: "Sensory Integration",
      description: "Helping children process and respond to sensory information effectively.",
      icon: "👂",
      benefits: ["Sensory processing", "Focus improvement", "Emotional regulation"]
    },
    {
      title: "Developmental Screening",
      description: "Comprehensive assessments to identify developmental needs and create treatment plans.",
      icon: "📋",
      benefits: ["Early detection", "Assessment", "Treatment planning"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
            Our Specialized Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive therapy services designed to support your child&apos;s development and help them reach their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-primary-200 rounded-3xl"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-poppins font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services" areal-label="Learn More">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary-200 text-primary-600 hover:bg-primary-50 rounded-full group-hover:bg-primary-500 group-hover:text-white transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8 py-3">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
