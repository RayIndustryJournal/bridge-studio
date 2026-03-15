import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

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
            <span className="text-sm text-accent-light tracking-wide">跨境电商网站专家</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6"
        >
          <span className="block text-white">先看到效果</span>
          <span className="block gradient-text mt-2">再决定是否合作</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          我们专注于跨境电商独立站设计与开发。<br />
          <span className="text-accent">免费</span>提供首页Demo，<span className="text-accent">1天</span>内交付，满意后再谈价格。
        </motion.p>

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <p className="text-text-muted text-sm mb-6">已服务品牌</p>
          <div className="flex justify-center items-center gap-12 opacity-40">
            <span className="text-lg font-medium">EARTHEN</span>
            <span className="text-lg font-medium">CROSSBORDER</span>
            <span className="text-lg font-medium">TERRA</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}