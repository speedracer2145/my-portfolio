import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      school: "IIIT Kottayam",
      degree: "B.Tech",
      period: "2022 - 2026",
      status: "Current"
    },
    {
      school: "Swargarani School and PU College",
      degree: "Pre-University",
      period: "2020 - 2022",
      status: "Completed"
    },
    {
      school: "Shalom International School, Gurgaon",
      degree: "High School",
      period: "2015 - 2020",
      status: "Completed"
    },
    {
      school: "SJR Kengeri Public School",
      degree: "Primary Education",
      period: "2008 - 2015",
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driven by curiosity, challenges, and the desire to craft meaningful digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6 animate-slide-up">
              <div className="bg-card border border-border rounded-2xl p-8 card-hover glow-effect">
                <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
                <div className="space-y-4 text-lg text-card-foreground">
                  <p>
                    I am an active 3D designer with a deep love for design, innovation, and machine learning. 
                    My passion lies at the intersection of creativity and technology, where I craft digital 
                    experiences that push boundaries.
                  </p>
                  <p>
                    Driven by curiosity and challenges, I constantly explore new technologies and methodologies 
                    to create meaningful, futuristic digital solutions. From 3D modeling to full-stack development, 
                    I believe in the power of interdisciplinary knowledge.
                  </p>
                  <p>
                    Currently pursuing my B.Tech at IIIT Kottayam, I'm actively involved in various projects 
                    that blend my technical skills with creative vision to solve real-world problems.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-6 text-center card-hover">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center card-hover">
                  <div className="text-3xl font-bold text-accent mb-2">20+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="animate-slide-up">
              <div className="bg-card border border-border rounded-2xl p-8 glow-effect">
                <h3 className="text-2xl font-bold mb-8 text-primary flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6" />
                  Education Timeline
                </h3>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-border last:border-l-0">
                      <div className="absolute -left-2 top-2 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                      
                      <div className="bg-secondary rounded-xl p-4 border border-border hover:border-primary transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-card-foreground">{edu.school}</h4>
                          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                            edu.status === 'Current' 
                              ? 'bg-accent text-accent-foreground' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-2">{edu.degree}</p>
                        
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Values */}
          <div className="mt-16 animate-fade-in">
            <div className="bg-gradient-primary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Core Values</h3>
              <div className="grid md:grid-cols-3 gap-6 text-primary-foreground">
                <div>
                  <h4 className="font-semibold mb-2">Innovation</h4>
                  <p className="text-sm opacity-90">Constantly pushing the boundaries of what's possible</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quality</h4>
                  <p className="text-sm opacity-90">Delivering excellence in every project and detail</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Learning</h4>
                  <p className="text-sm opacity-90">Never stopping the pursuit of knowledge and growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;