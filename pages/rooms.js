'use client';

import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Users, Wifi, Car, Coffee, Bath, Bed, Mountain, Heart } from 'lucide-react';
import ImageCarousel from '../components/ui/ImageCarousel';
import BookingModal from '../components/ui/BookingModal';

const Rooms = () => {
  const [bookingModal, setBookingModal] = useState({ isOpen: false, title: '', type: 'room' });

  const rooms = [
    {
      id: 1,
      title: 'Elite Retreat',
      category: 'luxury',
      description: 'Experience refined luxury in our Elite Retreat rooms, featuring elegant furnishings, premium amenities, and stunning mountain views. Each room is thoughtfully designed with contemporary comfort and timeless sophistication, offering a perfect sanctuary for relaxation and rejuvenation.',
      features: ['Mountain View', 'King Size Bed', 'Marble Bathroom', 'Private Balcony', 'Premium Linens', 'Mini Bar'],
      amenities: [
        { icon: Users, text: 'Up to 2 guests' },
        { icon: Bed, text: 'King size bed' },
        { icon: Bath, text: 'Marble bathroom' },
        { icon: Mountain, text: 'Mountain view' },
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Coffee, text: 'Coffee maker' }
      ],
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?w=800&h=600&fit=crop'
      ],
      price: '2999',
      priceNote: 'per night'
    },
    {
      id: 2,
      title: 'Royal Premium',
      category: 'premium',
      description: 'Indulge in elevated comfort with our Royal Premium suites, featuring spacious layouts, luxurious amenities, and panoramic views. These suites combine modern elegance with personalized service, creating an unforgettable experience for discerning travelers seeking sophistication and style.',
      features: ['Panoramic Views', 'Separate Living Area', 'Premium Bathroom', 'Private Terrace', 'Butler Service', 'Champagne Welcome'],
      amenities: [
        { icon: Users, text: 'Up to 3 guests' },
        { icon: Bed, text: 'King bed + sofa' },  
        { icon: Bath, text: 'Premium bathroom' },
        { icon: Mountain, text: 'Panoramic view' },
        { icon: Wifi, text: 'Free WiFi' }, 
        { icon: Heart, text: 'Butler service' }
      ],
      images: [
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?w=800&h=600&fit=crop'
      ],
      price: '4999',
      priceNote: 'per night'
    },
    {
      id: 3,
      title: 'Platinum Signature Suite',
      category: 'platinum',
      description: 'Experience the pinnacle of luxury in our Platinum Signature Suites, featuring expansive living spaces, world-class amenities, and unparalleled views. These exclusive suites offer the ultimate in comfort and privacy, with personalized concierge service and bespoke touches throughout your stay.',
      features: ['360° Mountain Views', 'Master Bedroom + Living Room', 'Spa Bathroom', 'Private Deck', 'Personal Concierge', '24/7 Room Service'],
      amenities: [
        { icon: Users, text: 'Up to 4 guests' },
        { icon: Bed, text: 'Master bedroom' },
        { icon: Bath, text: 'Spa bathroom' },
        { icon: Mountain, text: '360° views' },
        { icon: Car, text: 'Valet parking' },
        { icon: Heart, text: 'Concierge service' }
      ],
      images: [
        '/images/room1.jpeg',
        '/images/4.jpeg',
        'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?w=800&h=600&fit=crop'
      ],
      price: '5999',
      priceNote: 'per night'
    }
  ];

  return (
    <>
      <Head>
        <title>Luxury Rooms & Suites - Atharva Resort & Spa</title>
        <meta name="description" content="Discover our collection of luxury rooms and suites at Atharva Resort & Spa. From Elite Retreats to Platinum Signature Suites, experience unparalleled comfort and mountain views." />
        <meta name="keywords" content="luxury rooms, suites, mountain view, premium accommodation, Elite Retreat, Royal Premium, Platinum Signature" />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-sage-500 to-cream-100">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Luxury Accommodations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our thoughtfully designed rooms and suites, each offering 
              a unique blend of comfort, elegance, and breathtaking mountain views.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="space-y-20">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Room Images */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ImageCarousel images={room.images} alt={room.title} />
                </div>

                {/* Room Details */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                      room.category === 'luxury' ? 'bg-green-100 text-green-700 border border-green-400' :
                      room.category === 'premium' ? 'bg-primary-100 text-primary-700 border border-primary-400' :
                      'bg-cream-200 text-cream-800 border border-cream-400'
                    }`}>
                      {room.category.charAt(0).toUpperCase() + room.category.slice(1)} Category
                    </span>
                  </div>

                  <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
                    {room.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Amenities Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <amenity.icon className="text-primary-600" size={20} />
                        <span className="text-gray-700">{amenity.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-800 mb-3">Key Features:</h3>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-cream-100 text-cream-800 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Booking */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-1">
                        <span className='text-green-700'>₹</span>{room.price}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {room.priceNote}
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setBookingModal({ 
                        isOpen: true, 
                        title: room.title, 
                        type: 'room' 
                      })}
                      className="btn-primary"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-sage-50">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Included with Every Stay
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional services and amenities to make your stay exceptional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Daily Housekeeping', description: 'Twice daily service with turndown' },
              { title: 'Concierge Service', description: '24/7 assistance for all your needs' },
              { title: 'Complimentary WiFi', description: 'High-speed internet throughout' },
              { title: 'Wellness Access', description: 'Fitness center and pool access' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ isOpen: false, title: '', type: 'room' })}
        title={bookingModal.title}
        type={bookingModal.type}
      />
    </>
  );
};

export default Rooms;