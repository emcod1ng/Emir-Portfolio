import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' as const },
  },
};

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center pt-20'>
      <div className='max-w-6xl mx-auto px-6 w-full'>
        <motion.div
          className='max-w-3xl'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.p
            variants={itemVariants}
            className='text-accent-primary font-mono text-lg mb-5'
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className='text-5xl md:text-7xl font-extrabold text-text-primary mb-4 tracking-tight'
          >
            Emir Bihorac.
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className='text-4xl md:text-6xl font-bold text-text-muted mb-8 leading-tight'
          >
            I build working Web and Mobile apps.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className='text-lg text-text-muted max-w-2xl mb-12 leading-relaxed'
          >
            I'm a Full Stack Developer specializing in building exceptional
            digital experiences. Currently, I'm focused on engineering complex,
            scalable data-driven applications using
            <span className='text-accent-primary font-medium'>
              modern web technologies
            </span>
            and
            <span className='text-accent-primary font-medium'>
              React Native
            </span>
            .
          </motion.p>

          <motion.div variants={itemVariants} className='flex flex-wrap gap-4'>
            <a
              href='#projects'
              className='bg-accent-primary text-bg-primary font-semibold px-8 py-4 rounded-lg hover:bg-transparent hover:text-accent-primary border border-accent-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]'
            >
              Check out my work!
            </a>
            <a
              href='https://github.com/emcod1ng'
              target='_blank'
              rel='noreferrer'
              className='bg-transparent text-text-primary font-semibold px-8 py-4 rounded-lg border border-border-color/20 hover:border-accent-primary hover:text-accent-primary transition-colors duration-300'
            >
              GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
