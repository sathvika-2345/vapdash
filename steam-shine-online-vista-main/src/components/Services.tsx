
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, Droplets, Shield, Sparkles, Clock, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="h-12 w-12 text-primary" />,
      title: "Premium Mobile Detailing",
      description: "Complete interior and exterior detailing service that comes to your location. Our comprehensive packages ensure your vehicle looks showroom-ready.",
      features: ["Exterior wash & wax", "Interior deep cleaning", "Tire & rim detailing", "Paint protection"],
      price: "Starting at $89"
    },
    {
      icon: <Droplets className="h-12 w-12 text-primary" />,
      title: "Eco-Friendly Steam Wash",
      description: "Revolutionary steam technology that cleans deeper while using 90% less water than traditional methods. Perfect for eco-conscious customers.",
      features: ["Chemical-free cleaning", "Water conservation", "Superior sanitization", "Paint-safe technology"],
      price: "Starting at $65"
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Paint Protection Services",
      description: "Advanced ceramic coatings and paint protection films to preserve your vehicle's finish and maintain its value for years to come.",
      features: ["Ceramic coating application", "Paint correction", "Scratch removal", "UV protection"],
      price: "Starting at $299"
    },
    {
      icon: <Sparkles className="h-12 w-12 text-primary" />,
      title: "Interior Restoration",
      description: "Deep cleaning and restoration of leather, fabric, and plastic surfaces. Bringing tired interiors back to life with professional care.",
      features: ["Leather conditioning", "Fabric protection", "Odor elimination", "Stain removal"],
      price: "Starting at $149"
    }
  ];

  const advantages = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Mobile Convenience",
      description: "We come to you - home, office, or anywhere convenient"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Flexible Scheduling",
      description: "Available 7 days a week with same-day service options"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "100% Guarantee",
      description: "Satisfaction guaranteed or we'll return to make it right"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our professional mobile car detailing and steam wash services. 
            We bring showroom-quality results directly to your doorstep.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover-scale group border-0 shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <div className="text-2xl font-bold text-primary">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose VAP'D DASHSTEAM?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {advantage.title}
                </h4>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust VAP'D DASHSTEAM for their vehicle care needs. 
            Book your appointment today and see why we're the top-rated mobile detailing service.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 px-8"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Your Service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
