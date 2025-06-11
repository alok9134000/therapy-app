"use client";
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Award, Star, Cloud, Gift, Candy, Apple, HandHeart, Sparkles, Brain, Atom, Rocket, Palette } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Static data to prevent hydration mismatches
const floatingIcons = [
  { icon: Apple, size: 22, color: "text-pink-400" },
  { icon: Award, size: 22, color: "text-amber-400" },
  { icon: Heart, size: 24, color: "text-red-400" },
  { icon: Star, size: 24, color: "text-yellow-400" },
  { icon: Cloud, size: 28, color: "text-blue-300" },
  { icon: Gift, size: 26, color: "text-pink-400" },
  { icon: Candy, size: 22, color: "text-green-400" },
  { icon: Brain, size: 24, color: "text-purple-400" },
  { icon: Atom, size: 28, color: "text-indigo-400" },
  { icon: Rocket, size: 24, color: "text-orange-400" },
  { icon: Palette, size: 22, color: "text-violet-400" },
];

const HeroSection = () => {
  const [clickAnimations, setClickAnimations] = useState<Array<{x: number, y: number, id: number}>>([]);
  const [nextId, setNextId] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [ripples, setRipples] = useState<Array<{x: number, y: number, id: number}>>([]);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Use motion values for interactive parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, windowSize.height], [10, -10]);
  const rotateY = useTransform(x, [0, windowSize.width], [-10, 10]);

  // Modern gradient wave animation
  const waveAnimationData = {
    "v": "5.10.1",
    "fr": 60,
    "ip": 0,
    "op": 60,
    "w": 1200,
    "h": 200,
    "nm": "Gradient Wave",
    "layers": [
      {
        "ty": 4,
        "nm": "Wave",
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "sh",
                "ks": {
                  "a": 1,
                  "k": [
                    {
                      "i": { "x": 0.667, "y": 1 },
                      "o": { "x": 0.333, "y": 0 },
                      "t": 0,
                      "s": [
                        { "i": [[0,0],[0,0],[0,0],[0,0]], "o": [[0,0],[0,0],[0,0],[0,0]], "v": [[-600,0],[600,0],[600,200],[-600,200]] }
                      ],
                      "to": [[0,33,0],[0,33,0],[0,33,0],[0,33,0]],
                      "ti": [[0,-33,0],[0,-33,0],[0,-33,0],[0,-33,0]]
                    },
                    {
                      "i": { "x": 0.667, "y": 1 },
                      "o": { "x": 0.333, "y": 0 },
                      "t": 30,
                      "s": [
                        { "i": [[0,0],[0,0],[0,0],[0,0]], "o": [[0,0],[0,0],[0,0],[0,0]], "v": [[-600,0],[600,0],[600,200],[-600,200]] }
                      ],
                      "to": [[0,33,0],[0,33,0],[0,33,0],[0,33,0]],
                      "ti": [[0,-33,0],[0,-33,0],[0,-33,0],[0,-33,0]]
                    },
                    {
                      "i": { "x": 0.667, "y": 1 },
                      "o": { "x": 0.333, "y": 0 },
                      "t": 60,
                      "s": [
                        { "i": [[0,0],[0,0],[0,0],[0,0]], "o": [[0,0],[0,0],[0,0],[0,0]], "v": [[-600,0],[600,0],[600,200],[-600,200]] }
                      ],
                      "to": [[0,33,0],[0,33,0],[0,33,0],[0,33,0]],
                      "ti": [[0,-33,0],[0,-33,0],[0,-33,0],[0,-33,0]]
                    }
                  ]
                }
              },
              {
                "ty": "fl",
                "c": { "a": 0, "k": [0.2,0.6,0.9,1] },
                "o": { "a": 0, "k": 30 },
                "r": 1
              },
              {
                "ty": "tr",
                "p": { "a": 0, "k": [0,0] },
                "a": { "a": 0, "k": [0,0] },
                "s": { "a": 0, "k": [100,100] }
              }
            ]
          }
        ],
        "ks": {
          "o": { "a": 0, "k": 100 },
          "p": { "a": 0, "k": [600,100,0] },
          "a": { "a": 0, "k": [0,0,0] },
          "s": { "a": 0, "k": [100,100,100] }
        }
      }
    ]
  };

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
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
    if (!isMounted) return;
    
    const { clientX: x, clientY: y } = e;
    const newId = nextId + 1;
    
    setRipples(prev => [...prev, { x, y, id: newId }]);
    setClickAnimations(prev => [...prev, { x, y, id: newId }]);
    setNextId(newId);
    
    setTimeout(() => {
      setClickAnimations(prev => prev.filter(anim => anim.id !== newId));
      setRipples(prev => prev.filter(ripple => ripple.id !== newId));
    }, 2000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
  };

  return (
    <section 
      className="relative overflow-hidden min-h-screen"
      onClick={handleBackgroundClick}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* Light Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9fafb] via-[#f3f4f6] to-[#e5e7eb] overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9ca3af" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Water Ripples with Softer Effect */}
        {ripples.map((ripple) => (
          <motion.div
            key={`ripple-${ripple.id}`}
            className="absolute rounded-full border border-cyan-200 pointer-events-none"
            style={{
              left: ripple.x - 50,
              top: ripple.y - 50,
              width: 100,
              height: 100,
            }}
            initial={{ 
              scale: 0,
              opacity: 0.6
            }}
            animate={{ 
              scale: 15,
              opacity: 0
            }}
            transition={{ 
              duration: 2,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Floating Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-cyan-300 pointer-events-none"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`,
              width: `${0.2 + (i % 3) * 0.1}rem`,
              height: `${0.2 + (i % 3) * 0.1}rem`,
              opacity: 0.4,
            }}
            animate={{
              y: [0, (i % 2 === 0 ? -20 : 20)],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Wavy Surface Animation */}
        {isMounted && (
          <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-20">
            <Lottie
              animationData={waveAnimationData}
              loop={true}
              autoplay={true}
              style={{
                width: '100%',
                height: '100%',
                transform: 'translateY(50%)'
              }}
            />
          </div>
        )}

        {/* Light Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl -translate-y-32 translate-x-32 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-2xl translate-y-24 -translate-x-24 opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-100 to-violet-100 rounded-full blur-[100px] opacity-30 -translate-y-1/2"></div>
      </div>

      {/* Floating Icons with Softer Colors */}
      {isMounted && floatingIcons.map((IconData, index) => {
        const Icon = IconData.icon;
        return (
          <motion.div
            key={`float-${index}`}
            className={`absolute ${IconData.color} pointer-events-none`}
            initial={{
              x: (index * 50) % 100,
              y: (index * 70) % 100,
              opacity: 0.7
            }}
            animate={{
              x: [null, (index * 37) % windowSize.width * 0.8],
              y: [null, (index * 61) % windowSize.height * 0.8],
              rotate: [0, index * 40],
              rotateY: [0, 180, 360],
              rotateX: [0, 180, 360]
            }}
            transition={{
              duration: 20 + (index * 2),
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              left: `${(index * 53) % 80}%`,
              top: `${(index * 71) % 80}%`,
              fontSize: `${IconData.size}px`,
              filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.1))'
            }}
          >
            <Icon size={IconData.size} />
          </motion.div>
        );
      })}

      {/* Click Sparkles with Softer Glow */}
      {clickAnimations.map((anim) => (
        <motion.div
          key={`click-${anim.id}`}
          className="absolute pointer-events-none"
          initial={{ 
            scale: 0,
            opacity: 1,
            x: anim.x,
            y: anim.y
          }}
          animate={{ 
            scale: [0, 3, 0],
            opacity: [1, 0.8, 0],
            rotate: [0, 180]
          }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut"
          }}
          style={{
            filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5))'
          }}
        >
          <Sparkles className="text-amber-300 w-12 h-12" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-32">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16"
          style={{
            rotateX,
            rotateY,
          }}
        >
          {/* Text Content with Dark Text for Contrast */}
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Best
                <motion.span 
                  className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600"
                  whileHover={{
                    scale: 1.05,
                    transition: { 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                >
                  Therapy
                </motion.span>{" "} 
                for  Your
                <motion.span 
                  className="relative inline-block"
                  whileHover={{
                    scale: 1.05,
                    transition: { 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                >
                 
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">Little Star</span>{" "}
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
                  </motion.div>
                </motion.span>
                <br />
                {/* <motion.span className="text-gray-800"></motion.span> */}
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
                  className="relative bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500"
                  whileHover={{
                    scale: 1.05,
                    transition: { 
                      duration: 0.3,
                      type: "spring"
                    }
                  }}
                >
                  Arsh Paediatric Rehabilitation & Speech Center
                </motion.strong>
                , we combine fun and healing in one place.
              </motion.p>
            </div>

            {/* Trust Indicators with Light Background */}
            <div className="flex flex-wrap gap-6 text-base font-medium">
              <motion.div 
                className="flex items-center gap-2 bg-white backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 shadow-sm"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 32px rgba(236, 72, 153, 0.1)",
                  borderColor: "rgba(236, 72, 153, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <Heart className="text-pink-500 w-6 h-6" />
                <span className="text-gray-800">1000+ Happy Families</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-white backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 shadow-sm"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(96, 165, 250, 0.1)",
                  borderColor: "rgba(96, 165, 250, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <Users className="text-blue-500 w-6 h-6" />
                <span className="text-gray-800">Expert Paediatric Team</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-white backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 shadow-sm"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(234, 179, 8, 0.1)",
                  borderColor: "rgba(234, 179, 8, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <Award className="text-amber-500 w-6 h-6" />
                <span className="text-gray-800">13+ Years of Excellence</span>
              </motion.div>
            </div>

            {/* CTA Buttons with Vibrant Colors */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/contact" passHref aria-label="Get started">
                <Button className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300 flex items-center group">
                  <span className="relative z-10 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </Link>
              <Link href="/services" passHref aria-label="View our services">
                <Button
                  variant="outline"
                  className="relative overflow-hidden border-2 border-gray-300 text-gray-800 hover:bg-gray-50 rounded-xl px-8 py-4 text-lg flex items-center gap-2 group"
                >
                  <span className="relative z-10 flex items-center">
                    <HandHeart className="w-5 h-5 text-pink-500" />
                    <span className="ml-2">View Services</span>
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Gallery with 3D Effect */}
          <motion.div 
            className="relative h-[500px] w-full"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              perspective: "1000px"
            }}
          >
            {images.map((image, index) => (
              <motion.div
                key={image.alt}
                custom={index}
                variants={imageVariants}
                whileHover="hover"
                className={`absolute rounded-2xl overflow-hidden shadow-2xl ${image.className}`}
                style={{
                  width: index % 2 === 0 ? '65%' : '50%',
                  left: index % 2 === 0 ? '0%' : '50%',
                  top: index % 2 === 0 ? `${index * 25}%` : `${index * 25 - 15}%`,
                  transform: index % 2 === 0 ? 'rotateY(-5deg) rotateX(-5deg) rotate(-6deg)' : 'rotateY(5deg) rotateX(5deg) rotate(6deg)',
                  transformStyle: 'preserve-3d',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="eager"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            ))}

            {/* Floating Tech Elements */}
            {/* <motion.div 
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-cyan-500 rounded-xl px-4 py-2 shadow-lg flex items-center gap-2 z-30"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(52, 211, 153, 0.3)"
              }}
            >
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">AI-Powered Therapy Tools</span>
            </motion.div> */}

            {/* Floating Tech Orb */}
            <motion.div 
              className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border border-cyan-200 flex items-center justify-center z-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
                rotate: [0, 360]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 backdrop-blur-sm flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scrolling Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{
          y: [0, 15, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-cyan-400/50 flex items-start justify-center p-1">
          <motion.div 
            className="w-2 h-2 bg-cyan-500 rounded-full"
            animate={{
              y: [0, 16],
              opacity: [1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;