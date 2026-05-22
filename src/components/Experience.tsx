import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'TechFlow Studio',
    role: 'Senior Frontend Developer',
    period: '2023 - Present',
    description: 'Leading the frontend development of high-performance web applications using React and Three.js.',
  },
  {
    company: 'Nexus Digital',
    role: 'Creative Developer',
    period: '2021 - 2023',
    description: 'Developed immersive digital experiences and interactive animations for global brands.',
  },
  {
    company: 'Innovate AI',
    role: 'Junior Web Developer',
    period: '2019 - 2021',
    description: 'Built responsive web interfaces and integrated AI services into existing platforms.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Work <span className="text-primary">History</span></h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 md:pl-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
                
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2 shadow-[0_0_10px_rgba(255,107,0,0.8)]" />

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'}`}>
                  <div className="glass p-8 rounded-[2rem] hover:border-primary/30 transition-colors">
                    <div className="text-primary font-bold mb-2">{exp.period}</div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <div className="text-white/60 font-medium mb-4">{exp.company}</div>
                    <p className="text-white/40 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
