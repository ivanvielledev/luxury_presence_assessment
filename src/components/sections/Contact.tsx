import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="bg-[#FAF8F5] text-neutral-900 py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col gap-10">
        {/* Header Label */}
        <div className="flex flex-col gap-2">
          <h6 className="text-primary/80 font-bold tracking-[0.25em] text-xs uppercase">CALL OR VISIT</h6>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900">Get In Touch</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 pt-4">
          {/* Left - Contact Form */}
          <div className="flex-1 flex flex-col gap-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Marci Metzger"
                    className="w-full bg-white border border-neutral-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-neutral-800 transition-colors"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(775) 000-0000"
                    className="w-full bg-white border border-neutral-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-neutral-800 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="marci@example.com"
                  className="w-full bg-white border border-neutral-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-neutral-800 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you with your real estate needs?"
                  className="w-full bg-white border border-neutral-300 rounded-md p-4 text-sm focus:outline-none focus:border-neutral-800 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold text-xs tracking-widest uppercase px-8 py-4 rounded-md hover:bg-primary transition-colors duration-300 active:scale-[0.99] cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <span className="text-xs text-muted-foreground/60">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </span>
          </div>

          {/* Right - Contact Details & Working Hours */}
          <div className="flex-1 flex flex-col justify-between gap-10 bg-white border border-neutral-200/80 p-8 sm:p-10 rounded-xl shadow-sm">
            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              <h3 className="font-serif text-2xl font-normal text-neutral-900 border-b border-neutral-200 pb-4">
                Office Information
              </h3>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Location</span>
                    <p className="text-sm text-neutral-800 font-medium mt-0.5">Pahrump, NV 89048</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center shrink-0 text-primary">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Phone</span>
                    <a
                      href="tel:7750000000"
                      className="text-sm text-neutral-800 font-medium hover:text-primary transition-colors mt-0.5"
                    >
                      (775) 000-0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center shrink-0 text-primary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Email</span>
                    <a
                      href="mailto:marci@metzgerhomes.com"
                      className="text-sm text-neutral-800 font-medium hover:text-primary transition-colors mt-0.5"
                    >
                      marci@metzgerhomes.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex flex-col gap-4 border-t border-neutral-200 pt-6">
              <div className="flex items-center gap-2 text-neutral-900 font-serif text-lg">
                <Clock className="w-4 h-4 text-primary" />
                <h4>Working Hours</h4>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-600">
                <div>
                  <p className="font-semibold text-neutral-800">Monday – Friday</p>
                  <p>8:00 AM – 6:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">Saturday – Sunday</p>
                  <p>By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
