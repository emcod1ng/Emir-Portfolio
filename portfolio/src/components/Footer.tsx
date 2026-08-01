import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id='contact' className='py-24 text-center'>
      <div className='max-w-2xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className='flex flex-col items-center border-t border-border-color/10 pt-8'>
            <p className='mb-2 font-mono text-sm text-text-muted'>
              Designed & Built by{' '}
              <a
                href='https://github.com/emcod1ng'
                target='_blank'
                rel='noreferrer'
                className='text-text-muted hover:text-accent-primary transition-colors duration-300'
              >
                Emir Bihorac
              </a>
            </p>
            <p className='text-xs font-mono text-text-muted'>
              Rebuilt with React, Tailwind CSS & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
