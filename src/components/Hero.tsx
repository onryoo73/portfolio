import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { ArrowRight, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background 3D Elements */}
      <ThreeScene />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 glass-orange rounded-full text-primary text-sm font-semibold tracking-wide"
          >
            Hey, I am Fares
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
            Web <span className="text-primary text-glow">Developer</span>
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            I craft immersive digital experiences with high-end animations and cinematic 3D elements. Let's build something extraordinary.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-light text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20"
            >
              Hire me <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              Contact <MessageSquare size={20} />
            </motion.button>
          </div>

          {/* Stats/Cards */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { label: 'Experience', value: '5+ Years' },
              { label: 'Projects', value: '50+' },
              { label: 'Clients', value: '20+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass p-4 rounded-2xl"
              >
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - 3D Avatar Image */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4 
          }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square">
             <img 
               src="/A_stylish_Italian_male_3D_avatar-3(1).png" 
               alt="3D Avatar" 
               className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,107,0,0.3)]"
             />
          </div>
          
          {/* Floating UI Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 glass p-6 rounded-3xl z-20 max-w-[200px]"
          >
            <p className="text-sm text-white/80 italic">"Fares is an exceptional developer who brings vision to life."</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20" />
              <div>
                <div className="text-xs font-bold">Sarah Connor</div>
                <div className="text-[10px] text-white/50">Tech Lead</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 -right-10 glass-orange p-4 rounded-2xl z-20 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-black font-bold text-xl">JS</div>
            <div>
              <div className="text-sm font-bold">JavaScript Master</div>
              <div className="text-xs text-white/50">Expert Level</div>
            </div>
          </motion.div>

          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-glow-orange opacity-50 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
