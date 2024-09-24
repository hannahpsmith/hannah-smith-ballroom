import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

export default function CalendlyBadgeSLC() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/hannahsmithballroom/dance-lesson-slc?hide_gdpr_banner=1&background_color=f1f1f1&primary_color=a78f3f',
        text: 'Book in SLC',
        color: '#a78f3f',
        textColor: '#f1f1f1',
        branding: undefined,
      });

      const badge = document.querySelector('.calendly-badge-widget');
      if (badge) {
          badge.style.right = '183px'; 
      }
    };
    


    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

    return (
      <Box />
    );
}
