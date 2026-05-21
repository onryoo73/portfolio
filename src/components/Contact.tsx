import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's Create <br /><span className="text-primary text-glow">Something Bold</span></h2>
              <p className="text-white/50 text-lg mb-12 max-w-md">
                Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <Mail />
                  </div>
                  <div>
                    <div className="text-sm text-white/40 uppercase tracking-widest">Email me</div>
                    <div className="text-xl font-bold">hello@noah.dev</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <MessageCircle />
                  </div>
                  <div>
                    <div className="text-sm text-white/40 uppercase tracking-widest">Chat with me</div>
                    <div className="text-xl font-bold">@noah_dev</div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5, color: '#FF6B00' }}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-white/50 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary-light text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-primary/20"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
