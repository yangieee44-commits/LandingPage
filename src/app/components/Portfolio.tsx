import { Camera, X } from 'lucide-react';
import { useState } from 'react';
import portfolioImage1 from '../../assets/portfolio1.png';
import portfolioImage2 from '../../assets/portfolio2.png';
import portfolioImage3 from '../../assets/portfolio3.png';
import portfolioImage4 from '../../assets/portfolio4.png';
import portfolioImage5 from '../../assets/portfolio5.png';
import portfolioImage6 from '../../assets/portfolio6.png';
import portfolioImage7 from '../../assets/portfolio7.png';
import portfolioImage8 from '../../assets/portfolio8.png';

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; category: string } | null>(null);

  const projects = [
    {
      image: portfolioImage1,
      title: "Tropical Garden Paradise",
      category: "Garden Design"
    },
    {
      image: portfolioImage2,
      title: "Lush Front Yard Transformation",
      category: "Full Landscape"
    },
    {
      image: portfolioImage3,
      title: "Modern Minimalist Estate",
      category: "Luxury Design"
    },
    {
      image: portfolioImage4,
      title: "Vibrant Perennial Pathway",
      category: "Garden Design"
    },
    {
      image: portfolioImage5,
      title: "Colorful Cottage Garden Oasis",
      category: "Backyard"
    },
    {
      image: portfolioImage6,
      title: "Stone Pathway & Landscaping",
      category: "Hardscaping"
    },
    {
      image: portfolioImage7,
      title: "Professional Lawn Installation",
      category: "Lawn Design"
    },
    {
      image: portfolioImage8,
      title: "Contemporary Curb Appeal Design",
      category: "Modern Design"
    }
  ];

  return (
    <>
      <section id="portfolio" className="py-24 px-6 bg-gray-50 relative overflow-hidden mb-10">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
              <Camera className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-black">
              Our Work Speaks for Itself
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent landscape transformations. 
              Each project is a testament to our commitment to excellence and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onClick={() => setSelectedImage(project)}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay - Always visible with gentle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="bg-green-600 rounded-lg px-3 py-1 text-xs font-semibold mb-2 w-fit text-white">
                      {project.category}
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Hover accent border */}
                <div className="absolute inset-0 border-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox for selected image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 bg-white hover:bg-gray-100 rounded-full p-3 cursor-pointer transition-all duration-300 shadow-lg z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
            
            {/* Image */}
            <img 
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image info */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl px-6 py-3 shadow-xl flex items-center gap-4">
              <div className="bg-green-600 rounded-lg px-3 py-1 text-xs font-semibold text-white">
                {selectedImage.category}
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}