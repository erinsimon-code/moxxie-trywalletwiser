import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#0F4C4C' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wallet Wiser</h3>
            <p style={{ color: '#FAF8F5' }}>
              A free tool that helps you keep track of household bills and subscriptions. List your recurring bills, see everything due in one monthly calendar, and get reminders before due dates and renewals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" style={{ color: '#FAF8F5' }} className="hover:text-white">How It Works</Link></li>
              <li><Link href="/features" style={{ color: '#FAF8F5' }} className="hover:text-white">Features</Link></li>
              <li><Link href="/about" style={{ color: '#FAF8F5' }} className="hover:text-white">About</Link></li>
              <li><Link href="/signup" style={{ color: '#FAF8F5' }} className="hover:text-white">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" style={{ color: '#FAF8F5' }} className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" style={{ color: '#FAF8F5' }} className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/contact" style={{ color: '#FAF8F5' }} className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p style={{ color: '#FAF8F5' }}>support@trywalletwiser.com</p>
            <p className="mt-2" style={{ color: '#FAF8F5' }}>600 N Broad St 446, Suite 5, Middletown, DE 19709</p>
            <a href="tel:+18335719204" className="mt-2 block hover:text-white" style={{ color: '#FAF8F5' }}>(833) 571-9204</a>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #F2994A', color: '#FAF8F5' }}>
          <p>&copy; 2026 Wallet Wiser. All rights reserved.</p>
          <p className="mt-2 text-sm">Wallet Wiser is a service of The Benefit Advisor LLC.</p>
          <p className="mt-2 text-sm">Wallet Wiser provides reminders and organizing tools only and does not pay bills or provide financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
