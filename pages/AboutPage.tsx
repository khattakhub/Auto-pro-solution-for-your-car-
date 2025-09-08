import React from 'react';
import Image from '../components/Image';
import FadeIn from '../components/FadeIn';

const teamMembers = [
  { name: 'John Doe', role: 'Founder & Master Technician', seed: 'person1' },
  { name: 'Jane Smith', role: 'Service Manager', seed: 'person2' },
  { name: 'Mike Johnson', role: 'Lead Mechanic', seed: 'person3' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-dark sm:text-5xl">About AutoPro Solutions</h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Driven by Passion, Defined by Quality.
            </p>
          </div>

          <div className="space-y-12 text-gray-700 leading-relaxed">
            <FadeIn className="grid md:grid-cols-2 gap-12 items-center">
                <Image src="https://picsum.photos/seed/garage/800/600" alt="Our workshop" className="rounded-lg shadow-xl"/>
                <div>
                    <h2 className="text-2xl font-bold text-dark mb-4">Our Mission</h2>
                    <p>At AutoPro Solutions, our mission is simple: to provide reliable, high-quality automotive services with transparency and integrity. We strive to build lasting relationships with our clients by ensuring their vehicles are safe and performing at their best, giving them peace of mind on the road.</p>
                </div>
            </FadeIn>

            <FadeIn className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="md:order-2">
                    <Image src="https://picsum.photos/seed/team/800/600" alt="Our team" className="rounded-lg shadow-xl"/>
                </div>
                <div className="md:order-1">
                    <h2 className="text-2xl font-bold text-dark mb-4">Our Story</h2>
                    <p>Founded in 2010 by a group of passionate mechanics, AutoPro Solutions started as a small, local garage with a big dream. We wanted to create an auto shop where customers felt respected, understood, and confident in the work being done. Over the years, we've grown into a state-of-the-art facility, but our core values of honesty, craftsmanship, and customer service remain unchanged.</p>
                </div>
            </FadeIn>

            <div>
              <FadeIn>
                <h2 className="text-2xl font-bold text-dark mb-6 text-center">Meet Our Team</h2>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                   <FadeIn key={member.name} style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="text-center">
                      <Image src={`https://picsum.photos/seed/${member.seed}/400/400`} alt={`Team member ${member.name}`} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"/>
                      <h3 className="text-lg font-semibold text-dark">{member.name}</h3>
                      <p className="text-primary">{member.role}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
