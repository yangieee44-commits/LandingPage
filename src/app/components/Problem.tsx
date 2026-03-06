import { X } from 'lucide-react';
import { useState } from 'react';
import problemImage from '../../assets/before.png';
import solutionImage from '../../assets/after.png';

export function Problem() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; label: string; type: 'before' | 'after' } | null>(null);

  return (
    <>
      <section id="problem" className="py-24 px-6 bg-white mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Is Your Property Holding You Back?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your outdoor space should be a source of pride, not embarrassment. 
              But overgrown lawns, dying plants, and neglected landscapes tell a different story.
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Before - Problem */}
            <div className="space-y-4">
              <div 
                className="relative rounded-lg overflow-hidden shadow-xl cursor-pointer group"
                onClick={() => setSelectedImage({ image: problemImage, label: 'Neglected landscape before transformation', type: 'before' })}
              >
                <img 
                  src={problemImage} 
                  alt="Neglected landscape before transformation" 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                  BEFORE
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>Overgrown weeds taking over your property</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>Dying plants and bare patches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>No curb appeal or outdoor enjoyment</span>
                </li>
              </ul>
            </div>

            {/* After - Solution Preview */}
            <div className="space-y-4">
              <div 
                className="relative rounded-lg overflow-hidden shadow-xl cursor-pointer group"
                onClick={() => setSelectedImage({ image: solutionImage, label: 'Beautiful landscaped property after transformation', type: 'after' })}
              >
                <img 
                  src={solutionImage} 
                  alt="Beautiful landscaped property after transformation" 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
                  AFTER
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Perfectly manicured landscapes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Vibrant, healthy plants year-round</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>A stunning outdoor oasis you'll love</span>
                </li>
              </ul>
            </div>
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
              alt={selectedImage.label}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image info */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl px-6 py-3 shadow-xl">
              <div className={`${selectedImage.type === 'before' ? 'bg-red-600' : 'bg-green-600'} rounded-lg px-4 py-2 text-sm font-semibold text-white`}>
                {selectedImage.type.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}