import { ExternalLink, Palette, Layout, Zap, Globe, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'

const caseStudy = {
  name: 'Earthen Studio',
  tagline: '手工陶笛品牌独立站',
  description: '为手作器物品牌 Earthen 打造的高端 DTC 独立站。网站不只是销售平台，更是讲述「泥土如何变成声音」的品牌故事载体。',
  image: '/images/earthen-mockup.jpg',
  link: 'https://earthen-studio.github.io',
  launchDate: '2026年3月',
  product: '「泥喃」手工陶笛',
  price: '$29.90 USD',
  features: [
    {
      icon: Palette,
      title: '品牌视觉',
      description: '采用陶土原色与大面积留白，营造手工匠人质感，产品图片成为视觉焦点。'
    },
    {
      icon: Layout,
      title: '用户体验',
      description: '首屏直击产品核心价值，二屏展示工艺故事，三屏完成购买转化。'
    },
    {
      icon: CreditCard,
      title: '支付集成',
      description: 'PayPal 支付无缝集成，支持国际信用卡，全球免邮策略提升转化率。'
    },
    {
      icon: Globe,
      title: '全球部署',
      description: 'GitHub Pages 全球 CDN 加速，确保海外用户快速访问体验。'
    }
  ],
  highlights: [
    { label: '上线时间', value: '2026年3月' },
    { label: '产品定位', value: '限量发售' },
    { label: '目标市场', value: '全球' }
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
            每一个项目都是品牌与用户的桥梁。我们不只是做网站，而是帮助品牌讲述故事。
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
              {/* Gradient background matching Earthen brand colors */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C4A77D]/30 via-[#8B7355]/20 to-bg-tertiary" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#D4A574] to-[#8B6914] mx-auto mb-4 flex items-center justify-center shadow-2xl">
                    <span className="text-4xl font-bold text-white">E</span>
                  </div>
                  <p className="text-white font-medium text-lg">EARTHEN STUDIO</p>
                  <p className="text-text-muted text-sm">泥土的低语</p>
                  <p className="text-accent text-xs mt-2">手工陶笛品牌</p>
                </div>
              </div>
              
              {/* Browser chrome */}
              <div className="absolute top-4 left-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-bg-tertiary border border-white/10 rounded-xl p-6 shadow-2xl max-w-[280px]">
              <div className="grid grid-cols-1 gap-4">
                {caseStudy.highlights.map((highlight) => (
                  <div key={highlight.label} className="flex justify-between items-center">
                    <span className="text-xs text-text-muted">{highlight.label}</span>
                    <span className="text-sm font-medium text-white">{highlight.value}</span>
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
              <p className="text-text-secondary leading-relaxed">{caseStudy.description}</p>
            </div>

            <div className="grid gap-4 mb-8">
              {caseStudy.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-bg-primary/50 border border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0"
                  >
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

        {/* More cases teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <p className="text-text-muted text-sm mb-4">更多案例正在整理中...</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm"
          >
            <span>成为我们的下一个案例</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
