"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Início", "Sobre Nós", "Produtos", "Galeria", "Contacto"]
  const isActive = isScrolled || isHovered

  return (
    <motion.header
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{
        y: 0,
        opacity: 1,
        width: isScrolled ? "100%" : "70%",
        top: isScrolled ? 0 : 24,
        borderRadius: isScrolled ? 0 : 50,
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
            className="flex-shrink-0"
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

          <motion.button
            className="hidden md:block bg-amber-700 hover:bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Encomendar
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
