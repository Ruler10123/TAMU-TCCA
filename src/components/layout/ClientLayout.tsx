'use client';

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingContact from '@/components/layout/FloatingContact'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import PageTransition from '@/components/layout/PageTransition'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <AnimatePresence initial={false} mode="wait">
          <PageTransition key={pathname}>
            <div className="bg-white">
              {children}
            </div>
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
} 