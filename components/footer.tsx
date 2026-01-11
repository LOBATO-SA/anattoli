"use client"
import { motion } from "framer-motion"
import { Instagram, Facebook, Smartphone, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Navegação: [
      { name: "Início", href: "#" },
      { name: "Sobre Nós", href: "#sobre-nos" },
      { name: "Produtos", href: "#featured-products" },
      { name: "Galeria", href: "#" },
    ],
    Informação: [
      { name: "Sobre Anattoli", href: "#" },
      { name: "Processo Artesanal", href: "#" },
      { name: "Ingredientes Premium", href: "#" },
      { name: "Contacto", href: "#" },
    ],
    Suporte: [
      { name: "Encomendar", href: "#" },
      { name: "Dúvidas Frequentes", href: "#" },
      { name: "Prazos de Entrega", href: "#" },
      { name: "Personalização", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "WhatsApp", icon: Smartphone, href: "#" },
  ]

  return (
    <footer className="bg-neutral-900 text-white border-t border-neutral-800">
      <div className="container-custom py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Anattoli</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Sobremesas artesanais que contam histórias. Criadas com criatividade, propósito e sabor excepcional no
                coração do Lobito, Angola.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center text-white hover:bg-amber-600 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-white mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-neutral-400 hover:text-amber-400 transition-colors duration-200 group flex items-center"
                        >
                          {link.name}
                          <ArrowUpRight
                            size={14}
                            className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 pb-4 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-sm text-neutral-500">
            <p>&copy; {currentYear} Anattoli Confeitaria. Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">
              Termos de Serviço
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
