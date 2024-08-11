import React from "react";
import BannerImg from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/Animation";
import { Element } from "react-scroll";

const Banner = () => {
  return (
    <Element name="about">
      <section id="about">
        <div className="container bg-secondary/10 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
          {/* Banner Image */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "Spring", stiffness: 100, delay: 0.5 }}
              viewport={{ once: true }}
              src={BannerImg}
              alt=""
              className="w-[300px] md:max-w-[400px] h-full object-cover"
            />
          </div>
          {/* Brand Info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl text-center lg:text-6xl font-bold uppercase w-[450px] mb-[30px]"
              >
                brand info
              </motion.h1>
              <motion.p
                variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl text-justify w-[550px]"
              >
                "Healthy Fruit Sales offers the freshest, highest-quality
                fruits, sourced directly from sustainable farms. We prioritize
                health and flavor, ensuring every bite is packed with nutrients
                and taste.
              </motion.p>
              <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl text-justify w-[550px]"
              >
                Discover a wide range of delicious, hand-picked fruits perfect
                for your daily needs. Freshness guaranteed, from our farms to
                your table."
              </motion.p>
              {/* Button Section */}
              <motion.div
                variants={FadeUp(1.1)}
                initial="hidden"
                animate="visible"
                className="flex justify-center md:justify-start"
              >
                <button className="text-xl primary-btn hover:scale-110 p-3 mt-[30px]">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Banner;
