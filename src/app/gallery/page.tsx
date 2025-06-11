"use client";
import { useState } from 'react';
import Image from 'next/image'; // ✅ Import Next.js Image
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/demo/image/upload/w_800,q_auto,f_auto/sample.jpg",
      alt: "Speech therapy session with child at paediatric Therapy Centre Ahmedabad",
      category: "Speech Therapy",
      description: "Individual speech therapy session focused on language development"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/demo/image/upload/w_800,q_auto,f_auto/sample.jpg",
      alt: "paediatric physiotherapy equipment and therapy room in Juhapura",
      category: "Physiotherapy",
      description: "Modern physiotherapy equipment designed for children"
    },
    // ... remaining images
  ];

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a look inside our therapy centers in Juhapura and Navrangpura. 
            See our modern facilities, equipment, and the welcoming environment we&apos;ve created for children and families.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 ${
                activeCategory === category
                  ? "bg-primary-500 hover:bg-primary-600 text-white"
                  : "border-primary-200 text-primary-600 hover:bg-primary-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card 
              key={image.id} 
              className="group cursor-pointer border-2 border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(image.src)}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-square relative w-full h-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={false}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                    <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Click to view</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-primary-600">{image.category}</span>
                </div>

                {/* Description */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full w-full h-[80vh]">
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                className="object-contain rounded-2xl"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority={true}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-white rounded-full"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 bg-primary-50 rounded-3xl p-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">
            Visit Our Centers
          </h2>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Experience our welcoming environment in person. Schedule a tour of our facilities 
            and see how we can help your child thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8 py-3 text-lg">
              Schedule a Tour
            </Button>
            <Button variant="outline" className="border-primary-200 text-primary-600 hover:bg-primary-50 rounded-full px-8 py-3 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
