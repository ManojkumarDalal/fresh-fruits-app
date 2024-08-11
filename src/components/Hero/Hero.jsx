import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroImg from "../../assets/fruit-plate.png";
import LeafImg from "../../assets/leaf.png";
import { FadeLeft, FadeRight, FadeUp } from "../../utility/Animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[550px] relative">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left py-14 space-y-3 lg:max-w-[400px] ">
            <motion.h1
              variants={FadeLeft(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl text-primary  lg:text-7xl w-[550px] font-bold leading-relaxed xl:leading-loose font-averia">
              Healthy
              <div className="mt-[-25px]">
                <span className="text-black">Fresh</span>{" "}
                <span className="text-secondary">Fruits!</span>
              </div>
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className="text-2xl font-semibold tracking-wide "
            >
              Order now for fresh healthy life
            </motion.p>
            <motion.p
              variants={FadeLeft(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-800 text-md text-justify"
            >
              Healthy and yummy food for fresh morning breakfast. Eat Daily for
              good health and mind Order now and get 20% off on your first order
            </motion.p>
            {/* Button Section */}
            <motion.div
              variants={FadeLeft(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 my-3">
                <span className="text-2xl font-bold">
                  <IoBagHandleOutline />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero Images */}
        <motion.div
          initial={{ opacity: 0, x: 200, rotate: 75 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <img src={HeroImg} className="w-[350px] md:w-[550px] drop-shadow" />
        </motion.div>
        {/* Leaf Image */}
        <motion.div
          initial={{ opacity: 0, y: -200, rotate: 75 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]"
        >
          <img src={LeafImg} className="w-full md:max-w-[300px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
