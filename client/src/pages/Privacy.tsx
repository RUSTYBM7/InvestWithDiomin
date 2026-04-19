import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose dark:prose-invert max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Invest With Diomin ("we," "us," or "our") operates the InvestWithDiomin.today website and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you voluntarily provide, such as:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Contact information (name, email, phone)</li>
                <li>Account information (authentication credentials)</li>
                <li>Investment and financial data</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Providing and maintaining our services</li>
                <li>Personalizing your experience</li>
                <li>Sending newsletters and updates</li>
                <li>Responding to your inquiries</li>
                <li>Improving our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Security of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses third-party services including Supabase (authentication and storage), Mailchimp (email marketing), and Google Analytics. These services have their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, update, or delete your personal information at any time by contacting us at book@investwithdiomin.today.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                Email: <span className="font-semibold">book@investwithdiomin.today</span>
              </p>
            </section>

            <section>
              <p className="text-sm text-muted-foreground border-t border-border pt-6 mt-8">
                Last updated: January 2025
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
