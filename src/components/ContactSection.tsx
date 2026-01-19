import { Bird, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactSectionProps {
  onDispatchRaven?: () => void;
}

const ContactSection = ({ onDispatchRaven }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger raven animation - toast will be shown after raven completes
    onDispatchRaven?.();
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    console.log('Raven sent:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Bird className="text-primary w-10 h-10" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
            Send a Raven
          </h2>
          <div className="divider-ornate w-48 mx-auto mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Should you wish to forge an alliance or discuss matters of code, 
            dispatch your message. The ravens fly swift across the realm.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="relative">
              <label className="block font-display text-sm tracking-widest text-muted-foreground uppercase mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ser Name of House..."
                className="w-full bg-card border border-border focus:border-primary/50 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:glow-gold transition-all duration-300"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block font-display text-sm tracking-widest text-muted-foreground uppercase mb-2">
                Raven Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.raven@kingdom.com"
                className="w-full bg-card border border-border focus:border-primary/50 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:glow-gold transition-all duration-300"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <label className="block font-display text-sm tracking-widest text-muted-foreground uppercase mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here, and it shall reach me faster than wildfire spreads..."
              rows={6}
              className="w-full bg-card border border-border focus:border-primary/50 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:glow-gold transition-all duration-300 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="group relative border-gradient-gold px-12 py-4 font-display text-sm tracking-widest uppercase transition-all duration-300 hover:glow-gold bg-background"
            >
              <span className="text-gradient-gold group-hover:opacity-80 transition-opacity flex items-center gap-3">
                <Bird className="w-4 h-4" />
                Dispatch Raven
              </span>
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-center font-display text-sm text-muted-foreground tracking-widest uppercase mb-6">
            Or Find Me Across The Realm
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-12 h-12 border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-gold"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-gold"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-gold"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-gold"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;