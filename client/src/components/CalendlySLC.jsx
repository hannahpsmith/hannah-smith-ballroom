import React, { useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';

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
        url: 'https://calendly.com/hannahsmithballroom/dance-lesson-slc?primary_color=a78f3f',
        text: 'Book in SLC',
        color: '#a78f3f',
        textColor: '#f1f1f1',
        branding: undefined,
      });
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
