import Link from 'next/link';
import { Receipt, PiggyBank, Wallet, FileSpreadsheet, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WorkshopsGuidesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <Navbar />

      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#102A43' }}>Workshops & Guides</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#19376D' }}>
            Short guides you can read in minutes, paired with live workshops that go deeper on the same topics. Content is for educational purposes only and is not financial advice.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B2447' }}>
                <Wallet className="w-7 h-7" style={{ color: '#00B4D8' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#102A43' }}>Budgeting Basics</h3>
            <p className="text-center" style={{ color: '#19376D' }}>A short guide on building a simple monthly spending plan, plus a live workshop walking through common budgeting methods.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B2447' }}>
                <PiggyBank className="w-7 h-7" style={{ color: '#00B4D8' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#102A43' }}>Building an Emergency Fund</h3>
            <p className="text-center" style={{ color: '#19376D' }}>A step-by-step guide on starting and growing an emergency fund, with a workshop on staying consistent month to month.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B2447' }}>
                <Receipt className="w-7 h-7" style={{ color: '#00B4D8' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#102A43' }}>Understanding Your Paycheck</h3>
            <p className="text-center" style={{ color: '#19376D' }}>A plain-language guide to reading a pay stub, plus a workshop covering the common lines employees ask about most.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B2447' }}>
                <FileSpreadsheet className="w-7 h-7" style={{ color: '#00B4D8' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#102A43' }}>Getting Ready for Open Enrollment</h3>
            <p className="text-center" style={{ color: '#19376D' }}>A guide to organizing paperwork and questions ahead of open enrollment season, with a workshop on what to review each year.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B2447' }}>
                <Target className="w-7 h-7" style={{ color: '#00B4D8' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#102A43' }}>Setting Savings Goals</h3>
            <p className="text-center" style={{ color: '#19376D' }}>A guide on setting a realistic monthly savings goal, paired with the monthly check-in that keeps you on track.</p>
          </div>
        </div>
        <div className="rounded-2xl p-10 text-center border mt-16" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#102A43' }}>New Guides Published Regularly</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#19376D' }}>
            Enroll with your company code to get notified when new guides and upcoming workshops are announced.
          </p>
          <Link href="/signup" className="inline-block px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#00B4D8', color: '#0B2447' }}>
            Sign Up
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
