"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MenuIcon, X, ChevronDown, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isFeatureOpen, setIsFeatureOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
    className={`   fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-500 ${
        scrolled ? "bg-gray-900 border-transparent" : "bg-transparent border-white/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
           
            {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-8 h-8 flex items-center justify-center"> {/* Updated logo background color */}
   
              <img src="/logo-bg-icon.png" alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              
            </motion.div>
          </Link>
          <span className="text-white font-bold px-2">Primera Intervención</span>

          {/* Center Navigation Items */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              <NavLink href="#header" className="text-white hover:text-blue-500">Nosotros</NavLink>
              <NavLink href="#capacitaciones" className="text-white hover:text-blue-500">Capacitaciones</NavLink>
              <NavLink href="#servicios" className="text-white hover:text-blue-500">Servicios</NavLink>
              <NavLink href="#contacto" className="text-white hover:text-blue-500">Contacto</NavLink>
              <a href="/blog" className="text-white hover:text-blue-500">Blog</a>
            </div>
          </div>

          {/* Right Side Auth Buttons and Social Icons */}
          <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-4">
                {/* Social Icons */}
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 text-white hover:text-blue-500" /> {/* Updated hover color */}
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-white hover:text-blue-500" /> {/* Updated hover color */}
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-white hover:text-blue-500" /> {/* Updated hover color */}
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=+5491167373441&text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20capacitación%20en%20seguridad%20y%20respuesta%20ante%20emergencias%20de%20Primera%20Intervención."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-500 hover:bg-green-600 text-white">WhatsApp</Button> {/* Updated button color */}
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <MenuIcon />}
              
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-16 left-0 right-0 bg-white md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="px-4 py-4 space-y-4">
          <NavLink href="#header" className="block text-gray-600 hover:text-blue-500" onClick={() => setIsOpen(false)}>Nosotros</NavLink>
          <NavLink href="#capacitaciones" className="block text-gray-600 hover:text-blue-500" onClick={() => setIsOpen(false)}>Capacitaciones</NavLink>
          <NavLink href="#servicios" className="block text-gray-600 hover:text-blue-500" onClick={() => setIsOpen(false)}>Servicios</NavLink>
          <NavLink href="#contacto" className="block text-gray-600 hover:text-blue-500" onClick={() => setIsOpen(false)}>Contacto</NavLink>
          <a href="/blog" className="block text-gray-600 hover:text-blue-500 pb-4">Blog</a>
          <a
            href="https://api.whatsapp.com/send?phone=+5491167373441&text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20capacitación%20en%20seguridad%20y%20respuesta%20ante%20emergencias%20de%20Primera%20Intervención."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">WhatsApp</Button> {/* Updated button color */}
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navigation;

