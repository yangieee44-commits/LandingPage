import { CheckCircle2, Shield, Users, Award, Star } from 'lucide-react';
import { Button } from './ui/button';

export function Solution() {
  const benefits = [
    {
      icon: Shield,
      title: "Expert Craftsmanship",
      description: "Over 3 years of experience transforming ordinary yards into extraordinary landscapes.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "We listen to your vision and create custom designs that reflect your unique style and needs.",
      color: "from-green-600 to-teal-600"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "We stand behind our work with a satisfaction guarantee. Your happiness is our priority.",
      color: "from-emerald-500 to-green-700"
    },
    {
      icon: CheckCircle2,
      title: "Stress-Free Process",
      description: "From consultation to completion, we handle everything so you can relax and enjoy the transformation.",
      color: "from-teal-500 to-green-600"
    }
  ];

  return (
    <section id="solution" className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden mt-8">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-green-600 fill-green-600" />
            <span className="text-sm font-semibold text-green-700">The Beyond Bless Difference</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-black">
            Your Landscape Dreams, Realized
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-green-600">Beyond Bless Landscape</span>, 
            we don't just maintain yards—we create outdoor masterpieces that increase your 
            property value and bring you joy every day.
          </p>
        </div>

        {/* Why Choose Us - Enhanced Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-500 hover:-translate-y-2"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black group-hover:text-green-600 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-[100%] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}