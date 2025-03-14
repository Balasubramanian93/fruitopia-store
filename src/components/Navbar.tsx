
import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-display font-semibold text-primary">
            Nutriblend
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#categories">Categories</NavLink>
          <NavLink href="#featured">Featured</NavLink>
          <NavLink href="#benefits">Benefits</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Search">
            <Search className="h-5 w-5 text-primary" />
          </button>
          <button className="p-2 hover:bg-muted rounded-full transition-colors relative" aria-label="Cart">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <span className="absolute -top-1 -right-1 bg-berry text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </button>
          <Button size="sm" variant="default" className="button-scale">
            Shop Now
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-3">
          <button className="p-2" aria-label="Cart">
            <ShoppingCart className="h-5 w-5 text-primary" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border shadow-lg animate-fade-in">
          <div className="flex flex-col p-5 space-y-4">
            <MobileNavLink href="#categories" onClick={() => setIsMobileMenuOpen(false)}>
              Categories
            </MobileNavLink>
            <MobileNavLink href="#featured" onClick={() => setIsMobileMenuOpen(false)}>
              Featured
            </MobileNavLink>
            <MobileNavLink href="#benefits" onClick={() => setIsMobileMenuOpen(false)}>
              Benefits
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
              <Button size="sm" variant="outline" className="w-full">Search</Button>
              <Button size="sm" variant="default" className="w-full ml-2">Shop Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a
    href={href}
    className="text-base font-medium p-2 hover:bg-muted rounded-md transition-colors block"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
