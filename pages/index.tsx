import Head from 'next/head'
import Hero from '../components/Hero'
import SocialProof from '../components/SocialProof'
import Services from '../components/Services'
import Process from '../components/Process'
import Showcase from '../components/Showcase'
import Testimonials from '../components/Testimonials'
import WhyUs from '../components/WhyUs'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bridge Studio | 跨境电商独立站设计与开发专家</title>
        <meta name="description" content="专业跨境电商网站设计与开发。免费Demo，满意再付款。1天出样，快速上线。从品牌视觉到支付集成，一站式解决出海难题。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="跨境电商,独立站,网站设计,网站开发,DTC品牌,Shopify,免费Demo" />
        <meta property="og:title" content="Bridge Studio | 跨境电商独立站设计与开发专家" />
        <meta property="og:description" content="免费Demo，满意再付款。1天出样，快速上线。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-bg-primary">
        <Hero />
        <SocialProof />
        <Services />
        <Process />
        <Showcase />
        <Testimonials />
        <WhyUs />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
