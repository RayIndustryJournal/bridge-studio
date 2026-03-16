import { motion } from 'framer-motion'
import { Award, Eye, Zap, HeadphonesIcon, DollarSign, FileCheck } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: '专业经验',
    description: '3年专注跨境电商，熟悉 Shopify、WooCommerce、独立站全栈开发。了解出海品牌的真实需求。'
  },
  {
    icon: Eye,
    title: '免费Demo',
    description: '先看到真实效果再决定，零风险开始合作。Demo 24小时内交付，不收取任何费用。'
  },
  {
    icon: Zap,
    title: '快速交付',
    description: '标准项目 7-10 天上线，紧急需求可压缩至 3 天。不拖延，不延期。'
  },
  {
    icon: HeadphonesIcon,
    title: '售后保障',
    description: '上线后 30 天免费维护，7×24 小时技术支持。有问题随时响应。'
  },
  {
    icon: DollarSign,
    title: '透明定价',
    description: '无隐藏费用，合同前明确所有成本。不会有「额外开发费」「服务器加钱」等套路。'
  },
  {
    icon: FileCheck,
    title: '满意承诺',
    description: 'Demo 不满意无需任何理由直接终止，不收一分钱。我们用实力说话。'
  }
]

export default function WhyUs() {
  return (
    <section className="py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm tracking-widest uppercase mb-4">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">选择我们的<span className="gradient-text">理由</span></h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            不只是技术服务商，更是你出海路上的合作伙伴。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-bg-primary border border-white/5 hover:border-accent/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors"
              >
                <reason.icon className="w-6 h-6 text-accent" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
