import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id='experience' className='py-24 bg-bg-secondary'>
      <div className='max-w-4xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='section-title'>Where I've Worked</h2>

          <div className="relative mt-16 before:content-[''] before:absolute before:top-0 before:left-[15px] md:before:left-[19px] before:h-full before:w-[2px] before:bg-accent-primary dark:before:bg-white/10">
            {/* Experience Item 1 */}
            <div className='relative pl-12 md:pl-16 pb-16 group'>
              <div className='absolute left-[8px] md:left-[12px] top-1.5 w-4 h-4 rounded-full bg-accent-primary border-4 border-bg-secondary shadow-[0_0_0_2px_rgba(16,185,129,1)] group-hover:scale-125 transition-transform duration-300'></div>
              <div className='bg-bg-tertiary p-8 rounded-xl shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-glow/50 border border-border-color/5 hover:border-accent-primary/30'>
                <h3 className='text-xl font-bold text-text-primary mb-1'>
                  Software Engineering & Code Architecture
                </h3>
                <h4 className='text-lg text-text-muted font-medium mb-3'>
                  Elegant Code
                </h4>
                <div className='inline-block font-mono text-sm text-accent-primary bg-accent-glow px-3 py-1 rounded-md mb-6'>
                  2026 - Present
                </div>
                <ul className='space-y-3'>
                  <li className="relative pl-6 text-text-muted text-base before:content-['▹'] before:absolute before:left-0 before:text-accent-primary">
                    Data Manipulation: Expertise in working with objects and
                    arrays (algorithmic optimization through methods like map,
                    filter, reduce, sort, every, some).
                  </li>
                  <li className="relative pl-6 text-text-muted text-base before:content-['▹'] before:absolute before:left-0 before:text-accent-primary">
                    Flow Control & Optimization: Efficient asynchronous
                    programming (Promises, Then/Catch, Try/Catch), code
                    refactoring for improved performance, and project structure
                    management utilizing Monorepo architecture.
                  </li>
                  <li className="relative pl-6 text-text-muted text-base before:content-['▹'] before:absolute before:left-0 before:text-accent-primary">
                    Local Storage: Client-side data management using
                    LocalStorage mechanisms.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className='relative pl-12 md:pl-16 pb-16 group'>
              <div className='absolute left-[8px] md:left-[12px] top-1.5 w-4 h-4 rounded-full bg-accent-primary border-4 border-bg-secondary shadow-[0_0_0_2px_rgba(16,185,129,1)] group-hover:scale-125 transition-transform duration-300'></div>
              <div className='bg-bg-tertiary p-8 rounded-xl shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-glow/50 border border-border-color/5 hover:border-accent-primary/30'>
                <h3 className='text-xl font-bold text-text-primary mb-1'>
                  Full Stack Developer
                </h3>
                <h4 className='text-lg text-text-muted font-medium mb-3'>
                  @skolaprogramiranja.rs
                </h4>
                <div className='inline-block font-mono text-sm text-accent-primary bg-accent-glow px-3 py-1 rounded-md mb-6'>
                  2024 - 2026
                </div>
                <ul className='space-y-3'>
                  <li className="relative pl-6 text-text-muted text-base before:content-['▹'] before:absolute before:left-0 before:text-accent-primary">
                    End-to-end development of cross-platform mobile
                    applications. Seamless integration of the mobile client with
                    custom Node.js/Express backends, ensuring high performance
                    and smooth data synchronization.
                  </li>
                  <li className="relative pl-6 text-text-muted text-base before:content-['▹'] before:absolute before:left-0 before:text-accent-primary">
                    Node.js & Express: Designing and developing robust RESTful
                    APIs. Implementing modular architecture through clearly
                    defined routing, Controllers, and custom Middleware
                    functions (including pagination, authentication, and
                    validation).
                  </li>
                  <li className="relative pl-6 text-text-muted text-base before:content-['▹'] before:absolute before:left-0 before:text-accent-primary">
                    Databases (MongoDB & Mongoose): Database schema design
                    (Models). Executing advanced CRUD operations, query
                    optimization, and working with complex search and update
                    methods (e.g., find, findOne, findOneAndUpdate).
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className='relative pl-12 md:pl-16 pb-0 group'>
              <div className='absolute left-[8px] md:left-[12px] top-1.5 w-4 h-4 rounded-full bg-accent-primary border-4 border-bg-secondary shadow-[0_0_0_2px_rgba(16,185,129,1)] group-hover:scale-125 transition-transform duration-300'></div>
              <div className='bg-bg-tertiary p-8 rounded-xl shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-glow/50 border border-border-color/5 hover:border-accent-primary/30'>
                <h3 className='text-xl font-bold text-text-primary mb-1'>
                  Frontend Development & UI/UX
                </h3>
                <h4 className='text-lg text-text-muted font-medium mb-3'>
                  @skolaprogramiranja.rs
                </h4>
                <div className='inline-block font-mono text-sm text-accent-primary bg-accent-glow px-3 py-1 rounded-md mb-6'>
                  2023 - 2024
                </div>
                <ul className='space-y-3'>
                  <li className="relative pl-6 text-text-muted text-base before:content-['▹'] before:absolute before:left-0 before:text-accent-primary">
                    React Ecosystem: Building complex Single-Page Applications
                    using React (Hooks, custom components, Context API). Global
                    state management using Redux Toolkit and re-render
                    optimization.
                  </li>
                  <li className="relative pl-6 text-text-muted text-base before:content-['▹'] before:absolute before:left-0 before:text-accent-primary">
                    Languages: Deep understanding of modern JavaScript (ES6+
                    standards, asynchronous programming, destructuring) and
                    transition to strictly typed code using TypeScript (TS/TSX)
                    for enhanced stability and scalability.
                  </li>
                  <li className="relative pl-6 text-text-muted text-base before:content-['▹'] before:absolute before:left-0 before:text-accent-primary">
                    Structure & Design: Thorough understanding of HTML5
                    semantics and structure. Advanced layout control via CSS
                    (Flexbox, CSS Grid, Absolute/Relative/Fixed positioning).
                    Rapid and responsive development using Tailwind CSS and
                    Bootstrap, enriched with fluid animations via the Framer
                    Motion library and icon integration (FontAwesome).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
