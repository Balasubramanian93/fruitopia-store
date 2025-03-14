
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="newsletter"
      ref={sectionRef} 
      className="py-24 px-4 bg-natural-100 relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-natural-200/50 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden fade-in-view">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-12">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                Stay Updated
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-semibold mt-4 mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              
              <form className="space-y-4">
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full rounded-full"
                  />
                </div>
                <Button className="w-full rounded-full button-scale">
                  Subscribe
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
            
            <div 
              className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" 
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
