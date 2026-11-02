import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#111827' }}>Privacy Policy</h1>
          <p className="text-lg" style={{ color: '#1F2937' }}>Effective Date: November 2, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>1. Overview</h2>
          <p className="mb-6" style={{ color: '#1F2937' }}>
            The Benefit Advisor LLC operates Try Wallet Wiser. We take your privacy seriously, and this policy lays out how your information gets collected, used, disclosed, and protected whenever you visit www.trywalletwiser.com or use our service. Using the service means you&apos;re agreeing to how we handle data as described here.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>2. What Information We Gather</h2>
          <p className="mb-4" style={{ color: '#1F2937' }}>Signing up for or using the service may involve us gathering:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#1F2937' }}>
            <li>Your name along with contact details like email and phone number</li>
            <li>The household bills and subscriptions you list, along with their due dates and renewal dates</li>
            <li>Your chosen SMS opt-in preferences (account notification texts and/or promotional texts)</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>3. Text Messaging</h2>
          <p className="mb-4" style={{ color: '#1F2937' }}>
            Should you opt in to text messages from Try Wallet Wiser, these conditions apply:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#1F2937' }}>
            <li>Depending on what you opt into, you could get account notification texts (such as bill due-date reminders and subscription renewal alerts), promotional texts (such as new feature announcements and tips for organizing your bills), or both.</li>
            <li>Standard message and data charges may apply, and how often you&apos;re messaged can vary.</li>
            <li>Want out? Reply STOP to any message. Have a question? Reply HELP or reach support@trywalletwiser.com.</li>
            <li><strong>Your mobile information is never shared with third parties or affiliates for marketing or promotional purposes.</strong></li>
            <li>Signing up for texts is entirely optional, isn&apos;t required to submit this form or use the service, and is not a condition of purchase.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>4. How Your Information Gets Used</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#1F2937' }}>
            <li>Running and improving our bill and subscription organizing tool</li>
            <li>Displaying your recurring bills and subscriptions on your monthly calendar</li>
            <li>Sending reminders before due dates and subscription renewals</li>
            <li>Responding to your account questions or general inquiries</li>
            <li>Meeting any applicable legal requirements</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>5. Reach Out to Us</h2>
          <p className="mb-6" style={{ color: '#1F2937' }}>
            Got questions about this policy? Here&apos;s how to reach us:<br />
            Try Wallet Wiser, a service of The Benefit Advisor LLC<br />
            600 N Broad St 446, Suite 5, Middletown, DE 19709<br />
            Email: <a href="mailto:support@trywalletwiser.com" style={{ color: '#2563EB' }}>support@trywalletwiser.com</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
