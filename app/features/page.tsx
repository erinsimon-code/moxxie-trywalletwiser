import Link from 'next/link';
import { CalendarDays, BellRing, Repeat, ClipboardList } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#111827' }}>Features</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#1F2937' }}>
            Everything you need to keep track of household bills and subscriptions in one place.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
                <CalendarDays className="w-7 h-7" style={{ color: '#2563EB' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Bill Calendar</h3>
            <p className="text-center" style={{ color: '#1F2937' }}>See every household bill and subscription laid out on one monthly calendar, so you always know what's coming due and when.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
                <BellRing className="w-7 h-7" style={{ color: '#2563EB' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Due-Date Reminders</h3>
            <p className="text-center" style={{ color: '#1F2937' }}>Get reminded before each bill is due, so you have time to plan ahead instead of finding out at the last minute.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
                <Repeat className="w-7 h-7" style={{ color: '#2563EB' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Subscription Tracker</h3>
            <p className="text-center" style={{ color: '#1F2937' }}>Keep a running list of every subscription you're signed up for, along with renewal dates, so nothing renews without you noticing.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
                <ClipboardList className="w-7 h-7" style={{ color: '#2563EB' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Monthly Summary</h3>
            <p className="text-center" style={{ color: '#1F2937' }}>Get a clear monthly summary of everything due, so you can see the full picture of your recurring bills and subscriptions at once.</p>
          </div>
        </div>
        <div className="rounded-2xl p-10 text-center border mt-16" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#111827' }}>Ready to Get Organized?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#1F2937' }}>
            Sign up for free and start listing your household bills and subscriptions today.
          </p>
          <Link href="/signup" className="inline-block px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#2563EB', color: '#0A0A0A' }}>
            Sign Up
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
