"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

import { Sparkles, ChevronDown } from "lucide-react"
import { Reveal } from "./reveal"
import { HeartLoader } from "./heart-loader"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const letters = Array.from(text)

    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.04 * i + delay },
      }),
    }

    const child = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring" as const,
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: {
        opacity: 0,
        y: 20,
        transition: {
          type: "spring" as const,
          damping: 12,
          stiffness: 100,
        },
      },
    }

    return (
      <motion.span
        style={{ display: "inline-block", overflow: "hidden", whiteSpace: "pre" }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="inline-block"
      >
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-stone-900"
    >
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-stone-900">
          <HeartLoader />
        </div>
      )}

      {/* Background Image (Mobile) */}
      <div className={`absolute inset-0 z-0 block md:hidden transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Image
          src="/images/anattoli_4.png"
          alt="Anattoli Background"
          fill
          className="object-cover"
          priority
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Background Video (Desktop) */}
      <video
        src="/videos/anattoli.mp4"
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={() => setIsLoaded(true)}
        className={`hidden md:block absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-32 md:pb-40 px-4 text-center">
        <Reveal>
          <div className="mb-6">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
              <div className="text-white drop-shadow-lg">
                <AnimatedText text="Onde os Sonhos" delay={0.3} />
                <br className="hidden md:block" />
                <span className="md:inline hidden"> </span>
                <AnimatedText text="se Tornam" delay={0.8} />
              </div>
              <div className="mt-2 text-5xl md:text-7xl lg:text-8xl">
                <span className="font-dancing bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-sm pb-2 block">
                  <AnimatedText text="Relíquia de sabor" delay={1.5} />
                </span>
              </div>
            </h1>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <motion.p
            className="text-base md:text-xl text-gray-200 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Criamos sobremesas artesanais que contam histórias e celebram os momentos mais preciosos da vida com
            criatividade, propósito e sabor excepcional.
          </motion.p>
        </Reveal>

        <Reveal delay={0.8}>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-5 items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.button
              className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-amber-500/25 min-w-[160px] md:min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5" />
              Encomendar
            </motion.button>
            <motion.button
              className="border-2 border-white/30 hover:border-white/80 text-white hover:bg-white/10 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all min-w-[160px] md:min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Criações
            </motion.button>
          </motion.div>
        </Reveal>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 3.5, duration: 1 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
          onClick={() => {
            const nextSection = document.getElementById("sobre-nos") // Assuming next section has this ID
            if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ChevronDown className="w-10 h-10" />
        </motion.div>
      </div>
    </section>
  )
}
