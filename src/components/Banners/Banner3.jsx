import React from "react";
import Banner3Img from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/Animation";
import { IoBagHandleOutline } from "react-icons/io5";

const bgStyle = {
  backgroundImage: `url(${Banner3Img})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
};

const Banner3 = () => {
  return (
    <section className="my-[50px]">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 rounded-3xl md:grid-cols-2 space-y-6 md:space-y-0 py-14 "
      >
        {/* Blank div */}
        <div></div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[550px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold uppercase"
            >
              Get Fresh Fruits Today
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
            
            {/* Button Section */}
            <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn text-xl hover:scale-110 flex items-center gap-2 p-3 my-5">
                <span className="text-xl font-semibold">
                  <IoBagHandleOutline />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
