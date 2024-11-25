import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { 
      x: 100,
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      x: 50,
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <section id="contact" className="relative flex items-center w-full h-screen bg-gray-900">
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 md:px-16 max-w-7xl">
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-24">
            <div></div>
            <motion.div 
              className="relative items-center gap-12 m-auto md:inline-flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <div className="max-w-xl text-center md:text-left">
                <h2 
                  className="text-4xl text-white mb-8"
                  variants={itemVariants}
                >
                  Contact Me
                </h2>
                <div className="flex flex-col gap-4">
                  <motion.a 
                    href="https://www.linkedin.com/in/josh-g-hutchison/" 
                    target="_blank" 
                    className="text-gray-300 hover:text-blue-600"
                    variants={itemVariants}
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="xl" className="w-8" />
                    LinkedIn
                  </motion.a>
                  <motion.a 
                    href="https://github.com/JoshHutchison" 
                    target="_blank" 
                    className="text-gray-300 hover:text-blue-600"
                    variants={itemVariants}
                  >
                    <FontAwesomeIcon icon={faGithub} size="xl" className="w-8" />
                    Github
                  </motion.a>
                  <motion.a 
                    href="mailto:josh.g.hutchison@gmail.com" 
                    className="text-gray-300 hover:text-blue-600"
                    variants={itemVariants}
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="xl" className="w-8" />
                    Email
                  </motion.a>
                </div>
                <motion.p 
                  className="mt-8 text-sm text-gray-500"
                  variants={itemVariants}
                >
                  Copyright © 2024 Josh Hutchison
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
