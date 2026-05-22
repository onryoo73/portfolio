import { motion } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  Layout, 
  Zap,
  type LucideIcon
} from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
  items: string[];
}

const skills: Skill[] = [
  { name: 'Frontend', icon: Layout, items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
  { name: 'Animation', icon: Zap, items: ['Framer Motion', 'GSAP', 'Three.js', 'CSS'] },
  { name: 'Design', icon: Layers, items: ['Figma', 'UI/UX', 'Motion Design', 'Adobe CC'] },
  { name: 'Backend', icon: Cpu, items: ['Node.js', 'PostgreSQL', 'Firebase', 'GraphQL'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Expertise <span className="text-primary">&</span> Skills</h2>
          <p className="text-white/50">Combining modern technologies to build cutting-edge digital products that scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-[2.5rem] relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <IconComponent size={80} />
                </div>
                
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  <IconComponent size={28} />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">{skill.name}</h3>
                
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/60 group-hover:text-white/90 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
