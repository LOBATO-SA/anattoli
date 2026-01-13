import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white">
            {/* Left Side - Video */}
            <div className="relative w-full lg:w-1/2 h-64 lg:h-screen lg:sticky lg:top-0 bg-neutral-900 overflow-hidden order-1">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                >
                    <source src="/videos/bolachas.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                </video>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 p-8 text-white z-10 hidden lg:block">
                    <h2 className="text-4xl font-bold font-dancing mb-2 text-amber-500">Bem-vindo de Volta</h2>
                    <p className="text-lg text-gray-200">Acesse sua conta para gerir suas encomendas e parceiros.</p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 px-6 lg:px-12 xl:px-24 bg-neutral-50 order-2 h-full lg:min-h-screen overflow-y-auto">
                <div className="w-full max-w-md mx-auto">
                    <div className="mb-8">
                        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-600 mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Voltar para Início
                        </Link>
                        <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                            Acesse sua conta
                        </h2>
                        <p className="text-neutral-600">
                            Insira suas credenciais para continuar.
                        </p>
                    </div>

                    <div className="bg-white py-8 px-6 shadow-xl rounded-2xl border border-neutral-100">
                        <form className="space-y-1">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-neutral-300 rounded-lg shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-shadow"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                                    Senha
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-neutral-300 rounded-lg shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-shadow"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-neutral-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-900">
                                        Lembrar-me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-amber-600 hover:text-amber-500">
                                        Esqueceu a senha?
                                    </a>
                                </div>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="button"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-amber-700 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all hover:scale-[1.02]"
                                >
                                    Entrar
                                </button>
                            </div>
                        </form>

                        <div className="mt-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-neutral-200" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-neutral-500">
                                        Novo na Anattoli?
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <Link href="/register" className="font-bold text-amber-700 hover:text-amber-600 hover:underline">
                                    Criar Conta de Parceiro
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
