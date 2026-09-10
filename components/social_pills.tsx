"use client"
import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';

export const SocialPills = () => {
  const [copied, setCopied] = useState(false);
  const MY_EMAIL = "sobrecarayianjoseph@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Copy email to clipboard
    navigator.clipboard.writeText(MY_EMAIL);
    
    // Show feedback for 2 seconds
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    portfolioData.socials.map((social, index) => {
      const isEmail = social.name.toLowerCase() === 'email';

      // Shared class names to keep identical styling for buttons and links
      const pillStyles = `
        group m-2.5 inline-flex items-center gap-2 rounded-full 
        bg-[#3f403f]/50 hover:bg-[#ed695a] 
        px-4 py-2.5 
        text-white hover:text-black 
        transition-all duration-200 ease-in-out
        cursor-pointer
      `;

      const iconSpan = (
        <span 
          style={{
            maskImage: `url(${social.icon})`,
            WebkitMaskImage: `url(${social.icon})`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          }}
          className="h-5.5 w-5.5 bg-white group-hover:bg-black shrink-0 transition-colors duration-200"
        />
      );

      // Render <button> for Email (Clipboard Copy)
      if (isEmail) {
        return (
          <button
            key={index}
            type="button"
            onClick={handleCopyEmail}
            className={pillStyles}
          >
            {iconSpan}
            <span className="font-bold text-sm font-mono">
              {copied ? "Copied!" : "Email"}
            </span>
          </button>
        );
      }

      // Render <a> for External Links
      return (
        <a 
          key={index} 
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={pillStyles}
        > 
          {iconSpan}
          <span className="font-bold text-sm font-mono">
            {social.name}
          </span>
        </a>
      );
    })
  );
};