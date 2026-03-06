import { ChevronDown, Sparkles, Leaf, Clock, Shield } from 'lucide-react';
import heroImage from '../../assets/hpage.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('problem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful landscape"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
          <Leaf className="w-4 h-4 text-green-400" />
          <span className="text-white text-sm font-medium">Bohol's Premier Landscape Design Studio</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Transform Your Outdoor
          <br />
          <span className="text-green-400">Space Into Paradise</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up-delay">
          Expert landscaping services that bring your vision to life. From design to maintenance, 
          we create stunning outdoor spaces you'll love coming home to.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up-delay-2">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-white text-sm">Premium Quality</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
            <Clock className="w-4 h-4 text-green-400" />
            <span className="text-white text-sm">3 Years Experience</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-white text-sm">100% Satisfaction Guaranteed</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-3">
          <button
            onClick={scrollToContact}
            className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Quote
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={scrollToAbout}
            className="bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            See Our Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>
    </section>
  );
}