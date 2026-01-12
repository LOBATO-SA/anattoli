"use client"

import { motion } from "framer-motion"
import { Users, Rocket, TrendingUp } from "lucide-react"
import { Reveal } from "./reveal"
import Image from "next/image"

const franchiseFeatures = [
  {
    icon: TrendingUp,
    title: "Modelo de Negócio Comprovado",
    description: "Marca estabelecida com histórico de sucesso e fidelidade dos clientes.",
  },
  {
    icon: Users,
    title: "Formação e Apoio Completo",
    description: "Programa de formação abrangente e apoio operacional contínuo.",
  },
  {
    icon: Rocket,
    title: "Apoio de Marketing",
    description: "Campanhas de marketing nacionais e materiais promocionais locais.",
  },
]

export function FranchisesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white overflow-hidden" id="franquias">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Reveal>
              <div>
                <h3 className="text-amber-700 text-lg font-semibold uppercase tracking-widest mb-4">
                  Parceria para Pastelarias
                </h3>
                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Divulgue os seus Doces na Anattoli</h2>
                <p className="text-neutral-700 leading-relaxed mb-8 text-lg">
                  Tem uma pastelaria? Junte-se à nossa plataforma, alcance mais clientes e aumente as suas vendas.
                  Nós cuidamos da tecnologia e do marketing, você foca no criar sabores inesquecíveis.
                </p>

                {/* Features */}
                <div className="space-y-6 mb-8">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Aumento de Vendas",
                      description: "Alcance novos clientes que procuram doces de qualidade na sua região.",
                    },
                    {
                      icon: Users,
                      title: "Visibilidade Online",
                      description: "Tenha uma presença digital profissional sem custos de desenvolvimento.",
                    },
                    {
                      icon: Rocket,
                      title: "Gestão Simplificada",
                      description: " Ferramentas intuitivas para gerir os seus pedidos e catálogo.",
                    },
                  ].map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-4"
                      >
                        <Icon className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-neutral-900 mb-2">{feature.title}</h4>
                          <p className="text-neutral-600 text-sm">{feature.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Stats */}
                <Reveal>
                  <div className="flex gap-8 mb-8">
                    <div>
                      <p className="text-4xl font-bold text-amber-700">50+</p>
                      <p className="text-neutral-600 text-sm">Parceiros Ativos</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-amber-700">+200%</p>
                      <p className="text-neutral-600 text-sm">Crescimento Médio</p>
                    </div>
                  </div>
                </Reveal>

                <a href="/register">
                  <motion.button
                    className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Criar Conta de Parceiro
                  </motion.button>
                </a>
              </div>
            </Reveal>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/luxury-bakery-confectionery-showcase-with-elegant-.jpg"
              alt="Loja Anattoli - Interior"
              width={600}
              height={700}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
