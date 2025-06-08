import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { servicesData } from '@/data/service';

export const metadata = {
  title: 'Our Services',
  description: 'Comprehensive therapy services for your child\'s development',
};

const ServicesOverview = () => {
  const displayedServices = servicesData.slice(0, 6);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-gray-50/10" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-primary-50/80 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-100 backdrop-blur-sm">
            Tailored Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Transformative <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">Therapy Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Evidence-based interventions crafted to nurture your child&#39;s unique developmental journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <div key={service.title} className="group h-full">
              <Card className="h-full flex flex-col border border-gray-200/70 hover:border-primary-300/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-primary-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
                <CardHeader className="text-center pb-4 flex-grow relative z-10 px-8 pt-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl mb-6 mx-auto group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-500 shadow-inner">
                    <div className="text-3xl text-primary-600 group-hover:text-primary-700 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 pb-8 px-8">
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <div className="flex-shrink-0 mt-1.5 mr-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary-300/80 text-primary-600 hover:bg-primary-50 hover:text-primary-700 rounded-xl group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-300 shadow-sm hover:shadow-md group-hover:shadow-primary-200/50"
                    >
                      Discover More
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20">
          <Link href="/services" passHref>
            <Button 
              className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 hover:from-primary-600 hover:via-primary-700 hover:to-primary-600 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-500 bg-[length:200%_auto] hover:bg-right"
              aria-label="View all services"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;