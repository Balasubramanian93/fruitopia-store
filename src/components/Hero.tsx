
import React, { useEffect, useRef } from "react";
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        // Parallax effect
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-natural-50 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/30 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-6 animate-fade-in">
            Organic and Natural Fruit & Herbal Powders
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold mb-6 text-white animate-fade-up">
            Nature's Goodness, <br />
            <span className="text-secondary">Powdered Perfection</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up delay-100">
            Premium quality organic fruit and herbal powders sourced from around the world. 
            Add a boost of nutrition to your daily routine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-200">
            <Button size="lg" className="rounded-full px-8 button-scale bg-white text-primary hover:bg-white/90">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 button-scale text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#categories">
          <ArrowDownCircle className="w-10 h-10 text-white/80 hover:text-white transition-colors" />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 md:left-20 w-64 h-64 rounded-full bg-berry/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 md:right-20 w-80 h-80 rounded-full bg-citrus/20 blur-3xl"></div>
    </div>
  );
};

export default Hero;
