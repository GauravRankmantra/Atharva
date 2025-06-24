"use client";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * ParallaxScroll component
 * @param {{
 *   items: Array<{ src: StaticImageData; alt?: string }>  // images to display
 *   videoSrc?: string  // optional video source URL
 *   className?: string
 * }} props
 */
export const ParallaxScroll = ({ items = [], videoSrc, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: gridRef, offset: ["start start", "end start"] });

  // Parallax transforms
  const translateUp = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateDown = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["-5deg", "5deg"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Split items into three columns
  const count = items.length;
  const perColumn = Math.ceil(count / 3);
  const firstCol = items.slice(0, perColumn);
  const secondCol = items.slice(perColumn, 2 * perColumn);
  const thirdCol = items.slice(2 * perColumn);

  return (
    <div
      ref={gridRef}
      className={cn("h-[40rem] overflow-y-auto w-full perspective-1000", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto py-40 px-10">
        {/* First column */}
        <div className="grid gap-10">
          {firstCol.map((img, idx) => (
            <motion.div
              key={`col1-${idx}`}
              style={{ y: translateUp, rotate, scale }}
              className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={img.src}
                alt={img.alt || "parallax image"}
                width={400}
                height={400}
                className="object-cover w-full h-80"
              />
            </motion.div>
          ))}
        </div>

        {/* Second column */}
        <div className="grid gap-10">
          {secondCol.map((img, idx) => (
            <motion.div
              key={`col2-${idx}`}
              style={{ y: translateDown, rotate, scale }}
              className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={img.src}
                alt={img.alt || "parallax image"}
                width={400}
                height={400}
                className="object-cover w-full h-80"
              />
            </motion.div>
          ))}

          {/* Optional video under the middle column */}
          {videoSrc && (
            <motion.div
              style={{ y: translateDown }}
              className="col-start-1 col-span-1 mt-10 rounded-2xl overflow-hidden shadow-lg">
              <video
                src={videoSrc}
                muted
                autoPlay
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}
        </div>

        {/* Third column */}
        <div className="grid gap-10">
          {thirdCol.map((img, idx) => (
            <motion.div
              key={`col3-${idx}`}
              style={{ y: translateUp, rotate, scale }}
              className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={img.src}
                alt={img.alt || "parallax image"}
                width={400}
                height={400}
                className="object-cover w-full h-80"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
