import {
    Users,
    ShoppingBag,
    DollarSign,
    TrendingUp
} from "lucide-react"

export default function AdminDashboardPage() {
    // MOCK AUTH ROLE
    // Change to "partner" to see the Partner view
    const USER_ROLE: "admin" | "partner" = "admin"

    // Admin Stats
    const adminStats = [
        {
            title: "Total de Vendas",
            value: "AOA 2.4M",
            change: "+12.5%",
            icon: DollarSign,
            color: "text-green-600",
            bg: "bg-green-100"
        },
        {
            title: "Encomendas",
            value: "145",
            change: "+8.2%",
            icon: ShoppingBag,
            color: "text-blue-600",
            bg: "bg-blue-100"
        },
        {
            title: "Parceiros Ativos",
            value: "24",
            change: "+4.1%",
            icon: Users,
            color: "text-amber-600",
            bg: "bg-amber-100"
        },
        {
            title: "Crescimento",
            value: "18.2%",
            change: "+2.5%",
            icon: TrendingUp,
            color: "text-purple-600",
            bg: "bg-purple-100"
        }
    ]

    // Partner Stats
    const partnerStats = [
        {
            title: "Minhas Vendas",
            value: "AOA 450K",
            change: "+5.2%",
            icon: DollarSign,
            color: "text-green-600",
            bg: "bg-green-100"
        },
        {
            title: "Meus Pedidos",
            value: "32",
            change: "+12.0%",
            icon: ShoppingBag,
            color: "text-blue-600",
            bg: "bg-blue-100"
        },
        {
            title: "Produtos Ativos",
            value: "12",
            change: "0%",
            icon: ShoppingBag, // Reusing icon for simplicity
            color: "text-amber-600",
            bg: "bg-amber-100"
        },
        {
            title: "Avaliação Média",
            value: "4.8",
            change: "+0.2",
            icon: TrendingUp,
            color: "text-purple-600",
            bg: "bg-purple-100"
        }
    ]

    const stats = USER_ROLE === "admin" ? adminStats : partnerStats

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-neutral-900">
                    {USER_ROLE === "admin" ? "Dashboard Admin" : "Meu Painel"}
                </h1>
                <p className="text-neutral-500 mt-1">
                    {USER_ROLE === "admin"
                        ? "Visão geral do desempenho da plataforma."
                        : "Bem-vindo de volta! Aqui está o resumo da sua pastelaria."}
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                        <div className="flex items-center justify-between">
                            <div className={`${stat.bg} p-3 rounded-lg`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                {stat.change}
                            </span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-sm font-medium text-neutral-500">{stat.title}</h3>
                            <p className="text-2xl font-bold text-neutral-900 mt-1">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">
                        {USER_ROLE === "admin" ? "Encomendas Recentes (Global)" : "Minhas Encomendas Recentes"}
                    </h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-lg transition-colors border border-transparent hover:border-neutral-100 cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center text-xs font-bold text-neutral-600">
                                        CLI
                                    </div>
                                    <div>
                                        <p className="font-medium text-neutral-900">Cliente Exemplo {i}</p>
                                        <p className="text-xs text-neutral-500">Doce Variado • AOA {i}500</p>
                                    </div>
                                </div>
                                <span className="text-xs font-medium px-2 py-1 bg-amber-100 text-amber-700 rounded-full">
                                    Pendente
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {USER_ROLE === "admin" && (
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                        <h3 className="text-lg font-bold text-neutral-900 mb-4">Novos Parceiros</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 border-b border-neutral-50 last:border-0">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-stone-900 rounded-lg flex items-center justify-center text-amber-500 font-dancing font-bold">
                                            P{i}
                                        </div>
                                        <div>
                                            <p className="font-medium text-neutral-900">Pastelaria Doce Sabor {i}</p>
                                            <p className="text-xs text-neutral-500">Registado há 2 horas</p>
                                        </div>
                                    </div>
                                    <button className="text-sm text-amber-600 hover:text-amber-700 font-medium">
                                        Ver Detalhes
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
