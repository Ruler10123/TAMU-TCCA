'use client';

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { motion } from "framer-motion";
import LotusPetals from "@/components/animations/LotusPetals";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const activities = [
  {
    image: "/adopt-a-street.jpg",
    title: "Adopt a Street",
    description: "Community Clean-up Initiative"
  },
  {
    image: "/origami.jpg",
    title: "Disaster Relief Fundraising",
    description: "Origami Workshop"
  },
  {
    image: "/campus-cleanup.jpg",
    title: "Campus Cleanup",
    description: "Environmental Stewardship"
  },
  {
    image: "/dumplings-cultural-exchange.jpg",
    title: "Dumpling Making",
    description: "Cultural Culinary Workshop"
  },
  {
    image: "/houston-based.jpg",
    title: "Houston Service",
    description: "Community Outreach"
  },
  {
    image: "/potluck.jpg",
    title: "Community Potluck",
    description: "Building Connections"
  },
  {
    image: "/humanitarian-workshops.jpg",
    title: "Humanitarian Aid",
    description: "Global Impact"
  }
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !isPaused,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-[25] to-transparent" />
          <LotusPetals />
        </motion.div>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center relative z-10"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                <Image
                  src="/Reveille.jpg"
                  alt="TCCA Logo"
                  fill
                  style={{ objectFit: "contain", mixBlendMode: "multiply" }}
                  priority
                  className="opacity-90"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <motion.span 
                  variants={fadeInUp}
                  className="block text-gray-500"
                >
                  Welcome to
                </motion.span>
                <motion.span 
                  variants={fadeInUp}
                  className="block text-emerald-700"
                >
                  Tzu Chi Collegiate Association
                </motion.span>
              </h1>
            </motion.div>
            <motion.p 
              variants={fadeInUp}
              className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              Join us in promoting compassion, charity, and community service at Texas A&M University.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md shadow"
              >
                <a href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10">
                  Join Us
                </a>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"
              >
                <a href="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-50 border-emerald-600 md:py-4 md:text-lg md:px-10">
                  Learn More
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Photo Showcase Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Our Impact</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Making a Difference in Our Community
            </p>
          </motion.div>
          <div className="relative">
            <Slider {...settings} className="activity-carousel">
              {activities.map((activity, index) => (
                <div key={index} className="px-2 py-6">
                  <div
                    className="relative h-64 rounded-lg overflow-hidden shadow-lg transition-all duration-300"
                    onMouseEnter={() => {
                      setHoveredIndex(index);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(null);
                      setIsPaused(false);
                    }}
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                      filter: hoveredIndex !== null && hoveredIndex !== index ? 'blur(2px)' : 'none',
                      boxShadow: hoveredIndex === index ? '0 0 20px rgba(5, 150, 105, 0.4)' : '',
                    }}
        >
          <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-semibold">{activity.title}</h3>
                        <p className="text-sm">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:text-center"
          >
            <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Our Activities</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Making a Difference Together
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Join us in our various activities and initiatives to help create positive change in our community.
            </p>
          </motion.div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Activity 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="pt-6"
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Community Service</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Regular volunteer opportunities and community outreach programs to help those in need.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Activity 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
                className="pt-6"
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Cultural Events</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Cultural celebrations and educational events that promote understanding and compassion.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Activity 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5 }}
                className="pt-6"
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Member Development</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Leadership opportunities and personal growth through service and community engagement.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
