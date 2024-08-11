import React, { useRef, useState } from "react";
import { FaLeaf } from "react-icons/fa6";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import Banner from "../Banners/Banner";
import Banner2 from "../Banners/Banner2";
import Banner3 from "../Banners/Banner3";
import Hero from "../Hero/Hero";
import Menus from "../Menus/Menus";
import Footer from "../Footer/Footer";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "About",
  },
  {
    id: 3,
    title: "Products",
  },
  {
    id: 4,
    title: "Shop",
  },
  {
    id: 5,
    title: "Contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Home = useRef(null);
  const About = useRef(null);
  const Products = useRef(null);
  const Shop = useRef(null);
  const Contact = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "Home":
        Home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "About":
        About.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Products":
        Products.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Shop":
        Shop.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact":
        Contact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <nav className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container fixed left-0 right-0 top-0 z-50 bg-white shadow-md flex items-center justify-between py-4 md:pt-4"
        >
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li
                  key={menu.id}
                  onClick={() => scrollToSection(menu.title)}
                  className="text-xl font-semibold cursor-pointer"
                >
                  <span className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444]">
                    {menu.title}
                  </span>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* Mobile Hamburger Menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl cursor-pointer" />
          </div>
        </motion.div>
      </nav>
      {/* Mobile Menu Section */}
      <ResponsiveMenu open={open} />
      
      {/* Sections */}
      <div ref={Home} className="mt-[100px]">
        <Hero />
      </div>
      <div ref={About}>
        <Banner />
      </div>
      <div ref={Products}>
        <Banner2 />
      </div>
      <div ref={Shop}>
        <Banner3 />
      </div>
      <div ref={Contact}>
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
