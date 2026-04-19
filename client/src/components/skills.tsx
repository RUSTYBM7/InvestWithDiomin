import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Terminal, Database, Globe, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    icon: <Code2 className="h-8 w-8 mb-4 text-primary" />,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"]
  },
  {
    category: "Design",
    icon: <Palette className="h-8 w-8 mb-4 text-primary" />,
    items: ["Figma", "UI/UX", "Design Systems", "Prototyping", "Adobe CC"]
  },
  {
    category: "Backend",
    icon: <Terminal className="h-8 w-8 mb-4 text-primary" />,
    items: ["Node.js", "PostgreSQL", "GraphQL", "Express", "Python"]
  },
  {
    category: "DevOps",
    icon: <Cpu className="h-8 w-8 mb-4 text-primary" />,
    items: ["Docker", "AWS", "CI/CD", "Vercel", "Git"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Tech Stack & Expertise</h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit for building modern, scalable digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6">
                  {skill.icon}
                  <h3 className="text-xl font-bold mb-4 font-heading">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="secondary" className="bg-secondary/50">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}