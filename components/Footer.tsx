import { Mail, MessageCircle } from 'lucide-react'

const links = [
  { label: '服务方案', href: '#services' },
  { label: '合作流程', href: '#process' },
  { label: '案例展示', href: '#showcase' },
  { label: '联系我们', href: '#contact' }
]

export default function Footer() {
  return (
    <footer className="py-16 bg-bg-primary border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-bg-primary font-bold">B</span>
              </div>
              <span className="text-white font-semibold text-lg">Bridge Studio</span>
            </div>
            <p className="text-text-muted text-sm mb-4">
              跨境电商独立站设计与开发专家
            </p>
            <p className="text-text-muted text-xs">
              用设计连接世界
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <p className="text-white font-medium mb-4">快速链接</p>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-text-secondary hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-white font-medium mb-4">联系方式</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:Ray.globe.2018@gmail.com"
                className="inline-flex items-center justify-center md:justify-end gap-2 text-text-secondary hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>{'Ray.globe.2018@gmail.com'}</span>
              </a>
              <a
                href="weixin://dl/chat?Rayindustryjournal"
                className="inline-flex items-center justify-center md:justify-end gap-2 text-text-secondary hover:text-white transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{'微信: Rayindustryjournal'}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            © 2025 Bridge Studio. All rights reserved.
          </p>
          
          <p className="text-text-muted text-xs">
            免费 Demo · 满意再付款 · 无隐藏费用
          </p>
        </div>
      </div>
    </footer>
  )
}
