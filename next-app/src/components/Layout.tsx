import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingGrabTapBanner from '@/components/FloatingGrabTapBanner';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col bg-black text-white ${className}`}>
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <FloatingGrabTapBanner />
    </div>
  );
}
