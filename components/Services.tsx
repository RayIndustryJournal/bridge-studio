import { Globe, ShoppingBag, Settings, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Globe,
    title: '品牌展示站',
    description: '简约而不简单的企业官网，突出品牌调性与核心价值。',
    features: ['响应式设计', 'SEO 优化', '多语言支持', '内容管理系统'],
    popular: false
  },
  {
    icon: ShoppingBag,
    title: '电商独立站',
    description: '完整的跨境电商解决方案，从产品展示到支付结算。',
    features: ['商品管理', '购物车系统', '支付集成', '订单管理后台'],
    popular: true
  },
  {
    icon: Settings,
    title: '定制开发',
    description: '复杂业务逻辑的定制化实现，满足特殊行业需求。',
    features: ['会员系统', '数据分析', 'API 对接', '私有化部署'],
    popular: false
  }
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm tracking-widest uppercase mb-4">Services</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">服务<span className="gradient-text">方案</span></h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            根据您的业务阶段与需求，选择最适合的解决方案。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                service.popular
                  ? 'bg-bg-tertiary border-accent/30 shadow-lg shadow-accent/5'
                  : 'bg-bg-secondary border-white/5 hover:border-white/20'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-bg-primary text-xs font-medium rounded-full">
                  最受欢迎
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                service.popular ? 'bg-accent' : 'bg-accent/10'
              }`}>
                <service.icon className={`w-6 h-6 ${service.popular ? 'text-bg-primary' : 'text-accent'}`} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-text-secondary text-sm mb-6">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                  service.popular ? 'text-accent hover:text-accent-light' : 'text-text-secondary hover:text-white'
                }`}
              >
                <span>获取 Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}