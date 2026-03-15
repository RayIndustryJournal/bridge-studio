import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: '服务方案', href: '#services' },
  { label: '合作流程', href: '#process' },
  { label: '案例展示', href: '#showcase' },
  { label: '联系我们', href: '#contact' }
]

export default function Footer() {
  return (
    <footer className="py-12 bg-bg-primary border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-bg-primary font-bold text-sm">B</span>
              </div>
              <span className="text-white font-semibold">Bridge Studio</span>
            </div>
            <p className="text-text-muted text-sm">跨境电商网站专家</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
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

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            © 2025 Bridge Studio. All rights reserved.
          </p>
          
          <p className="text-text-muted text-xs">
            用设计连接世界
          </p>
        </div>
      </div>
    </footer>
  )
}