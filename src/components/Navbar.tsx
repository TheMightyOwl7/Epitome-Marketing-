"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Why Us", href: "#why-us" },
  ];

  return (
    <header className="relative z-50">
      <FloatingNav className="top-4 md:top-6 w-[95vw] md:w-auto md:min-w-[700px] justify-between md:justify-center gap-4 md:gap-8 px-6 py-3 border-white/[0.1] bg-black/80 backdrop-blur-md shadow-lg">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 mr-0 md:mr-4">
          <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">E</span>
          </div>
          <span className="hidden md:block text-white font-display text-lg font-semibold tracking-tight">
            Epitome
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-white transition-colors duration-300 font-body text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 ml-0 md:ml-4">
          <ThemeToggle />
          <Button variant="hero" size="sm" className="hidden md:inline-flex h-9 text-xs px-4">
            Get Started
          </Button>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </FloatingNav>

      {/* Mobile Navigation Dropdown (Separate from Floating Nav to avoid layout issues) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 p-4 rounded-2xl bg-card border border-border shadow-2xl z-[4999] md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-base py-2 border-b border-border/50 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <Button variant="hero" size="default" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
