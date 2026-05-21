import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Nexus AI Platform',
    category: 'SaaS / AI',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'OpenAI', 'Tailwind'],
  },
  {
    title: 'Crypto Dashboard',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'D3.js', 'Ethers.js'],
  },
  {
    title: 'Luxe E-commerce',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=800',
    tags: ['Shopify', 'React', 'GSAP'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured <span className="text-primary text-glow">Projects</span></h2>
            <p className="text-white/50 text-lg">A selection of my recent work, ranging from complex web applications to experimental 3D interfaces.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-2xl font-bold hover:bg-white/10 transition-all whitespace-nowrap"
          >
            View All Work
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 border border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-primary hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-2">
                <div className="text-primary text-sm font-bold uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
