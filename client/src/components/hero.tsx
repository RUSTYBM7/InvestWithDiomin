import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import avatarImage from "@assets/generated_images/professional_headshot_of_a_creative_developer.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6 leading-tight">
            Crafting digital <br />
            <span className="text-muted-foreground">experiences</span> that matter.
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I'm Alex, a full-stack creative developer building accessible, pixel-perfect, and performant web applications.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full h-12 px-8 text-base">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base">
              Download CV
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors"><Github className="h-6 w-6" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border/50 aspect-square max-w-md mx-auto">
            <img 
              src={avatarImage} 
              alt="Alex Profile" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-background rounded-xl shadow-lg border border-border flex items-center justify-center z-20">
            <div className="text-center">
              <span className="block text-2xl font-bold font-heading">5+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}