import { HeartHandshake, CalendarCheck, BellRing, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#0F4C4C', color: '#F2994A' }}>
              <HeartHandshake className="w-4 h-4" />
              About Wallet Wiser
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1C2B2B' }}>
              A Simple Home for Your Household Bills
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#3A6B6B' }}>
              Recurring bills and subscriptions pile up fast, and keeping track of them across different accounts and inboxes is easy to fall behind on. Wallet Wiser was built around one idea — let members list what they pay for, see it all on one monthly calendar, and get a reminder before anything is due.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1C2B2B' }}>Why We Built Wallet Wiser</h2>
          <p className="text-lg mb-4" style={{ color: '#3A6B6B' }}>
            Household bills and subscriptions rarely live in one place. A few show up by mail, others by email, and some just quietly renew in the background. We wanted a single, simple place to see it all coming.
          </p>
          <p className="text-lg" style={{ color: '#3A6B6B' }}>
            Signing up is free. List your recurring bills and subscriptions, and Wallet Wiser keeps track of due dates and renewals for you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE4E0' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F4C4C' }}>
                <CalendarCheck className="w-5 h-5" style={{ color: '#F2994A' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#1C2B2B' }}>Everything in One Calendar</h3>
                <p style={{ color: '#3A6B6B' }}>Bills and subscriptions you list all show up together on a single monthly calendar.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE4E0' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F4C4C' }}>
                <BellRing className="w-5 h-5" style={{ color: '#F2994A' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#1C2B2B' }}>Reminders Before Due Dates</h3>
                <p style={{ color: '#3A6B6B' }}>Get a reminder before each bill is due and before each subscription renews.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE4E0' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F4C4C' }}>
                <HeartHandshake className="w-5 h-5" style={{ color: '#F2994A' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#1C2B2B' }}>Free for Members</h3>
                <p style={{ color: '#3A6B6B' }}>Wallet Wiser is free to sign up and use as a household bill and subscription organizer.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE4E0' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F4C4C' }}>
                <ShieldCheck className="w-5 h-5" style={{ color: '#F2994A' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#1C2B2B' }}>Organizing Tools Only</h3>
                <p style={{ color: '#3A6B6B' }}>Wallet Wiser provides reminders and organizing tools only and does not pay bills or provide financial advice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
