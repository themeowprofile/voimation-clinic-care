import { useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    // Load GoHighLevel form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://link.msgsndr.com/js/form_embed.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="hero-bg py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card p-4 md:p-8 rounded-2xl">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/iDWg4b8dBJ0Yo9kk2jEZ"
                style={{
                  width: "100%",
                  height: "1090px",
                  border: "none",
                  borderRadius: "3px",
                }}
                id="inline-iDWg4b8dBJ0Yo9kk2jEZ"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="1090"
                data-layout-iframe-id="inline-iDWg4b8dBJ0Yo9kk2jEZ"
                data-form-id="iDWg4b8dBJ0Yo9kk2jEZ"
                title="Form 0"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
