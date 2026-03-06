import { ShoppingBag, Package, X } from 'lucide-react';
import { useState } from 'react';
import clayLoamImg from '../../assets/clay.png';
import loamImg from '../../assets/loam.png';
import topsoilImg from '../../assets/topdressing.png';
import pottingMixImg from '../../assets/pot.png';
import bermudaGrassImg from '../../assets/bermuda.png';
import carabaoGrassImg from '../../assets/carabao.png';
import limestoneImg from '../../assets/limestone.png';
import bouldersImg from '../../assets/boulder.png';
import riverStonesImg from '../../assets/river.png';

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; description: string; image: string; category: string } | null>(null);

  const products = [
    // Soil Products
    {
      name: "Loam",
      description: "Perfect balance of sand, silt, and clay. Ideal for most plants and provides excellent drainage and nutrient retention.",
      image: loamImg,
      category: "Soil"
    },
    {
      name: "Topsoil",
      description: "Rich, dark uppermost layer of soil. Essential for new lawns, gardens, and landscaping projects requiring quality foundation.",
      image: topsoilImg,
      category: "Soil"
    },
    {
      name: "Clay Loam",
      description: "Nutrient-rich soil with excellent water retention. Great for moisture-loving plants and improving soil structure.",
      image: clayLoamImg,
      category: "Soil"
    },
    {
      name: "Potting Mix",
      description: "Premium blend for container gardening. Lightweight, sterile, and formulated for optimal root development and drainage.",
      image: pottingMixImg,
      category: "Soil"
    },
    
    // Grass Products
    {
      name: "Bermuda Grass",
      description: "Drought-tolerant, wear-resistant grass perfect for high-traffic areas. Thrives in full sun with beautiful dense coverage.",
      image: bermudaGrassImg,
      category: "Grass"
    },
    {
      name: "Carabao Grass",
      description: "Low-maintenance, shade-tolerant grass that forms a soft, carpet-like lawn. Excellent for tropical climates.",
      image: carabaoGrassImg,
      category: "Grass"
    },
    
    // Stone Products
    {
      name: "River Stones and Pebbles",
      description: "Smooth, rounded stones for decorative landscaping, pathways, and water features. Available in various sizes and colors.",
      image: riverStonesImg,
      category: "Stone"
    },
    {
      name: "Limestone",
      description: "Durable, elegant stone for hardscaping projects. Perfect for walkways, retaining walls, and architectural features.",
      image: limestoneImg,
      category: "Stone"
    },
    {
      name: "Boulders",
      description: "Large statement stones for dramatic landscape accents. Creates focal points and natural-looking rock gardens.",
      image: bouldersImg,
      category: "Stone"
    }
  ];

  return (
    <>
      <section id="products" className="py-28 px-6 bg-gray-50 relative overflow-hidden mb-8">
        {/* Decorative background patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
              <Package className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700">Premium Products</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-black">
              Quality Landscaping Materials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From nutrient-rich soils to premium grass and decorative stones, we supply 
              everything you need to build and maintain a stunning landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-green-500"
              >
                {/* Product Image */}
                <div 
                  className="relative h-56 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {product.category}
                  </div>
                  {/* Hover overlay hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3">
                      <ShoppingBag className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed min-h-[80px]">
                    {product.description}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-500 font-medium">Contact for pricing</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Need help choosing the right materials for your project?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Package className="w-5 h-5" />
              Speak with an Expert
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox for selected product */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 bg-white hover:bg-gray-100 rounded-full p-3 cursor-pointer transition-all duration-300 shadow-lg z-10"
              onClick={() => setSelectedProduct(null)}
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
            
            {/* Image */}
            <img 
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Product info */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl px-6 py-4 shadow-xl max-w-2xl w-full mx-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-green-600 rounded-lg px-3 py-1 text-xs font-semibold text-white">
                  {selectedProduct.category}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {selectedProduct.name}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {selectedProduct.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}