import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Shield, XCircle } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  setupFee: string;
  subtitle: string;
  positioning: string;
  isPopular?: boolean;
  features: {
    highlighted: string[];
    regular: string[];
  };
  notIncluded?: string[];
  callLimit: string;
  aiAgents: string;
  support: string;
  idealFor: string;
  comparison?: string;
}

interface PricingModalProps {
  plan: PricingPlan | null;
  isOpen: boolean;
  onClose: () => void;
}

const PricingModal = ({ plan, isOpen, onClose }: PricingModalProps) => {
  if (!plan) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-lg glass-card-glow p-8 max-h-[90vh] overflow-y-auto ${
              plan.isPopular ? "pulse-glow" : ""
            }`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              aria-label="Close modal"
            >
              <X size={20} className="text-muted-foreground" />
            </button>

            {/* Popular Badge */}
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary to-secondary text-white">
                  Most Popular • Highest ROI
                </span>
              </div>
            )}

            {/* Header */}
            <div className="text-center mb-6 pt-4">
              <h3 className="text-2xl font-bold gradient-text mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{plan.subtitle}</p>
              <p className="text-sm text-secondary mt-3 font-medium italic">
                "{plan.positioning}"
              </p>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 mb-6 py-2 px-4 rounded-full bg-muted/30 mx-auto w-fit">
              <Shield size={16} className="text-secondary" />
              <span className="text-xs text-muted-foreground">
                HIPAA-Aware AI • Healthcare-Trained Models
              </span>
            </div>

            {/* Highlighted Features */}
            <div className="space-y-3 mb-4">
              {plan.features.highlighted.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-foreground font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            {/* Regular Features */}
            <div className="space-y-2 mb-6 pl-8">
              {plan.features.regular.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={14} className="text-muted-foreground" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Not Included */}
            {plan.notIncluded && plan.notIncluded.length > 0 && (
              <div className="mb-6 pl-8">
                <p className="text-xs text-muted-foreground mb-2 font-medium">Not included (by design):</p>
                <div className="space-y-1">
                  {plan.notIncluded.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground/60">
                      <XCircle size={14} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Plan Details */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
              <div className="bg-muted/30 rounded-lg p-3">
                <p className="text-muted-foreground">Voice Minutes</p>
                <p className="font-semibold text-foreground">{plan.callLimit}</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-3">
                <p className="text-muted-foreground">Phone Numbers</p>
                <p className="font-semibold text-foreground">{plan.aiAgents}</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-3">
                <p className="text-muted-foreground">Support</p>
                <p className="font-semibold text-foreground">{plan.support}</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-3">
                <p className="text-muted-foreground">Ideal For</p>
                <p className="font-semibold text-foreground">{plan.idealFor}</p>
              </div>
            </div>

            {/* Comparison Line */}
            {plan.comparison && (
              <p className="text-center text-sm text-secondary mb-4">
                {plan.comparison}
              </p>
            )}

            {/* Price Anchoring */}
            <p className="text-center text-xs text-muted-foreground mb-4">
              Costs less than 1 part-time receptionist
            </p>

            {/* Setup Fee Note */}
            <p className="text-center text-xs text-muted-foreground mb-6">
              One-time AI setup & deployment: {plan.setupFee} (required)
            </p>

            {/* CTA */}
            <a
              href="https://calendly.com/voimation/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow w-full text-center block"
            >
              <span>Book a Free Strategy Call</span>
            </a>

            {/* Micro-text */}
            <p className="text-center text-xs text-muted-foreground mt-3">
              No commitment • Custom demo for your clinic
            </p>

            {/* Trust Lines */}
            <div className="mt-6 pt-4 border-t border-border/50 space-y-2">
              <p className="text-xs text-muted-foreground text-center">
                We tailor the AI specifically to your clinic's workflows
              </p>
              <p className="text-xs text-muted-foreground text-center">
                No long-term contracts. Scale anytime.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingModal;
