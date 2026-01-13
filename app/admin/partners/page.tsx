import { MoreVertical, Mail, Phone } from "lucide-react"

export default function AdminPartnersPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Parceiros</h1>
                    <p className="text-neutral-500 mt-1">Gerencie as pastelarias parceiras cadastradas.</p>
                </div>
            </div>

            <div className="grid gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-lg">
                                P{i}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-neutral-900">Pastelaria Doce Sabor {i}</h3>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-neutral-500 mt-1">
                                    <span className="flex items-center">
                                        <Mail className="w-3 h-3 mr-1" />
                                        contato@pastelaria{i}.com
                                    </span>
                                    <span className="flex items-center">
                                        <Phone className="w-3 h-3 mr-1" />
                                        +244 923 000 {i}00
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <div className="flex-1 md:flex-none text-right md:text-left">
                                <span className="block text-xs text-neutral-400">Status</span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Ativo
                                </span>
                            </div>
                            <div className="hidden md:block w-px h-8 bg-neutral-200 mx-2"></div>
                            <div className="flex-1 md:flex-none text-right md:text-left">
                                <span className="block text-xs text-neutral-400">Desde</span>
                                <span className="text-sm font-medium text-neutral-900">12 Jan 2026</span>
                            </div>
                            <button className="p-2 text-neutral-400 hover:text-neutral-600 rounded-full hover:bg-neutral-100">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
