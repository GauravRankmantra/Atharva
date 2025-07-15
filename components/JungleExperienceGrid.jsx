"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    title: "Jungle Safari",
    image: "/images/jungle.jpg",
    size: "col-span-2 row-span-1",
  },
  {
    title: "Swimming Pool",
    image: "/images/bg4.jpeg",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Wooden Cottages",
    image: "/images/suiet.jpeg",
    size: "col-span-1 row-span-2",
  },
  {
    title: "Hiking Trails",
    image: "/images/hiking.jpg",
    size: "col-span-2 row-span-1",
  },
  {
    title: "Camping Area",
    image: "/images/camping.jpg",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Rain Dance & Music",
    image: "/images/rain.jpg",
    size: "col-span-1 row-span-1",
  },
];

export default function JungleExperienceGrid() {
  return (
    <section className="p-4 md:p-8 bg-[#f9f9f7] my-8 md:my-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#333]">Discover Our Jungle Retreat</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[220px] max-w-6xl mx-auto">
        {experiences.map((item, idx) => (
          <motion.div
            key={idx}
            // whileHover is removed as per the request
            className={`relative rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl group cursor-pointer ${item.size}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4">
              <h3 className="text-white text-lg md:text-xl font-semibold text-center drop-shadow-md">
                {item.title}
              </h3>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}