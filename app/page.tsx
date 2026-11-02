import Link from 'next/link';
import { Wallet, Calendar, Bell, BarChart3 } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#0A0A0A', color: '#2563EB' }}>
              <Wallet className="w-4 h-4" />
              Try Wallet Wiser
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#111827' }}>
              Every Bill and Subscription,
              <span className="block" style={{ color: '#2563EB' }}>In One Simple Calendar.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#1F2937' }}>
              Try Wallet Wiser is a free tool that helps you keep track of household bills and subscriptions. List your recurring bills, see everything due in one monthly calendar, and get reminders before due dates and renewals.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/signup" className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#2563EB', color: '#0A0A0A' }}>
                Sign Up
              </Link>
              <Link href="/how-it-works" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2" style={{ color: '#2563EB', borderColor: '#2563EB', backgroundColor: '#0A0A0A' }}>
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#111827' }}>What Members Get</h2>
            <p className="mt-4 text-xl" style={{ color: '#1F2937' }}>A simple way to see every recurring bill and subscription in one place, with reminders so nothing catches you off guard.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
                  <Wallet className="w-7 h-7" style={{ color: '#2563EB' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>List Your Bills & Subscriptions</h3>
              <p className="text-center" style={{ color: '#1F2937' }}>Add your recurring household bills and subscriptions once, and keep the list up to date as things change.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
                  <Calendar className="w-7 h-7" style={{ color: '#2563EB' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>One Monthly Calendar</h3>
              <p className="text-center" style={{ color: '#1F2937' }}>See everything due that month laid out on a single calendar, instead of digging through separate accounts and inboxes.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
                  <Bell className="w-7 h-7" style={{ color: '#2563EB' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Due-Date Reminders</h3>
              <p className="text-center" style={{ color: '#1F2937' }}>Get a heads-up before bills are due and before subscriptions renew, so there are no last-minute surprises.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
                  <BarChart3 className="w-7 h-7" style={{ color: '#2563EB' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Monthly Summary</h3>
              <p className="text-center" style={{ color: '#1F2937' }}>Review a simple monthly summary of what's coming due, so you always know what to expect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#111827' }}>Stop Juggling Due Dates</h2>
          <p className="text-xl mb-10" style={{ color: '#1F2937' }}>Sign up for free and start keeping track of your household bills and subscriptions in one place.</p>
          <Link href="/signup" className="px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#2563EB', color: '#0A0A0A' }}>
            Sign Up
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
