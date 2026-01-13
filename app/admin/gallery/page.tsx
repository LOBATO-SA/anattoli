import { Upload, Trash2 } from "lucide-react"

export default function AdminGalleryPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Galeria</h1>
                    <p className="text-neutral-500 mt-1">Gerencie as imagens exibidas na galeria.</p>
                </div>
                <button className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Imagem
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="group relative aspect-square bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="absolute inset-0 bg-neutral-100 animate-pulse">
                            {/* Placeholder for actual image */}
                            <div className="flex items-center justify-center h-full text-neutral-400">
                                Imagem {i}
                            </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-3 bg-white/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-neutral-600">IMG_{i}.jpg</span>
                                <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
