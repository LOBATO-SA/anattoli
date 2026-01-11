"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"

const materials = [
  {
    id: "pistachio",
    name: "Pistachio", // shortened from "Pistachio Green"
    description: "Luxurious pistachio green velvet with rich texture and depth",
    image: "/material-oak-macro.png",
    backgroundImage: "/images/new-source-bloom-max-1x.jpeg",
    tint: "bg-green-50",
  },
  {
    id: "lunar",
    name: "Lunar", // shortened from "Lunar Gray"
    description: "Sophisticated lunar gray with subtle metallic undertones",
    image: "/material-walnut-macro.png",
    backgroundImage: "/lunar-gray-interior.png",
    tint: "bg-gray-100",
  },
  {
    id: "martian",
    name: "Martian", // shortened from "Martian Red"
    description: "Bold martian red with warm terracotta influences",
    image: "/material-steel-macro.png",
    backgroundImage: "/martian-red-interior.png",
    tint: "bg-red-50",
  },
]

export function MaterialsSection() {
  const [activeMaterial, setActiveMaterial] = useState("pistachio")

  const activeMaterialData = materials.find((m) => m.id === activeMaterial) || materials[0]

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
      <span>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.03,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    )
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-neutral-50" id="sobre-nos">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-neutral-900 mb-4 text-6xl font-normal">Nossa História</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Onde as suas ideias ganham propósito e se tornam tesouros doces.
            </p>
          </div>
        </Reveal>

        {/* Founder Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image - Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <Image
              src="/elegant-portrait-of-confident-female-pastry-chef-i.jpg"
              alt="Juliana Anattoli - Fundadora & Diretora Criativa"
              width={500}
              height={600}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Founder Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Reveal>
              <div>
                <h3 className="text-amber-700 text-lg font-semibold uppercase tracking-widest mb-4">
                  Juliana Anattoli
                </h3>
                <h2 className="text-4xl font-bold text-neutral-900 mb-2">Fundadora & Diretora Criativa</h2>
                <p className="text-amber-700 text-lg font-semibold mb-6">Chef Confeiteira • Mestre Pasteleira</p>

                <p className="text-neutral-700 leading-relaxed mb-6 text-lg">
                  Na Anattoli Confeitaria, acreditamos que cada celebração merece uma obra-prima. Fundada no coração do
                  Lobito, Angola, a nossa jornada começou com uma paixão simples: criar sobremesas que contam histórias
                  e celebram os momentos mais preciosos da vida.
                </p>

                <p className="text-neutral-700 leading-relaxed mb-6 text-lg">
                  Viajamos através das suas ideias com propósito, transformando-as em obras de arte comestíveis. De
                  encontros íntimos a grandes celebrações, cada criação é elaborada com amor, precisão e os melhores
                  ingredientes.
                </p>

                <motion.button
                  className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Conhecer Mais
                </motion.button>
              </div>
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
