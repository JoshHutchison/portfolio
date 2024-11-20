import { useEffect } from 'react';
import { motion } from 'framer-motion';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const skills = [
  { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'javascript-colored.svg' },
  { name: 'Python', link: 'https://www.python.org/', icon: 'python-colored.svg' },
  { name: 'CSharp', link: 'https://docs.microsoft.com/en-us/dotnet/csharp/', icon: 'csharp-colored.svg' },
  { name: 'Git', link: 'https://git-scm.com/', icon: 'git-colored.svg' },
  { name: 'Java', link: 'https://www.oracle.com/java/', icon: 'java-colored.svg' },
  { name: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5', icon: 'html5-colored.svg' },
  { name: 'React', link: 'https://reactjs.org/', icon: 'react-colored.svg' },
  { name: 'CSS3', link: 'https://www.w3.org/TR/CSS/#css', icon: 'css3-colored.svg' },
  { name: 'TailwindCSS', link: 'https://tailwindcss.com/', icon: 'tailwindcss-colored.svg' },
  { name: 'Bootstrap', link: 'https://getbootstrap.com/', icon: 'bootstrap-colored.svg' },
  { name: 'Vite', link: 'https://vitejs.dev/', icon: 'vite-colored.svg' },
  { name: 'NodeJS', link: 'https://nodejs.org/en/', icon: 'nodejs-colored.svg' },
  { name: 'Express', link: 'https://expressjs.com/', icon: 'express.svg' },
  { name: 'Oracle', link: 'https://www.oracle.com/uk/index.html', icon: 'oracle-colored.svg' },
  { name: 'MongoDB', link: 'https://www.mongodb.com/', icon: 'mongodb-colored.svg' },
  { name: 'PostgreSQL', link: 'https://www.postgresql.org/', icon: 'postgresql-colored.svg' },
  { name: 'Django', link: 'https://www.djangoproject.com/', icon: 'django-colored.svg' },
  { name: 'AWS', link: 'https://aws.amazon.com', icon: 'aws-colored.svg' },
  { name: 'Docker', link: 'https://www.docker.com/', icon: 'docker-colored.svg' },
  { name: 'Linux', link: 'https://www.linux.org', icon: 'linux-colored.svg' },
  { name: 'MacOS', link: 'https://apple.com', icon: 'macos.svg' },

  
];

const Skills = () => {
  useEffect(() => {
    skills.forEach((skill) => {
      tippy(`.${skill.name.toLowerCase()}`, {
        content: skill.name,
        delay: [5, 5],
      });
    });
  }, []);

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
        staggerChildren: 0.1
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
    <section id="skills" className="relative flex items-center w-full h-screen bg-gray-900">
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
                  Skills
                </h2>
                <div className="flex flex-wrap gap-4">
                  {skills.map((skill) => (
                    <motion.a
                      key={skill.name}
                      href={skill.link}
                      target="_blank"
                      rel="noreferrer"
                      className={skill.name.toLowerCase()}
                      variants={itemVariants}
                    >
                      <img
                        src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${skill.icon}`}
                        width="48"
                        height="48"
                        alt={skill.name}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
export { skills };