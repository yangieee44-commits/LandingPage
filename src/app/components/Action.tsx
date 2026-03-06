import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle, MessageSquare, AlertCircle } from 'lucide-react';
import portfolioImage from '../../assets/cta.png';
import emailjs from '@emailjs/browser';

export function Action() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    promoCode: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    // EmailJS Configuration
    // IMPORTANT: Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_c39qpol'; // Replace with your EmailJS Service ID
    const TEMPLATE_ID = 'template_a0ru15q'; // Replace with your EmailJS Template ID
    const PUBLIC_KEY = 'RzdJH0AsKc6-NnL-8'; // Replace with your EmailJS Public Key

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          promo_code: formData.promoCode || 'None',
          message: formData.message,
          to_email: 'info.beyondbless@gmail.com', // Your email
        },
        PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '', promoCode: '', message: '' });
        }, 5000);
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again or contact us directly at beyondbless@gmail.com');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden mt-12">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-black">
            Ready to Transform Your Landscape?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get your FREE consultation and quote today. Let's discuss your vision and 
            create a landscape that exceeds your expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form - Enhanced */}
          <div className="bg-white border-2 border-gray-100 p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden">
            {/* Decorative gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-black">Send Us a Message</h3>
              </div>
              
              {submitted ? (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 text-green-800 p-8 rounded-2xl text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-2xl font-bold mb-3">Thank You!</p>
                  <p className="text-lg">We'll be in touch within 24 hours to schedule your free consultation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border-2 border-red-200 text-red-800 p-4 rounded-xl flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}
                  
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-2 focus:ring-green-500 transition-all"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-2 focus:ring-green-500 transition-all"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-2 focus:ring-green-500 transition-all"
                    />
                  </div>
                  
                  {/* Promo Code Field with Validation */}
                  <div className="relative">
                    <Input
                      name="promoCode"
                      placeholder="Promo Code (Optional)"
                      value={formData.promoCode}
                      onChange={handleChange}
                      className={`bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-2 transition-all ${
                        formData.promoCode.toUpperCase() === 'WELCOME5' 
                          ? 'border-green-500 focus:ring-green-500 bg-green-50' 
                          : 'focus:ring-green-500'
                      }`}
                    />
                    {formData.promoCode.toUpperCase() === 'WELCOME5' && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-semibold">5% OFF Applied!</span>
                      </div>
                    )}
                    {formData.promoCode && formData.promoCode.toUpperCase() !== 'WELCOME5' && (
                      <p className="text-xs text-gray-500 mt-1 ml-1">Enter WELCOME5 for 5% discount</p>
                    )}
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your landscape project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 transition-all resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={sending}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg h-14 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-semibold disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {sending ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      <>
                        Get Your Free Quote
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center mt-4">
                    ⚡ Quick response guaranteed within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info & Image - Enhanced */}
          <div className="space-y-8">
            {/* Image with overlay */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <img 
                src={portfolioImage}
                alt="Professional front yard landscaping" 
                className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <p className="text-lg font-semibold">Award-Winning Landscaping</p>
                <p className="text-white/90 text-sm">Serving Bohol with excellence since 2021</p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
              
              {/* Phone */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-green-500 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-black mb-1 text-lg">Call Us</p>
                  <p className="text-green-600 font-semibold text-xl">0912 809 1756</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <p className="text-sm">Mon-Sat: 7am - 6pm</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-green-500 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-black mb-1 text-lg">Email Us</p>
                  <p className="text-gray-700 font-medium">info.beyondbless@gmail.com</p>
                  <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-green-500 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-black mb-1 text-lg">Service Area</p>
                  <p className="text-gray-700 font-medium">Anywhere in Bohol</p>
                  <p className="text-sm text-gray-500 mt-1">Province-wide coverage</p>
                </div>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="bg-gradient-to-r from-black to-gray-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-2xl font-bold">100% Satisfaction Guaranteed</p>
                </div>
                <p className="text-white/90 leading-relaxed">
                  We're not happy until you're thrilled with your new landscape. 
                  That's our promise to every client in Bohol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}