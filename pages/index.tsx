import Head from 'next/head'
import Hero from '../components/Hero'
import Process from '../components/Process'
import Showcase from '../components/Showcase'
import Services from '../components/Services'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bridge Studio | 跨境电商网站专家</title>
        <meta name="description" content="专业跨境电商网站设计与开发。免费Demo，满意再付款。1天出样，快速上线。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-bg-primary">
        <Hero />
        <Process />
        <Showcase />
        <Services />
        <CTA />
        <Footer />
      </main>
    </>
  )
}