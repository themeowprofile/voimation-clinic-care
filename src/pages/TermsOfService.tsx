const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">📜 Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 29, 2025</p>
        
        <div className="prose prose-invert max-w-none space-y-8 text-foreground/90">
          <p>
            These Terms of Service ("Terms") govern your use of the website and services provided by Voimation.
          </p>
          <p className="font-medium">
            By accessing or using our services, you agree to be bound by these Terms.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Services</h2>
            <p className="text-muted-foreground">
              Voimation provides AI-powered automation, communication, and business support solutions. 
              Services may change or evolve over time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Eligibility</h2>
            <p className="text-muted-foreground">
              You must be at least 18 years old and legally able to enter into agreements to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Acceptable Use</h2>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Use our services for unlawful or fraudulent purposes</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Interfere with or disrupt our systems</li>
              <li>Use our services to send spam or unauthorized communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Communications Disclaimer</h2>
            <p className="mb-4 text-muted-foreground">
              Our services may involve automated communications, including AI-assisted calls, messages, or workflows.
            </p>
            <p className="text-muted-foreground">
              You are responsible for ensuring that your use of these services complies with all applicable laws, 
              including consent and communication regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content, branding, software, and materials provided by Voimation are the intellectual property 
              of Voimation and may not be copied, modified, or redistributed without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, Voimation shall not be liable for any indirect, incidental, 
              or consequential damages arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. No Guarantees</h2>
            <p className="text-muted-foreground">
              We do not guarantee specific results, outcomes, or business performance from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Termination</h2>
            <p className="text-muted-foreground">
              We reserve the right to suspend or terminate access to our services at any time for violations 
              of these Terms or applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Third-Party Services</h2>
            <p className="text-muted-foreground">
              Our services may integrate with third-party platforms. Voimation is not responsible for outages, 
              data loss, or issues caused by third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may update these Terms at any time. Continued use of our services after changes constitutes 
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">11. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and interpreted in accordance with applicable laws, 
              without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground">For questions regarding these Terms, contact:</p>
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

export default TermsOfService;
