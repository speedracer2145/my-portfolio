import { useState } from 'react';
import { Mail, Linkedin, Send, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alokprakash1587@gmail.com",
      href: "mailto:alokprakash1587@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/alokprakash",
      href: "https://linkedin.com/in/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kottayam, India",
      href: null
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Let's Create Something Epic Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Drop me a message and let's start building the future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-card border border-border rounded-2xl p-8 glow-effect">
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-input border-border focus:border-primary transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-input border-border focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full bg-input border-border focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full group"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up space-y-8">
              {/* Contact Details */}
              <div className="bg-card border border-border rounded-2xl p-8 glow-effect">
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">Get in Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-accent-green rounded-full mr-3 animate-pulse"></div>
                  <span className="text-primary-foreground font-semibold">Available for Work</span>
                </div>
                <p className="text-primary-foreground/90 mb-6">
                  I'm currently open to new opportunities, freelance projects, and exciting collaborations.
                </p>
                <div className="grid grid-cols-2 gap-4 text-primary-foreground">
                  <div>
                    <p className="font-semibold">Freelance</p>
                    <p className="text-sm opacity-90">Available</p>
                  </div>
                  <div>
                    <p className="font-semibold">Full-time</p>
                    <p className="text-sm opacity-90">Open to offers</p>
                  </div>
                </div>
              </div>

              {/* Quick Connect */}
              <div className="bg-card border border-border rounded-2xl p-8 text-center glow-effect">
                <h4 className="font-bold text-card-foreground mb-4">Prefer a quick chat?</h4>
                <p className="text-muted-foreground mb-6">
                  Let's connect on LinkedIn or send me a direct email for faster communication.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="btn-secondary" size="sm">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button className="btn-ghost" size="sm">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-secondary border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Let's Build the Future Together
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether it's a groundbreaking app, a stunning 3D experience, or an innovative ML solution, 
                I'm here to turn your vision into reality. Every great project starts with a conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;