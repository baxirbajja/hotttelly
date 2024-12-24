import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-serif mb-6">StayLuxury</h3>
              <p className="text-gray-400 leading-relaxed">
                Find and book the perfect hotel for your next stay. Experience luxury and comfort at its finest.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-6">Contact Us</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center">
                  <i className="fas fa-envelope w-6 text-accent"></i>
                  <span>info@stayluxury.com</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone w-6 text-accent"></i>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt w-6 text-accent"></i>
                  <span>123 Luxury Street, City, Country</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} StayLuxury. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
