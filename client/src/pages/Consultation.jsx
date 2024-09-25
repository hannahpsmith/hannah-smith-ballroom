import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Button } from '@chakra-ui/react';
import { useEffect } from "react";


export default function Consultations() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      return (
        <section>
          <Box textAlign="center" p={4} zIndex={1}>
            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/hannahsmithballroom/consultations?background_color=f1f1f1&primary_color=a78f3f"
              style={{ minWidth: "320px", height: "700px", margin: "0 auto" }}
            ></div>
          </Box>
        </section>
      );
    }
    