'use client';
import { useState } from 'react';
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import { Button } from '@/components/ui/neon-button';
import { TextRollInView } from '@/components/ui/text-roll-inview';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Mail, MapPin, Clock } from 'lucide-react';
import { ShinyBorder } from '@/components/ui/shiny-border';
import { ShinySquare } from '@/components/ui/shiny-square';

const syne = Syne({ subsets: ['latin'], weight: ['700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500'] });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400'] });

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass = `w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#0066FF]/60 transition-colors duration-200`;
  const labelClass = `${mono.className} text-xs tracking-widest uppercase text-white/30 mb-2 block`;

  return (
    <section
      id="contact"
      className={`${dmSans.className} relative w-full pt-20 pb-32 px-6`}
      style={{ backgroundColor: '#030303'}}
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className={`${mono.className} text-xs tracking-widest uppercase mb-4`} style={{ color: '#0066FF' }}>
            GET IN TOUCH
          </p>
          <h2 className={`${syne.className} text-4xl md:text-5xl font-bold text-white mb-4`}>
            <TextRollInView>Let's talk.</TextRollInView>
          </h2>
          <p className="text-base max-w-lg" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Want to learn more? Reach out for pricing inquiries or a live demo of our automation services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Form */}
          <ShinyBorder className="w-full">
            <div className="relative p-8">
              <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Business Name</label>
                      <input
                        name="business"
                        value={form.business}
                        onChange={handleChange}
                        placeholder="Peak Plumbing Co."
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(604) 555-0192"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@yourbusiness.com"
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>What do you need?</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about your business and what you're looking for..."
                      rows={5}
                      className={`${inputClass} resize-none`}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="text-white text-sm font-medium w-full sm:w-auto"
                  >
                    Send Message →
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-start gap-6 py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                  >
                    <CheckCircle size={48} style={{ color: '#0066FF' }} />
                  </motion.div>
                  <div>
                    <h3 className={`${syne.className} text-2xl font-bold text-white mb-2`}>
                      Message received.
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                      We'll be in touch within 24 hours. Talk soon.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          </ShinyBorder>

          {/* Right side — contact info + trust */}
          <div className="relative">
            <ShinySquare />
            <div className="flex flex-col gap-10 lg:pl-8 lg:border-l border-white/10 relative z-10">

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <Mail size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#0066FF' }} />
                <div>
                  <p className={`${mono.className} text-xs tracking-widest uppercase text-white/30 mb-1`}>Email</p>
                  <a
                    href="mailto:tyler@covasolutions.com"
                    className="text-white text-sm hover:text-[#0066FF] transition-colors duration-200"
                  >
                    tyler@covasolutions.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#0066FF' }} />
                <div>
                  <p className={`${mono.className} text-xs tracking-widest uppercase text-white/30 mb-1`}>Location</p>
                  <p className="text-white text-sm">Vancouver, BC</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#0066FF' }} />
                <div>
                  <p className={`${mono.className} text-xs tracking-widest uppercase text-white/30 mb-1`}>Response Time</p>
                  <p className="text-white text-sm">Within 24 hours, guaranteed</p>
                </div>
              </div>
            </div>

            <div
              className="border-l-2 pl-6 py-2"
              style={{ borderColor: '#0066FF' }}
            >
              <p className="text-white/50 text-sm leading-relaxed italic">
                "No obligation. No sales deck. We'll show you exactly what we'd build for your business and tell you honestly whether it's a fit."
              </p>
            </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
