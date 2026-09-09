import { ExternalLink, MapPin, Navigation } from "lucide-react";

const Map = () => {
  // Pahrump, NV Google Maps Embed URL
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102983.87637841797!2d-116.05929653134372!3d36.20838890737397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c639f75fb13be5%3A0x7d8959f6d6b63e0!2sPahrump%2C%20NV!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Pahrump,+NV+89048";

  return (
    <section className="bg-[#FAF8F5] text-neutral-900 py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h6 className="text-primary font-bold tracking-[0.25em] text-xs uppercase">LOCATION & AREA</h6>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-neutral-900">Find Our Office</h2>
          </div>

          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-800 hover:text-primary transition-colors duration-300"
          >
            <span>Get Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-xl overflow-hidden border border-neutral-200/80 shadow-sm bg-neutral-200">
          <iframe
            title="Office Location Map"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />

          {/* Location Badge Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md border border-neutral-200/80 p-5 rounded-lg shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-md">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center shrink-0 text-primary">
              <MapPin className="w-5 h-5" />
            </div>

            <div className="flex flex-col grow">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                Primary Service Area
              </span>
              <p className="text-sm font-serif font-medium text-neutral-900">Pahrump & Surrounding Communities</p>
              <p className="text-xs text-neutral-600 mt-0.5">Nye County, Nevada 89048</p>
            </div>

            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 sm:mt-0 p-2.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors duration-300 shrink-0"
              aria-label="Open in Google Maps"
            >
              <Navigation className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
