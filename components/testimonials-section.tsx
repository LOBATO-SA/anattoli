"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Reveal } from "./reveal"
import Image from "next/image"

const testimonials = [
  {
    name: "Maria Silva",
    role: "Mãe da Noiva",
    content:
      "O bolo de casamento foi absolutamente espetacular! A qualidade e o gosto superaram as minhas expectativas. A Juliana percebeu exatamente o que eu queria.",
    rating: 5,
    image: "/placeholder.svg?key=ut4wj",
  },
  {
    name: "João Santos",
    role: "Event Organizer",
    content:
      "Trabalhei com a Anattoli em vários eventos corporativos. A consistência, qualidade e inovação deles é incomparável. Todos os nossos clientes ficam maravilhados.",
    rating: 5,
    image: "/placeholder.svg?key=u6h33",
  },
  {
    name: "Ana Costa",
    role: "Empresária",
    content:
      "Para o meu aniversário, a Juliana criou uma peça de arte. Não era apenas um bolo, era uma experiência. Recomendo a Anattoli para todas as ocasiões especiais.",
    rating: 5,
    image: "/placeholder.svg?key=04xo8",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden" id="testimonios">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-neutral-900 mb-4 text-6xl font-normal">O Que Nossos Clientes Estão Dizendo</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Temos a honra de fazer parte dos seus momentos mais queridos. Aqui está o que os nossos valiosos clientes
              têm a dizer sobre a experiência connosco.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
