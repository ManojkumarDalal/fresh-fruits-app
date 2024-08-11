import React from "react";
import Banner2Img from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/Animation";

const Banner2 = () => {
  return (
    <section className=""> 
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Online Fruit Store
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl text-justify w-full"
            >
              "Healthy Fruit Sales offers the freshest, highest-quality fruits,
              sourced directly from sustainable farms. We prioritize health and
              flavor, ensuring every bite is packed with nutrients and taste.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl text-justify w-full"
            >
              Discover a wide range of delicious, hand-picked fruits perfect for
              your daily needs. Freshness guaranteed, from our farms to your
              table."
            </motion.p>
            {/* Button Section */}
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="text-xl primary-btn hover:scale-110 p-3">
                Download APP
              </button>
            </motion.div>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex justify-center items-center w-[450px]">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            src={Banner2Img}
            alt=""
            className="w-[450px] md:max-w-[700px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
