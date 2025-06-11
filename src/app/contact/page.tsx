"use client";
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Head from 'next/head';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    {
      name: "Juhapura Center",
      address: "Near Juhapura Cross Roads, Ahmedabad - 380055",
      phone: "+91-9876543210",
      email: "juhapura@paediatrictherapy.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14688.086883635943!2d72.5714!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzQnMTcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
      name: "Navrangpura Center", 
      address: "Near Gujarat University, Navrangpura, Ahmedabad - 380009",
      phone: "+91-9876543211",
      email: "navrangpura@paediatrictherapy.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14688.086883635943!2d72.5610!3d23.0395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzIyLjIiTiA3MsKwMzMnMzkuNiJF!5e0!3m2!1sen!2sin!4v1234567891"
    }
  ];

  return (
    <>
    <Head>
      <title>Contact Us - paediatric Therapy Centre</title>
      <meta name="description" content="Contact paediatric Therapy Centre for expert paediatric therapy services in Ahmedabad. Schedule a consultation today." />
      <meta property="og:title" content="Contact Us - paediatric Therapy Centre" />
      <meta property="og:description" content="Get in touch with our team to schedule paediatric therapy consultations and learn more about our services." />
    </Head>
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to take the first step? Get in touch with our team to schedule a consultation 
            or learn more about our paediatric therapy services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="border-2 border-gray-100 rounded-3xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-gray-800">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="rounded-full"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="rounded-full"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="rounded-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a service</option>
                    <option value="speech-therapy">Speech Therapy</option>
                    <option value="physiotherapy">paediatric Physiotherapy</option>
                    <option value="occupational-therapy">Occupational Therapy</option>
                    <option value="autism-aba">Autism & ABA Therapy</option>
                    <option value="sensory-integration">Sensory Integration</option>
                    <option value="developmental-screening">Developmental Screening</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="rounded-2xl"
                    placeholder="Tell us about your child's needs or any questions you have..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white rounded-full py-3 text-lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 border-gray-100 rounded-3xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-gray-800">Get in Touch</CardTitle>
                <CardDescription>
                  Contact us directly through any of these methods.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Call Us</h4>
                    <p className="text-gray-600">+91-9876543210</p>
                    <p className="text-gray-600">+91-9876543211</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                    <p className="text-gray-600">+91-9876543210</p>
                    <p className="text-sm text-primary-600">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Us</h4>
                    <p className="text-gray-600">info@paediatrictherapy.com</p>
                    <p className="text-sm text-primary-600">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Operating Hours</h4>
                    <p className="text-gray-600">Monday - Saturday</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-red-600">Closed on Sundays</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-3 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us Now
              </Button>
              <Button variant="outline" className="w-full border-primary-200 text-primary-600 hover:bg-primary-50 rounded-full py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91-9876543210
              </Button>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Our Locations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at either of our convenient locations in Ahmedabad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="border-2 border-gray-100 rounded-3xl shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-xl font-poppins text-gray-800">
                    <MapPin className="w-6 h-6 text-primary-500" />
                    <span>{location.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Map */}
                  <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${location.name}`}
                    ></iframe>
                  </div>

                  {/* Location Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                        <p className="text-primary-600">{location.phone}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                        <p className="text-primary-600">{location.email}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                      <p className="text-gray-600">{location.hours}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white rounded-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call This Location
                      </Button>
                      <Button variant="outline" className="flex-1 border-primary-200 text-primary-600 hover:bg-primary-50 rounded-full">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
