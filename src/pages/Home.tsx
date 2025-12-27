import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Calendar, Bell, ArrowRight, CheckCircle, Zap, Clock, Shield } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Phone,
      title: "24/7 AI Receptionists",
      description: "Handle unlimited calls with intelligent AI that never sleeps, ensuring every patient inquiry is answered.",
    },
    {
      icon: Calendar,
      title: "Smart Appointment Booking",
      description: "Seamlessly syncs with your scheduling systems for effortless appointment management.",
    },
    {
      icon: Bell,
      title: "Patient Follow-ups",
      description: "Automated reminders and check-ins that keep patients engaged and informed.",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime", icon: Zap },
    { value: "50%", label: "Cost Reduction", icon: Shield },
    { value: "24/7", label: "Availability", icon: Clock },
  ];

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="hero-bg min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm text-primary font-medium">AI-Powered Healthcare Solutions</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Clinic with{" "}
              <span className="gradient-text">AI-Powered Call Automation</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Never miss a patient call. AI manages bookings, inquiries & follow-ups 24/7, 
              so your team can focus on what matters most—patient care.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/voimation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow group"
              >
                <span className="flex items-center gap-2">
                  Book a Free Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link to="/services" className="btn-outline-glow">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Intelligent Solutions for Modern Clinics
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Streamline your operations with AI that understands healthcare
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card-glow p-8 group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="gradient-text">Voimation</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-leading reliability and performance for healthcare providers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="stat-glow group hover:border-primary/50 transition-colors"
              >
                <stat.icon size={32} className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 cosmic-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card-glow p-12 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join hundreds of clinics already using Voimation to streamline their patient communications.
            </p>
            <a
              href="https://calendly.com/voimation/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 group"
            >
              <span>Schedule a Demo</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-10 md:p-12"
            >
              <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Built for Healthcare
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Voimation is purpose-built for healthcare environments, trained in medical terminology 
                    and patient communication best practices. Our AI understands the unique needs of 
                    healthcare providers and delivers compassionate, accurate responses that maintain 
                    the trust your patients expect.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {["HIPAA-Aware", "Medical Terminology", "Patient-Centric", "24/7 Reliability"].map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-sm text-primary"
                      >
                        <CheckCircle size={14} />
                        {tag}
                      </span>
                    ))}
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
