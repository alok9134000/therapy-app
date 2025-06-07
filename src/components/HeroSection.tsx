import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#FFF0F5] via-[#F0F8FF] to-[#FFEFD5] py-20 lg:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full blur-3xl -translate-y-32 translate-x-32 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-200 rounded-full blur-2xl translate-y-24 -translate-x-24 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins text-[#333] leading-tight">
                Best <span className="text-pink-500">Therapy</span> Collection<br />
                for Your <span className="text-yellow-500">Little Stars 🌟</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-xl">
                At <strong>Arsh Paediatric Rehab Center</strong>, we bring fun, healing, and hope into one place – where therapy meets imagination.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-base font-medium">
              <div className="flex items-center gap-2">
                <Heart className="text-pink-400 w-6 h-6" />
                <span>500+ Happy Families</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-blue-400 w-6 h-6" />
                <span>Expert Pediatric Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-yellow-500 w-6 h-6" />
                <span>5+ Years of Excellence</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" aria-label="Book a consultation">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 text-lg rounded-full shadow-xl hover:scale-105 transition-all duration-300">
                  🎉 Book Free Consult
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services" aria-label='View our services' title='View our services' aria-description='View our services'>
                <Button
                  variant="outline"
                  className="border-2 border-pink-300 text-pink-600 hover:bg-pink-100 rounded-full px-8 py-3 text-lg"
                >
                  🌈 View Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Area */}
          <div className="relative animate-fade-up">
            <div className="bg-white rounded-3xl p-4 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src="https://res.cloudinary.com/demo/image/upload/w_800,h_400,c_fill,q_60,f_auto/sample.jpg"
                alt="Kids enjoying therapy session"
                width={800}
                height={400}
                className="rounded-2xl object-cover w-full h-96"
                loading="lazy"
              />

              {/* Online Tag */}
              <div className="absolute -bottom-4 -left-4 bg-green-100 rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Online Sessions Available</span>
              </div>

              {/* Floating Blob */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-violet-300 rounded-full opacity-40 blur-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
