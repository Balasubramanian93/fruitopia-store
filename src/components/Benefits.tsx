
import React, { useEffect, useRef } from "react";
import { Leaf, Shield, Heart, Apple, Award, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: <Leaf className="h-12 w-12" />,
    title: "100% Natural",
    description: "Our powders are made from whole fruits and herbs with no additives or preservatives."
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Quality Guaranteed",
    description: "Rigorous testing ensures our products meet the highest standards of quality and safety."
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: "Health Boosting",
    description: "Packed with vitamins, minerals, and antioxidants for your overall wellbeing."
  },
  {
    icon: <Apple className="h-12 w-12" />,
    title: "Nutrient Dense",
    description: "Concentrated nutrition from whole fruits and herbs in every serving."
  },
  {
    icon: <Award className="h-12 w-12" />,
    title: "Certified Organic",
    description: "Our products are certified organic, ensuring they're free from harmful chemicals."
  },
  {
    icon: <Clock className="h-12 w-12" />,
    title: "Convenience",
    description: "Easy to incorporate into your daily routine for a quick nutritional boost."
  }
];

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    benefitRefs.current.forEach((benefit) => {
      if (benefit) observer.observe(benefit);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      benefitRefs.current.forEach((benefit) => {
        if (benefit) observer.unobserve(benefit);
      });
    };
  }, []);

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="py-24 px-4 bg-primary text-white"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4 mb-6">
            Benefits of Our Products
          </h2>
          <p className="text-white/80">
            Discover why our premium fruit and herbal powders stand out from the rest. 
            We're committed to quality, purity, and your health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={el => benefitRefs.current[index] = el}
              className="glass-card backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-8 fade-in-view"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-secondary mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-display font-medium mb-4">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in-view">
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            "Our mission is to bring the power of nature's superfoods to your daily routine in the most 
            convenient, pure, and effective way possible."
          </p>
          <div className="mt-8 flex justify-center items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
              alt="CEO" 
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <div className="text-left">
              <h4 className="font-medium">Sarah Johnson</h4>
              <p className="text-white/80 text-sm">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
