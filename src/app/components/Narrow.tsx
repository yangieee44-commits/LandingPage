import { Sprout, Scissors, TreePine, Fence, Sparkles, Check } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Narrow() {
  const services = [
    {
      icon: Scissors,
      title: "Lawn Care & Maintenance",
      description: "Regular mowing, edging, and fertilization to keep your lawn lush and green year-round.",
      features: ["Weekly/bi-weekly service", "Seasonal treatments", "Weed control"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Sprout,
      title: "Garden Design & Planting",
      description: "Custom garden designs with carefully selected plants that thrive in your specific climate.",
      features: ["Native plant selection", "Color coordination", "Seasonal planning"],
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: TreePine,
      title: "Tree & Shrub Care",
      description: "Professional pruning, shaping, and health maintenance for all your trees and shrubs.",
      features: ["Expert pruning", "Disease prevention", "Growth management"],
      gradient: "from-green-600 to-teal-600"
    },
    {
      icon: Fence,
      title: "Hardscaping",
      description: "Patios, walkways, retaining walls, and decorative features that enhance your outdoor living.",
      features: ["Custom stonework", "Paver installation", "Drainage solutions"],
      gradient: "from-teal-500 to-green-600"
    },
    {
      icon: Sparkles,
      title: "Seasonal Cleanups",
      description: "Spring and fall cleanups to prepare your landscape for changing seasons.",
      features: ["Leaf removal", "Mulching", "Bed preparation"],
      gradient: "from-green-500 to-lime-600"
    }
  ];

  return (
    <section id="services" className="py-28 px-6 bg-white relative overflow-hidden mb-8">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
            <Sprout className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">Our Services & Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-black">
            Comprehensive Landscape Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From routine maintenance to complete landscape transformations, we offer 
            everything you need to create and maintain your dream outdoor space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-green-500 bg-white overflow-hidden relative hover:-translate-y-2"
            >
              {/* Gradient accent on top */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.gradient}`} />
              
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <CardContent className="p-8 relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-green-200 transition-colors">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-green-500/10 to-transparent rounded-tl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}