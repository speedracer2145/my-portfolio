import { ArrowDown, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Using uploaded profile image

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-hero overflow-hidden">
      {/* Clean geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/lovable-uploads/a8439356-ab15-44cf-b4e9-0c0cf825f8ee.png"
                alt="Alok Prakash"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded-2xl font-medium text-sm backdrop-blur-sm border border-primary/20 animate-pulse">
              Available for work
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary via-primary-glow to-accent-teal bg-clip-text text-transparent animate-pulse">
                  Alok Prakash
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                I design, build, and innovate at the intersection of{' '}
                <span className="text-foreground font-semibold">design</span> and{' '}
                <span className="text-foreground font-semibold">technology</span>.
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate 3D designer, full-stack developer, and machine learning enthusiast 
                crafting meaningful digital experiences for the future.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group" 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Eye className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                View Work
              </Button>
              
              <Button 
                className="bg-secondary hover:bg-muted text-secondary-foreground px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 border border-border hover:border-primary group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
                Download Resume
              </Button>
              
              <Button 
                className="bg-transparent hover:bg-secondary text-foreground px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 border border-border hover:border-primary group" 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>

            {/* Tech Stack Preview */}
            <div className="mt-16 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-6 font-medium">Currently working with:</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {['React', 'Python', 'Blender', 'Figma', 'Django', 'Unity'].map((tech, index) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-card text-card-foreground rounded-xl text-sm font-medium border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors scroll-indicator"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default HeroSection;