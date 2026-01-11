"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { Sparkles, Award, Heart } from "lucide-react"

const specialties = [
  {
    id: "creativity",
    name: "Criatividade",
    icon: Sparkles,
    description:
      "Cada design é único, elaborado para refletir a sua visão e dar vida aos sonhos com talento artístico.",
    color: "from-amber-100 to-orange-100",
  },
  {
    id: "excellence",
    name: "Excelência",
    icon: Award,
    description:
      "Usamos apenas os melhores ingredientes e técnicas consagradas para garantir que cada mordida seja perfeição.",
    color: "from-pink-100 to-rose-100",
  },
  {
    id: "purpose",
    name: "Propósito",
    icon: Heart,
    description:
      "Cada criação carrega significado, celebrando amor, alegria e os momentos que mais importam na sua vida.",
    color: "from-yellow-100 to-amber-100",
  },
]

export function CollectionStrip() {
  return (
    <section className="py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-neutral-900 mb-4 text-6xl font-normal">Os Nossos Valores</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Três pilares que guiam cada criação na Anattoli Confeitaria.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <motion.div
                key={specialty.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${specialty.color} rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-amber-700" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">{specialty.name}</h3>
                <p className="text-neutral-700 leading-relaxed text-sm">{specialty.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
