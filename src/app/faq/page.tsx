
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FAQ = () => {
  const faqs = [
    {
      id: "autism-treatment",
      question: "Do you treat children with autism?",
      answer: "Yes, we specialize in autism therapy and provide comprehensive Applied Behavior Analysis (ABA) therapy. Our certified therapists work with children across the autism spectrum to improve communication, social skills, and behavioral patterns. We create individualized treatment plans based on each child's unique needs and strengths."
    },
    {
      id: "speech-therapy",
      question: "Do you offer speech therapy services?",
      answer: "Absolutely! Speech therapy is one of our core services. We help children with various communication challenges including language delays, articulation difficulties, fluency issues, and social communication skills. Our speech-language pathologists use evidence-based techniques tailored to each child's specific needs."
    },
    {
      id: "parent-attendance",
      question: "Can parents attend therapy sessions?",
      answer: "Yes, we encourage parent involvement in therapy sessions. Family-centered care is a cornerstone of our approach. Parents can observe sessions, learn techniques to practice at home, and work collaboratively with our therapists to ensure consistent progress across all environments."
    },
    {
      id: "free-consultation",
      question: "Is the first consultation free?",
      answer: "Yes, we offer a complimentary initial consultation for all new families. This 30-minute session allows you to meet our team, discuss your child's needs, tour our facilities, and learn about our services. It's a great opportunity to see if we're the right fit for your family."
    },
    {
      id: "age-range",
      question: "What age range do you serve?",
      answer: "We provide therapy services for children from infancy through adolescence (0-18 years). Our programs are specifically designed for paediatric populations, with age-appropriate activities and techniques for each developmental stage."
    },
    {
      id: "insurance-coverage",
      question: "Do you accept insurance?",
      answer: "We work with various insurance providers and can help you understand your coverage options. Our team will assist you in verifying benefits and filing claims. We also offer flexible payment plans for families who need financial assistance."
    },
    {
      id: "session-frequency",
      question: "How often will my child need therapy sessions?",
      answer: "Session frequency varies based on your child's individual needs and goals. Typically, children attend 1-3 sessions per week, with each session lasting 30-60 minutes. Our therapists will work with you to create a schedule that fits your family's needs and maximizes progress."
    },
    {
      id: "progress-timeline",
      question: "How long before we see progress?",
      answer: "Every child progresses at their own pace. Some families notice improvements within a few weeks, while others may take several months to see significant changes. We conduct regular assessments and provide progress reports to track your child's development and adjust treatment plans as needed."
    },
    {
      id: "home-exercises",
      question: "Will you provide exercises to do at home?",
      answer: "Yes! Home practice is essential for maximizing therapy outcomes. We provide families with specific activities, exercises, and strategies to practice between sessions. Our therapists will teach you how to incorporate therapeutic activities into your daily routines."
    },
    {
      id: "locations",
      question: "Do you have multiple locations?",
      answer: "Yes, we have two convenient locations in Ahmedabad - one in Juhapura and another in Navrangpura. Both centers offer the same high-quality services and are equipped with modern therapy equipment and child-friendly environments."
    },
    {
      id: "appointment-scheduling",
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by calling either of our locations, sending us a message through our website contact form, or contacting us via WhatsApp. We'll work with you to find a convenient time that fits your schedule."
    },
    {
      id: "qualifications",
      question: "What are the qualifications of your therapists?",
      answer: "All our therapists are licensed professionals with specialized training in paediatric therapy. They hold relevant degrees (Masters/PhD) in their respective fields and maintain current certifications. Our team regularly participates in continuing education to stay updated with the latest evidence-based practices."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our paediatric therapy services, 
            processes, and what to expect when working with our team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="border-2 border-gray-100 rounded-3xl shadow-lg mb-16">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
  <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200 last:border-b-0">
    <AccordionTrigger className="text-left hover:no-underline py-6">
      <span className="text-lg font-semibold text-gray-800 pr-4">
        {faq.question}
      </span>
    </AccordionTrigger>
    <AccordionContent className="pb-6">
      <p className="text-gray-600 leading-relaxed">
        {faq.answer}
      </p>
    </AccordionContent>
  </AccordionItem>
))}

            </Accordion>
          </CardContent>
        </Card>

        {/* Still Have Questions Section */}
        <Card className="border-2 border-primary-200 rounded-3xl shadow-lg bg-primary-50">
          <CardContent className="text-center p-12">
            <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
  Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to help. 
  Contact us directly and we&apos;ll be happy to assist you.
</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8 py-3 text-lg">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-primary-300 text-primary-600 hover:bg-primary-100 rounded-full px-8 py-3 text-lg"
              >
                Call: +91-9876543210
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Link href="/services" aria-label="Learn about all our therapy services">
  <Card className="border-2 border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 h-full">
    <CardContent className="p-6 text-center">
      <div className="text-4xl mb-4" aria-hidden="true">🏥</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Services</h3>
      <p className="text-gray-600 text-sm">Learn about all our therapy services</p>
    </CardContent>
  </Card>
</Link>


          <Link href="/about">
            <Card className="border-2 border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Team</h3>
                <p className="text-gray-600 text-sm">Meet our expert therapists</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/gallery">
            <Card className="border-2 border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Facilities</h3>
                <p className="text-gray-600 text-sm">Take a virtual tour of our centers</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
};

export default FAQ;
