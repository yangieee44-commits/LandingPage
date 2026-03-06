import { AlertTriangle, TrendingDown, Home, Clock } from 'lucide-react';

export function Agitation() {
  const painPoints = [
    {
      icon: Home,
      title: "Decreased Property Value",
      description: "Poor landscaping can reduce your home's value by up to 20%. First impressions matter—especially to potential buyers."
    },
    {
      icon: Clock,
      title: "Wasting Your Precious Time",
      description: "Spending weekends fighting weeds instead of enjoying your outdoor space? Your time is too valuable for endless yard work."
    },
    {
      icon: TrendingDown,
      title: "Embarrassment & Judgment",
      description: "That sinking feeling when neighbors or guests see your unkempt yard. Your property should be a source of pride, not shame."
    },
    {
      icon: AlertTriangle,
      title: "Growing Problems Only Get Worse",
      description: "Neglect leads to costly repairs. Dead plants, erosion, and pest problems compound over time—making fixes more expensive."
    }
  ];

  return (
    <section className="py-28 px-6 bg-white mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-black">
            The Cost of Doing Nothing
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Every day you wait, your landscape problems multiply. The longer you delay, 
            the more you lose in property value, time, and peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl hover:border-green-600 hover:shadow-lg transition-all"
            >
              <point.icon className="w-12 h-12 text-black mb-4" />
              <h3 className="text-2xl mb-3 text-black">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-black text-white px-8 py-4 rounded-lg">
            <p className="text-xl font-semibold">Don't let another season pass you by.</p>
          </div>
        </div>
      </div>
    </section>
  );
}