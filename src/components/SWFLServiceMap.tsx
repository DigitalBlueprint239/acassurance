const SWFLServiceMap = () => (
  <div className="relative rounded-xl overflow-hidden border border-border shadow-sm">
    {/* Google Maps Embed */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d460000!2d-81.795!3d26.142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000"
      width="100%"
      height="380"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="AC Assurance SWFL Service Area Map"
      className="w-full"
    />

    {/* SVG Overlay */}
    <div className="absolute inset-0 pointer-events-none">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        {/* Service area polygon overlay */}
        <polygon
21:           points="30,20 70,20 75,35 72,55 65,75 50,80 35,75 28,55 25,35"
          fill="rgba(10, 31, 68, 0.12)"
          stroke="rgba(10, 31, 68, 0.5)"
          strokeWidth="0.5"
        />
      </svg>

      {/* Pulsing radar marker at center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-primary/20 animate-ping" />
          <div className="absolute -inset-2 rounded-full bg-primary/30 animate-pulse" />
          <div className="w-4 h-4 rounded-full bg-primary border-2 border-white shadow-lg" />
        </div>
      </div>
    </div>

    {/* Badge */}
    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 shadow-sm">
      <span className="text-xs font-heading font-bold text-foreground">🗺️ Serving all of SWFL</span>
    </div>
  </div>
);

export default SWFLServiceMap;
