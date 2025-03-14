
import React from "react";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-natural-900 text-white/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-display font-semibold text-white mb-6">Nutriblend</h3>
            <p className="mb-6">
              Premium organic fruit and herbal powders for your health and wellness journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-medium text-white mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Berry Powders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Superfruit Powders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tropical Fruit Powders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Citrus Fruit Powders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Exotic & Niche Powders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Herbal & Functional Teas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-medium text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-medium text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                <span>123 Nature Way, Dublin, D02 AB12, Ireland</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>+353 (1) 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>hello@nutriblend.ie</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Nutriblend. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Shipping Policy</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
