import { Code, Palette, Brain, Server, Wrench, Lightbulb } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 75 },
        { name: "Rust", level: 70 },
        { name: "R", level: 65 },
        { name: "Dart", level: 70 }
      ]
    },
    {
      icon: Server,
      title: "Frameworks & Libraries",
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "React", level: 90 },
        { name: "Django", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Flask", level: 75 },
        { name: "Angular", level: 70 },
        { name: "Express.js", level: 80 }
      ]
    },
    {
      icon: Palette,
      title: "Design Tools",
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Blender", level: 90 },
        { name: "Photoshop", level: 85 },
        { name: "Sketch", level: 80 },
        { name: "Maya", level: 75 },
        { name: "Unity", level: 80 }
      ]
    },
    {
      icon: Brain,
      title: "AI/ML & Data",
      color: "text-accent-teal",
      bgColor: "bg-accent-teal/10",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "Data Science", level: 75 },
        { name: "Computer Vision", level: 70 },
        { name: "NLP", level: 65 }
      ]
    },
    {
      icon: Wrench,
      title: "DevOps & Tools",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Linux", level: 85 },
        { name: "CI/CD", level: 70 }
      ]
    },
    {
      icon: Lightbulb,
      title: "Core Concepts",
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "Full-stack Development", level: 90 },
        { name: "UI/UX Design", level: 95 },
        { name: "Product Thinking", level: 85 },
        { name: "System Design", level: 75 },
        { name: "3D Modeling", level: 90 }
      ]
    }
  ];

  const coreStrengths = [
    "Full-stack Development",
    "DevOps Pipeline Automation",
    "UI/UX Design Excellence",
    "Product Thinking & Strategy",
    "3D Design & Animation",
    "Machine Learning Integration"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for bringing ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-2xl p-6 card-hover glow-effect animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`${category.bgColor} p-3 rounded-xl mr-4`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${
                            category.color === 'text-primary' ? 'from-primary to-primary-glow' :
                            category.color === 'text-accent' ? 'from-accent to-accent' :
                            category.color === 'text-accent-green' ? 'from-accent-green to-accent-green' :
                            'from-accent-teal to-accent-teal'
                          } transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Strengths */}
          <div className="animate-fade-in">
            <div className="bg-gradient-primary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-6 text-primary-foreground">Core Strengths</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coreStrengths.map((strength, index) => (
                  <div 
                    key={index}
                    className="bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-background/20 hover:border-background/40 transition-colors"
                  >
                    <p className="text-primary-foreground font-medium">{strength}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Philosophy */}
          <div className="mt-16 grid lg:grid-cols-2 gap-8 animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-8 glow-effect">
              <h3 className="text-xl font-bold mb-4 text-primary">My Approach</h3>
              <p className="text-muted-foreground">
                I believe in the power of interdisciplinary knowledge. By combining design thinking 
                with technical expertise, I create solutions that are not only functional but also 
                intuitive and beautiful. Every project is an opportunity to push boundaries and 
                learn something new.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8 glow-effect">
              <h3 className="text-xl font-bold mb-4 text-accent">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of innovation. From AI/ML 
                advancements to the latest design trends, I embrace change as a catalyst for growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;