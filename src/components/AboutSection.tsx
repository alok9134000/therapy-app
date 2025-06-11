"use client";

import { ArrowRight, ChevronRight, HeartPulse, Speech, BrainCircuit, Activity, Stars } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "backOut" }
  }
};

const aboutItems = [
  { icon: <HeartPulse className="w-5 h-5" />, text: 'Specialized paediatric therapists' },
  { icon: <BrainCircuit className="w-5 h-5" />, text: 'Customized rehabilitation programs' },
  { icon: <Speech className="w-5 h-5" />, text: 'Multidisciplinary therapy approaches' },
  { icon: <Activity className="w-5 h-5" />, text: 'Parent-inclusive treatment plans' },
];

export default function AboutSection() {
  return (
    <section 
      aria-labelledby="about-heading" 
      className="py-20 bg-gradient-to-b from-white to-accent-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] bg-repeat bg-center"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.article 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="animate-fade-in"
          >
            <motion.div variants={itemVariants} className="flex items-center mb-4">
              <Stars className="w-6 h-6 text-primary-500 mr-2" />
              <span className="text-sm font-medium text-primary-600 tracking-wider">WHY CHOOSE US</span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              id="about-heading"
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight"
            >
              Empowering Children Through <span className="text-primary-500">Personalized Therapy</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 mb-6 leading-relaxed text-lg">
              At <strong className="text-primary-600">Arsh paediatric Rehabilitation Center</strong>, we are dedicated to supporting your child&apos;s development through
              personalized, evidence-based therapy. Our experienced team provides compassionate
              care tailored to each child&apos;s unique journey.
            </motion.p>
            <motion.ul variants={containerVariants} className="space-y-4 mb-8">
              {aboutItems.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants}
                  className="flex items-start space-x-3 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full text-primary-600 p-1.5 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 text-lg group-hover:text-primary-600 transition-colors">{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" passHref aria-label='Learn more about us'>
                <button className="bg-primary-600 hover:bg-primary-700 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all group">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
                </button>
              </Link>
              <Link href="/contact" passHref>
                <button className="rounded-full px-8 py-6 text-lg border border-primary-600 text-primary-600 hover:bg-primary-50 group">
                  Contact Us
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
                </button>
              </Link>
            </motion.div>
          </motion.article>

          <motion.aside 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
              <div className="absolute inset-0 bg-primary-500/10 z-0"></div>
              <Image
                src="https://res.cloudinary.com/dicvxuysv/image/upload/v1749281479/WhatsApp_Image_2025-06-03_at_11.03.20_hqtuts.jpg"
                alt="Child receiving therapy at Arsh paediatric Rehabilitation Center"
                width={600}
                height={720}
                className="w-full h-auto object-cover scale-100 hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute bottom-0 left-0 p-8 text-white z-20">
                <p className="text-xl font-medium">&quot;Every child deserves the chance to reach their full potential.&quot;</p>
                <p className="mt-2 text-primary-100">— Our Philosophy</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}