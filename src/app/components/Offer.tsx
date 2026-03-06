import { Gift, Clock, Shield, Phone } from 'lucide-react';

export function Offer() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white relative overflow-hidden mt-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Offer */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold text-lg animate-pulse">
              🎉 LIMITED TIME OFFER
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl mb-6 font-bold">
            Get 5% OFF Your First Project
          </h2>
          
          <p className="text-2xl mb-8 text-green-50 max-w-3xl mx-auto">
            Transform your outdoor space with professional landscaping services at an exclusive discount
          </p>

          <div className="inline-block bg-white text-black px-8 py-6 rounded-2xl shadow-2xl">
            <p className="text-lg mb-2 text-gray-600">Use Code:</p>
            <p className="text-5xl font-bold text-green-600 tracking-wider">WELCOME5</p>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl mb-8 text-center font-semibold">What You Get:</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-white text-green-600 rounded-full p-3 flex-shrink-0">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">FREE Consultation</h4>
                <p className="text-green-50">Professional assessment of your property and personalized design recommendations</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-green-600 rounded-full p-3 flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Satisfaction Guarantee</h4>
                <p className="text-green-50">100% satisfaction or we'll make it right, no questions asked</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-green-600 rounded-full p-3 flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Priority Scheduling</h4>
                <p className="text-green-50">Fast-track your project and get started within days</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-green-600 rounded-full p-3 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Dedicated Support</h4>
                <p className="text-green-50">Direct line to your project manager throughout the process</p>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency & CTA */}
        <div className="text-center">
          <div className="inline-block bg-black/30 backdrop-blur-sm border border-white/40 px-8 py-4 rounded-lg mb-8">
            <p className="text-xl">
              ⏰ Offer expires in <span className="font-bold text-yellow-300">7 days</span> | Only <span className="font-bold text-yellow-300">5 spots</span> available this month
            </p>
          </div>

          <div>
            <a 
              href="#contact"
              className="inline-block bg-white text-green-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-green-50 transition-all shadow-2xl hover:scale-105 transform"
            >
              Claim Your 5% Discount Now →
            </a>
          </div>

          <p className="mt-6 text-green-100 text-sm">
            *Discount applies to new customers on projects ₱10,000 or more. Cannot be combined with other offers.
          </p>
        </div>
      </div>
    </section>
  );
}