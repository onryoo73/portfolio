import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800" 
                alt="Digital Art" 
                className="w-full h-full object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full" />
          </div>

          <div ref={textRef}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Transforming Ideas Into <br />
              <span className="text-primary">Digital Masterpieces</span>
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                I am a passionate Web Developer with a keen eye for design and a love for high-performance applications. With over 5 years of experience in the industry, I've worked with startups and established brands to create unique digital experiences.
              </p>
              <p>
                My approach combines technical excellence with creative storytelling. I believe that every pixel matters and every animation should serve a purpose. Whether it's a complex 3D interface or a clean corporate landing page, I strive for perfection in every project.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-primary text-3xl font-bold mb-2">Creative</div>
                <div className="text-white/40 text-sm uppercase tracking-widest">Mindset</div>
              </div>
              <div>
                <div className="text-primary text-3xl font-bold mb-2">Technical</div>
                <div className="text-white/40 text-sm uppercase tracking-widest">Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
