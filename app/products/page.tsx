"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { QuickLookModal } from "@/components/quick-look-modal"
import { Reveal } from "@/components/reveal"

// Mock Data
const allProducts = [
    {
        id: "1",
        name: "Bolo de Chocolate Artesanal",
        price: "AOA 8,500",
        image: "/placeholder.svg?key=cake1",
        badge: "Favorito" as const,
        materials: ["Chocolate Belga", "Cobertura de Ouro"],
        swatches: [],
        quickLookImages: [],
        dimensions: "Ø: 25cm × Alt: 12cm",
        category: "Bolos",
        shop: "Anattoli",
    },
    {
        id: "2",
        name: "Cupcakes de Baunilha",
        price: "AOA 4,200",
        image: "/placeholder.svg?key=cupcake1",
        badge: "Novo" as const,
        materials: ["Baunilha", "Creme"],
        swatches: [],
        quickLookImages: [],
        dimensions: "Cx. de 6",
        category: "Doces",
        shop: "Anattoli",
    },
    {
        id: "3",
        name: "Torta de Frutas",
        price: "AOA 12,000",
        image: "/placeholder.svg?key=tart1",
        badge: "Sazonal" as const,
        materials: ["Frutas Frescas", "Creme"],
        swatches: [],
        quickLookImages: [],
        dimensions: "Ø: 30cm",
        category: "Tortas",
        shop: "Anattoli",
    },
    {
        id: "4",
        name: "Croissants Franceses",
        price: "AOA 2,500",
        image: "/placeholder.svg?key=croissant",
        materials: ["Manteiga Francesa"],
        swatches: [],
        quickLookImages: [],
        dimensions: "Unidade",
        category: "Pastelaria",
        shop: "Parceiro SweetLife",
    },
    {
        id: "5",
        name: "Macarons Sortidos",
        price: "AOA 6,000",
        image: "/placeholder.svg?key=macaron",
        badge: "Luxo" as const,
        materials: ["Amêndoa", "Ganache"],
        swatches: [],
        quickLookImages: [],
        dimensions: "Cx. de 10",
        category: "Doces",
        shop: "Anattoli",
    },
    {
        id: "6",
        name: "Bolo de Cenoura",
        price: "AOA 5,500",
        image: "/placeholder.svg?key=carrot",
        materials: ["Cenoura", "Chocolate"],
        swatches: [],
        quickLookImages: [],
        dimensions: "Ø: 20cm",
        category: "Bolos",
        shop: "Parceiro HomeBaker",
    },
]

const categories = ["Todos", "Bolos", "Doces", "Tortas", "Pastelaria"]
const shops = ["Todos", "Anattoli", "Parceiros"]

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState("Todos")
    const [selectedShop, setSelectedShop] = useState("Todos")
    const [selectedProduct, setSelectedProduct] = useState<any>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleQuickLook = (product: any) => {
        setSelectedProduct(product)
        setIsModalOpen(true)
    }

    const filteredProducts = allProducts.filter((product) => {
        const categoryMatch = selectedCategory === "Todos" || product.category === selectedCategory
        const shopMatch =
            selectedShop === "Todos" ||
            (selectedShop === "Anattoli" ? product.shop === "Anattoli" : product.shop !== "Anattoli")
        return categoryMatch && shopMatch
    })

    return (
        <main className="min-h-screen bg-neutral-50">
            <Header />

            {/* Page Header */}
            <section className="bg-stone-900 text-white pt-32 pb-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?key=pattern')] bg-repeat opacity-5"></div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-dancing text-amber-500 mb-4">
                        Nossos Tesouros
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Explore a nossa coleção completa de delícias artesanais e descubra criações dos nossos parceiros selecionados.
                    </p>
                </div>
            </section>

            {/* Full Width Overlapping Content Sheet */}
            <div className="relative z-20 -mt-24 w-full">
                <div className="bg-white py-24 rounded-t-[3rem] shadow-xl min-h-[500px]">
                    <div className="container-custom py-24 px-6 md:px-12 lg:px-24 xl:px-32">
                        <Reveal>
                            <div className="flex flex-col md:flex-row gap-8 mb-12 items-center justify-between sticky top-24 z-30 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-neutral-100 shadow-sm">
                                {/* Category Filter */}
                                <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar w-full md:w-auto">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === cat
                                                ? "bg-amber-700 text-white shadow-md shadow-amber-900/20"
                                                : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>

                                {/* Shop Filter */}
                                <div className="flex gap-2">
                                    {shops.map((shop) => (
                                        <button
                                            key={shop}
                                            onClick={() => setSelectedShop(shop)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedShop === shop
                                                ? "text-amber-700 bg-amber-50 border border-amber-200"
                                                : "text-neutral-500 hover:text-neutral-900"
                                                }`}
                                        >
                                            {shop}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Product Grid */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            layout
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredProducts.map((product) => (
                                    <motion.div
                                        key={product.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="h-full">
                                            <ProductCard product={product} onQuickLook={handleQuickLook} />
                                            <div className="mt-2 text-xs text-neutral-400 text-right px-2">
                                                Vendido por: <span className="text-amber-700 font-medium">{product.shop}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-neutral-500 text-lg">Nenhum produto encontrado nesta categoria.</p>
                                <button
                                    onClick={() => { setSelectedCategory("Todos"); setSelectedShop("Todos") }}
                                    className="mt-4 text-amber-700 font-medium hover:underline"
                                >
                                    Limpar filtros
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
            <QuickLookModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    )
}
