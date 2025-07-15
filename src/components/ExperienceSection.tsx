import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Granville",
      role: "Designer & Intern",
      period: "Dec 2024 – Feb 2025",
      location: "Remote",
      type: "Internship",
      current: true,
      description: "Designing innovative solutions for international development projects",
      achievements: [
        "Designed a comprehensive MIS for FSRP (Malawi) improving data management efficiency",
        "Developed UX/UI for ALETU and PAYGo platforms, enhancing user experience",
        "Collaborated cross-functionally on scalable platforms serving diverse user bases",
        "Applied design thinking to solve complex problems in emerging markets"
      ],
      technologies: ["Figma", "UX/UI Design", "Product Design", "Cross-functional Collaboration"]
    },
    {
      company: "Beta-Labs, IIIT Kottayam",
      role: "Lead of Design",
      period: "Aug 2024 – Present",
      location: "Kottayam, India",
      type: "Leadership",
      current: true,
      description: "Leading design initiatives for the premier tech club at IIIT Kottayam",
      achievements: [
        "Leading design strategy for website and mobile app development",
        "Spearheading branding initiatives and visual identity development",
        "Designing product UI/UX for multiple club projects and events",
        "Mentoring junior designers and establishing design workflows"
      ],
      technologies: ["Figma", "Sketch", "Branding", "Product Design", "Team Leadership"]
    },
    {
      company: "GDSC IIIT Kottayam",
      role: "Design Member",
      period: "2022 – 2023",
      location: "Kottayam, India",
      type: "Volunteer",
      current: false,
      description: "Contributing to Google Developer Student Club's visual and design initiatives",
      achievements: [
        "Created compelling event graphics and promotional materials",
        "Coordinated 20+ design-driven sessions and workshops",
        "Collaborated with development teams on user interface design",
        "Contributed to the club's brand identity and visual consistency"
      ],
      technologies: ["Photoshop", "Illustrator", "Event Design", "Workshop Coordination"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building impactful solutions through design and technology
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-card border border-border rounded-2xl p-8 card-hover glow-effect">
                  <div className="grid lg:grid-cols-4 gap-6">
                    {/* Company & Role Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="bg-primary/10 p-3 rounded-xl">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-card-foreground">{exp.company}</h3>
                          <p className="text-primary font-semibold">{exp.role}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                            exp.current 
                              ? 'bg-accent text-accent-foreground' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {exp.current ? 'Current' : 'Completed'}
                          </span>
                          <span className="ml-2 px-2 py-1 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="lg:col-span-3">
                      <p className="text-muted-foreground mb-6">{exp.description}</p>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-card-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-3">Technologies & Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
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
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-primary rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Interested in collaborating?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, projects, and ways to create 
                impactful solutions together.
              </p>
              <Button 
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;