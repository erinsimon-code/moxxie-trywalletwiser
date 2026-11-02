import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#102A43' }}>Terms of Service</h1>
          <p className="text-lg" style={{ color: '#19376D' }}>Effective Date: November 2, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#102A43' }}>1. Agreeing to These Terms</h2>
          <p className="mb-6" style={{ color: '#19376D' }}>
            The Benefit Advisor LLC runs Wallet Wiser. Accessing or using our service (the "Service") means you're agreeing to follow these Terms of Service (the "Terms"). If these Terms don't work for you, please don't use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#102A43' }}>2. What the Service Does</h2>
          <p className="mb-6" style={{ color: '#19376D' }}>
            Through www.getwalletwiser.com, Wallet Wiser is an employer-sponsored financial wellness program. Employers sign up and get a company code, and employees enroll with that code to get short guides, live workshops, and monthly savings goal check-ins.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#102A43' }}>3. Text Message Program</h2>
          <p className="mb-4" style={{ color: '#19376D' }}>
            Opting in to receive texts means you're agreeing to get account notification texts (workshop reminders and goal check-ins), promotional texts (new guides and upcoming workshop announcements), or both from Wallet Wiser. Here's what to know:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#19376D' }}>
            <li>Standard message and data rates may apply, and how often you hear from us can vary.</li>
            <li>Opt out whenever you like by texting STOP. Have a question? Text HELP or email support@getwalletwiser.com.</li>
            <li>We're not responsible if a carrier delays or fails to deliver a message.</li>
            <li>You don't need to agree to texts in order to use the Service, and doing so is not a condition of employment.</li>
            <li>Want the full picture on how we handle your data? Check out our <Link href="/privacy" style={{ color: '#00B4D8' }} className="underline">Privacy Policy</Link>.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#102A43' }}>4. Liability Limits</h2>
          <p className="mb-6" style={{ color: '#19376D' }}>
            Wallet Wiser isn't responsible for indirect, incidental, special, consequential, or punitive damages that come from using, or being unable to use, the Service. Wallet Wiser content is for educational purposes only and is not financial advice.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#102A43' }}>5. Get in Touch</h2>
          <p className="mb-6" style={{ color: '#19376D' }}>
            Questions about these Terms? Reach us at support@getwalletwiser.com or write to 600 N Broad St 446, Suite 5, Middletown, DE 19709.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
