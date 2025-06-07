"use client";
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Award, Star, Cloud, Gift, Candy, Apple, HandHeart, CalendarCheck, Contact, PhoneCall, BadgeInfo } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const floatingIcons = [
  { icon: Apple, size: 22, color: "text-pink-300" },
  { icon: Award, size: 22, color: "text-pink-300" },
  { icon: Heart, size: 24, color: "text-red-300" },
  { icon: Star, size: 24, color: "text-yellow-400" },
  { icon: Cloud, size: 28, color: "text-blue-200" },
  { icon: Gift, size: 26, color: "text-pink-300" },
  { icon: Candy, size: 22, color: "text-green-300" },
  { icon: Star, size: 20, color: "text-purple-300" },
  { icon: Heart, size: 24, color: "text-red-300" },
];

const HeroSection = () => {
  const [clickAnimations, setClickAnimations] = useState<Array<{x: number, y: number, id: number}>>([]);
  const [nextId, setNextId] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: 1200,
    height: 800
  });

  useEffect(() => {
    // Only access window on client side
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Set initial size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    {
      src: "https://res.cloudinary.com/dicvxuysv/image/upload/v1749281270/WhatsApp_Image_2025-06-03_at_11.03.18_hlb0lp.jpg",
      alt: "Kids enjoying therapy session",
      className: "z-10 hover:z-20"
    },
    {
      src: "https://res.cloudinary.com/dicvxuysv/image/upload/v1749281479/WhatsApp_Image_2025-06-03_at_11.03.20_hqtuts.jpg",
      alt: "Child with therapist",
      className: "z-0 hover:z-20"
    },
    {
      src: "https://res.cloudinary.com/dicvxuysv/image/upload/v1749292834/WhatsApp_Image_2025-06-03_at_11.03.21_hbrera.jpg",
      alt: "Group therapy session",
      className: "z-10 hover:z-20"
    },
    {
      src: "https://res.cloudinary.com/dicvxuysv/image/upload/v1749292834/WhatsApp_Image_2025-06-03_at_11.03.18_1_ebjzkm.jpg",
      alt: "One-on-one therapy",
      className: "z-0 hover:z-20"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const imageVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      zIndex: 20,
      transition: { duration: 0.3 }
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    const { clientX: x, clientY: y } = e;
    const newId = nextId + 1;
    
    setClickAnimations(prev => [
      ...prev,
      { x, y, id: newId }
    ]);
    setNextId(newId);
    
    setTimeout(() => {
      setClickAnimations(prev => prev.filter(anim => anim.id !== newId));
    }, 1000);
  };

  return (
    <section 
      className="relative bg-gradient-to-br from-[#FFF0F5] via-[#F0F8FF] to-[#FFEFD5] py-20 lg:py-32 overflow-hidden"
      onClick={handleBackgroundClick}
    >
      {/* Floating Icons */}
      {floatingIcons.map((IconData, index) => {
        const Icon = IconData.icon;
        return (
          <motion.div
            key={index}
            className={`absolute ${IconData.color} pointer-events-none`}
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0.7
            }}
            animate={{
              x: [null, Math.random() * windowSize.width * 0.8],
              y: [null, Math.random() * windowSize.height * 0.8],
              rotate: [0, Math.random() * 360]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              fontSize: `${IconData.size}px`
            }}
          >
            <Icon size={IconData.size} />
          </motion.div>
        );
      })}

      {/* Click Animations */}
      {clickAnimations.map((anim) => (
        <motion.div
          key={anim.id}
          className="absolute pointer-events-none"
          initial={{ 
            scale: 0,
            opacity: 1,
            x: anim.x,
            y: anim.y
          }}
          animate={{ 
            scale: 3,
            opacity: 0
          }}
          transition={{ 
            duration: 1,
            ease: "easeOut"
          }}
        >
          <Star className="text-yellow-400 w-8 h-8" />
        </motion.div>
      ))}

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full blur-3xl -translate-y-32 translate-x-32 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-200 rounded-full blur-2xl translate-y-24 -translate-x-24 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins text-[#333] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Best{" "}
                <motion.span 
                  className="text-pink-500 relative inline-block"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 15px rgba(236, 72, 153, 0.7)",
                    transition: { 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                >
                  Therapy
                </motion.span>{" "}
                for Your{" "}
                <motion.span 
                  className="text-yellow-500 relative inline-block"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 15px rgba(234, 179, 8, 0.7)",
                    transition: { 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                >
                  Little Stars{" "}
                  <motion.div
                    className="inline-flex items-center justify-center ml-2"
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 20, -20, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.5,
                      rotate: 360,
                      transition: { 
                        duration: 0.8,
                        type: "spring",
                        bounce: 0.5
                      }
                    }}
                  >
                    <motion.div
                      className="text-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      🧸
                    </motion.div>
                    <motion.div
                      className="absolute -inset-2 rounded-full bg-pink-200 opacity-0"
                      whileHover={{
                        opacity: 0.3,
                        scale: 1.5,
                        transition: { duration: 0.3 }
                      }}
                    />
                  </motion.div>
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-700 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                At{" "}
                <motion.strong 
                  className="relative bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
                  whileHover={{
                    scale: 1.05,
                    transition: { 
                      duration: 0.3,
                      type: "spring"
                    }
                  }}
                >
                  Arsh Paediatric Rehab Center
                </motion.strong>
                , we combine fun and healing in one place.
              </motion.p>
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
              <Link href="/contact" passHref aria-label="Schedule a consultation">
  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 text-lg rounded-full shadow-xl hover:scale-105 transition-all duration-300 flex items-center">
    
    Get Started
    <ArrowRight className="ml-2 w-5 h-5" />
  </Button>
</Link>
              <Link href="/services" passHref aria-label='View our services' title='View our services' aria-description='View our services'>
  <Button
    variant="outline"
    className="border-2 border-pink-300 text-pink-600 hover:bg-pink-100 rounded-full px-8 py-3 text-lg flex items-center gap-2"
  >
    <HandHeart className="w-5 h-5" />
    View Services
  </Button>
</Link>
            </div>
          </div>

          {/* Image Gallery */}
          <motion.div 
            className="relative h-[500px] w-full"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {images.map((image, index) => (
              <motion.div
                key={image.alt}
                custom={index}
                variants={imageVariants}
                whileHover="hover"
                className={`absolute rounded-3xl overflow-hidden shadow-xl ${image.className}`}
                style={{
                  width: index % 2 === 0 ? '65%' : '50%',
                  left: index % 2 === 0 ? '0%' : '50%',
                  top: index % 2 === 0 ? `${index * 25}%` : `${index * 25 - 15}%`,
                  transform: index % 2 === 0 ? 'rotate(-6deg)' : 'rotate(6deg)',
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" />
              </motion.div>
            ))}

            {/* Floating elements */}
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-green-100 rounded-xl px-4 py-2 shadow-lg flex items-center gap-2 z-30"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Online Sessions Available</span>
            </motion.div>

            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 bg-violet-300 rounded-full opacity-40 blur-md z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;