
import React, { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = {
  id: string;
  name: string;
  description: string;
  color: string;
  image: string;
};

const categories: Category[] = [
  {
    id: "berry",
    name: "Berry Powders",
    description: "Rich in antioxidants and vitamins",
    color: "bg-berry",
    image: "https://images.unsplash.com/photo-1567870335471-1129836babcf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "superfruit",
    name: "Superfruit Powders",
    description: "Nutrient-dense with amazing health benefits",
    color: "bg-superfruit",
    image: "https://images.unsplash.com/photo-1546023080-515d85183cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "tropical",
    name: "Tropical Fruit Powders",
    description: "Exotic flavors packed with nutrients",
    color: "bg-tropical",
    image: "https://images.unsplash.com/photo-1587583650088-9451513b7b5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "citrus",
    name: "Citrus Fruit Powders",
    description: "Vitamin C powerhouses for immunity",
    color: "bg-citrus",
    image: "https://images.unsplash.com/photo-1543218024-57a70143c369?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "exotic",
    name: "Exotic & Niche Powders",
    description: "Rare and unique fruits with special benefits",
    color: "bg-exotic",
    image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "herbal",
    name: "Herbal & Functional Teas",
    description: "Specially formulated blends for wellness",
    color: "bg-herbal",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const ProductCategories = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section 
      id="categories" 
      ref={sectionRef} 
      className="py-24 px-4 bg-gradient-to-b from-natural-50 to-natural-100"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
            Product Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4 mb-6">
            Explore Our Premium Collection
          </h2>
          <p className="text-muted-foreground">
            Discover our range of carefully crafted fruit and herbal powders, 
            each selected for their exceptional nutritional profiles and beneficial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              ref={el => cardRefs.current[index] = el}
              className={cn(
                "product-card group fade-in-view",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0"></div>
                
                {/* Color stripe */}
                <div className={`absolute top-0 left-0 w-full h-1 ${category.color}`}></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-display font-medium mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm mb-4">{category.description}</p>
                  <a
                    href={`#${category.id}`}
                    className="inline-flex items-center text-sm font-medium transition-colors text-white/90 hover:text-white"
                  >
                    Explore Products <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
