import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users, Award } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    value: '3年+',
    label: '跨境电商经验'
  },
  {
    icon: Users,
    value: '50+',
    label: '成功上线项目'
  },
  {
    icon: TrendingUp,
    value: '340%',
    label: '平均转化率提升'
  },
  {
    icon: Award,
    value: '24h',
    label: 'Demo 交付承诺'
  }
]

const brands = [
  'EARTHEN',
  'CROSSBORDER',
  'TERRA',
  'NINI'
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-bg-primary border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-text-muted text-sm mb-8">已服务品牌</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {brands.map((brand) => (
              <span 
                key={brand} 
                className="text-lg md:text-xl font-medium text-white/30 tracking-widest"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
