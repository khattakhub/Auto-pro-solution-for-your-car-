import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import Card from '../components/Card';
import FadeIn from '../components/FadeIn';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-light py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-dark sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of expert services to keep your vehicle in peak condition.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} style={{ transitionDelay: `${index * 100}ms` }}>
              <Card className="flex flex-col h-full">
                <div className="p-8 flex-grow flex flex-col text-center">
                  <div className="flex-grow">
                     <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
                        <service.icon className="w-10 h-10 text-primary" />
                      </div>
                    <h3 className="text-2xl font-bold text-dark">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-block text-center bg-secondary hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;