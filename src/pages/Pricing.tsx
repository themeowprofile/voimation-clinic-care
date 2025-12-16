import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import PricingModal from "@/components/PricingModal";

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    subtitle: "Best for clinics handling 20-50 patient calls/day",
    isPopular: false,
    previewFeatures: [
      "AI Receptionist",
      "Basic Appointment Booking",
      "Email Support",
    ],
    features: {
      highlighted: [
        "Never miss another patient call",
        "Reduce front-desk workload instantly",
        "Appointments booked automatically, 24/7",
      ],
      regular: [
        "Basic appointment scheduling",
        "Voicemail transcription",
        "Email support (48hr response)",
        "Standard integrations",
      ],
    },
    callLimit: "500 calls/mo",
    aiAgents: "1 AI Agent",
    support: "Email Support",
    idealFor: "Small/Solo Clinics",
    label: "Ideal for small or solo clinics",
    scarcity: "Perfect for testing AI automation risk-free",
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    subtitle: "Best for clinics handling 50-150 patient calls/day",
    isPopular: true,
    previewFeatures: [
      "Everything in Starter",
      "Patient Follow-ups",
      "EHR Integration",
      "Priority Support",
    ],
    features: {
      highlighted: [
        "Never miss another patient call",
        "Reduce front-desk workload instantly",
        "Appointments booked automatically, 24/7",
      ],
      regular: [
        "Advanced appointment management",
        "Patient follow-up automation",
        "EHR integration",
        "Insurance verification",
        "Priority support (24hr response)",
        "Custom voice & personality",
      ],
    },
    callLimit: "2,000 calls/mo",
    aiAgents: "3 AI Agents",
    support: "Priority Support",
    idealFor: "Growing Clinics",
    comparison: "Clinics on this plan save an average of 40+ staff hours/month",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    subtitle: "Best for multi-location or high-volume clinics",
    isPopular: false,
    previewFeatures: [
      "Everything in Professional",
      "Unlimited Calls",
      "Dedicated Account Manager",
      "Custom AI Training",
    ],
    features: {
      highlighted: [
        "Never miss another patient call",
        "Reduce front-desk workload instantly",
        "Custom AI infrastructure for your needs",
      ],
      regular: [
        "Unlimited AI agents",
        "Multi-location support",
        "Custom AI training",
        "Emergency triage system",
        "Dedicated account manager",
        "24/7 phone support",
        "SLA guarantees",
        "On-site implementation",
      ],
    },
    callLimit: "Unlimited",
    aiAgents: "Unlimited",
    support: "24/7 Dedicated",
    idealFor: "Multi-Location",
    label: "Designed for multi-location or high-volume clinics",
    scarcity: "Customization & priority handling",
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
              All plans require a one-time development fee of <span className="text-primary font-semibold">$3,450</span>
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
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">{plan.subtitle}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.previewFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-secondary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                      plan.isPopular
                        ? "btn-glow"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    <span>View Details</span>
                  </button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Click to see full features
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
