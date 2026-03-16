import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles, Check } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  '24小时免费Demo',
  '满意后再付款',
  '无隐藏费用'
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 165, 116, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212, 165, 116, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent-light tracking-wide">专注跨境电商 3 年+</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-tight"
        >
          <span className="block text-white">跨境电商独立站</span>
          <span className="block gradient-text mt-2">设计与开发专家</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          从品牌视觉到支付集成，一站式解决出海难题。<br className="hidden md:block" />
          先看到真实效果，再决定是否合作。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-accent" />
              <span>{benefit}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-accent text-bg-primary font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              免费获取 Demo
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          
          <a
            href="#showcase"
            className="px-8 py-4 text-text-secondary hover:text-white transition-colors duration-300 border border-text-muted/30 rounded-full hover:border-accent/50"
          >
            查看案例
          </a>
        </motion.div>
      </div>
    </section>
  )
}
