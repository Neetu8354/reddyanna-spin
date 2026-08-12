import { useState, useEffect } from "react";
import { WHATSAPP_LINK } from "@/lib/links";
import { X } from "lucide-react";

export const BonusPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay to ensure smooth page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 pointer-events-none">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/20 pointer-events-auto"
        onClick={() => setIsVisible(false)}
      />

      {/* Popup */}
      <div className="relative pointer-events-auto w-full max-w-sm animate-in fade-in zoom-in-95 duration-500">
        <div className="rounded-2xl bg-card border border-gold/40 shadow-gold-lg overflow-hidden">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 z-10 p-1.5 rounded-full hover:bg-gold/10 transition-colors"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-gold/20 to-gold/10 px-6 pt-6 pb-4">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-gold mb-1">
                🎁 100%
              </div>
              <div className="text-sm font-semibold text-foreground">
                BONUS
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-4 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Claim your 100% bonus now!
            </p>

            {/* WhatsApp CTA Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsVisible(false)}
              className="block w-full bg-whatsapp hover:bg-whatsapp/90 text-white font-bold py-3 px-4 rounded-lg transition-colors text-center text-sm"
            >
              CLICK HERE — WHATSAPP
            </a>

            {/* Dismiss text */}
            <button
              onClick={() => setIsVisible(false)}
              className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
