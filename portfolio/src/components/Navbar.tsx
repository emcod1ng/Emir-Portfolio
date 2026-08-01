import { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border-color/10 py-4' : 'bg-transparent py-6'}`}
    >
      <div className='max-w-6xl mx-auto px-6 flex justify-between items-center'>
        <a
          href='#'
          className='text-2xl font-bold tracking-wider text-text-primary'
        >
          E<span className='text-accent-primary'>B</span>
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center space-x-8'>
          <a
            href='#about'
            className='text-text-muted hover:text-accent-primary transition-colors font-medium'
          >
            About
          </a>
          <a
            href='#experience'
            className='text-text-muted hover:text-accent-primary transition-colors font-medium'
          >
            Experience
          </a>
          <a
            href='#projects'
            className='text-text-muted hover:text-accent-primary transition-colors font-medium'
          >
            Projects
          </a>
          <button
            onClick={toggleTheme}
            className='text-text-muted hover:text-accent-primary transition-colors'
            aria-label='Toggle Theme'
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href='/cv.pdf'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 border border-accent-primary text-accent-primary px-4 py-2 rounded-lg hover:bg-accent-glow transition-all'
          >
            <Download size={18} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className='md:hidden flex items-center space-x-4'>
          <button
            onClick={toggleTheme}
            className='text-text-muted hover:text-accent-primary'
            aria-label='Toggle Theme'
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            className='text-text-muted hover:text-accent-primary'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='absolute top-full left-0 w-full bg-bg-secondary border-b border-border-color/10 py-6 px-6 flex flex-col space-y-6 md:hidden shadow-2xl'
          >
            <a
              href='#about'
              onClick={() => setIsOpen(false)}
              className='text-text-muted text-lg font-medium'
            >
              About
            </a>
            <a
              href='#experience'
              onClick={() => setIsOpen(false)}
              className='text-text-muted text-lg font-medium'
            >
              Experience
            </a>
            <a
              href='#projects'
              onClick={() => setIsOpen(false)}
              className='text-text-muted text-lg font-medium'
            >
              Projects
            </a>
            <a
              href='/cv.pdf'
              target='_blank'
              rel='noreferrer'
              className='flex items-center justify-center gap-2 border border-accent-primary text-accent-primary px-4 py-3 rounded-lg bg-accent-glow/20'
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
