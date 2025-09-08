import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import Image from '../components/Image';
import FadeIn from '../components/FadeIn';

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
  }, [service, navigate]);

  if (!service) {
    return null; // or a loading spinner
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center text-white" style={{ backgroundImage: `url(${service.imageUrl})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto h-full flex items-center justify-center text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold">{service.title}</h1>
          </FadeIn>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="prose lg:prose-xl max-w-none text-gray-700">
              <p className="lead text-xl mb-8">{service.description}</p>
              <p>{service.details}</p>
            </div>
            <div className="mt-12 text-center">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="bg-primary hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-lg text-xl transition duration-300 transform hover:scale-105"
              >
                Book This Service Now
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;