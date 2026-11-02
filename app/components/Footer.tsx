import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#0B2447' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wallet Wiser</h3>
            <p style={{ color: '#F8FAFC' }}>
              An employer-sponsored financial wellness program. Employees enroll with a company code to get short guides, live workshops, and monthly savings goal check-ins.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/for-employers" style={{ color: '#F8FAFC' }} className="hover:text-white">For Employers</Link></li>
              <li><Link href="/for-employees" style={{ color: '#F8FAFC' }} className="hover:text-white">For Employees</Link></li>
              <li><Link href="/workshops-guides" style={{ color: '#F8FAFC' }} className="hover:text-white">Workshops & Guides</Link></li>
              <li><Link href="/about" style={{ color: '#F8FAFC' }} className="hover:text-white">About</Link></li>
              <li><Link href="/signup" style={{ color: '#F8FAFC' }} className="hover:text-white">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" style={{ color: '#F8FAFC' }} className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" style={{ color: '#F8FAFC' }} className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/contact" style={{ color: '#F8FAFC' }} className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p style={{ color: '#F8FAFC' }}>support@getwalletwiser.com</p>
            <p className="mt-2" style={{ color: '#F8FAFC' }}>600 N Broad St 446, Suite 5, Middletown, DE 19709</p>
            <a href="tel:+18335719204" className="mt-2 block hover:text-white" style={{ color: '#F8FAFC' }}>(833) 571-9204</a>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #00B4D8', color: '#F8FAFC' }}>
          <p>&copy; 2026 Wallet Wiser. All rights reserved.</p>
          <p className="mt-2 text-sm">Wallet Wiser is a service of The Benefit Advisor LLC.</p>
          <p className="mt-2 text-sm">Wallet Wiser content is for educational purposes only and is not financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
