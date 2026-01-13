import Link from "next/link"
import {
    LayoutDashboard,
    Package,
    Image as ImageIcon,
    User,
    Users,
    UserPlus,
    LogOut,
    Menu
} from "lucide-react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // MOCK AUTH ROLE
    // Change to "partner" to see the Partner view
    const USER_ROLE: "admin" | "partner" = "admin"

    return (
        <div className="flex min-h-screen bg-neutral-100 font-sans">
            {/* Sidebar */}
            <aside className="hidden w-64 bg-stone-900 text-white lg:flex flex-col fixed h-full inset-y-0 z-50">
                <div className="p-6 border-b border-stone-800">
                    <h1 className="text-2xl font-bold font-dancing text-amber-500">
                        {USER_ROLE === "admin" ? "Anattoli Admin" : "Anattoli Painel"}
                    </h1>
                    <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">
                        {USER_ROLE === "admin" ? "Administrador" : "Parceiro"}
                    </p>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <Link
                        href="/admin"
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        <span>Dashboard</span>
                    </Link>

                    <Link
                        href="/admin/products"
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
                    >
                        <Package className="w-5 h-5" />
                        <span>Produtos</span>
                    </Link>

                    <Link
                        href="/admin/gallery"
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
                    >
                        <ImageIcon className="w-5 h-5" />
                        <span>Galeria</span>
                    </Link>

                    {USER_ROLE === "admin" && (
                        <Link
                            href="/admin/partners"
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
                        >
                            <Users className="w-5 h-5" />
                            <span>Parceiros</span>
                        </Link>
                    )}

                    <Link
                        href="/admin/profile"
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
                    >
                        <User className="w-5 h-5" />
                        <span>Perfil</span>
                    </Link>

                    {USER_ROLE === "admin" && (
                        <div className="pt-4 mt-4 border-t border-stone-800">
                            <h3 className="px-4 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                                Administração
                            </h3>
                            <Link
                                href="/admin/create-admin"
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
                            >
                                <UserPlus className="w-5 h-5" />
                                <span>Criar Admin</span>
                            </Link>
                        </div>
                    )}
                </nav>

                <div className="p-4 border-t border-stone-800">
                    <Link
                        href="/login"
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-red-900/20 text-red-400 hover:text-red-300 transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Sair</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:pl-64">
                {/* Mobile Header */}
                <div className="lg:hidden bg-stone-900 text-white p-4 flex items-center justify-between sticky top-0 z-40">
                    <h1 className="text-xl font-bold font-dancing text-amber-500">
                        {USER_ROLE === "admin" ? "Anattoli Admin" : "Anattoli Painel"}
                    </h1>
                    <button className="p-2 text-stone-300">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6 lg:p-12 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

