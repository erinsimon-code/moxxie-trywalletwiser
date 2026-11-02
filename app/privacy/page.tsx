import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#102A43' }}>Privacy Policy</h1>
          <p className="text-lg" style={{ color: '#19376D' }}>Effective Date: November 2, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#102A43' }}>1. Overview</h2>
          <p className="mb-6" style={{ color: '#19376D' }}>
            The Benefit Advisor LLC operates Wallet Wiser. We take your privacy seriously, and this policy lays out how your information gets collected, used, disclosed, and protected whenever you visit www.getwalletwiser.com or use our service. Using the service means you're agreeing to how we handle data as described here.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#102A43' }}>2. What Information We Gather</h2>
          <p className="mb-4" style={{ color: '#19376D' }}>Signing up for or using the service may involve us gathering:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#19376D' }}>
            <li>Your name along with contact details like email and phone number</li>
            <li>Your company code and the employer organization it's associated with</li>
            <li>The guides you've read, workshops you've attended, and savings goals you've set</li>
            <li>Your chosen SMS opt-in preferences (account notification texts and/or promotional texts)</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#102A43' }}>3. Text Messaging</h2>
          <p className="mb-4" style={{ color: '#19376D' }}>
            Should you opt in to text messages from Wallet Wiser, these conditions apply:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#19376D' }}>
            <li>Depending on what you opt into, you could get account notification texts (workshop reminders and goal check-ins), promotional texts (new guides and upcoming workshop announcements), or both.</li>
            <li>Standard message and data charges may apply, and how often you're messaged can vary.</li>
            <li>Want out? Text STOP to any message. Have a question? Text HELP or reach support@getwalletwiser.com.</li>
            <li><strong>Your mobile details are never passed along to third parties or affiliates for promotional purposes.</strong></li>
            <li>Signing up for texts is entirely optional, isn't required to use the service, and is not a condition of employment.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#102A43' }}>4. How Your Information Gets Used</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#19376D' }}>
            <li>Running and improving our financial wellness program</li>
            <li>Connecting employees to their employer's program using a company code</li>
            <li>Delivering guides, workshop reminders, and monthly savings goal check-ins</li>
            <li>Responding to your account questions or general inquiries</li>
            <li>Meeting any applicable legal requirements</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#102A43' }}>5. Reach Out to Us</h2>
          <p className="mb-6" style={{ color: '#19376D' }}>
            Got questions about this policy? Here's how to reach us:<br />
            Wallet Wiser, a service of The Benefit Advisor LLC<br />
            600 N Broad St 446, Suite 5, Middletown, DE 19709<br />
            Email: <a href="mailto:support@getwalletwiser.com" style={{ color: '#00B4D8' }}>support@getwalletwiser.com</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
