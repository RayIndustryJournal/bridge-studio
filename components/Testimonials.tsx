import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    content: 'Demo 交付速度让我惊讶，24小时就看到了首页效果。设计很懂跨境电商的调性，转化率比旧站提升了3倍。',
    author: '张明',
    title: '创始人',
    company: 'Earthen Studio',
    avatar: 'Z'
  },
  {
    content: '从设计到支付对接全程不用操心，技术实现很专业。最重要的是可以先看效果再决定，完全没有风险。',
    author: '李婷',
    title: '运营负责人',
    company: '某服饰品牌',
    avatar: 'L'
  },
  {
    content: '和其他服务商最大的区别是懂品牌。不只是做个网站，而是帮我们梳理了完整的线上体验。',
    author: '王浩',
    title: '独立站卖家',
    company: '跨境电商',
    avatar: 'W'
  }
]

export default function Testimonials() {
  return (
    <section className="py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm tracking-widest uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">客户<span className="gradient-text">评价</span></h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            听听合作过的客户怎么说。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-bg-secondary border border-white/5 hover:border-accent/20 transition-all duration-500"
            >
              <div className="absolute top-6 right-6 text-accent/20">
                <Quote className="w-8 h-8" />
              </div>

              <p className="text-text-secondary leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center"
                >
                  <span className="text-accent font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-text-muted text-sm">
                    {testimonial.title} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
