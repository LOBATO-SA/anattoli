export default function AdminProfilePage() {
    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-neutral-900">Meu Perfil</h1>
                <p className="text-neutral-500 mt-1">Gerencie suas informações pessoais e de segurança.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
                <div className="p-6 border-b border-neutral-100">
                    <h2 className="text-lg font-bold text-neutral-900">Informações Pessoais</h2>
                </div>
                <div className="p-6 space-y-6">
                    <div className="flex items-center space-x-6">
                        <div className="w-20 h-20 bg-stone-900 rounded-full flex items-center justify-center text-2xl font-bold text-amber-500">
                            AD
                        </div>
                        <button className="text-sm text-amber-600 hover:text-amber-700 font-medium">
                            Alterar Foto
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Nome</label>
                            <input
                                type="text"
                                defaultValue="Admin Principal"
                                className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                            <input
                                type="email"
                                defaultValue="admin@anattoli.com"
                                className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-neutral-50 p-4 flex justify-end">
                    <button className="px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium">
                        Salvar Alterações
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
                <div className="p-6 border-b border-neutral-100">
                    <h2 className="text-lg font-bold text-neutral-900">Segurança</h2>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Senha Atual</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Nova Senha</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Confirmar Nova Senha</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-neutral-50 p-4 flex justify-end">
                    <button className="px-4 py-2 border border-neutral-300 bg-white text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors text-sm font-medium">
                        Alterar Senha
                    </button>
                </div>
            </div>
        </div>
    )
}
