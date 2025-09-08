import React from 'react';
import { BLOG_POSTS } from '../constants';
import Card from '../components/Card';
import Image from '../components/Image';
import FadeIn from '../components/FadeIn';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-light py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-dark sm:text-5xl">AutoPro Blog</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Your source for automotive tips, news, and maintenance advice.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <FadeIn key={post.id} style={{ transitionDelay: `${index * 100}ms` }}>
              <Card as="article" className="flex flex-col h-full" aria-labelledby={`blog-post-title-${post.id}`}>
                <Image className="h-56 w-full object-cover" src={post.imageUrl} alt="" />
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm font-semibold text-primary">{post.category}</p>
                  <h3 id={`blog-post-title-${post.id}`} className="mt-2 text-xl font-bold text-dark">{post.title}</h3>
                  <p className="mt-3 text-base text-gray-600 flex-grow">{post.excerpt}</p>
                  <div className="mt-6 flex items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <a href="#" className="mt-4 text-primary hover:text-blue-800 font-bold">Read More &rarr;</a>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;