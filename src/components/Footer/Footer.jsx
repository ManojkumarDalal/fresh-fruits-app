import { motion } from "framer-motion";
import React from "react";
import { FaFacebook, FaInstagram, FaLeaf, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary/10 text-gray-700 mt-12 py-12">
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{durattion:1, delay:0.5}}
      className="container p-md flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>

        {/* Social Media Icon Section */}
        <div>
          <div  className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={40} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={40} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={40} />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
