import Link from 'next/link';
import { Wallet, Calendar, Bell, BarChart3 } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#0F4C4C', color: '#F2994A' }}>
              <Wallet className="w-4 h-4" />
              Wallet Wiser
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#1C2B2B' }}>
              Every Bill and Subscription,
              <span className="block" style={{ color: '#F2994A' }}>In One Simple Calendar.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#3A6B6B' }}>
              Wallet Wiser is a free tool that helps you keep track of household bills and subscriptions. List your recurring bills, see everything due in one monthly calendar, and get reminders before due dates and renewals.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/signup" className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#F2994A', color: '#0F4C4C' }}>
                Sign Up
              </Link>
              <Link href="/how-it-works" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2" style={{ color: '#F2994A', borderColor: '#F2994A', backgroundColor: '#0F4C4C' }}>
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1C2B2B' }}>What Members Get</h2>
            <p className="mt-4 text-xl" style={{ color: '#3A6B6B' }}>A simple way to see every recurring bill and subscription in one place, with reminders so nothing catches you off guard.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE4E0' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F4C4C' }}>
                  <Wallet className="w-7 h-7" style={{ color: '#F2994A' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1C2B2B' }}>List Your Bills & Subscriptions</h3>
              <p className="text-center" style={{ color: '#3A6B6B' }}>Add your recurring household bills and subscriptions once, and keep the list up to date as things change.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE4E0' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F4C4C' }}>
                  <Calendar className="w-7 h-7" style={{ color: '#F2994A' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1C2B2B' }}>One Monthly Calendar</h3>
              <p className="text-center" style={{ color: '#3A6B6B' }}>See everything due that month laid out on a single calendar, instead of digging through separate accounts and inboxes.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE4E0' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F4C4C' }}>
                  <Bell className="w-7 h-7" style={{ color: '#F2994A' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1C2B2B' }}>Due-Date Reminders</h3>
              <p className="text-center" style={{ color: '#3A6B6B' }}>Get a heads-up before bills are due and before subscriptions renew, so there are no last-minute surprises.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE4E0' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F4C4C' }}>
                  <BarChart3 className="w-7 h-7" style={{ color: '#F2994A' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1C2B2B' }}>Monthly Summary</h3>
              <p className="text-center" style={{ color: '#3A6B6B' }}>Review a simple monthly summary of what's coming due, so you always know what to expect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1C2B2B' }}>Stop Juggling Due Dates</h2>
          <p className="text-xl mb-10" style={{ color: '#3A6B6B' }}>Sign up for free and start keeping track of your household bills and subscriptions in one place.</p>
          <Link href="/signup" className="px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#F2994A', color: '#0F4C4C' }}>
            Sign Up
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
