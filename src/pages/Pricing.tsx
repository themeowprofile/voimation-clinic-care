import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import PricingModal from "@/components/PricingModal";

const pricingPlans = [
  {
    name: "Beginner",
    price: "$285",
    period: "/month",
    setupFee: "$2,450",
    subtitle: "Best for: Small clinics, low call volume, first-time AI users",
    positioning: "This makes sure every call is answered — even when your staff can't.",
    isPopular: false,
    previewFeatures: [
      "1,500 AI voice minutes/month",
      "1 phone number",
      "Missed & after-hours calls",
      "Emergency detection & escalation",
    ],
    features: {
      highlighted: [
        "1,500 AI voice minutes/month",
        "1 phone number included",
        "Emergency detection & escalation rules",
      ],
      regular: [
        "AI handles missed calls",
        "After-hours call coverage",
        "New patient inquiries",
        "Appointment requests (capture or book)",
        "Call recordings + transcripts",
        "Basic reporting dashboard",
      ],
    },
    notIncluded: [
      "SMS follow-ups",
      "Multiple phone numbers",
      "Advanced routing logic",
    ],
    callLimit: "1,500 mins/mo",
    aiAgents: "1 Phone Number",
    support: "Standard",
    idealFor: "Small/Solo Clinics",
  },
  {
    name: "Scale",
    price: "$595",
    period: "/month",
    setupFee: "$2,450",
    subtitle: "Best for: Busy clinics missing calls during peak hours",
    positioning: "This turns phone traffic into predictable bookings instead of callbacks.",
    isPopular: true,
    previewFeatures: [
      "3,500 AI voice minutes/month",
      "10,000 SMS messages/month",
      "2 phone numbers",
      "Live overflow handling",
    ],
    features: {
      highlighted: [
        "3,500 AI voice minutes/month",
        "10,000 SMS messages/month",
        "2 phone numbers included",
      ],
      regular: [
        "Everything in Starter, PLUS:",
        "Live overflow call handling during office hours",
        "SMS confirmations & missed-call follow-ups",
        "Multi-step call qualification",
        "Intelligent routing (staff, voicemail, callbacks)",
        "Custom clinic-specific scripting",
        "Daily call & booking summaries",
      ],
    },
    callLimit: "3,500 mins/mo",
    aiAgents: "2 Phone Numbers",
    support: "Priority",
    idealFor: "Growing Clinics",
    comparison: "Turns phone traffic into predictable bookings",
  },
  {
    name: "Enterprise",
    price: "$945",
    period: "/month",
    setupFee: "$2,450",
    subtitle: "Best for: High-volume clinics, multi-doctor practices, growth-focused owners",
    positioning: "This replaces the need to ever hire another front-desk employee.",
    isPopular: false,
    previewFeatures: [
      "6,000 AI voice minutes/month",
      "20,000 SMS messages/month",
      "Multiple phone numbers",
      "24/7 full intake coverage",
    ],
    features: {
      highlighted: [
        "6,000 AI voice minutes/month",
        "20,000 SMS messages/month",
        "Multiple phone numbers",
      ],
      regular: [
        "Everything in Growth, PLUS:",
        "24/7 full intake coverage",
        "Advanced routing (by service, urgency, time of day)",
        "Automated SMS recovery for unbooked calls",
        "Multi-department or multi-location logic",
        "Monthly optimization & performance tuning",
        "Priority support & faster changes",
      ],
    },
    callLimit: "6,000 mins/mo",
    aiAgents: "Multiple Numbers",
    support: "Priority+",
    idealFor: "Multi-Location",
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<typeof pricingPlans[0] | null>(null);

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="hero-bg py-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Choose the plan that fits your clinic's needs. All plans include our core AI technology.
            </p>
            <p className="text-sm text-muted-foreground">
              All plans require a one-time setup fee of <span className="text-primary font-semibold">$2,450</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPlan(plan)}
                className={`relative cursor-pointer group ${
                  plan.isPopular ? "md:-mt-4 md:mb-4" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-primary to-secondary text-white">
                      <Sparkles size={14} />
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={`h-full p-8 rounded-2xl transition-all duration-300 ${
                    plan.isPopular
                      ? "glass-card-glow pulse-glow group-hover:scale-[1.02]"
                      : "glass-card group-hover:glass-card-glow group-hover:scale-[1.02]"
                  }`}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    + {plan.setupFee} setup
                  </p>

                  <p className="text-sm text-muted-foreground mb-6">{plan.subtitle}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.previewFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-secondary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://calendly.com/voimation/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 block text-center ${
                      plan.isPopular
                        ? "btn-glow"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    <span>Get Started</span>
                  </a>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Click card for full details
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check size={18} className="text-secondary" />
              <span className="text-sm">No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check size={18} className="text-secondary" />
              <span className="text-sm">Scale anytime</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check size={18} className="text-secondary" />
              <span className="text-sm">HIPAA-aware AI</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check size={18} className="text-secondary" />
              <span className="text-sm">Healthcare-trained models</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Modal */}
      <PricingModal
        plan={selectedPlan}
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
    </main>
  );
};

export default Pricing;
