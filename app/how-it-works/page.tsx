import Link from 'next/link';
import { ListChecks, CalendarDays, BellRing, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#111827' }}>How It Works</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#1F2937' }}>
            Sign up in a few minutes, list what you pay for, and let Try Wallet Wiser keep track of what's coming due.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-10">
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
              <ListChecks className="w-7 h-7" style={{ color: '#2563EB' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>1. List Your Bills & Subscriptions</h3>
              <p style={{ color: '#1F2937' }}>Sign up and add the household bills and subscriptions you want to keep track of, along with how often each one is due.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
              <CalendarDays className="w-7 h-7" style={{ color: '#2563EB' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>2. See It All on One Calendar</h3>
              <p style={{ color: '#1F2937' }}>Everything you've listed shows up together on a single monthly calendar, so you can see what's due and when at a glance.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
              <BellRing className="w-7 h-7" style={{ color: '#2563EB' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>3. Get Reminders Ahead of Time</h3>
              <p style={{ color: '#1F2937' }}>Try Wallet Wiser sends a reminder before each bill is due and before each subscription renews, so nothing slips through the cracks.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
              <BarChart3 className="w-7 h-7" style={{ color: '#2563EB' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>4. Review Your Monthly Summary</h3>
              <p style={{ color: '#1F2937' }}>Check a simple monthly summary of what's due, so you always have an up-to-date picture of your recurring bills and subscriptions.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link href="/signup" className="inline-block px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#2563EB', color: '#0A0A0A' }}>
            Sign Up
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
