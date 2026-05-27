import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Velocity Dashboard',
    category: 'SaaS / Fintech',
    image: '/velocity-dashboard.png',
    tags: ['Next.js', 'D3.js', 'TypeScript', 'Tailwind'],
    link: 'https://velocity-dashboard-zeta.vercel.app/dashboard',
    github: 'https://github.com/onryoo73/velocity-dashboard',
  },
  {
    title: 'DocTN',
    category: 'Multipage Business Website',
    image: '/Screenshot From 2026-05-26 18-59-22.png',
    tags: ['Next.js', 'TailwindCSS', 'MongoDB', 'Express', 'TypeScript'],
    link: 'https://visa-tn.vercel.app/',
    github: 'https://github.com/onryoo73/Doc-TN',
  },
  {
    title: 'Full-Stack SaaS Platform',
    category: 'P2P / marketplace',
    image: '/Screenshot From 2026-05-26 19-19-22.png',
    tags: ['TypeScript', 'Next.js 14', 'Tailwind CSS'],
    link: 'https://ghorba-express.vercel.app/',
    github: 'https://github.com/onryoo73/Ghorba-Express',
  },
  {
    title: 'SentinelFi',
    category: 'Crytpo / DeFi / Web3',
    image: 'Screenshot From 2026-05-26 22-10-51.png',
    tags: ['Solidity', 'Node.js', 'tailwindcss', 'Ethers.js'],
    link: 'https://sentinel-fi-kohl.vercel.app/',
    github: 'https://github.com/onryoo73/SentinelFi',
  },

  {
    title: 'Codespy',
    category: 'AI / Developer Tool',
    image: 'Screenshot From 2026-05-27 20-55-07.png',
    tags: ['Next.js', 'TypeScript', 'AI', 'Tailwind'],
  },
  {
    title: 'Aura E-commerce',
    category: 'Retail / Lifestyle',
    image: '/auraaaa.png',
    tags: ['Stripe', 'Headless CMS', 'GSAP'],
    link: 'https://aura-brand-nine.vercel.app/',
    github: 'https://github.com/onryoo73/aura-brand',
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
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-primary hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
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
