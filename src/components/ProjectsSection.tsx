import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "BetaLabs Club Website",
      description: "Interactive club website with animated Figma-based design and comprehensive event scheduling tools for IIIT Kottayam's premier tech club.",
      category: "Web Development",
      status: "Live",
      year: "2024",
      technologies: ["React", "Next.js", "TailwindCSS", "Figma", "Animation Libraries"],
      features: [
        "Animated Figma-based design system",
        "Event scheduling and management",
        "Member portal and authentication",
        "Responsive design with dark theme"
      ],
      impact: "Improved club engagement by 150% and streamlined event management",
      github: "#",
      live: "#"
    },
    {
      title: "Programming Compiler",
      description: "Advanced multi-language compiler with syntax highlighting, error feedback, and real-time code analysis. Built with modern compiler design principles.",
      category: "Compiler Design",
      status: "Work in Progress",
      year: "2024",
      technologies: ["Rust", "LLVM", "React", "TypeScript", "Monaco Editor"],
      features: [
        "Multi-language support (C, C++, Python)",
        "Advanced syntax highlighting",
        "Real-time error detection and feedback",
        "Code optimization suggestions"
      ],
      impact: "Enhancing development workflow with intelligent code analysis",
      github: "#",
      live: null
    },
    {
      title: "Eventify Platform",
      description: "Automated platform for event scheduling and management with REST APIs, delivering 30% performance improvements in data handling.",
      category: "Full-stack Development",
      status: "Work in Progress",
      year: "2024",
      technologies: ["Django", "React", "PostgreSQL", "Redis", "REST APIs"],
      features: [
        "Automated event scheduling",
        "Real-time notifications",
        "Performance optimized APIs",
        "Advanced analytics dashboard"
      ],
      impact: "30% performance gain in data handling and user experience",
      github: "#",
      live: null
    }
  ];

  const services = [
    {
      icon: Zap,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful interfaces for web and mobile applications",
      details: ["User Research", "Prototyping", "Design Systems", "Usability Testing"]
    },
    {
      icon: Users,
      title: "3D Design & Animation",
      description: "Bringing ideas to life through stunning 3D models and animations",
      details: ["3D Modeling", "Character Design", "Product Visualization", "Motion Graphics"]
    },
    {
      icon: Calendar,
      title: "Full-stack Development",
      description: "End-to-end development using modern frameworks and technologies",
      details: ["MERN Stack", "Django", "REST APIs", "Database Design"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Projects & Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming ideas into impactful digital solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12 mb-20">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-2xl overflow-hidden card-hover glow-effect animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Project Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-2xl font-bold text-card-foreground">{project.title}</h3>
                            <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                              project.status === 'Live' 
                                ? 'bg-accent-green text-background' 
                                : 'bg-accent text-accent-foreground'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="bg-primary/10 text-primary px-2 py-1 rounded-lg">
                              {project.category}
                            </span>
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">{project.description}</p>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-card-foreground mb-3">Key Features:</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                        <h4 className="font-semibold text-primary mb-2">Impact:</h4>
                        <p className="text-sm text-muted-foreground">{project.impact}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3">
                        <Button className="btn-primary" size="sm">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Button>
                        {project.live && (
                          <Button className="btn-secondary" size="sm">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-card-foreground mb-4">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium border border-border hover:border-primary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-12 text-gradient">Services I Offer</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 text-center card-hover glow-effect"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-card-foreground mb-4">{service.title}</h4>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-primary rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Have a project in mind?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Let's collaborate and bring your ideas to life with cutting-edge technology and creative design.
              </p>
              <Button 
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;