import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#111827' }}>Terms of Service</h1>
          <p className="text-lg" style={{ color: '#1F2937' }}>Effective Date: November 2, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>1. Agreeing to These Terms</h2>
          <p className="mb-6" style={{ color: '#1F2937' }}>
            The Benefit Advisor LLC runs Try Wallet Wiser. Accessing or using our service (the &quot;Service&quot;) means you&apos;re agreeing to follow these Terms of Service (the &quot;Terms&quot;). If these Terms don&apos;t work for you, please don&apos;t use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>2. What the Service Does</h2>
          <p className="mb-6" style={{ color: '#1F2937' }}>
            Through www.trywalletwiser.com, Try Wallet Wiser is a free tool that helps you keep track of household bills and subscriptions. Members list their recurring bills and subscriptions, see everything due in one monthly calendar, and get reminders before due dates and renewals. Try Wallet Wiser provides reminders and organizing tools only and does not pay bills or provide financial advice.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>3. Text Message Program</h2>
          <p className="mb-4" style={{ color: '#1F2937' }}>
            Opting in to receive texts means you&apos;re agreeing to get account notification texts (such as bill due-date reminders and subscription renewal alerts), promotional texts (such as new feature announcements and tips for organizing your bills), or both from Try Wallet Wiser. Here&apos;s what to know:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#1F2937' }}>
            <li>Standard message and data rates may apply, and how often you hear from us can vary.</li>
            <li>Opt out whenever you like by replying STOP. Have a question? Reply HELP or email support@trywalletwiser.com.</li>
            <li>We&apos;re not responsible if a wireless carrier delays or fails to deliver a message.</li>
            <li>You don&apos;t need to agree to texts in order to use the Service, and doing so is not a condition of purchase.</li>
            <li>Want the full picture on how we handle your data? Check out our <Link href="/privacy" style={{ color: '#2563EB' }} className="underline">Privacy Policy</Link>.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>4. Liability Limits</h2>
          <p className="mb-6" style={{ color: '#1F2937' }}>
            Try Wallet Wiser isn&apos;t responsible for indirect, incidental, special, consequential, or punitive damages that come from using, or being unable to use, the Service. Try Wallet Wiser is a service of The Benefit Advisor LLC. Try Wallet Wiser provides reminders and organizing tools only and does not pay bills or provide financial advice.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>5. Get in Touch</h2>
          <p className="mb-6" style={{ color: '#1F2937' }}>
            Questions about these Terms? Reach us at support@trywalletwiser.com or write to 600 N Broad St 446, Suite 5, Middletown, DE 19709.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
