import logo from '../../assets/logo.png';
import { Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Beyond Bless Landscape" className="h-24 w-auto" />
            </div>
            <p className="text-gray-400">
              Transforming outdoor spaces into beautiful landscapes that bring joy and value to your property.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lawn Care & Maintenance</li>
              <li>Garden Design</li>
              <li>Tree & Shrub Care</li>
              <li>Hardscaping</li>
              <li>Seasonal Cleanups</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: 0912 809 1756</li>
              <li>Email: info.beyondbless@gmail.com</li>
              <li>Hours: Mon-Sat, 7am - 6pm</li>
              <li className="pt-2">
                <a 
                  href="https://www.facebook.com/BeyondBlessLandscape" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Beyond Bless Landscape</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Beyond Bless Landscape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}