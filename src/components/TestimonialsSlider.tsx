"use client";
import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Juhapura, Ahmedabad",
      rating: 5,
      text: "The speech therapy sessions have been life-changing for my 5-year-old son. The therapists are so patient and caring. We've seen remarkable improvement in just 3 months.",
      therapy: "Speech Therapy"
    },
    {
      name: "Rajesh Patel",
      location: "Navrangpura, Ahmedabad",
      rating: 5,
      text: "Excellent physiotherapy services for children. My daughter's motor skills have improved significantly. The staff is professional and the environment is child-friendly.",
      therapy: "Pediatric Physiotherapy"
    },
    {
      name: "Neha Joshi",
      location: "Ahmedabad",
      rating: 5,
      text: "The autism support program has been incredible. The team understands our child's needs and provides personalized care. Highly recommend this center to all parents.",
      therapy: "Autism & ABA Therapy"
    },
    {
      name: "Amit Kumar",
      location: "Juhapura, Ahmedabad",
      rating: 5,
      text: "Professional occupational therapy services. The therapists are skilled and create engaging activities for children. Our son looks forward to every session.",
      therapy: "Occupational Therapy"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
            What Parents Say About Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read testimonials from families who have experienced positive outcomes with our therapy services.
          </p>
        </div>

        <div className="relative">
          {/* Testimonials Container */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="max-w-4xl mx-auto border-none shadow-lg">
                    <CardContent className="p-8 md:p-12 text-center">
                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-secondary-500 fill-current" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic leading-relaxed">
                        &ldquo;{testimonial.text}&rdquo;
                      </blockquote>
                      
                      {/* Author Info */}
                      <div>
                        <h4 className="font-poppins font-semibold text-gray-800 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">{testimonial.location}</p>
                        <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm mt-2">
                          {testimonial.therapy}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow-lg hover:shadow-xl z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow-lg hover:shadow-xl z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
