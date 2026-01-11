"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Mail } from "lucide-react"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"
import { AnimatedText } from "./animated-text"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isValid, setIsValid] = useState(true)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateEmail(email)) {
      setIsSubmitted(true)
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container-custom">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <BlurPanel className="p-8 lg:p-12 bg-amber-50/60 backdrop-blur-md grain-texture border border-amber-200/30 rounded-3xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                  <AnimatedText text="Fique por Dentro das " delay={0.2} />
                  <span className="italic font-light text-amber-700">
                    <AnimatedText text="Nossas Novidades" delay={0.5} />
                  </span>
                </h2>
                <p className="text-lg text-neutral-700">
                  Receba as nossas receitas exclusivas, novos sabores e ofertas especiais diretamente na sua caixa de
                  email.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={20} className="text-neutral-500" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setIsValid(true)
                      }}
                      placeholder="Insira o seu email"
                      className={`w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border rounded-full text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all duration-200 ${
                        !isValid ? "border-red-300 focus:ring-red-500" : "border-neutral-200"
                      }`}
                    />
                  </div>

                  {!isValid && (
                    <motion.p
                      className="text-sm text-red-600 text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Por favor, insira um email válido
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    className="w-full bg-amber-700 text-white py-4 rounded-full font-semibold hover:bg-amber-600 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Inscrever-se
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Bem-vindo à Anattoli!</h3>
                  <p className="text-neutral-600">
                    Obrigada por se inscrever. Receberá em breve as nossas novidades e receitas exclusivas.
                  </p>
                </motion.div>
              )}

              <p className="text-xs text-neutral-600 text-center mt-6">
                Respeitamos a sua privacidade. Desinscrever-se a qualquer momento. Leia a nossa{" "}
                <a href="#" className="underline hover:text-neutral-800 transition-colors">
                  Política de Privacidade
                </a>
                .
              </p>
            </BlurPanel>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
