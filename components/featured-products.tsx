"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import { QuickLookModal } from "./quick-look-modal"
import { Reveal } from "./reveal"

const featuredProducts = [
  {
    id: "1",
    name: "Bolo de Chocolate Artesanal",
    price: "AOA 8,500",
    image: "/placeholder.svg?key=owndl",
    badge: "Favorito" as const,
    materials: ["Chocolate Belga", "Cobertura de Ouro"],
    swatches: [
      { name: "Chocolate Escuro", color: "#3d2817" },
      { name: "Chocolate ao Leite", color: "#8b6914" },
      { name: "Chocolate Branco", color: "#f5deb3" },
    ],
    quickLookImages: ["/placeholder.svg?key=tdebi", "/placeholder.svg?key=gtoi5", "/placeholder.svg?key=fk9rg"],
    dimensions: "Ø: 25cm × Alt: 12cm",
  },
  {
    id: "2",
    name: "Cupcakes de Baunilha Premium",
    price: "AOA 4,200",
    image: "/placeholder.svg?key=4tb4u",
    badge: "Novo" as const,
    materials: ["Baunilha Madagascar", "Cobertura com Rosas"],
    swatches: [
      { name: "Rose Suave", color: "#e8a09e" },
      { name: "Creme", color: "#f5e6d3" },
      { name: "Ouro", color: "#d4af37" },
    ],
    quickLookImages: ["/placeholder.svg?key=21z2w", "/placeholder.svg?key=8hntd", "/placeholder.svg?key=elxwf"],
    dimensions: "Altura: 8cm | Cx. de 6",
  },
  {
    id: "3",
    name: "Torta de Frutas Vermelhas",
    price: "AOA 12,000",
    image: "/placeholder.svg?key=3b5xb",
    badge: "Sazonal" as const,
    materials: ["Frutas Frescas", "Creme Caseiro"],
    swatches: [
      { name: "Vermelho Intenso", color: "#c41e3a" },
      { name: "Rosa Claro", color: "#ffb7c5" },
      { name: "Creme", color: "#fefaf0" },
    ],
    quickLookImages: ["/placeholder.svg?key=ahczb", "/placeholder.svg?key=yjq70", "/placeholder.svg?key=shdgp"],
    dimensions: "Ø: 30cm × Alt: 8cm",
  },
]

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleQuickLook = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <section className="py-20 lg:py-32" id="featured-products">
      <div className="container-custom">
        <Reveal>
          <div className="text-left mb-16">
            <h2 className="text-4xl text-neutral-900 mb-4 lg:text-6xl">
              Confeitaria <span className="italic font-light">Artesanal</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Cada criação é elaborada com amor, precisão e os melhores ingredientes. Descubra nossas especialidades
              mais amadas.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  },
                },
              }}
            >
              <Reveal delay={index * 0.1}>
                <ProductCard product={product} onQuickLook={handleQuickLook} />
              </Reveal>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <QuickLookModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
