import { ExternalLink, Palette, Layout, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const caseStudy = {
  name: 'EARTHEN',
  tagline: '手工陶笛品牌官网',
  description: '为手工陶笛品牌打造的高端电商独立站，融合东方美学与现代购物体验。',
  image: '/images/earthen-mockup.jpg',
  link: 'https://earthen.example.com',
  stats: [
    { label: '转化率提升', value: '340%' },
    { label: '页面加载', value: '0.8s' },
    { label: '移动端占比', value: '68%' }
  ],
  features: [
    {
      icon: Palette,
      title: '视觉策略',
      description: '采用陶土原色与大面积留白，营造手工匠人质感，产品图片成为视觉焦点。'
    },
    {
      icon: Layout,
      title: '信息架构',
      description: '首屏直击产品核心价值，二屏展示工艺故事，三屏完成购买转化。'
    },
    {
      icon: Zap,
      title: '技术实现',
      description: 'Next.js 全栈开发，图片懒加载，支付接口集成，后台管理系统。'
    }
  ]
}

export default function Showcase() {
  return (
    <section id="showcase" className="py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm tracking-widest uppercase mb-4">Showcase</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">精选<span className="gradient-text">案例</span></h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            每一个项目都是品牌与用户的桥梁。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-bg-tertiary aspect-[4/3]">
              {/* Placeholder for Earthen website screenshot */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B6914]/20 via-bg-tertiary to-bg-tertiary" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#D4A574] to-[#8B6914] mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">E</span>
                  </div>
                  <p className="text-white font-medium">EARTHEN</p>
                  <p className="text-text-muted text-sm">手工陶笛品牌</p>
                </div>
              </div>
              
              {/* Browser chrome */}
              <div className="absolute top-4 left-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 bg-bg-tertiary border border-white/10 rounded-xl p-6 shadow-2xl">
              <div className="grid grid-cols-3 gap-6">
                {caseStudy.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="text-xs text-text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <p className="text-accent text-sm font-medium mb-2">{caseStudy.tagline}</p>
              <h3 className="text-3xl font-semibold text-white mb-4">{caseStudy.name}</h3>
              <p className="text-text-secondary">{caseStudy.description}</p>
            </div>

            <div className="space-y-6 mb-8">
              {caseStudy.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                    <p className="text-text-secondary text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href={caseStudy.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
            >
              <span>访问网站</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}