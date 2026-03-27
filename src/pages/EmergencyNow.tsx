import { useState } from "react";
import { Phone, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEOHead from "@/components/SEOHead";
import { PHONE, PHONE_LINK } from "@/data/services";

const VALID_ZIPS = new Set([
  "33901","33903","33904","33905","33907","33908","33909","33912","33913","33914",
  "33916","33917","33919","33965","33966","33967","33990","33991","33993",
  "34101","34102","34103","34104","34105","34108","34109","34110","34112","34113",
  "34114","34116","34117","34119","34120","34134","34135","34142","34145",
]);

const EmergencyNow = () => {
  const [zip, setZip] = useState("");
  const [status, setStatus] = useState<"idle" | "valid" | "invalid">("idle");

  const handleCheck = () => {
    const trimmed = zip.trim();
    setStatus(VALID_ZIPS.has(trimmed) ? "valid" : "invalid");
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--primary))] flex items-center justify-center px-4">
      <SEOHead
        title="Emergency AC Repair Now | SWFL | AC Assurance"
        description="Emergency AC repair in Southwest Florida. Enter your zip code for immediate dispatch. Available 24/7."
        noindex
      />
      <div className="max-w-xl w-full text-center py-16">
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-red-500 mb-4 leading-tight">
          Emergency AC Repair in SWFL
        </h1>
        <p className="text-xl text-white/90 mb-10">
          Your system restored today, or the diagnostic is on us.
        </p>

        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 mb-8">
          <label htmlFor="zip-input" className="block text-sm font-medium text-white/80 mb-3 uppercase tracking-wider">
            Enter Your Zip Code to Confirm Immediate Service
          </label>
          <div className="flex gap-3 max-w-xs mx-auto">
            <Input
              id="zip-input"
              type="text"
              inputMode="numeric"
              maxLength={5}
              placeholder="e.g. 33901"
              value={zip}
              onChange={(e) => {
                setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
                setStatus("idle");
              }}
              onKeyDown={(e) => e.key === "Enter" && zip.length === 5 && handleCheck()}
              className="bg-white text-foreground text-center text-lg font-semibold"
            />
            <Button
              onClick={handleCheck}
              disabled={zip.length !== 5}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6"
            >
              Check
            </Button>
          </div>
        </div>

        {status === "valid" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-green-600/20 border border-green-500/40 rounded-xl p-6 mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <p className="text-green-300 font-bold text-lg mb-1">
                We service your area!
              </p>
              <p className="text-white/80 text-sm mb-6">
                Call now for immediate dispatch.
              </p>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-3 bg-white text-primary font-extrabold text-3xl md:text-4xl px-8 py-5 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              >
                <Phone className="w-8 h-8" />
                {PHONE}
              </a>
            </div>
          </div>
        )}

        {status === "invalid" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-red-600/20 border border-red-500/40 rounded-xl p-6">
              <XCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
              <p className="text-red-300 font-bold text-lg mb-1">
                We do not service that area.
              </p>
              <p className="text-white/70 text-sm">
                Please call <a href={PHONE_LINK} className="underline text-white">{PHONE}</a> for assistance.
              </p>
            </div>
          </div>
        )}

        <p className="text-white/40 text-xs mt-12">
          © {new Date().getFullYear()} AC Assurance Cooling & Heating · CAC1823832
        </p>
      </div>
    </div>
  );
};

export default EmergencyNow;
