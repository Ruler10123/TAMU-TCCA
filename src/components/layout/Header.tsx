import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 relative">
                <Image
                  src="/tcca-logo.png"
                  alt="TCCA Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <span className="text-xl font-bold text-emerald-800">TCCA</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-emerald-700 hover:text-emerald-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-emerald-700 hover:text-emerald-900 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-emerald-700 hover:text-emerald-900 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 