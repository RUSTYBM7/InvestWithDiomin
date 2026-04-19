import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import project1 from "@assets/generated_images/modern_dashboard_interface_concept.png";
import project2 from "@assets/generated_images/e-commerce_mobile_app_concept.png";
import project3 from "@assets/generated_images/abstract_geometric_shapes_for_background.png";

const projects = [
  {
    title: "Analytics Dashboard",
    description: "A high-performance analytics dashboard for SaaS platforms featuring real-time data visualization and customizable widgets.",
    tags: ["React", "D3.js", "TypeScript", "Tailwind"],
    image: project1,
    link: "#",
    github: "#"
  },
  {
    title: "Luxe Commerce",
    description: "A premium e-commerce mobile application designed for high-end fashion brands with seamless checkout flow.",
    tags: ["React Native", "Redux", "Node.js"],
    image: project2,
    link: "#",
    github: "#"
  },
  {
    title: "Geometric 3D Asset Library",
    description: "An open-source collection of procedural 3D assets and textures for web developers.",
    tags: ["Three.js", "WebGL", "React Three Fiber"],
    image: project3,
    link: "#",
    github: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Selected Works</h2>
            <p className="text-muted-foreground text-lg">
              A curated list of projects that demonstrate my passion for design and engineering.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">View All Projects</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Github className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="rounded-md font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full">View All Projects</Button>
        </div>
      </div>
    </section>
  );
}