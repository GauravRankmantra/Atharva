'use client';

import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Clock, Users, Sparkles, Leaf, Waves, Sun } from 'lucide-react';
import BookingModal from '../components/ui/BookingModal';

const Spa = () => {
  const [bookingModal, setBookingModal] = useState({ isOpen: false, title: '', type: 'spa' });

  const spaServices = [
    {
      id: 1,
      title: 'Aromatherapy Bliss',
      category: 'Relaxation',
      duration: '90 minutes',
      price: '₹699',
      description: 'Immerse yourself in pure tranquility with our signature aromatherapy treatment. This therapeutic journey combines the healing power of essential oils with gentle massage techniques to restore balance to your body and mind. Our expert therapists use carefully selected organic oils to create a personalized blend that addresses your specific wellness needs, leaving you feeling refreshed, centered, and completely rejuvenated.',
      benefits: ['Stress Relief', 'Deep Relaxation', 'Improved Sleep', 'Mental Clarity', 'Emotional Balance'],
      image: 'https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?w=600&h=400&fit=crop',
      icon: Leaf
    },
    {
      id: 2,
      title: 'Ayurvedic Healing Ritual',
      category: 'Wellness',
      duration: '120 minutes',
      price: '₹799',
      description: 'Experience ancient wisdom through our authentic Ayurvedic healing ritual, designed to harmonize your body\'s natural energies. This comprehensive treatment begins with a personalized consultation to determine your unique constitution, followed by specialized techniques including warm oil massage, herbal steam therapy, and chakra balancing. Rooted in 5,000-year-old traditions, this treatment promotes deep healing and lasting wellness transformation.',
      benefits: ['Energy Balancing', 'Detoxification', 'Improved Circulation', 'Spiritual Alignment', 'Holistic Healing'],
      image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?w=600&h=400&fit=crop',
      icon: Sun
    },
    {
      id: 3,
      title: 'Deep Tissue Restoration',
      category: 'Therapeutic',
      duration: '75 minutes',
      price: '₹799',
      description: 'Release chronic tension and restore mobility with our intensive deep tissue massage. Our skilled therapists use targeted pressure and specialized techniques to reach deeper layers of muscle and connective tissue, addressing knots, adhesions, and areas of chronic pain. This powerful treatment is perfect for athletes, active individuals, or anyone seeking relief from muscular tension and stress-related discomfort.',
      benefits: ['Muscle Tension Relief', 'Improved Mobility', 'Pain Reduction', 'Better Posture', 'Enhanced Recovery'],
      image: 'https://images.pexels.com/photos/3757958/pexels-photo-3757958.jpeg?w=600&h=400&fit=crop',
      icon: Waves
    },
    {
      id: 4,
      title: 'Couples Paradise Retreat',
      category: 'Romance',
      duration: '150 minutes',
      price: '₹1199',
      description: 'Share an intimate wellness journey with your loved one in our exclusive couples suite. This romantic spa experience includes side-by-side massages, private relaxation time in our couples\' sanctuary, and champagne service. The treatment combines Swedish massage techniques with hot stone therapy, creating the perfect atmosphere for connection and relaxation. Complete with rose petals, candlelight, and personalized attention for an unforgettable romantic escape.',
      benefits: ['Romantic Bonding', 'Shared Relaxation', 'Stress Relief for Two', 'Memory Creation', 'Intimate Connection'],
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?w=600&h=400&fit=crop',
      icon: Sparkles
    }
  ];

  const spaFeatures = [
    {
      icon: Waves,
      title: 'Himalayan Salt Room',
      description: 'Therapeutic salt therapy for respiratory wellness'
    },
    {
      icon: Leaf,
      title: 'Meditation Garden',
      description: 'Serene outdoor space for mindfulness practice'
    },
    {
      icon: Sun,
      title: 'Thermal Pools',
      description: 'Mineral-rich pools at varying temperatures'
    },
    {
      icon: Sparkles,
      title: 'Crystal Healing Room',
      description: 'Energy balancing with precious gemstones'
    }
  ];

  return (
    <>
      <Head>
        <title>World-Class Spa Treatments - Atharva Resort & Spa</title>
        <meta name="description" content="Indulge in our luxury spa treatments including aromatherapy, Ayurvedic healing, deep tissue massage, and couples retreats. Experience wellness and rejuvenation in our tranquil mountain sanctuary." />
        <meta name="keywords" content="spa treatments, aromatherapy, Ayurvedic healing, deep tissue massage, couples spa, wellness retreat, relaxation" />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 ">
          <img
            src="https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?w=1920&h=1080&fit=crop"
            alt="Luxury Spa Treatment Room"
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay" />
        </div>
        
        <div className="relative z-10 text-center text-white container-width section-padding">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            Spa & Wellness Sanctuary
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Restore your mind, body, and spirit with our collection of transformative 
            spa treatments and wellness experiences, designed to nurture your complete well-being.
          </motion.p>
        </div>
      </section>

      {/* Spa Services */}
      <section className="py-20">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Signature Spa Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each treatment is carefully crafted to provide therapeutic benefits 
              while delivering an experience of pure luxury and relaxation.
            </p>
          </motion.div>

          <div className="space-y-20">
            {spaServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Service Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-2xl shadow-2xl"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </motion.div>
                </div>

                {/* Service Details */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4 flex items-center space-x-4">
                    <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      <service.icon className="mr-2" size={16} />
                      {service.category}
                    </span>
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-1" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>

                  <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-3">Treatment Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Booking */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-primary-600 mb-1">
                        {service.price}
                      </div>
                      <div className="text-gray-500 text-sm">
                        per treatment
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setBookingModal({ 
                        isOpen: true, 
                        title: service.title, 
                        type: 'spa' 
                      })}
                      className="btn-primary"
                    >
                      Book Treatment
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Features */}
      <section className="py-20 bg-sage-50">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Wellness Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complement your spa treatments with access to our comprehensive wellness amenities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spaFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  <feature.icon size={48} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Philosophy */}
      <section className="py-20 bg-white">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
                Our Wellness Philosophy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Atharva Spa, we believe that true wellness encompasses the harmony of 
                mind, body, and spirit. Our treatments are rooted in ancient healing traditions 
                while embracing modern wellness innovations, creating transformative experiences 
                that promote lasting well-being.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Each guest receives personalized attention from our certified therapists, 
                who carefully customize every treatment to meet your individual wellness goals. 
                We use only the finest organic products and time-honored techniques to ensure 
                your complete satisfaction and rejuvenation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-gray-600">Signature Treatments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                  <div className="text-gray-600">Expert Therapists</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3997996/pexels-photo-3997996.jpeg?w=600&h=700&fit=crop"
                alt="Spa Therapist"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Sparkles className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Premium Experience</div>
                    <div className="text-sm text-gray-600">Personalized wellness journey</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-width section-padding text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Begin Your Wellness Journey
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Book your spa treatment today and experience the transformative power of our wellness sanctuary
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setBookingModal({ isOpen: true, title: 'Spa Treatment', type: 'spa' })}
              className="bg-white text-primary-700 hover:bg-cream-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Your Treatment
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ isOpen: false, title: '', type: 'spa' })}
        title={bookingModal.title}
        type={bookingModal.type}
      />
    </>
  );
};

export default Spa;