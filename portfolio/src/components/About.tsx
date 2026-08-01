import { motion } from 'framer-motion';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'React Native',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Redux Toolkit',
  'Tailwind CSS',
];

const About = () => {
  return (
    <section id='about' className='py-24'>
      <div className='max-w-6xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='section-title'>About Me</h2>

          <div className='flex flex-col md:flex-row gap-16 items-start mt-12'>
            <div className='flex-1 text-text-muted text-lg leading-relaxed'>
              <p className='mb-6'>
                Hello! I'm Emir, a software engineer with over 3 years of
                professional experience in designing and building scalable,
                performant web and mobile applications.
              </p>
              <p className='mb-6'>
                My journey started with a strong curiosity about how things work
                on the internet, which led me to earn my Master's in Information
                Systems. Today, I specialize in the JavaScript/TypeScript
                ecosystem with deep expertise in
                <span className='text-accent-primary font-medium'>
                  React, Node.js, and modern database architectures
                </span>
                to build robust end-to-end solutions.
              </p>
              <p className='mb-4'>
                Here are a few technologies I've been working with recently:
              </p>

              <ul className='grid grid-cols-2 gap-3 mt-6'>
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-2 font-mono text-sm text-text-muted'
                  >
                    <span className='text-accent-primary text-lg leading-none'>
                      ▹
                    </span>{' '}
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className='w-full max-w-[300px] mx-auto md:w-2/5 relative group'>
              <div className='absolute inset-0 border-2 border-accent-primary rounded-xl translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3'></div>
              <div className='relative aspect-square rounded-xl bg-accent-primary overflow-hidden z-10'>
                <div className='absolute inset-0 bg-transparent dark:bg-bg-tertiary dark:mix-blend-multiply dark:filter dark:grayscale transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal flex items-center justify-center text-text-muted font-bold text-2xl'>
                  <img
                    src='/profile.jpg'
                    alt='Emir Bihorac'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

// HOSTING: TU STAVLJAMO/UBACUJEMO NASU APLIKACIJU.
// DOMEN: www.elegantCode.com
// 1: support@elegantcode.com
// 2: info@elegantcode.com
// 2: client@elegantcode.com
