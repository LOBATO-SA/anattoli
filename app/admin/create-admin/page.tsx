export default function CreateAdminPage() {
    return (
        <div className="max-w-xl mx-auto">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-neutral-900">Criar Novo Administrador</h1>
                <p className="text-neutral-500 mt-2">Adicione um novo membro à equipe de gestão.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-100">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Nome Completo</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow"
                            placeholder="Ex: Maria Admin"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Email Corporativo</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow"
                            placeholder="admin@anattoli.com"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Senha</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Confirmar Senha</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-stone-900 text-white font-bold rounded-lg hover:bg-stone-800 transition-colors shadow-lg hover:shadow-xl"
                        >
                            Criar Conta
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
