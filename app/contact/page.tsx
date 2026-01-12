import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-neutral-50">
            <Header />

            {/* Page Header */}
            <section className="bg-stone-900 text-white pt-32 pb-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?key=pattern')] bg-repeat opacity-5"></div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-dancing text-amber-500 mb-4">
                        Entre em Contacto
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Estamos ansiosos para adoçar o seu dia. Mande-nos uma mensagem ou visite-nos.
                    </p>
                </div>
            </section>

            {/* Full Width Content Sheet */}
            <div className="relative z-20 -mt-24 w-full">
                <div className="bg-white py-24 rounded-t-[3rem] shadow-xl min-h-[500px]">
                    <div className="container-custom py-24 px-6 md:px-12 lg:px-24 xl:px-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-neutral-900">Telefone</h3>
                                        <p className="text-neutral-600">+244 923 456 789</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-neutral-900">Email</h3>
                                        <p className="text-neutral-600">encomendas@anattoli.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-neutral-900">Endereço</h3>
                                        <p className="text-neutral-600">No coração do Lobito, Benguela, Angola</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-neutral-50 p-8 rounded-2xl shadow-inner border border-neutral-100">
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Nome</label>
                                        <input type="text" id="name" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 h-10 px-3 bg-white" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Mensagem</label>
                                        <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 bg-white"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-amber-700 text-white py-3 rounded-full font-bold hover:bg-amber-600 transition-colors shadow-lg hover:shadow-amber-500/25">
                                        Enviar Mensagem
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
