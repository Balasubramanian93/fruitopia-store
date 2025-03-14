
import React, { useEffect, useRef } from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Product = {
  id: string;
  name: string;
  category: string;
  categoryColor: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
};

const featuredProducts: Product[] = [
  {
    id: "blueberry",
    name: "Blueberry Powder",
    category: "Berry Powders",
    categoryColor: "bg-berry",
    description: "Rich in antioxidants, supports brain health and immunity",
    price: 19.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    isBestSeller: true
  },
  {
    id: "acai",
    name: "Acai Berry Powder",
    category: "Superfruit Powders",
    categoryColor: "bg-superfruit",
    description: "High in antioxidants and supports energy levels",
    price: 24.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    isNew: true
  },
  {
    id: "baobab",
    name: "Baobab Powder",
    category: "Exotic & Niche Powders",
    categoryColor: "bg-exotic",
    description: "High in vitamin C and fiber, boosts gut health",
    price: 22.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    isNew: true
  },
  {
    id: "moringa",
    name: "Moringa Leaf Tea",
    category: "Herbal & Functional Teas",
    categoryColor: "bg-herbal",
    description: "Nutrient-dense with vitamins A, C, and E, calcium and protein",
    price: 18.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    isBestSeller: true
  }
];

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    productRefs.current.forEach((product) => {
      if (product) observer.observe(product);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      productRefs.current.forEach((product) => {
        if (product) observer.unobserve(product);
      });
    };
  }, []);

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-white to-natural-50"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
            Featured Products
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4 mb-6">
            Our Most Popular Powders
          </h2>
          <p className="text-muted-foreground">
            Discover our bestselling products, carefully selected for their exceptional quality, 
            taste, and nutritional benefits. Try them today and feel the difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              ref={el => productRefs.current[index] = el}
              className="product-card group fade-in-view"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="relative overflow-hidden h-64 rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-citrus hover:bg-citrus text-white">New</Badge>
                    )}
                    {product.isBestSeller && (
                      <Badge className="bg-berry hover:bg-berry text-white">Best Seller</Badge>
                    )}
                  </div>

                  {/* Wishlist button */}
                  <button className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-white">
                    <Heart className="h-4 w-4 text-primary" />
                  </button>

                  {/* Category marker */}
                  <div className={cn("absolute bottom-0 left-0 h-1 w-full", product.categoryColor)}></div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-medium text-muted-foreground">
                    {product.category}
                  </span>
                  <h3 className="font-display text-lg font-medium mt-1 mb-2">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < Math.floor(product.rating)
                              ? "text-amber-400 fill-amber-400"
                              : "text-gray-300"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-medium">€{product.price.toFixed(2)}</span>
                    <Button size="sm" className="button-scale rounded-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline" className="button-scale rounded-full px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
