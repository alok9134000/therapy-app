"use client";
import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const MotionButton = motion(Button);

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left'|'right'>('right');
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Ahmedabad",
      rating: 5,
      text: "The speech therapy sessions have been life-changing for my son. We've seen remarkable improvement in just 3 months.",
      therapy: "Speech Therapy"
    },
    {
      name: "Rajesh Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "Excellent physiotherapy services. My daughter's motor skills have improved significantly with their help.",
      therapy: "paediatric Physiotherapy"
    },
    {
      name: "Neha Joshi",
      location: "Ahmedabad",
      rating: 5,
      text: "The autism support program has been incredible. Highly recommend this center to all parents.",
      therapy: "Autism Therapy"
    }
  ];

  const nextSlide = useCallback(() => {
    setDirection('right');
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [nextSlide, isHovered]);

  const slideVariants = {
    enter: (direction: string) => ({
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 0.5,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30
      }
    },
    exit: (direction: string) => ({
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 0.5,
      scale: 0.95
    })
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by Parents
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear success stories from families we&#39;ve helped
          </p>
        </motion.div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Testimonials Container */}
          <div className="overflow-hidden h-[400px] md:h-[350px]">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full h-full"
              >
                <Card className="h-full w-full max-w-5xl mx-auto border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8 md:p-10 h-full flex flex-col md:flex-row items-center gap-8">
                    {/* Avatar Placeholder */}
                    <motion.div
                      variants={fadeIn}
                      className="hidden md:flex w-32 h-32 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex-shrink-0 items-center justify-center text-4xl font-bold text-primary-600"
                    >
                      {testimonials[currentSlide].name.charAt(0)}
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Stars */}
                      <motion.div 
                        variants={fadeIn}
                        className="flex justify-center md:justify-start mb-4"
                      >
                        {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-5 h-5 text-yellow-400 fill-current" 
                          />
                        ))}
                      </motion.div>
                      
                      {/* Quote */}
                      <motion.blockquote 
                        variants={fadeIn}
                        className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
                      >
                        <Quote className="inline w-5 h-5 text-primary-400 -ml-1 mr-1" />
                        {testimonials[currentSlide].text}
                      </motion.blockquote>
                      
                      {/* Author Info */}
                      <motion.div
                        variants={fadeIn}
                        className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
                      >
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonials[currentSlide].name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {testimonials[currentSlide].location}
                          </p>
                        </div>
                        <div className="hidden md:block w-px h-6 bg-gray-200"></div>
                        <span className="text-sm bg-primary-50 text-primary-600 px-3 py-1 rounded-full">
                          {testimonials[currentSlide].therapy}
                        </span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            className="hidden md:block"
          >
            <MotionButton
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-white shadow-md hover:shadow-lg z-10 w-10 h-10 hover:bg-gray-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </MotionButton>
            
            <MotionButton
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-white shadow-md hover:shadow-lg z-10 w-10 h-10 hover:bg-gray-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </MotionButton>
          </motion.div>

          {/* Mobile Dots */}
          <div className="md:hidden flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Desktop Progress Bar */}
          <div className="hidden md:block mt-8">
            <div className="h-1 bg-gray-100 rounded-full max-w-2xl mx-auto overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ 
                  width: '100%',
                  transition: { duration: 5, ease: 'linear' } 
                }}
                onAnimationComplete={() => !isHovered && nextSlide()}
                className="h-full bg-gradient-to-r from-primary-400 to-secondary-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;