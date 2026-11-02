import { HeartHandshake, Building2, Users, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#0B2447', color: '#00B4D8' }}>
              <HeartHandshake className="w-4 h-4" />
              About Wallet Wiser
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#102A43' }}>
              Financial Wellness, Built into the Workday
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#19376D' }}>
              Money stress follows people to work, but most workplaces don't offer a simple way to help. Wallet Wiser was built around one idea — give employers a program they can switch on with a company code, and give employees a steady rhythm of guides, workshops, and check-ins.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#102A43' }}>Why We Built Wallet Wiser</h2>
          <p className="text-lg mb-4" style={{ color: '#19376D' }}>
            Many workplace perks are hard to use or buried in a portal nobody opens twice. We wanted something employees would actually return to: short reading, live workshops on a predictable schedule, and a monthly nudge to check in on a savings goal.
          </p>
          <p className="text-lg" style={{ color: '#19376D' }}>
            For employers, the setup is simple. Sign up, get a company code, and share it with your team — the rest runs on its own.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B2447' }}>
                <Building2 className="w-5 h-5" style={{ color: '#00B4D8' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#102A43' }}>A Program Employers Switch On</h3>
                <p style={{ color: '#19376D' }}>Employers sign up once, get a company code, and share it — no ongoing administration required.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B2447' }}>
                <Users className="w-5 h-5" style={{ color: '#00B4D8' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#102A43' }}>Workshops Employees Show Up For</h3>
                <p style={{ color: '#19376D' }}>Live workshops happen alongside coworkers, which makes the material easier to stick with over time.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B2447' }}>
                <HeartHandshake className="w-5 h-5" style={{ color: '#00B4D8' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#102A43' }}>Monthly Check-Ins, Not One-Time Content</h3>
                <p style={{ color: '#19376D' }}>A monthly savings goal check-in keeps the program part of a routine instead of a one-time read.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B2447' }}>
                <ShieldCheck className="w-5 h-5" style={{ color: '#00B4D8' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#102A43' }}>Educational, Not Prescriptive</h3>
                <p style={{ color: '#19376D' }}>Every guide and workshop is educational in nature, meant to build understanding rather than tell you what to do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
