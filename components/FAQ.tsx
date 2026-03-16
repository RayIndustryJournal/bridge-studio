import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Demo 真的是免费的吗？',
    answer: '是的，首页设计 Demo 完全免费。您看到效果后再决定是否合作，没有任何前期费用。'
  },
  {
    question: '如果 Demo 不满意怎么办？',
    answer: '无需任何理由，不满意就不合作，没有任何费用。我们相信好的合作建立在双方认可的基础上。'
  },
  {
    question: '交付时间多久？',
    answer: 'Demo 24小时内交付，完整网站通常 7-10 个工作日。紧急项目可以压缩到 3-5 天，具体取决于需求复杂度。'
  },
  {
    question: '包含哪些服务？',
    answer: '设计 + 前端开发 + 后端/CMS + 支付集成 + 基础 SEO + 30天售后维护。从想法到上线的完整解决方案。'
  },
  {
    question: '需要我准备什么？',
    answer: '品牌资料、产品图片、文案内容。如果您还没有，我们也可以协助整理或推荐专业的内容服务。'
  },
  {
    question: '后期可以自己修改网站吗？',
    answer: '可以。我们提供后台管理系统，或培训您如何使用。不会把您锁定在技术黑箱里。'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-32 bg-bg-primary">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">常见<span className="gradient-text">问题</span></h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            还有疑问？随时联系我们。
          </p>
        </motion.div>

        <div className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-white/5 rounded-xl overflow-hidden hover:border-accent/20 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors ${
                  openIndex === index ? 'bg-accent/20' : ''
                }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-accent" />
                  ) : (
                    <Plus className="w-4 h-4 text-accent" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
