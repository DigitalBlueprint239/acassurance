import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import EstimateForm from "@/components/EstimateForm";

const FloatingServiceButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex fixed bottom-6 right-4 z-40 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all items-center justify-center"
        aria-label="Request Service"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading">Request Service</DialogTitle>
          </DialogHeader>
          <EstimateForm showMessage leadSource="floating-button" />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingServiceButton;
