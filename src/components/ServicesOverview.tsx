"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/service';

// Animation variants moved outside component to prevent recreation on re-renders
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
};

const ServicesOverview = () => {
  // Only show first 6 services without mutating original array
  const displayedServices = servicesData.slice(0, 6);

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
            Our Specialized Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive therapy services designed to support your child&apos;s development and help them reach their full potential.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayedServices.map((service, index) => (
            <motion.div 
              key={service.title} // Better to use a unique ID if available
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-primary-200 rounded-3xl h-full flex flex-col">
                <CardHeader className="text-center pb-4 flex-grow">
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-poppins font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full" aria-hidden="true" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" passHref>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary-200 text-primary-600 hover:bg-primary-50 rounded-full group-hover:bg-primary-500 group-hover:text-white transition-all duration-300"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/services" passHref>
            <Button 
              className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8 py-3"
              aria-label="View all services"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;