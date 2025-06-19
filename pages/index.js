"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Waves,
  TreePine,
  Award,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import BookingModal from "../components/ui/BookingModal";

import UttarakhandExploreSection from "../components/ui/UttarakhandExploreSection";
import img1 from "../public/images/home/1.jpg";
import img2 from "../public/images/home/2.jpg";
import img3 from "../public/images/home/3.jpg";
import img4 from "../public/images/home/4.jpg";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import bg1 from "../public/images/home/bg1.jpg";
import bg2 from "../public/images/home/bg2.jpg";
import bg3 from "../public/images/home/bg3.jpg";
import backgroundImage from "../public/images/home/sitebg.png";
import backgroundImage2 from "../public/images/home/sitebg4.jpg";
import backgroundImage3 from "../public/images/home/sitebg6.webp";

const Home = () => {
  const [bookingModal, setBookingModal] = useState({
    isOpen: false,
    title: "",
    type: "",
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Wifi,
      title: "Complimentary WiFi",
      description: "High-speed internet throughout the resort",
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Complimentary parking with premium valet service",
    },
    {
      icon: Utensils,
      title: "Gourmet Dining",
      description: "Multiple restaurants with world-class cuisine",
    },
    {
      icon: Dumbbell,
      title: "Fitness & Wellness",
      description: "24/7 state-of-the-art fitness facilities",
    },
    {
      icon: Waves,
      title: "Infinity Pool",
      description: "Stunning infinity pool with mountain panoramas",
    },
    {
      icon: TreePine,
      title: "Nature Experiences",
      description: "Guided trails through pristine wilderness",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      comment:
        "An absolutely transformative experience. The spa treatments were divine, the staff exceeded every expectation, and the mountain views took our breath away. This is luxury redefined.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100&h=100&fit=crop",
    },
    {
      name: "Michael Chen",
      location: "San Francisco, CA",
      rating: 5,
      comment:
        "Perfect escape from city life. The rooms are architectural masterpieces and the attention to detail is extraordinary. Every moment felt like a dream.",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=100&h=100&fit=crop",
    },
    {
      name: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      comment:
        "Our honeymoon was absolutely magical here. The romantic atmosphere, exceptional service, and breathtaking surroundings created memories we'll treasure forever.",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=100&h=100&fit=crop",
    },
  ];

  const roomHighlights = [
    {
      title: "Elite Retreat",
      subtitle: "Mountain View Luxury",
      description:
        "Sophisticated comfort with panoramic mountain vistas and premium amenities",
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?w=500&h=400&fit=crop",
      price: "₹3000",
      features: [
        "King Size Bed",
        "Mountain View",
        "Marble Bathroom",
        "Private Balcony",
      ],
    },
    {
      title: "Royal Premium",
      subtitle: "Elevated Experience",
      description:
        "Spacious suites with separate living areas and personalized butler service",
      image:
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?w=500&h=400&fit=crop",
      price: "₹4000",
      features: [
        "Separate Living Area",
        "Butler Service",
        "Premium Bathroom",
        "Private Terrace",
      ],
    },
    {
      title: "Platinum Signature Suite",
      subtitle: "Ultimate Luxury",
      description:
        "Expansive suites with 360° views and dedicated concierge service",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=500&h=400&fit=crop",
      price: "₹6000",
      features: [
        "360° Views",
        "Master Bedroom",
        "Spa Bathroom",
        "Personal Concierge",
      ],
    },
  ];

  const spaHighlights = [
    {
      title: "Aromatherapy Bliss",
      duration: "90 min",
      price: "₹400",
      description: "Therapeutic journey with healing essential oils",
    },
    {
      title: "Ayurvedic Healing",
      duration: "120 min",
      price: "₹1200",
      description: "Ancient wisdom for modern wellness",
    },
    {
      title: "Couples Retreat",
      duration: "150 min",
      price: "₹1300",
      description: "Intimate spa experience for two",
    },
  ];

  const stats = [
    { number: "10+", label: "Luxury Suites" },
    { number: "15+", label: "Spa Treatments" },
    { number: "100%", label: "Guest Satisfaction" },
    { number: "24/7", label: "Concierge Service" },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /// --- Home Page Hero Section Condition --- ///

  const images = [bg1, bg2, bg3];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="no-overflow">
      <Head>
        <title>
          Atharva Resort & Spa - Luxury Mountain Retreat & Wellness Sanctuary
        </title>
        <meta
          name="description"
          content="Experience ultimate luxury at Atharva Resort & Spa. Premium mountain accommodations, world-class spa treatments, and breathtaking views await you in our serene wellness sanctuary."
        />
        <meta
          name="keywords"
          content="luxury resort, spa, mountain retreat, vacation, premium accommodation, wellness sanctuary, luxury hotel"
        />
      </Head>

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImage === index ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 w-full h-full"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl float-animation hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl float-reverse hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
        />

        <div className="relative z-10 text-center text-white container-width section-padding flex flex-col justify-center min-h-screen">
          {/* Welcome Badge */}
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-2 mt-4 border border-white/20">
              <Sparkles className="mr-2" size={16} />
              Welcome to Paradise
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block"
            >
              Atharva Resort
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-300 mt-2 sm:mt-4 font-light"
            >
              & Spa
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg sm:text-xl md:text-2xl max-w-4xl mb-10 mx-auto leading-relaxed font-light px-4"
          >
            <div className="flex flex-wrap items-baseline justify-center">
              <span>Come discover your perfect </span>
              <FlipWords
                words={["Escape", "Sanctuary", "Adventure"]}
                duration={1000}
                className="text-primary-400 font-semibold text-4xl inline-block"
              />
            </div>
            <span> in the heart of nature.</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                setBookingModal({
                  isOpen: true,
                  title: "Your Perfect Stay",
                  type: "room",
                })
              }
              className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 shadow-2xl hover:shadow-primary-500/25 flex items-center justify-center space-x-2"
            >
              <span>Reserve Your Escape</span>
              <ArrowRight size={20} />
            </motion.button>

            <Link href="/spa">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 shadow-xl"
              >
                Explore Spa Treatments
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-200 text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm font-medium">Discover More</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-16 sm:py-20 lg:py-32 overflow-hidden"
      >
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-green-50 border border-green-400 text-green-600 rounded-full text-sm font-medium mb-6">
                Welcome to Luxury
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-logoPrimary-50 mb-6">
                Where Luxury Meets Serenity
              </h2>
              <p className="text-lg  text-gray-600 leading-relaxed mb-8">
                Nestled in the pristine mountains, Atharva Resort & Spa offers
                an unparalleled escape where every moment is designed to restore
                your spirit and rejuvenate your soul. Our commitment to
                excellence ensures that your stay transcends the ordinary.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4">
                  <Award
                    className="text-logoSecondry-50 mx-auto mb-2"
                    size={32}
                  />
                  <div className="font-semibold text-gray-800">
                    Award Winning
                  </div>
                  <div className="text-sm text-gray-600">Luxury Resort</div>
                </div>
                <div className="text-center p-4">
                  <Users className="text-primary-600 mx-auto mb-2" size={32} />
                  <div className="font-semibold text-gray-800">Expert Team</div>
                  <div className="text-sm text-gray-600">
                    Personalized Service
                  </div>
                </div>
              </div>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Discover Our Story
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={img3}
                  alt="Resort Meditation Garden"
                  className="rounded-2xl shadow-xl md:h-[25rem] object-cover"
                />
                <Image
                  src={img2}
                  alt="Luxury Spa Treatment"
                  className="rounded-2xl shadow-xl md:h-[25rem] object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-100 text-primary-600 border border-primary-400 p-6 rounded-xl shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    4+
                  </div>
                  <div className="text-primary-600 text-sm">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="sticky top-0 ">
        <UttarakhandExploreSection />
      </div>

      {/* Rooms Section */}
      <section
        style={{
          backgroundImage: `url(${backgroundImage3.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative", // necessary for overlay
          zIndex: 0,
        }}
        className="py-16 sm:py-20 lg:py-32 bg-sage-50 overflow-hidden"
      >
        {/* Black Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <div className="container-width section-padding relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-green-50 border border-green-400 text-green-600 rounded-full text-sm font-medium mb-6">
              Luxury Accommodations
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Exquisite Rooms & Suites
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Each accommodation is a masterpiece of design and comfort,
              offering breathtaking views and premium amenities for an
              unforgettable stay.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {roomHighlights.map((room, index) => (
              <motion.div
                key={room.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden card-hover group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-green-50 border border-green-400 text-green-600 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-semibold ">
                      <span className="text-green-700">From</span> {room.price}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="mb-4">
                    <h3 className="font-playfair text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                      {room.title}
                    </h3>
                    <p className="text-primary-600 font-medium">
                      {room.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    {room.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setBookingModal({
                        isOpen: true,
                        title: room.title,
                        type: "room",
                      })
                    }
                    className="w-full btn-primary"
                  >
                    Reserve Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <Link href="/rooms">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-4"
              >
                View All Accommodations
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Spa Preview Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white overflow-hidden">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?w=600&h=500&fit=crop"
                alt="Luxury Spa Experience"
                className="rounded-3xl shadow-2xl w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute -bottom-6 sm:-bottom-8 border border-primary-400 -right-6 sm:-right-8 bg-primary-100 text-primary-600 p-4 sm:p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold mb-1">15+</div>
                  <div className="text-primary-600 text-xs sm:text-sm">
                    Signature Treatments
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-2 bg-green-50 border border-green-400 text-green-600 rounded-full text-sm font-medium mb-6">
                Wellness Sanctuary
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Rejuvenate Your Spirit
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                Our world-class spa combines ancient healing traditions with
                modern wellness innovations, creating transformative experiences
                that restore balance and vitality.
              </p>

              <div className="space-y-4 mb-8">
                {spaHighlights.map((treatment, index) => (
                  <div
                    key={treatment.title}
                    className="flex items-center justify-between p-4 bg-cream-50 rounded-xl"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {treatment.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        {treatment.description}
                      </p>
                    </div>
                    <div className="text-right ml-4 flex-shrink-0">
                      <div className="font-bold text-green-600 text-sm sm:text-base">
                        {treatment.price}
                      </div>
                      <div className="text-xs text-gray-500">
                        {treatment.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/spa" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary"
                  >
                    Explore Spa Treatments
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    setBookingModal({
                      isOpen: true,
                      title: "Spa Treatment",
                      type: "spa",
                    })
                  }
                  className="flex-1 btn-secondary"
                >
                  Book Treatment
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        style={{
          backgroundImage: `url(${backgroundImage2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className="py-16 sm:py-20 lg:py-32 overflow-hidden relative"
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="container-width section-padding relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-logoPrimary-50/10 border border-green-50/30 text-white rounded-full text-sm font-medium mb-6">
              Premium Amenities
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Exceptional Experiences
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Every detail is thoughtfully designed to exceed your expectations
              and create lasting memories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={48} />
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white overflow-hidden">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-green-50 border border-green-400 text-green-600 rounded-full text-sm font-medium mb-6">
              Guest Stories
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Unforgettable Experiences
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our guests return time and time again
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-cream-50 p-8 sm:p-12 rounded-3xl shadow-xl text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={24}
                    />
                  )
                )}
              </div>
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-light italic mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].comment}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-800 text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Plan Your Perfect Escape
              </h2>
              <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
                Our dedicated concierge team is ready to help you create an
                unforgettable experience tailored to your desires. Contact us
                today to begin planning your luxury mountain retreat.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-primary-200 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-primary-200 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    reservations@atharvaresort.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin
                    size={20}
                    className="text-primary-200 flex-shrink-0"
                  />
                  <span className="text-sm sm:text-base">
                    Paradise Valley, Mountain Region
                  </span>
                </div>
              </div>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-700 hover:bg-cream-100 px-6 sm:px-8 py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-3xl"
            >
              <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-6">
                Quick Reservation
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Check-in
                    </label>
                    <div className="bg-white/20 p-3 rounded-lg flex items-center space-x-2">
                      <Calendar size={16} className="flex-shrink-0" />
                      <span className="text-sm">Select Date</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Check-out
                    </label>
                    <div className="bg-white/20 p-3 rounded-lg flex items-center space-x-2">
                      <Calendar size={16} className="flex-shrink-0" />
                      <span className="text-sm">Select Date</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Guests
                  </label>
                  <div className="bg-white/20 p-3 rounded-lg flex items-center space-x-2">
                    <Users size={16} className="flex-shrink-0" />
                    <span className="text-sm">2 Adults</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    setBookingModal({
                      isOpen: true,
                      title: "Your Stay",
                      type: "room",
                    })
                  }
                  className="w-full bg-white text-primary-700 hover:bg-cream-100 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Check Availability
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ isOpen: false, title: "", type: "" })}
        title={bookingModal.title}
        type={bookingModal.type}
      />
    </div>
  );
};

export default Home;
