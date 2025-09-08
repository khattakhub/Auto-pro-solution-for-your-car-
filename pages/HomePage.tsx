import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import Card from '../components/Card';
import Image from '../components/Image';
import FadeIn from '../components/FadeIn';

const CheckBadgeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white py-40 px-4" 
        style={{backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')"}}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Trusted Car Care Partner</h1>
          <p className="text-lg md:text-2xl mb-8">Expert service, quality parts, and peace of mind on every drive.</p>
          <Link 
            to="/services" 
            className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-2">Comprehensive Automotive Services</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">From routine maintenance to complex repairs, our certified technicians have you covered.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <FadeIn key={service.title} style={{ transitionDelay: `${index * 100}ms` }}>
                <Card>
                  <div className="p-8 text-center">
                    <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                      <service.icon className="w-12 h-12 mx-auto text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
           <FadeIn>
            <Link to="/services" className="mt-12 inline-block bg-secondary hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              View All Services
            </Link>
           </FadeIn>
        </div>
      </section>

       {/* Tools Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-2">Free Automotive Tools</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Plan your expenses and understand your vehicle better with our handy calculators.</p>
          </FadeIn>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn style={{ transitionDelay: '0ms' }}>
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-2">Fuel Cost Calculator</h3>
                <p className="text-gray-600">Estimate the fuel cost for your next road trip.</p>
              </Card>
            </FadeIn>
            <FadeIn style={{ transitionDelay: '100ms' }}>
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-2">Loan/EMI Calculator</h3>
                <p className="text-gray-600">Calculate your monthly payments for a new car loan.</p>
              </Card>
            </FadeIn>
            <FadeIn style={{ transitionDelay: '200ms' }}>
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-2">Tire Size Converter</h3>
                <p className="text-gray-600">Compare tire sizes to see how they affect your vehicle.</p>
              </Card>
            </FadeIn>
          </div>
          <FadeIn>
            <Link to="/tools" className="mt-12 inline-block bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Use Our Tools
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose AutoPro?</h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start"><CheckBadgeIcon className="w-7 h-7 text-primary mr-3 flex-shrink-0 mt-1" /><span><strong>Certified Technicians:</strong> Our team is highly trained and experienced.</span></li>
                <li className="flex items-start"><CheckBadgeIcon className="w-7 h-7 text-primary mr-3 flex-shrink-0 mt-1" /><span><strong>Quality Parts:</strong> We use only the best parts to ensure longevity and performance.</span></li>
                <li className="flex items-start"><CheckBadgeIcon className="w-7 h-7 text-primary mr-3 flex-shrink-0 mt-1" /><span><strong>Transparent Pricing:</strong> No hidden fees. We provide clear estimates before any work begins.</span></li>
                <li className="flex items-start"><CheckBadgeIcon className="w-7 h-7 text-primary mr-3 flex-shrink-0 mt-1" /><span><strong>Customer Satisfaction:</strong> Your safety and satisfaction are our top priorities.</span></li>
              </ul>
            </div>
            <div>
              <Image src="https://picsum.photos/seed/mechanic/800/600" alt="Mechanic working on a car" className="rounded-lg shadow-xl"/>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default HomePage;