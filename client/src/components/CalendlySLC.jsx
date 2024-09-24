import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

export default function CalendlyBadgeSLC() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    let style;

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

        style = document.createElement('style');
        style.innerHTML = `
          .calendly-badge-content {
            transition: all 0.3s ease;
          }

          .calendly-badge-content:hover {
            background-color: #f5f5f5 !important;
            color: #a78f3f !important;
          }

          .calendly-badge-content span {
            color: #fff !important;
          }

          .calendly-badge-content:hover span {
            color: #a78f3f !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    return () => {
      document.body.removeChild(script);

      if (style) {
        document.head.removeChild(style);
      }

      const badgeWidget = document.querySelector('.calendly-badge-widget');
      if (badgeWidget) {
        badgeWidget.remove();
      }
    };
  }, []);

  return <Box />;
}
