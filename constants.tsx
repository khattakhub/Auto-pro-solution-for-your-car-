import React from 'react';
import type { Service, BlogPost, NavLinkItem } from './types';

// Icons
const WrenchScrewdriverIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336-4.5 4.5 0 00-6.336-4.486c-.062.052-.122.107-.177.165m-2.144 2.144a4.5 4.5 0 00-6.336-6.336-4.5 4.5 0 00-6.336 6.336c.052.062.107.122.165.177m4.891 4.891a4.5 4.5 0 006.336 6.336l2.496-3.03c.317-.384.74-.626 1.208-.766" /></svg>
);

const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.017h-.008v-.017z" /></svg>
);

const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.456-2.456L12.5 17.25l1.178-.398a3.375 3.375 0 002.456-2.456L16.5 13.5l.398 1.178a3.375 3.375 0 002.456 2.456l1.178.398-1.178.398a3.375 3.375 0 00-2.456 2.456z" /></svg>
);

const Cog6ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.995a6.19 6.19 0 010 1.257c0 .381.145.754.438.995l1.003.827c.48.398.668 1.04.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.075.124a6.57 6.57 0 01-.22.127c-.331.183-.581.495-.645.87l-.213 1.281c-.09.543-.56.94-1.11.94h-2.593c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.437-.995a6.19 6.19 0 010-1.257c0-.381-.145-.754-.438-.995l-1.004-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.075-.124.072-.044.146-.087.22-.127.332-.183.582-.495.645-.87l.213-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const DropletIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
    </svg>
);

const MagnifyingGlassIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Tools', path: '/tools' },
  { name: 'About Us', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'General Maintenance',
    slug: 'general-maintenance',
    description: 'Routine checks and preventative care to keep your vehicle running smoothly.',
    details: 'Our General Maintenance service includes a comprehensive check of all your vehicle\'s vital systems. We cover everything from fluid level checks and filter replacements to tire rotations and battery tests. Regular maintenance is key to preventing major issues down the road and ensuring your car is safe and reliable. We follow manufacturer-recommended service schedules to keep your warranty intact and your vehicle in peak condition.',
    imageUrl: 'https://picsum.photos/seed/service1/1200/800',
  },
  {
    icon: Cog6ToothIcon,
    title: 'Engine & Transmission Repair',
    slug: 'engine-transmission-repair',
    description: 'Expert diagnostics and repair for your vehicle\'s most complex components.',
    details: 'The engine and transmission are the heart of your vehicle. Our certified technicians are equipped with state-of-the-art diagnostic tools to accurately identify and fix any issue, from minor leaks to complete rebuilds. We handle all makes and models, using only high-quality parts to ensure lasting performance and reliability. Trust us to get your vehicle\'s powertrain running like new.',
    imageUrl: 'https://picsum.photos/seed/service2/1200/800',
  },
  {
    icon: DropletIcon,
    title: 'Oil & Fluid Change',
    slug: 'oil-fluid-change',
    description: 'Essential lubrication and fluid services to maximize engine life and performance.',
    details: 'Regular oil changes are crucial for a healthy engine. We use premium-grade conventional, synthetic-blend, and full synthetic oils to match your vehicle\'s specific needs. Our service also includes replacing the oil filter and a multi-point inspection. We also check and top-up other essential fluids, including coolant, brake fluid, power steering fluid, and windshield washer fluid to ensure all systems function correctly.',
    imageUrl: 'https://picsum.photos/seed/service3/1200/800',
  },
  {
    icon: SparklesIcon,
    title: 'Professional Detailing',
    slug: 'professional-detailing',
    description: 'Restore your car\'s shine with our interior and exterior detailing packages.',
    details: 'Bring back that new car feeling with our Professional Detailing services. Our exterior treatment includes a thorough wash, clay bar treatment, polish, and wax for a brilliant shine and protection against the elements. Inside, we perform a deep clean of all surfaces, including vacuuming, steam cleaning, upholstery shampooing, and leather conditioning. We offer various packages to suit your needs and budget.',
    imageUrl: 'https://picsum.photos/seed/service4/1200/800',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Brake Services',
    slug: 'brake-services',
    description: 'Complete brake system inspection, repair, and replacement for your safety.',
    details: 'Your safety is our top priority, and your brake system is critical to that. Our complete brake service includes a thorough inspection of pads, rotors, calipers, and brake lines. We offer pad and rotor replacement, brake fluid flush and replacement, and ABS diagnostics. Don\'t ignore squeaking or grinding noises—let our experts ensure your brakes are in perfect working order.',
    imageUrl: 'https://picsum.photos/seed/service5/1200/800',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Comprehensive Inspection',
    slug: 'comprehensive-inspection',
    description: 'Thorough multi-point inspections for pre-purchase peace of mind or regular check-ups.',
    details: 'Whether you\'re buying a used car or want a thorough check-up on your current vehicle, our Comprehensive Inspection provides a detailed report on its condition. We examine over 100 points, including the engine, transmission, suspension, brakes, exhaust system, and electrical components. This service gives you the information you need to make an informed decision and identify any potential issues before they become costly problems.',
    imageUrl: 'https://picsum.photos/seed/service6/1200/800',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/seed/car1/800/600',
    category: 'Maintenance',
    title: '10 Essential Car Maintenance Tips for Beginners',
    excerpt: 'Keeping your car in top shape doesn\'t have to be complicated. Here are 10 simple tips every car owner should know...',
    author: 'Jane Doe',
    date: 'Oct 24, 2023',
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/seed/car2/800/600',
    category: 'DIY',
    title: 'How to Safely Change a Flat Tire',
    excerpt: 'A flat tire can happen to anyone. Our step-by-step guide will walk you through the process of changing it safely.',
    author: 'John Smith',
    date: 'Oct 22, 2023',
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/seed/car3/800/600',
    category: 'Fuel Economy',
    title: 'Maximizing Your Fuel Efficiency: Myths vs. Facts',
    excerpt: 'Save money at the pump with these proven techniques for improving your car\'s gas mileage. We debunk common myths.',
    author: 'Alex Johnson',
    date: 'Oct 20, 2023',
  },
   {
    id: 4,
    imageUrl: 'https://picsum.photos/seed/car4/800/600',
    category: 'Detailing',
    title: 'The Ultimate Guide to Detailing Your Car Like a Pro',
    excerpt: 'Get that showroom shine at home. We cover everything from washing and waxing to interior deep cleaning.',
    author: 'Maria Garcia',
    date: 'Oct 18, 2023',
  },
  {
    id: 5,
    imageUrl: 'https://picsum.photos/seed/car5/800/600',
    category: 'Safety',
    title: 'Understanding Your Car\'s Dashboard Warning Lights',
    excerpt: 'That little light just came on - what does it mean? We decode the most common dashboard warning symbols for you.',
    author: 'Chris Lee',
    date: 'Oct 15, 2023',
  },
  {
    id: 6,
    imageUrl: 'https://picsum.photos/seed/car6/800/600',
    category: 'Technology',
    title: 'The Rise of Electric Vehicles: What You Need to Know',
    excerpt: 'Thinking about making the switch to electric? Here\'s a primer on EV ownership, charging, and maintenance.',
    author: 'Samantha White',
    date: 'Oct 12, 2023',
  },
];