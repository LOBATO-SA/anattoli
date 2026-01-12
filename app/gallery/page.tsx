import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-neutral-50">
            <Header />

            {/* Page Header */}
            <section className="bg-stone-900 text-white pt-32 pb-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?key=pattern')] bg-repeat opacity-5"></div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-dancing text-amber-500 mb-4">
                        Galeria de Criações
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Um vislumbre das nossas obras de arte comestíveis.
                    </p>
                </div>
            </section>

            {/* Full Width Content Sheet */}
            <div className="relative z-20 -mt-24 w-full">
                <div className="bg-white rounded-t-[3rem] shadow-xl min-h-[500px]">
                    <div className="container-custom py-24 px-6 md:px-12 lg:px-24 xl:px-32">
                        <div className="grid py-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Placeholders for gallery items */}
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="aspect-square bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-400 hover:bg-neutral-50 transition-colors cursor-pointer border-2 border-transparent hover:border-amber-100">
                                    <span className="font-dancing text-2xl text-amber-700/50">Imagem {i}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
