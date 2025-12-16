import { motion } from "framer-motion";
import { 
  Phone, 
  Calendar, 
  Bell, 
  AlertTriangle, 
  FileCheck, 
  Globe, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "AI Receptionist",
      description: "Intelligent call handling that manages inquiries, transfers, and scheduling with natural conversation.",
      features: ["Unlimited concurrent calls", "Natural language processing", "Smart call routing", "Voicemail transcription"],
    },
    {
      icon: Calendar,
      title: "Appointment Management",
      description: "Seamless integration with your existing EHR systems for automated scheduling and reminders.",
      features: ["EHR integration", "Automated reminders", "Easy rescheduling", "Waitlist management"],
    },
    {
      icon: Bell,
      title: "Patient Follow-ups",
      description: "Proactive patient engagement with automated post-visit check-ins and care coordination.",
      features: ["Post-visit check-ins", "Prescription reminders", "Patient surveys", "Care plan adherence"],
    },
    {
      icon: AlertTriangle,
      title: "Emergency Triage",
      description: "AI-powered symptom assessment that identifies urgent cases and escalates appropriately.",
      features: ["Symptom assessment", "Urgency classification", "Emergency alerts", "Provider notifications"],
    },
    {
      icon: FileCheck,
      title: "Insurance Verification",
      description: "Real-time insurance verification and billing support to streamline administrative tasks.",
      features: ["Real-time verification", "Coverage checks", "Billing support", "Claim status updates"],
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Break language barriers with AI that communicates fluently in over 50 languages.",
      features: ["50+ languages", "Cultural sensitivity", "Accent recognition", "Translation services"],
    },
  ];

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="hero-bg py-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">AI-Powered</span> Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions designed specifically for healthcare providers. 
              Every feature built to enhance patient care and streamline operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card-glow p-8 group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} className="text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 cosmic-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              See Our Solutions in Action
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a personalized demo and discover how Voimation can transform your clinic's operations.
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
    </main>
  );
};

export default Services;
