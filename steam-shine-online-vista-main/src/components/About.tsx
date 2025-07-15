
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Heart, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "500+", label: "Happy Customers" },
    { number: "1000+", label: "Cars Detailed" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We strive for perfection in every detail, ensuring your vehicle receives the highest quality care."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We build lasting relationships through exceptional service."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Passion",
      description: "We love what we do, and it shows in the care and attention we give to every vehicle."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We embrace cutting-edge technology like steam cleaning to deliver superior results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">VAP'D DASHSTEAM</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a passion for automotive excellence, we've revolutionized mobile car care 
            by combining traditional detailing expertise with innovative steam technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="Professional car detailing in action"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <Badge className="bg-primary text-white text-sm font-semibold">
                5⭐ Rated
              </Badge>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Transforming Car Care, One Vehicle at a Time
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              At VAP'D DASHSTEAM, we believe your vehicle deserves more than just a basic wash. 
              Our team of certified professionals brings years of experience and state-of-the-art 
              equipment directly to your location, ensuring convenience without compromising quality.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              What sets us apart is our commitment to environmental responsibility through steam 
              technology, which uses 90% less water while achieving superior cleaning results. 
              We're not just cleaning cars; we're setting new standards for the industry.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Our Expertise Includes:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Certified Detailing Professionals",
                  "Advanced Steam Technology",
                  "Eco-Friendly Solutions",
                  "Paint Correction Specialists",
                  "Interior Restoration Experts",
                  "Mobile Service Excellence"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values Drive Everything We Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-scale border-0 shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            "To revolutionize the car care industry by delivering exceptional mobile detailing services 
            that combine convenience, quality, and environmental responsibility, ensuring every customer 
            experiences the pride of driving a perfectly maintained vehicle."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
