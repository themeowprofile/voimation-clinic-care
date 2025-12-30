const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">🔐 Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 29, 2025</p>
        
        <div className="prose prose-invert max-w-none space-y-8 text-foreground/90">
          <p>
            Voimation ("we," "us," or "our") operates the website and services under the brand name Voimation. 
            This Privacy Policy explains how we collect, use, disclose, and protect your information when you 
            interact with our website, services, or communications.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            
            <h3 className="text-lg font-medium text-foreground mb-2">a. Personal Information</h3>
            <ul className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name</li>
              <li>Any information voluntarily submitted through forms or communications</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mb-2">b. Usage Data</h3>
            <ul className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time and date of visits</li>
            </ul>
            <p className="text-muted-foreground">This data helps us understand how our services are used and improve performance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="mb-2">We may use collected information to:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Provide and operate our services</li>
              <li>Respond to inquiries and support requests</li>
              <li>Communicate via email, phone calls, or SMS (with consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Communications & Consent</h2>
            <p className="mb-4 text-muted-foreground">
              By submitting your information through our website or forms, you consent to receive communications 
              from Voimation, which may include emails, phone calls, or SMS messages related to our services.
            </p>
            <p className="text-muted-foreground">
              You may opt out at any time by following unsubscribe instructions or contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Sharing & Disclosure</h2>
            <p className="mb-2 text-muted-foreground">We do not sell your personal information.</p>
            <p className="mb-2">We may share data only with:</p>
            <ul className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
              <li>Trusted service providers who assist in operating our business</li>
              <li>Legal or regulatory authorities if required by law</li>
            </ul>
            <p className="text-muted-foreground">All third parties are required to protect your information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground">
              We take reasonable administrative and technical measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Cookies & Tracking Technologies</h2>
            <p className="text-muted-foreground">
              We may use cookies or similar technologies to enhance user experience and analyze website traffic. 
              You can disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Your Rights</h2>
            <p className="mb-2">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent for communications</li>
            </ul>
            <p className="text-muted-foreground">
              To exercise these rights, contact us at{" "}
              <a href="mailto:support@voimation.info" className="text-primary hover:underline">
                support@voimation.info
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Third-Party Links</h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party sites. We are not responsible for the privacy 
              practices or content of those websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Updates to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page 
              with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <p className="mt-2">
              <a href="mailto:support@voimation.info" className="text-primary hover:underline">
                📧 support@voimation.info
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
