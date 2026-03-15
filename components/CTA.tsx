import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="py-32 bg-bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            准备好开始了吗？
          </h2>
          <p className="text-xl text-text-secondary mb-4">
            免费获取您的首页 Demo
          </p>
          <p className="text-text-muted mb-12 max-w-lg mx-auto">
            告诉我们您的需求，24 小时内交付可交互的 Demo。满意后再谈价格，零风险开始。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@bridgestudio.com"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-bg-primary font-medium rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>hello@bridgestudio.com</span>
            </a>
            
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 rounded-full text-white hover:border-accent/50 hover:bg-white/5 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>微信咨询</span>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-text-muted text-sm">
              通常在 2 小时内回复 | 工作日 9:00-21:00
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}