import Link from 'next/link';
import { Wallet, PiggyBank, Receipt, Target } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#0B2447', color: '#00B4D8' }}>
              <Wallet className="w-4 h-4" />
              Wallet Wiser
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#102A43' }}>
              A Workplace Perk
              <span className="block" style={{ color: '#00B4D8' }}>Built Around Your Paycheck.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#19376D' }}>
              Wallet Wiser is an employer-sponsored financial wellness program. Employers sign up and get a company code, and employees enroll with that code to get short guides, live workshops, and monthly savings goal check-ins.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/signup" className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#00B4D8', color: '#0B2447' }}>
                Sign Up
              </Link>
              <Link href="/for-employers" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2" style={{ color: '#00B4D8', borderColor: '#00B4D8', backgroundColor: '#0B2447' }}>
                For Employers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#102A43' }}>What Employees Get</h2>
            <p className="mt-4 text-xl" style={{ color: '#19376D' }}>A steady rhythm of short guides, live workshops, and monthly check-ins to build money confidence over time.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B2447' }}>
                  <Receipt className="w-7 h-7" style={{ color: '#00B4D8' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#102A43' }}>Enroll with a Company Code</h3>
              <p className="text-center" style={{ color: '#19376D' }}>Employees join the program using the company code their employer provides, connecting them to their workplace cohort.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B2447' }}>
                  <Wallet className="w-7 h-7" style={{ color: '#00B4D8' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#102A43' }}>Short, Practical Guides</h3>
              <p className="text-center" style={{ color: '#19376D' }}>Bite-sized reading on topics like paycheck basics, budgeting, and building an emergency fund, written for busy schedules.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B2447' }}>
                  <Target className="w-7 h-7" style={{ color: '#00B4D8' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#102A43' }}>Live Workshops</h3>
              <p className="text-center" style={{ color: '#19376D' }}>Join live sessions on practical money topics, with time built in for questions from fellow employees.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B2447' }}>
                  <PiggyBank className="w-7 h-7" style={{ color: '#00B4D8' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#102A43' }}>Monthly Goal Check-Ins</h3>
              <p className="text-center" style={{ color: '#19376D' }}>Set a savings goal and get a monthly check-in to reflect on progress and reset your focus for the month ahead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#102A43' }}>Bring Wallet Wiser to Your Team</h2>
          <p className="text-xl mb-10" style={{ color: '#19376D' }}>Employers sign up to get a company code, then share it with employees to start enrolling.</p>
          <Link href="/signup" className="px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#00B4D8', color: '#0B2447' }}>
            Sign Up
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
