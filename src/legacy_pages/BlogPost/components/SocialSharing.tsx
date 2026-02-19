
import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { BlogPost } from '../../Blogs/types';

interface SocialSharingProps {
  blog: BlogPost;
}

const SocialSharing = ({ blog }: SocialSharingProps) => {
  const currentUrl = window.location.href;
  const title = encodeURIComponent(blog.title);
  const url = encodeURIComponent(currentUrl);
  
  const socialLinks = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: <Facebook className="h-5 w-5" />
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      icon: <Twitter className="h-5 w-5" />
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: 'Email',
      url: `mailto:?subject=${title}&body=${url}`,
      icon: <Mail className="h-5 w-5" />
    }
  ];

  return (
    <div className="my-8 p-6 border-t border-gray-200">
      <div className="flex items-center justify-center md:justify-start mb-4">
        <Share2 className="h-5 w-5 text-brand-blue mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
      </div>
      
      <div className="flex justify-center md:justify-start space-x-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-brand-blue hover:text-white transition-colors duration-300"
            aria-label={`Share on ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSharing;
