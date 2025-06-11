import { Card, CardContent} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Heart, Users, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      qualification: "PhD in Speech-Language Pathology",
      specialty: "Speech Therapy & Communication Disorders",
      experience: "8 Years",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=400",
      quote: "Every child has a unique voice waiting to be heard. My goal is to help them find it."
    },
    {
      name: "Dr. Priya Sharma",
      qualification: "Masters in paediatric Physiotherapy",
      specialty: "paediatric Physical Therapy",
      experience: "6 Years",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=400",
      quote: "Movement is medicine. I help children discover the joy of physical activity and independence."
    },
    {
      name: "Ms. Anjali Patel",
      qualification: "Masters in Occupational Therapy",
      specialty: "Occupational Therapy & Sensory Integration",
      experience: "7 Years",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=400",
      quote: "I believe in empowering children to achieve independence in their daily activities."
    },
    {
      name: "Dr. Rajesh Kumar",
      qualification: "BCBA, Masters in Applied Behavior Analysis",
      specialty: "Autism & ABA Therapy",
      experience: "5 Years",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=400",
      quote: "Every small step forward is a victory worth celebrating with our children and families."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families", icon: Heart },
    { number: "10+", label: "Expert Therapists", icon: Users },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "95%", label: "Success Rate", icon: Star }
  ];

  return (
    <>
    <Head>
        <title>About Us - paediatric Therapy Centre</title>
        <meta name="description" content="Learn about our expert team and mission at paediatric Therapy Centre." />
        <meta property="og:title" content="About Us - paediatric Therapy Centre" />
        <meta property="og:description" content="Meet our team of certified therapists dedicated to empowering children." />
        {/* Add more meta tags as needed */}
      </Head>
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            About paediatric Therapy Centre
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated to empowering children through comprehensive therapy services in Juhapura and Navrangpura, Ahmedabad.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-poppins font-bold text-gray-800">
                Our Mission &amp; Philosophy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At paediatric Therapy Centre, we believe every child deserves the opportunity to reach their full potential. 
                Our mission is to provide comprehensive, evidence-based therapy services that support children&apos;s development 
                and help them achieve independence in their daily lives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We take a family-centered approach, working closely with parents and caregivers to ensure that therapy 
                goals align with each family&apos;s values and priorities. Our team is committed to creating a supportive, 
                nurturing environment where children feel safe to explore, learn, and grow.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Individualized Care</h4>
                    <p className="text-gray-600">Personalized treatment plans tailored to each child&apos;s unique needs and goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Evidence-Based Practice</h4>
                    <p className="text-gray-600">Utilizing the latest research and proven therapeutic techniques.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Family-Centered Approach</h4>
                    <p className="text-gray-600">Involving families in every step of the therapeutic process.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-50 rounded-3xl p-8">
                <Image 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600"
                  alt="Child therapy session at paediatric Therapy Centre"
                  width={600}
                  height={320}
                  className="rounded-2xl object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 border-gray-100 rounded-3xl p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">{stat.number}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
{/* Founder Section */}
<section className="mb-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
      Our Founders
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      The visionaries behind paediatric Therapy Centre who are committed to transforming children&#39;s lives.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    {/* Founder 1 */}
    <Card className="border-2 border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-8">
        <div className="flex flex-col items-center space-y-6">
          <Image 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
            alt="Dr. Aisha Khan - Founder"
            width={160}
            height={160}
            className="rounded-full object-cover border-4 border-primary-100"
          />
          <div className="text-center">
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-2">
              Dr. Nilofar Shaikh
            </h3>
            <p className="text-primary-600 font-medium mb-1">MD, Paediatric Neurologist</p>
            <p className="text-gray-600 mb-4">With over 15 years of experience in paediatric care</p>
            <p className="text-gray-600 leading-relaxed">
              &quot;Our vision was to create a center where children receive comprehensive care under one roof, with a team that works collaboratively to address all aspects of their development.&quot;
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Founder 2 */}
    <Card className="border-2 border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-8">
        <div className="flex flex-col items-center space-y-6">
          <Image 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
            alt="Dr. Ramesh Patel - Founder"
            width={160}
            height={160}
            className="rounded-full object-cover border-4 border-primary-100"
          />
          <div className="text-center">
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-2">
              Dr. Aadil Shaikh
            </h3>
            <p className="text-primary-600 font-medium mb-1">PhD, Rehabilitation Specialist</p>
            <p className="text-gray-600 mb-4">Pioneer in multidisciplinary therapy approaches</p>
            <p className="text-gray-600 leading-relaxed">
              &quot;We wanted to build more than just a clinic - a community where families find support, resources, and hope for their children&#39;s brighter future.&quot;
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>

  <div className="mt-12 bg-primary-50 rounded-3xl p-8 max-w-4xl mx-auto">
    <div className="text-center">
      <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">
        Our Founding Story
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        Founded in 2018 by Dr. Nilofar Shaikh and Dr. Aadil Saikh, Arsh Paediatric Rehabilitaion & Speech Therapy Centre began with a simple mission: to provide high-quality, accessible therapy services to children in Ahmedabad.
      </p>
      <p className="text-gray-600 leading-relaxed">
        What started as a small clinic with two therapists has now grown into a leading center with multiple locations, serving hundreds of families each year while maintaining the personal touch and commitment to excellence that defined our beginnings.
      </p>
    </div>
  </div>
</section>
        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of certified therapists brings years of experience and passion for helping children succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-2 border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <Image 
                        src={member.image}
                        alt={`${member.name} - ${member.specialty}`}
                        width={96}
                        height={96}
                        className="rounded-full object-cover border-4 border-primary-100"
                      />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-poppins font-bold text-gray-800 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 font-medium mb-1">{member.qualification}</p>
                      <p className="text-gray-600 mb-2">{member.specialty}</p>
                      <div className="inline-block bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm mb-4">
                        {member.experience} Experience
                      </div>
                      <blockquote className="text-gray-600 italic text-sm leading-relaxed">
                        &quot;{member.quote}&quot;
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Personalized Treatment Section */}
        <section className="mb-16 bg-accent-100 rounded-3xl p-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-gray-800">
              Personalized Treatment Plans
            </h2>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              We understand that every child is unique. That&apos;s why we create individualized treatment plans that address each child&apos;s specific needs and strengths.
            </p>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Our therapists use a variety of evidence-based methods, including play therapy, sensory integration, behavioral techniques, and family coaching to ensure holistic development and positive outcomes.
            </p>
            <Button asChild>
              <Link href="/contact" aria-label="Contact paediatric Therapy Centre">
                Get In Touch <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </div>
    </>
  );
};

export default About;
