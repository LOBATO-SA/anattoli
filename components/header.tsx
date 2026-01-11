"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    handleResize()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const navItems = ["Início", "Sobre Nós", "Produtos", "Galeria", "Contacto"]
  const isActive = isScrolled || isHovered || isMobileMenuOpen

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{
          y: 0,
          opacity: 1,
          width: isScrolled || isMobileMenuOpen ? "100%" : isMobile ? "95%" : "70%",
          top: isScrolled || isMobileMenuOpen ? 0 : 24,
          borderRadius: isScrolled || isMobileMenuOpen ? 0 : 50,
          x: "-50%", // Keep centered
          backgroundColor: isActive ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{
          // Entrance animations with delay
          y: { duration: 0.8, delay: 3, ease: [0.21, 0.47, 0.32, 0.98] },
          opacity: { duration: 0.8, delay: 3 },
          // Interactive animations without delay
          width: { duration: 0.5, ease: "easeInOut" },
          top: { duration: 0.5, ease: "easeInOut" },
          borderRadius: { duration: 0.5, ease: "easeInOut" },
          backgroundColor: { duration: 0.3 },
        }}
        className={cn(
          "fixed left-1/2 z-50",
          "backdrop-blur-sm border transition-colors",
          isActive
            ? "border-amber-500/10 shadow-lg shadow-black/10"
            : "border-transparent"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={cn("w-full px-6 md:px-8", isScrolled ? "container-custom" : "")}>
          <div className="flex items-center justify-between h-14 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 relative z-50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href="#"
                className={cn(
                  "text-xl lg:text-2xl font-bold tracking-tight transition-colors",
                  "text-amber-500 hover:text-amber-400"
                )}
                aria-label="Anattoli Confeitaria Home"
              >
                Anattoli
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    "text-gray-300 hover:text-amber-400"
                  )}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Desktop Button */}
            <motion.button
              className="hidden md:block bg-amber-700 hover:bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Encomendar
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden text-amber-500 relative z-50 focus:outline-none p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-2xl font-medium text-amber-500 hover:text-white transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Encomendar
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
