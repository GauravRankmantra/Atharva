"use client";

import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Users,
  Wifi,
  Car,
  Coffee,
  Bath,
  Bed,
  Mountain,
  Heart,
} from "lucide-react";
import ImageCarousel from "../components/ui/ImageCarousel";
import BookingModal from "../components/ui/BookingModal";

const Rooms = () => {
  const [bookingModal, setBookingModal] = useState({
    isOpen: false,
    title: "",
    type: "room",
  });

  const rooms = [
    {
      id: 1,
      title: "Wooden Cottage",
      category: "luxury",
      description:
        "Immerse yourself in nature with our handcrafted Wooden Cottages, offering a warm, rustic ambiance combined with modern luxury. Surrounded by a mango orchard and the soothing sounds of nature, each cottage features elegant wood interiors, private pond pools, and open garden access — perfect for a serene escape.",
      features: [
        "1100 Sq Ft Area",
        "Private Pond Pool",
        "Garden Access",
        "Nature Lighting",
        "Rain Dance Zone",
        "Mango Orchard View",
      ],
      amenities: [
        { icon: Users, text: "2 Adults + 2 Children (under 8)" },
        { icon: Bed, text: "Luxury AC Bedroom" },
        { icon: Bath, text: "Super Luxurious Bathroom Fittings" },
        { icon: Coffee, text: "Tea & Coffee Machine" },
        { icon: Wifi, text: "Surround Sound Music System" },
        { icon: Mountain, text: "Jungle Safari Nearby" },
      ],
      images: [
        "images/rooms/13.jpeg",
        "images/rooms/14.jpeg",
        "images/rooms/11.jpeg",
        "images/rooms/12.jpeg",
      ],
      price: "19999",
      priceNote: "per night (includes breakfast)",
    },
    {
      id: 2,
      title: "Fabricated RCC Cottage",
      category: "premium",
      description:
        "Stay in our Fabricated RCC Cottages — thoughtfully constructed to blend strength with style. These cottages boast 1100 sq. ft. of spacious interiors with all modern conveniences, a private garden, ambient nature lighting, and open-bar access. Perfect for families and couples seeking comfort in the wild.",
      features: [
        "1100 Sq Ft RCC Build",
        "Garden & Open Bar Access",
        "Live Kitchen Nearby",
        "Rain Dance & Sports Area",
        "Luxury Bathroom",
        "Private Deck",
      ],
      amenities: [
        { icon: Users, text: "2 Adults + 2 Children (under 8)" },
        { icon: Bed, text: "AC Room with Luxury Bed" },
        { icon: Bath, text: "Premium Bathroom with Power Backup" },
        { icon: Coffee, text: "Tea & Coffee Machines" },
        { icon: Car, text: "Pick & Drop" },
        { icon: Heart, text: "Horse Riding & Jungle Safari Access" },
      ],
      images: [
        "images/rooms/21.jpeg",
        "images/rooms/22.jpeg",
        "images/rooms/23.jpeg",
      ],
      price: "19999",
      priceNote: "per night (includes breakfast)",
    },
  ];

  return (
    <>
      <Head>
        <title>Luxury Rooms & Suites - Atharva Resort & Spa</title>
        <meta
          name="description"
          content="Discover our collection of luxury rooms and suites at Atharva Resort & Spa. From Elite Retreats to Platinum Signature Suites, experience unparalleled comfort and mountain views."
        />
        <meta
          name="keywords"
          content="luxury rooms, suites, mountain view, premium accommodation, Elite Retreat, Royal Premium, Platinum Signature"
        />
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
              Choose from our thoughtfully designed rooms and suites, each
              offering a unique blend of comfort, elegance, and breathtaking
              mountain views.
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
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Room Images */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <ImageCarousel images={room.images} alt={room.title} />
                </div>

                {/* Room Details */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="mb-4">
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                        room.category === "luxury"
                          ? "bg-green-100 text-green-700 border border-green-400"
                          : room.category === "premium"
                          ? "bg-primary-100 text-primary-700 border border-primary-400"
                          : "bg-cream-200 text-cream-800 border border-cream-400"
                      }`}
                    >
                      {room.category.charAt(0).toUpperCase() +
                        room.category.slice(1)}{" "}
                      Category
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
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Key Features:
                    </h3>
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
                        <span className="text-green-700">₹</span>
                        {room.price}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {room.priceNote}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setBookingModal({
                          isOpen: true,
                          title: room.title,
                          type: "room",
                        })
                      }
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
              {
                title: "Daily Housekeeping",
                description: "Twice daily service with turndown",
              },
              {
                title: "Concierge Service",
                description: "24/7 assistance for all your needs",
              },
              {
                title: "Complimentary WiFi",
                description: "High-speed internet throughout",
              },
              {
                title: "Wellness Access",
                description: "Fitness center and pool access",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() =>
          setBookingModal({ isOpen: false, title: "", type: "room" })
        }
        title={bookingModal.title}
        type={bookingModal.type}
      />
    </>
  );
};

export default Rooms;
