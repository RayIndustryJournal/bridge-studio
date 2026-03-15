import { Clock, Eye, FileCheck, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: Clock,
    number: '01',
    title: '提交需求',
    description: '告诉我们您的行业、品牌风格和功能需求，10分钟完成沟通。'
  },
  {
    icon: Eye,
    number: '02',
    title: '免费 Demo',
    description: '24小时内交付首页设计Demo，真实可交互，零成本预览效果。'
  },
  {
    icon: FileCheck,
    number: '03',
    title: '确认合作',
    description: '满意Demo后获取正式报价，签订合同，明确交付时间与标准。'
  },
  {
    icon: Rocket,
    number: '04',
    title: '快速交付',
    description: '按约定时间交付完整网站，提供技术文档与后续支持。'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm tracking-widest uppercase mb-4">Process</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6"><span className="gradient-text">零风险</span>合作流程</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            先看到真实效果，再决定是否投资。我们用专业消除您的顾虑。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-bg-secondary border border-white/5 hover:border-accent/30 transition-all duration-500 hover:bg-bg-tertiary">
                <div className="absolute top-6 right-6 text-5xl font-bold text-white/5 group-hover:text-accent/10 transition-colors">
                  {step.number}
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                
                <h3 className="text-xl font-medium mb-3 text-white">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}